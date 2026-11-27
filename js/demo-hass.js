/* Aurora – interaktywne demo: sztuczny „Home Assistant” (stany, usługi, kalendarz, pogoda, zadania, Aurora Guard).
   Wszystkie nazwy, encje, osoby i współrzędne są zmyślone. Stan jest synchronizowany między ramkami demo (BroadcastChannel). */
(function () {
  'use strict';
  const CH = 'BroadcastChannel' in window ? new BroadcastChannel('aurora-demo-v1') : null, ID = Math.random().toString(36).slice(2);
  const ST = {}, TODO = {}, subs = [], listeners = new Set();
  const two = (n) => String(n).padStart(2, '0');
  const iso = () => new Date().toISOString();
  const tzOff = () => { const o = -new Date().getTimezoneOffset(), a = Math.abs(o); return (o >= 0 ? '+' : '-') + two(Math.floor(a / 60)) + two(a % 60); };
  const localIso = (d) => { d = d || new Date(); return d.getFullYear() + '-' + two(d.getMonth() + 1) + '-' + two(d.getDate()) + 'T' + two(d.getHours()) + ':' + two(d.getMinutes()) + ':' + two(d.getSeconds()) + tzOff(); };
  const dayKey = (d) => d.getFullYear() + '-' + two(d.getMonth() + 1) + '-' + two(d.getDate());

  /* ---------- stan ---------- */
  function setState(id, state, attrs, quiet) {
    const o = ST[id], s = String(state);
    ST[id] = {entity_id: id, state: s, attributes: Object.assign({}, o ? o.attributes : {friendly_name: id}, attrs || {}), last_changed: o && o.state === s ? o.last_changed : iso(), last_updated: iso(), context: {id: 'demo'}};
    if (!quiet) { schedule(); if (CH) CH.postMessage({t: 'st', from: ID, id, state: s, attrs: attrs || {}}); }
  }
  function E(id, state, name, attrs) { setState(id, state, Object.assign({friendly_name: name || id}, attrs || {}), true); }
  let pending = false;
  function schedule() { if (pending) return; pending = true; requestAnimationFrame(() => { pending = false; notify(); }); }
  function notify() { const h = snapshot(); listeners.forEach((fn) => { try { fn(h); } catch (e) { /* ignore */ } }); }

  /* ---------- zadania (todo) ---------- */
  function todoState(e) { const n = (TODO[e] || []).filter((x) => x.status === 'needs_action').length; setState(e, n, {}, true); }
  function setTodo(e, items, quiet) { TODO[e] = items; todoState(e); if (!quiet) { subs.filter((s) => s.e === e).forEach((s) => s.cb({items: clone(TODO[e])})); schedule(); } }
  const clone = (x) => JSON.parse(JSON.stringify(x));
  let uidN = 100;
  const mk = (summary, status, description) => ({uid: 'u' + (uidN++), summary, status: status || 'needs_action', description: description || ''});
  function todoOp(svc, d) {
    const e = [].concat(d.entity_id)[0], L = (TODO[e] = TODO[e] || []);
    const find = (k) => L.find((x) => x.uid === k || x.summary === k);
    if (svc === 'add_item') L.push(mk(d.item, 'needs_action', d.description));
    else if (svc === 'remove_item') [].concat(d.item).forEach((k) => { const it = find(k); if (it) L.splice(L.indexOf(it), 1); });
    else if (svc === 'update_item') { const it = find(d.item); if (it) { if (d.status) it.status = d.status; if (d.description !== undefined) it.description = d.description; if (d.rename) it.summary = d.rename; } }
    setTodo(e, L); if (CH) CH.postMessage({t: 'todo', from: ID, e, items: L});
  }

  /* ---------- dane początkowe ---------- */
  function seed() {
    const R = [
      ['salon', 'Salon', 22.4, 46, 180, 'on'], ['kuchnia', 'Kuchnia', 23.1, 52, 240, 'off'], ['ola', 'Ola', 21.8, 48, 90, 'on'],
      ['kuba', 'Kuba', 22.0, 50, 70, 'off'], ['lazienka', 'Łazienka', 24.1, 52, 20, 'off'], ['przedpokoj', 'Przedpokój', 21.2, 44, 35, 'off']];
    R.forEach((r) => {
      E('sensor.demo_' + r[0] + '_t', r[2], 'Temperatura ' + r[1], {unit_of_measurement: '°C', device_class: 'temperature', state_class: 'measurement'});
      E('sensor.demo_' + r[0] + '_h', r[3], 'Wilgotność ' + r[1], {unit_of_measurement: '%', device_class: 'humidity', state_class: 'measurement'});
      E('sensor.demo_' + r[0] + '_lux', r[4], 'Natężenie światła ' + r[1], {unit_of_measurement: 'lx', device_class: 'illuminance'});
      E('binary_sensor.demo_' + r[0] + '_occ', r[5], 'Obecność ' + r[1], {device_class: 'occupancy'});
    });
    const LA = {supported_color_modes: ['color_temp', 'hs'], min_color_temp_kelvin: 2000, max_color_temp_kelvin: 6500, brightness: 150};
    E('light.demo_salon_led', 'on', 'Taśma LED', Object.assign({}, LA, {color_mode: 'hs', hs_color: [260, 60]}));
    E('light.demo_salon_lampa', 'off', 'Lampa podłogowa', Object.assign({}, LA));
    E('light.demo_kuchnia_led', 'on', 'Oświetlenie blatu', {supported_color_modes: ['brightness'], brightness: 200});
    E('switch.demo_kuchnia_piec', 'off', 'Piec'); E('switch.demo_kuchnia_blat', 'off', 'Gniazdko blatu');
    E('light.demo_ola_lampa', 'on', 'Lampa', Object.assign({}, LA, {color_mode: 'hs', hs_color: [320, 70]}));
    E('switch.demo_ola_biurko', 'off', 'Biurko'); E('light.demo_kuba_lampa', 'off', 'Lampa', Object.assign({}, LA));
    E('switch.demo_przedpokoj_lampa', 'off', 'Lampa'); E('binary_sensor.demo_door', 'off', 'Drzwi wejściowe', {device_class: 'door'});
    E('sensor.demo_out_t', 11.8, 'Temperatura na zewnątrz', {unit_of_measurement: '°C', device_class: 'temperature'});
    E('sensor.demo_out_h', 71, 'Wilgotność na zewnątrz', {unit_of_measurement: '%', device_class: 'humidity'});
    E('weather.demo_pogoda', 'partlycloudy', 'Pogoda', {temperature: 12, humidity: 71, wind_speed: 14, pressure: 1014, apparent_temperature: 10, cloud_coverage: 55, temperature_unit: '°C'});
    E('binary_sensor.demo_gas', 'off', 'Czujnik gazu', {device_class: 'gas'}); E('binary_sensor.demo_flood', 'off', 'Czujnik zalania kuchni', {device_class: 'moisture'}); E('select.demo_alarm', 'normal', 'Alarm');
    E('sensor.demo_pm25', 6, 'PM2.5', {unit_of_measurement: 'µg/m³', device_class: 'pm25'}); E('fan.demo_oczyszczacz', 'on', 'Oczyszczacz powietrza');
    E('sensor.demo_bat_drzwi', 83, 'Czujnik drzwi', {unit_of_measurement: '%', device_class: 'battery'});
    E('sensor.demo_bat_okno', 64, 'Czujnik okna', {unit_of_measurement: '%', device_class: 'battery'});
    E('calendar.demo_rodzina', 'off', 'Kalendarz rodzinny', {friendly_name: 'Kalendarz rodzinny'});
    E('sun.sun', new Date().getHours() >= 7 && new Date().getHours() < 18 ? 'above_horizon' : 'below_horizon', 'Słońce');
    E('media_player.demo_tv', 'off', 'Telewizor');
    /* zadania */
    E('todo.zadania_ola', 0, 'Zadania Ola'); E('todo.zadania_kuba', 0, 'Zadania Kuba'); E('todo.aurora_do_zrobienia', 0, 'Do zrobienia');
    setTodo('todo.zadania_ola', [mk('Zaścielić łóżko'), mk('Odrobić lekcje z matematyki'), mk('Wyjść z psem'), mk('Uporządkować biurko', 'completed')], true);
    setTodo('todo.zadania_kuba', [mk('Wynieść śmieci'), mk('Przeczytać 20 stron książki'), mk('Spakować tornister'), mk('Ćwiczenia z angielskiego')], true);
    setTodo('todo.aurora_do_zrobienia', [mk('Kupić prezent na urodziny'), mk('Zapisać dzieci na basen')], true);
    /* Aurora Guard (telefony dzieci) */
    const apps = [['demo.game', 'GameZone'], ['demo.video', 'VideoTube'], ['demo.chat', 'ChatApp'], ['demo.school', 'Zeszyt'], ['demo.calc', 'Kalkulator'], ['demo.music', 'Muzyka'], ['demo.cam', 'Aparat']];
    const rnd = (s) => { let x = Math.sin(s * 9301 + 49297) * 233280; return x - Math.floor(x); };
    [['ola', 'Ola', 'home', 76], ['kuba', 'Kuba', 'Szkoła', 52]].forEach((k, ki) => {
      const id = k[0];
      E('sensor.aurora_guard_' + id + '_status', 'ok', 'Aurora Guard – status', {accessibility: true, locked: false, full_locked: false, blocked_count: 2, battery: k[3], last_seen: localIso(), model: 'Demo Phone', android: '14', version: '2.5', sleep_until: 0});
      E('sensor.aurora_guard_' + id + '_apps', apps.length, 'Aurora Guard – aplikacje', {apps: apps.map((a) => ({p: a[0], n: a[1]}))});
      const days = []; for (let b = 13; b >= 0; b--) { const d = new Date(Date.now() - b * 86400000), list = apps.map((a, i) => ({n: a[1], m: Math.round(rnd(b * 7 + i + ki * 3) * (i === 0 ? 70 : i === 1 ? 50 : 25))})).filter((x) => x.m > 4).sort((x, y) => y.m - x.m).slice(0, 6); days.push({d: dayKey(d), t: list.reduce((s, x) => s + x.m, 0), a: list}); }
      const today = days[days.length - 1], week = days.slice(-7).map((d) => d.t);
      E('sensor.aurora_guard_' + id + '_usage', today.t, 'Aurora Guard – użycie', {apps: today.a.map((x) => ({p: 'demo', n: x.n, m: x.m})), week, days, updated: iso()});
      E('device_tracker.guard_' + id, k[2], 'Telefon ' + k[1], {latitude: 52.2297 + ki * 0.004, longitude: 21.0122 - ki * 0.006, gps_accuracy: 25 + ki * 20, source_type: 'gps'});
      ['input_boolean.blokada_telefon_' + id, 'input_boolean.auto_blokada_telefonu_' + id, 'input_boolean.blokada_telefon_' + id + '_caly', 'input_boolean.guard_harmonogram_' + id, 'input_boolean.guard_strefa_' + id].forEach((e) => E(e, 'off', e));
      E('input_boolean.guard_lokalizacja_' + id, 'on', 'Lokalizacja'); E('input_boolean.guard_sen_' + id, 'on', 'Tryb nocny');
      E('input_datetime.guard_sen_od_' + id, '22:00:00', 'Sen od'); E('input_datetime.guard_sen_do_' + id, '06:00:00', 'Sen do');
      E('input_number.guard_bonus_' + id, 0, 'Bonus', {min: 0, max: 600, unit_of_measurement: 'min'}); E('input_number.guard_nagroda_' + id, 10, 'Nagroda', {min: 0, max: 60});
      E('input_number.guard_lok_poza_' + id, 15, 'Lokalizacja poza domem', {min: 5, max: 120}); E('input_number.guard_lok_dom_' + id, 60, 'Lokalizacja w domu', {min: 15, max: 240});
      E('input_text.guard_prosba_' + id, '', 'Prośba'); E('input_text.guard_wiadomosc_' + id, '', 'Wiadomość');
      E('input_button.guard_dzwon_' + id, 'unknown', 'Znajdź telefon'); E('input_button.lokalizacja_telefon_' + id, 'unknown', 'Lokalizacja');
      ['zadania', 'prosby', 'sabotaz'].forEach((c) => E('counter.guard_' + c + '_' + id, 0, c));
      E('todo.guard_' + id, 0, 'Guard ' + k[1]); E('todo.guard_' + id + '_dozwolone', 0, 'Guard ' + k[1] + ' dozwolone');
      setTodo('todo.guard_' + id, [mk('demo.game|GameZone|60'), mk('demo.chat|ChatApp')], true); setTodo('todo.guard_' + id + '_dozwolone', [mk('demo.school|Zeszyt')], true);
    });
  }

  /* ---------- kalendarz i pogoda ---------- */
  function events(startIso, endIso) {
    const a = new Date(startIso), b = new Date(endIso), out = [], base = new Date(); base.setHours(0, 0, 0, 0);
    const T = [[0, 17, 18, 'Basen', 'Pływalnia miejska'], [1, 9, 10, 'Wizyta u lekarza', 'Przychodnia'], [2, 18, 20, 'Kolacja z rodziną', 'Dom babci'], [3, 8, 9, 'Zebranie w szkole', 'Szkoła'], [5, 12, 15, 'Urodziny Oli', 'Salon'], [7, 16, 17, 'Trening piłki nożnej', 'Boisko'], [9, 10, 11, 'Przegląd samochodu', 'Warsztat'], [-1, 18, 19, 'Zajęcia plastyczne', 'Dom kultury'], [-3, 7, 8, 'Wizyta u dentysty', 'Gabinet']];
    for (let w = -5; w <= 5; w++) T.forEach((t, i) => { const d = new Date(base.getTime() + (t[0] + w * 7) * 86400000), s = new Date(d), e = new Date(d); s.setHours(t[1], 0, 0, 0); e.setHours(t[2], 0, 0, 0); if (e >= a && s <= b) out.push({summary: t[3], location: t[4], start: {dateTime: localIso(s)}, end: {dateTime: localIso(e)}, uid: 'ev' + i + '_' + w}); });
    return out;
  }
  const COND = ['sunny', 'partlycloudy', 'cloudy', 'rainy', 'partlycloudy', 'sunny', 'cloudy'];
  function forecast(type) {
    const out = [], n = type === 'hourly' ? 24 : 7;
    for (let i = 0; i < n; i++) {
      const d = new Date(Date.now() + (type === 'hourly' ? i * 3600000 : i * 86400000)); if (type === 'hourly') d.setMinutes(0, 0, 0);
      const t = type === 'hourly' ? 9 + 5 * Math.sin((d.getHours() - 9) / 24 * 6.28) : 10 + 3 * Math.sin(i), c = type === 'hourly' ? COND[Math.floor(i / 4) % 7] : COND[i % 7];
      out.push({datetime: d.toISOString(), condition: c, temperature: Math.round(t * 10) / 10, templow: Math.round((t - 5) * 10) / 10, precipitation: c === 'rainy' ? 1.2 : 0, precipitation_probability: c === 'rainy' ? 70 : 10, wind_speed: 12 + (i % 5), humidity: 70});
    }
    return out;
  }

  /* ---------- usługi ---------- */
  const ON = ['on', 'off'];
  function callService(domain, service, data, target) {
    data = Object.assign({}, data || {}); if (target && target.entity_id) data.entity_id = target.entity_id;
    const ids = [].concat(data.entity_id || []);
    const key = domain + '.' + service;
    if (domain === 'todo') { todoOp(service, data); return Promise.resolve(); }
    if (key === 'mqtt.publish') { window.dispatchEvent(new CustomEvent('demo-mqtt', {detail: data})); if (CH) CH.postMessage({t: 'mqtt', from: ID, data}); return Promise.resolve(); }
    ids.forEach((id) => {
      const o = ST[id]; if (!o && !/^input_|^counter\./.test(id)) return; const dom = id.split('.')[0];
      if (service === 'toggle' || service === 'turn_on' || service === 'turn_off') {
        const want = service === 'toggle' ? (o.state === 'on' ? 'off' : 'on') : service === 'turn_on' ? 'on' : 'off', at = {};
        if (dom === 'light' && want === 'on') { if (data.brightness_pct != null) at.brightness = Math.round(data.brightness_pct * 2.55); else if (!o.attributes.brightness) at.brightness = 180; if (data.hs_color) { at.hs_color = data.hs_color; at.color_mode = 'hs'; } if (data.color_temp_kelvin) { at.color_temp_kelvin = data.color_temp_kelvin; at.color_mode = 'color_temp'; at.hs_color = [30, 30]; } }
        setState(id, want, at);
      } else if (service === 'set_value') setState(id, data.value);
      else if (service === 'set_datetime') setState(id, data.time || data.datetime);
      else if (service === 'press') setState(id, iso());
      else if (service === 'increment') setState(id, (parseFloat(o.state) || 0) + 1);
      else if (service === 'reset') setState(id, 0);
      else if (service === 'select_option') setState(id, data.option);
    });
    return Promise.resolve();
  }
  function callWS(msg) {
    const t = msg.type;
    if (t === 'todo/item/list') return Promise.resolve({items: clone(TODO[msg.entity_id] || [])});
    if (t === 'call_service' && msg.domain === 'weather') { const r = {}; [].concat((msg.target || {}).entity_id || 'weather.demo_pogoda').forEach((e) => { r[e] = {forecast: forecast(msg.service_data && msg.service_data.type)}; }); return Promise.resolve({response: r}); }
    if (t === 'call_service') return Promise.resolve({response: {}});
    if (t === 'assist_pipeline/pipeline/list') return Promise.resolve({pipelines: [], preferred_pipeline: null});
    return Promise.resolve({});
  }
  function callApi(method, path) {
    if (/^calendars\//.test(path)) { const m = /start=([^&]+)&end=([^&]+)/.exec(path); return Promise.resolve(m ? events(decodeURIComponent(m[1]), decodeURIComponent(m[2])) : []); }
    if (/^history\/period/.test(path)) return Promise.resolve([[]]);
    if (/^config\/automation\/config\/aurora_guard_prosba_/.test(path)) return Promise.resolve({triggers: [{trigger: 'webhook', webhook_id: 'ag_demo_0123456789abcdef'}]});
    return Promise.resolve({});
  }
  function subscribeMessage(cb, msg) {
    if (msg && msg.type === 'todo/item/subscribe') { const s = {e: msg.entity_id, cb}; subs.push(s); setTimeout(() => cb({items: clone(TODO[s.e] || [])}), 30); return Promise.resolve(() => { const i = subs.indexOf(s); if (i >= 0) subs.splice(i, 1); }); }
    return Promise.resolve(() => {});
  }

  /* ---------- obiekt hass ---------- */
  let user = {name: 'Rodzic', is_admin: true, id: 'demo-parent', is_owner: true};
  const base = {
    callService, callWS, callApi, connection: {subscribeMessage, subscribeEvents: () => Promise.resolve(() => {}), sendMessagePromise: callWS},
    config: {latitude: 52.2297, longitude: 21.0122, unit_system: {temperature: '°C', length: 'km'}, language: 'pl', time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone, version: '2026.11.0'},
    language: 'pl', locale: {language: 'pl', number_format: 'language', time_format: '24'}, dockedSidebar: 'docked', themes: {}, selectedTheme: null, services: {}, entities: {}, devices: {}, panelUrl: 'demo',
    localize: (k) => k, formatEntityState: (s) => s.state, auth: {data: {}}
  };
  function snapshot() { return Object.assign({}, base, {states: Object.assign({}, ST), user}); }
  function drift() {
    const r = (a, b) => a + Math.random() * (b - a);
    ['salon', 'kuchnia', 'ola', 'kuba', 'lazienka', 'przedpokoj'].forEach((k) => { const t = ST['sensor.demo_' + k + '_t']; if (t) setState('sensor.demo_' + k + '_t', (parseFloat(t.state) + r(-.08, .08)).toFixed(1), {}, true); });
    setState('sensor.demo_out_t', (parseFloat(ST['sensor.demo_out_t'].state) + r(-.05, .05)).toFixed(1), {}, true);
    ['ola', 'kuba'].forEach((id) => { const s = ST['sensor.aurora_guard_' + id + '_status']; if (s && !(s.attributes.sleep_until > Date.now() / 1000)) setState('sensor.aurora_guard_' + id + '_status', 'ok', {last_seen: localIso()}, true); });
    schedule();
  }

  /* ---------- synchronizacja między ramkami ---------- */
  if (CH) CH.onmessage = (ev) => {
    const m = ev.data; if (!m || m.from === ID) return;
    if (m.t === 'st') { setState(m.id, m.state, m.attrs, true); schedule(); }
    else if (m.t === 'todo') { setTodo(m.e, m.items); }
    else if (m.t === 'mqtt') window.dispatchEvent(new CustomEvent('demo-mqtt', {detail: m.data}));
    else if (m.t === 'reset') location.reload();
  };

  /* scenariusze: stan domu do podgladu dashboardu w roznych warunkach (ok / uwaga / alarm) */
  let SCN = 'ok';
  function scenario(name) {
    SCN = name = (['ok', 'warn', 'alarm'].indexOf(name) >= 0 ? name : 'ok');
    const w = name !== 'ok', a = name === 'alarm', S = (id, v, at) => setState(id, v, at || {});
    S('sensor.demo_bat_drzwi', w ? 9 : 83); S('sensor.demo_bat_okno', w ? 12 : 64);
    S('sensor.demo_kuchnia_h', w ? 74 : 52); S('sensor.demo_ola_t', w ? 16.4 : 21.8); S('sensor.demo_pm25', w ? 44 : 6);
    S('binary_sensor.demo_door', w ? 'on' : 'off');
    S('binary_sensor.demo_gas', a ? 'on' : 'off'); S('binary_sensor.demo_flood', a ? 'on' : 'off'); S('select.demo_alarm', a ? 'alarm_sound_light' : 'normal');
    schedule();
  }
  seed();
  setInterval(drift, 20000);
  window.AuroraDemo = {
    hass: snapshot, setUser: (u) => { user = Object.assign({name: 'Rodzic', is_admin: false, id: 'u'}, u); },
    onHass: (fn) => { listeners.add(fn); return () => listeners.delete(fn); }, state: (id) => ST[id], set: setState, call: callService, todo: (e) => clone(TODO[e] || []),
    scenario: scenario, scenarioName: () => SCN,
    resetAll: () => { if (CH) CH.postMessage({t: 'reset', from: ID}); location.reload(); }
  };
})();
