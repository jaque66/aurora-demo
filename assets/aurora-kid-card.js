/* Aurora Kids - widok dziecka: zadania (do akceptacji rodzica) + pokoj. Motywy: unicorn (roz), cars (niebieski). Tryb "view" = tylko podglad (Tab10). */
const KT = {
  unicorn: {bg: 'linear-gradient(165deg,#3b0f33 0%,#8a2f72 50%,#ff9ad0 140%)', a: '#ff8fc8', a2: '#ffd6ee', glass: 'rgba(255,190,230,.13)', line: 'rgba(255,200,235,.28)', glow: 'rgba(255,120,190,.35)', hi: '#ffe27a'},
  cars: {bg: 'linear-gradient(165deg,#031126 0%,#0a3a7a 52%,#33aaff 140%)', a: '#3db2ff', a2: '#c4e8ff', glass: 'rgba(120,190,255,.12)', line: 'rgba(150,205,255,.28)', glow: 'rgba(60,170,255,.35)', hi: '#ffd24a'},
};
KT.gaming = {bg: 'linear-gradient(165deg, #06030f 0%, #0f0828 50%, #1b0a3d 100%)', a: '#00f0ff', a2: '#ff2bd6', glass: 'rgba(16,10,40,.78)', line: 'rgba(0,240,255,.4)', glow: 'rgba(0,240,255,.45)', hi: '#c6ff2e'};
const WXK = {'clear-night': ['mdi:weather-night', 'Pogodna noc'], cloudy: ['mdi:weather-cloudy', 'Pochmurno'], exceptional: ['mdi:alert-circle-outline', 'Wyjątkowo'], fog: ['mdi:weather-fog', 'Mgła'], hail: ['mdi:weather-hail', 'Grad'], lightning: ['mdi:weather-lightning', 'Burza'], 'lightning-rainy': ['mdi:weather-lightning-rainy', 'Burza z deszczem'], partlycloudy: ['mdi:weather-partly-cloudy', 'Częściowe zachmurzenie'], pouring: ['mdi:weather-pouring', 'Ulewa'], rainy: ['mdi:weather-rainy', 'Deszcz'], snowy: ['mdi:weather-snowy', 'Śnieg'], 'snowy-rainy': ['mdi:weather-snowy-rainy', 'Śnieg z deszczem'], sunny: ['mdi:weather-sunny', 'Słonecznie'], windy: ['mdi:weather-windy', 'Wietrznie'], 'windy-variant': ['mdi:weather-windy-variant', 'Wietrznie']};
const ART = {
  gaming: `<svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
    <defs><linearGradient id="gsn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe14a"/><stop offset="1" stop-color="#ff2bd6"/></linearGradient><clipPath id="gcl"><rect x="0" y="0" width="400" height="92"/></clipPath></defs>
    <circle class="sun" cx="200" cy="92" r="42" fill="url(#gsn)" clip-path="url(#gcl)" opacity=".9"/>
    <g stroke="#ff2bd6" stroke-width="1.2" opacity=".6"><path d="M0 92H400"/><path d="M0 100H400"/><path d="M0 110H400"/><path d="M0 123H400"/><path d="M0 140H400"/><path d="M200 92L-120 150"/><path d="M200 92L-20 150"/><path d="M200 92L80 150"/><path d="M200 92L170 150"/><path d="M200 92L230 150"/><path d="M200 92L320 150"/><path d="M200 92L420 150"/><path d="M200 92L520 150"/></g>
    <g class="tw" fill="#c6ff2e"><rect x="30" y="20" width="4" height="4"/><rect x="90" y="48" width="3" height="3"/><rect x="330" y="26" width="4" height="4"/><rect x="368" y="60" width="3" height="3"/><rect x="150" y="14" width="3" height="3"/></g>
    <g class="pad" transform="translate(118,18)" stroke-linejoin="round"><path d="M12 22Q12 2 42 2H118Q148 2 148 22L160 56Q165 82 144 82Q128 82 120 64H40Q32 82 16 82Q-5 82 0 56Z" fill="#14093a" stroke="#00f0ff" stroke-width="2.4"/>
      <g fill="#00f0ff"><rect x="30" y="24" width="8" height="26" rx="2"/><rect x="21" y="33" width="26" height="8" rx="2"/></g>
      <circle cx="118" cy="26" r="6" fill="#c6ff2e"/><circle cx="132" cy="38" r="6" fill="#ff2bd6"/><circle cx="104" cy="38" r="6" fill="#00f0ff"/><circle cx="118" cy="50" r="6" fill="#ffe14a"/>
      <circle cx="58" cy="52" r="9" fill="#0b0624" stroke="#ff2bd6" stroke-width="2"/><circle cx="100" cy="64" r="9" fill="#0b0624" stroke="#c6ff2e" stroke-width="2"/></g></svg>`,
  unicorn: `<svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
    <g fill="none" stroke-width="9" stroke-linecap="round" opacity=".55"><path d="M10 150 A130 130 0 0 1 270 150" stroke="#ff6b9e"/><path d="M24 150 A116 116 0 0 1 256 150" stroke="#ffb86b"/><path d="M38 150 A102 102 0 0 1 242 150" stroke="#fff08a"/><path d="M52 150 A88 88 0 0 1 228 150" stroke="#8dffb4"/><path d="M66 150 A74 74 0 0 1 214 150" stroke="#8fd0ff"/><path d="M80 150 A60 60 0 0 1 200 150" stroke="#c9a0ff"/></g>
    <g fill="#fff" opacity=".85"><ellipse cx="40" cy="146" rx="42" ry="14"/><ellipse cx="80" cy="140" rx="30" ry="12"/><ellipse cx="250" cy="148" rx="46" ry="12"/></g>
    <g class="tw" fill="#fff6b0"><path d="M30 24l3 8 8 3-8 3-3 8-3-8-8-3 8-3z"/><path d="M180 16l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/><path d="M370 30l3 8 8 3-8 3-3 8-3-8-8-3 8-3z"/><path d="M120 60l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/><path d="M330 90l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/></g>
    <g transform="translate(262,14) scale(.78)"><path d="M16 84Q-14 84-6 124 8 104 20 104Z" fill="#b66bff"/><ellipse cx="62" cy="88" rx="46" ry="27" fill="#fff"/>
      <g fill="#fff"><rect x="28" y="102" width="10" height="36" rx="5"/><rect x="46" y="104" width="10" height="34" rx="5"/><rect x="76" y="104" width="10" height="34" rx="5"/><rect x="92" y="102" width="10" height="36" rx="5"/></g><g fill="#ffb3dc"><rect x="28" y="132" width="10" height="7" rx="3"/><rect x="46" y="132" width="10" height="7" rx="3"/><rect x="76" y="132" width="10" height="7" rx="3"/><rect x="92" y="132" width="10" height="7" rx="3"/></g>
      <path d="M88 72Q102 46 106 30L128 34Q124 62 110 88Z" fill="#fff"/><path d="M104 30Q120 12 144 22 152 30 148 40 142 48 126 46 112 46 104 38Z" fill="#fff"/>
      <path d="M120 18L127-14 133 22Z" fill="#ffd54a"/><path d="M110 24L108 8 119 17Z" fill="#fff"/><circle cx="131" cy="31" r="2.8" fill="#5b2a7a"/><circle cx="143" cy="38" r="1.6" fill="#ffb3dc"/>
      <path d="M106 26Q86 30 94 52 80 56 90 74 76 80 88 94 104 80 110 50Z" fill="#ff5fb0"/><path d="M104 30Q92 38 98 54 88 62 94 76 102 66 108 48Z" fill="#c26bff" opacity=".8"/></g></svg>`,
  cars: `<svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
    <g fill="#fff" opacity=".5"><ellipse cx="60" cy="30" rx="38" ry="9"/><ellipse cx="90" cy="24" rx="26" ry="8"/><ellipse cx="320" cy="44" rx="44" ry="9"/></g>
    <g class="tw" fill="#fff"><circle cx="30" cy="70" r="1.6"/><circle cx="150" cy="22" r="1.4"/><circle cx="260" cy="40" r="1.8"/><circle cx="360" cy="18" r="1.4"/></g>
    <path d="M0 118h400v32H0z" fill="#0b1b36"/><path d="M0 118h400" stroke="#6bb8ff" stroke-width="2" opacity=".7"/><path class="rd" d="M0 136h400" stroke="#cfe9ff" stroke-width="3" stroke-dasharray="26 22" opacity=".8"/>
    <g class="spd" stroke="#bfe6ff" stroke-width="3" stroke-linecap="round" opacity=".6"><path d="M20 78h46"/><path d="M6 92h58"/><path d="M26 106h40"/></g>
    <g class="car" transform="translate(112,34)"><path d="M10 62L30 62 48 38H112L138 62 172 64Q182 66 182 76V86H10Z" fill="#2fa8ff"/><path d="M10 62L30 62 48 38H112L138 62 172 64Q182 66 182 76V86H10Z" fill="none" stroke="#bfe6ff" stroke-width="2" opacity=".6"/>
      <path d="M52 43H70V60H40Z" fill="#cfeaff"/><path d="M76 43H108L124 60H76Z" fill="#cfeaff"/><rect x="14" y="68" width="18" height="6" rx="3" fill="#ff5c5c"/><rect x="168" y="68" width="14" height="7" rx="3" fill="#ffe27a"/><path d="M10 78H182" stroke="#0d5aa8" stroke-width="3" opacity=".6"/><path d="M96 56l8 0" stroke="#0d5aa8" stroke-width="3" stroke-linecap="round"/>
      <g class="wh"><circle cx="46" cy="88" r="15" fill="#0a1a33" stroke="#dfe9f5" stroke-width="3"/><circle cx="46" cy="88" r="6" fill="#9db4cf"/><circle cx="144" cy="88" r="15" fill="#0a1a33" stroke="#dfe9f5" stroke-width="3"/><circle cx="144" cy="88" r="6" fill="#9db4cf"/></g></g></svg>`,
};
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
const PEND = '⏳';

class AuroraKidCard extends HTMLElement {
  constructor() { super(); this.attachShadow({mode: 'open'}); this._items = {}; this._sig = ''; }
  setConfig(c) { if (!c) throw new Error('brak konfiguracji'); this._c = c; this._sig = ''; this._items = {}; this._render(); }
  getCardSize() { return 10; }
  _bars(on) {   /* ukrywa gorna belke dashboardu (naglowek HA) - styl w hui-root, zdejmowany po wyjsciu z widoku */
    const f = (r) => { for (const e of r.querySelectorAll('*')) { if (e.tagName === 'HUI-ROOT') return e; if (e.shadowRoot) { const x = f(e.shadowRoot); if (x) return x; } } return null; };
    const r = (this._hr && this._hr.isConnected) ? this._hr : (this._hr = f(document)); if (!r || !r.shadowRoot) return;
    let st = r.shadowRoot.getElementById('kid-nobars');
    if (on && !st) { st = document.createElement('style'); st.id = 'kid-nobars'; st.textContent = '.header, .toolbar { display: none !important; } :host { --header-height: 0px !important; } #view { min-height: 100vh !important; padding-top: 0 !important; margin-top: 0 !important; }'; r.shadowRoot.appendChild(st); }
    else if (!on && st) st.remove();
  }
  connectedCallback() { clearInterval(this._tmr); this._tmr = setInterval(() => { if (this._c && (this._c.presence || this._c.weather)) this._render(); }, 60000); this._bars(true); setTimeout(() => this._bars(true), 400); setTimeout(() => this._bars(true), 1500); }
  disconnectedCallback() { clearInterval(this._tmr); this._bars(false); const SB = this._subs; this._subs = null; if (SB) Object.keys(SB).forEach((k) => { if (typeof SB[k] === 'function') { try { SB[k](); } catch (e) { /* ignore */ } } }); this._sig = ''; }
  _lists() { const c = this._c; return c.mode === 'view' ? (c.children || []) : [{name: c.name, theme: c.theme, todo: c.todo}]; }
  _sub(e) {   /* subskrypcja zmian pozycji listy - akceptacja/zaznaczenie widoczne od razu, bez odswiezania */
    const SB = (this._subs = this._subs || {}); if (SB[e] || !e || !this._h || !this._h.connection) return; SB[e] = true;
    this._h.connection.subscribeMessage((ev) => { this._items[e] = (ev && ev.items) || []; this._render(); }, {type: 'todo/item/subscribe', entity_id: e})
      .then((u) => { if (this._subs === SB) SB[e] = u; else u(); }).catch(() => { SB[e] = null; });
  }
  set hass(h) {
    this._h = h; if (!this._c) return;
    this._lists().forEach((l) => this._sub(l.todo));
    let sig = '';
    this._lists().forEach((l) => { const s = h.states[l.todo]; sig += (s ? s.state + s.last_updated : '-') + '|'; });
    ((this._c.devices || []).concat(this._c.sensors || [])).forEach((d) => { const s = h.states[d.e]; sig += (s ? s.state : '-') + '|'; });
    [this._c.weather, this._c.wTemp, this._c.wHum, this._c.presence].forEach((e) => { const s = e && h.states[e]; if (e) sig += (s ? s.state + (s.attributes.temperature || '') + s.last_changed : '-') + '|'; });
    if (sig === this._sig) return; this._sig = sig;
    this._lists().forEach((l) => this._load(l.todo));
    this._render();
  }
  async _load(e) {
    if (!e || !this._h) return;
    try { const r = await this._h.callWS({type: 'todo/item/list', entity_id: e}); this._items[e] = (r && r.items) || []; this._render(); } catch (x) { /* ignore */ }
  }
  _tasks(l, ro) {
    const it = (this._items[l.todo] || []).slice(), pend = (x) => x.status !== 'completed' && String(x.description || '').indexOf(PEND) === 0;
    it.sort((a, b) => (a.status === 'completed') - (b.status === 'completed') || pend(a) - pend(b));
    const total = it.length, done = it.filter((x) => x.status === 'completed').length, open = it.filter((x) => x.status !== 'completed' && !pend(x)).length, wait = it.filter(pend).length, pc = total ? Math.round(done / total * 100) : 100;
    const msg = !total ? 'Brak zadań na dziś' : open ? `Do zrobienia: ${open}` : wait ? 'Czeka na sprawdzenie ✨' : 'Wszystko zrobione! 🎉';
    const rows = it.map((x) => {
      const dn = x.status === 'completed', p = pend(x), ic = dn ? 'mdi:check-circle' : p ? 'mdi:timer-sand' : 'mdi:circle-outline';
      return `<${ro || dn ? 'div' : 'button'} class="it${dn ? ' dn' : ''}${p ? ' pd' : ''}"${ro || dn ? '' : ` data-u="${esc(x.uid)}" data-e="${esc(l.todo)}" data-p="${p ? 1 : 0}"`}><ha-icon icon="${ic}"></ha-icon><span>${esc(x.summary)}${p ? '<small>czeka na akceptację rodzica</small>' : ''}</span></${ro || dn ? 'div' : 'button'}>`;
    }).join('') || '<div class="em">Lista jest pusta</div>';
    if ((l.theme || this._c.theme) === 'gaming') return `<div class="xp"><div class="xpt"><b>MISJE ${done}/${total}</b><small>${msg}${wait ? ' · ' + wait + ' czeka na rodzica' : ''}</small></div><div class="xpb"><i style="width:${pc}%"></i></div></div><div class="ls">${rows}</div>`;
    return `<div class="rg"><svg viewBox="0 0 80 80" width="74" height="74"><circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="8"/><circle cx="40" cy="40" r="32" fill="none" stroke="var(--a)" stroke-width="8" stroke-linecap="round" stroke-dasharray="${(2 * Math.PI * 32 * pc / 100).toFixed(1)} 300" transform="rotate(-90 40 40)"/><text x="40" y="46" text-anchor="middle" fill="#fff" font-size="18" font-weight="300">${pc}%</text></svg><div><b>${msg}</b><small>${done} z ${total} zaakceptowane${wait ? ' · ' + wait + ' czeka na rodzica' : ''}</small></div></div><div class="ls">${rows}</div>`;
  }
  _weather() {
    const c = this._c, h = this._h; if (!h) return ''; const w = c.weather && h.states[c.weather]; if (!w) return '';
    const A = w.attributes || {}, x = WXK[w.state] || ['mdi:weather-cloudy', w.state], tv = c.wTemp && h.states[c.wTemp] ? parseFloat(h.states[c.wTemp].state) : parseFloat(A.temperature), hv = c.wHum && h.states[c.wHum] ? parseFloat(h.states[c.wHum].state) : parseFloat(A.humidity);
    const f1 = (v) => (Math.round(v * 10) / 10).toString().replace('.', ',');
    return `<section class="g wx"><h3>Pogoda · na zewnątrz</h3><div class="wxr"><ha-icon icon="${x[0]}"></ha-icon><div><b>${isNaN(tv) ? '—' : f1(tv) + '°C'}</b><small>${esc(x[1])}</small></div><div class="wxs">${isNaN(hv) ? '' : '<span><ha-icon icon="mdi:water-percent"></ha-icon>' + Math.round(hv) + '%</span>'}${A.wind_speed != null ? '<span><ha-icon icon="mdi:weather-windy"></ha-icon>' + Math.round(A.wind_speed) + ' km/h</span>' : ''}${A.pressure != null ? '<span><ha-icon icon="mdi:gauge"></ha-icon>' + Math.round(A.pressure) + ' hPa</span>' : ''}</div></div></section>`;
  }
  _presence() {
    const c = this._c, h = this._h; if (!h) return ''; const o = c.presence && h.states[c.presence]; if (!o) return '';
    const on = o.state === 'on', t = new Date(o.last_changed), p2 = (n) => String(n).padStart(2, '0'), hm = p2(t.getHours()) + ':' + p2(t.getMinutes()), mn = Math.max(0, Math.round((Date.now() - t.getTime()) / 60000)), td = new Date(), same = t.toDateString() === td.toDateString(), yd = new Date(td.getTime() - 86400000).toDateString() === t.toDateString();
    const ago = mn < 1 ? 'przed chwilą' : mn < 90 ? mn + ' min temu' : mn < 2880 ? Math.round(mn / 60) + ' godz. temu' : Math.round(mn / 1440) + ' dni temu', day = same ? '' : yd ? 'wczoraj ' : p2(t.getDate()) + '.' + p2(t.getMonth() + 1) + ' ';
    return `<section class="g pr"><h3>Czujnik obecności</h3><div class="prr"><i class="pd${on ? ' on' : ''}"></i><div><b>${on ? 'Ktoś jest w pokoju' : 'Pusto w pokoju'}</b><small>${on ? 'wykryty od ' + day + hm + ' (' + ago + ')' : 'ostatnie wykrycie: ' + day + hm + ' (' + ago + ')'}</small></div></div></section>`;
  }
  _render() {
    const c = this._c, h = this._h, R = this.shadowRoot; if (!c) return;
    const view = c.mode === 'view', th = KT[c.theme] || KT.cars, user = h && h.user && h.user.name ? String(h.user.name).toLowerCase() : '';
    const blocked = !view && user && (c.deny || []).some((n) => String(n).toLowerCase() === user);
    let body = '';
    if (blocked) body = `<section class="g"><div class="em">To jest widok innej osoby 🙂</div></section>`;
    else if (view) body = this._lists().map((l) => { const t = KT[l.theme] || th; return `<section class="g" style="--a:${t.a};--a2:${t.a2}"><h3>${esc(l.name)}</h3>${this._tasks(l, true)}</section>`; }).join('');
    else {
      const dev = (c.devices || []).filter((d) => h && h.states[d.e]).map((d) => { const on = h.states[d.e].state === 'on'; const lt = /^light\./.test(d.e) && h.states[d.e].attributes.supported_color_modes && h.states[d.e].attributes.supported_color_modes.some((m) => m !== 'onoff');
        return `<div class="dw"><button class="dv${on ? ' on' : ''}" data-d="${esc(d.e)}"><ha-icon icon="${esc(d.icon || 'mdi:lightbulb-outline')}"></ha-icon><b>${esc(d.n)}</b><small>${on ? 'włączone' : 'wyłączone'}</small></button>${lt ? `<button class="tn${this._tune === d.e ? ' on' : ''}" data-t="${esc(d.e)}" aria-label="Kolory i jasność"><ha-icon icon="mdi:palette"></ha-icon></button>` : ''}</div>`; }).join('');
      const tu = this._tune && h.states[this._tune] && (c.devices || []).find((d) => d.e === this._tune), ta = tu ? h.states[this._tune].attributes : null;
      const SW = [['#ff3b3b', 0, 100], ['#ff9a2e', 30, 100], ['#ffe23b', 55, 100], ['#4cd964', 130, 100], ['#2fe0d0', 175, 100], ['#3db2ff', 205, 100], ['#4a5bff', 235, 100], ['#a55bff', 270, 100], ['#ff5fd0', 315, 100], ['#ff7aa8', 345, 70]];
      const tune = tu ? `<div class="tp"><h4>${esc(tu.n)} · jasność</h4><input type="range" id="br" min="1" max="100" value="${ta.brightness ? Math.round(ta.brightness / 2.55) : 60}"><h4>Kolor</h4><div class="sw">${SW.map((x, i) => `<button class="c" data-i="${i}" style="background:${x[0]}" aria-label="Kolor"></button>`).join('')}</div><h4>Biały</h4><div class="sw"><button class="c w" data-k="2700" style="background:#ffb46b" aria-label="Ciepły"></button><button class="c w" data-k="4000" style="background:#fff0d6" aria-label="Neutralny"></button><button class="c w" data-k="6000" style="background:#d6ecff" aria-label="Zimny"></button></div></div>` : '';
      const sn = (c.sensors || []).filter((d) => h && h.states[d.e] && !isNaN(parseFloat(h.states[d.e].state))).map((d) => `<div class="sn"><b>${Math.round(parseFloat(h.states[d.e].state) * 10) / 10}${esc(d.u || '')}</b><small>${esc(d.n)}</small></div>`).join('');
      const hr = new Date().getHours(), hello = hr < 10 ? 'Dzień dobry' : hr < 18 ? 'Cześć' : 'Dobry wieczór';
      body = `<section class="g"><h3>${c.theme === 'gaming' ? 'Misje dnia' : 'Zadania'}</h3>${this._tasks(this._lists()[0], false)}</section>${this._weather()}${this._presence()}${dev || sn ? `<section class="g"><h3>Mój pokój</h3>${sn ? `<div class="sr">${sn}</div>` : ''}${dev ? `<div class="dg">${dev}</div>` : ''}${typeof tune === 'string' ? tune : ''}</section>` : ''}`;
      body = `<div class="hl"><small>${c.theme === 'gaming' ? 'Gracz 1' : hello}</small><b>${c.theme === 'gaming' ? esc(c.name).toUpperCase() : esc(c.name) + '!'}</b></div>` + body;
    }
    R.innerHTML = `<style>
      :host { display: block; --a: ${th.a}; --a2: ${th.a2}; --glass: ${th.glass}; --line: ${th.line}; --glow: ${th.glow}; }
      .wrap { position: relative; min-height: 100vh; box-sizing: border-box; padding: 0 0 28px; background: ${th.bg}; color: #fff; font-family: system-ui, 'Segoe UI', Roboto, sans-serif; overflow: hidden; }
      .art { height: 150px; position: relative; max-width: 620px; margin: 0 auto; } .art svg { position: absolute; inset: 0; width: 100%; height: 100%; } ${c.theme === 'cars' ? '.art::before { content: ""; position: absolute; left: -100vw; right: -100vw; bottom: 0; height: 21.4%; background: #0b1b36; border-top: 2px solid rgba(107,184,255,.7); }' : ''} .art svg { z-index: 1; }
      .in { position: relative; max-width: 620px; margin: -34px auto 0; padding: 0 14px; display: grid; gap: 14px; }
      .hl { padding: 0 6px; display: flex; flex-direction: column; } .hl small { opacity: .8; letter-spacing: .14em; text-transform: uppercase; font-size: 12px; } .hl b { font-size: 38px; font-weight: 300; letter-spacing: .02em; text-shadow: 0 0 22px var(--glow); }
      .g { background: var(--glass); border: 1px solid var(--line); border-radius: 24px; padding: 16px; backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); box-shadow: 0 10px 34px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.18); }
      h3 { margin: 0 0 12px; font-size: 13px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; color: var(--a2); }
      .rg { display: flex; gap: 14px; align-items: center; margin-bottom: 12px; } .rg b { font-size: 20px; font-weight: 500; display: block; } .rg small { opacity: .75; font-size: 13px; }
      .ls { display: grid; gap: 8px; } .it { display: flex; align-items: center; gap: 12px; width: 100%; text-align: left; padding: 12px 14px; border-radius: 16px; background: rgba(255,255,255,.09); border: 1px solid var(--line); color: inherit; font: inherit; font-size: 16px; cursor: pointer; box-sizing: border-box; }
      div.it { cursor: default; } button.it:active { transform: scale(.98); } .it ha-icon { flex: none; --mdc-icon-size: 28px; color: var(--a2); } .it span { flex: 1; min-width: 0; } .it small { display: block; font-size: 12px; opacity: .8; color: var(--hi, #ffd24a); margin-top: 2px; }
      .it.dn { opacity: .55; } .it.dn span { text-decoration: line-through; } .it.dn ha-icon { color: #6dffb1; } .it.pd { border-color: ${th.hi}; box-shadow: 0 0 16px ${th.glow}; } .it.pd ha-icon { color: ${th.hi}; }
      .em { opacity: .7; text-align: center; padding: 14px 0; }
      .sr { display: flex; gap: 10px; margin-bottom: 12px; } .sn { flex: 1; background: rgba(255,255,255,.09); border-radius: 16px; padding: 10px; text-align: center; } .sn b { font-size: 24px; font-weight: 300; display: block; } .sn small { opacity: .7; font-size: 12px; }
      .dg { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; } .dv { display: flex; flex-direction: column; gap: 3px; align-items: flex-start; padding: 14px; border-radius: 18px; background: rgba(255,255,255,.09); border: 1px solid var(--line); color: inherit; font: inherit; cursor: pointer; text-align: left; }
      .dv ha-icon { --mdc-icon-size: 28px; color: var(--a2); } .dv b { font-weight: 500; font-size: 15px; } .dv small { opacity: .7; font-size: 12px; } .dv.on { background: linear-gradient(145deg, var(--a), rgba(255,255,255,.18)); color: #1a0a22; border-color: transparent; box-shadow: 0 0 22px var(--glow); } .dv.on ha-icon { color: #1a0a22; }
      .dw { position: relative; } .dw .dv { width: 100%; box-sizing: border-box; } .tn { position: absolute; top: 8px; right: 8px; width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; background: rgba(0,0,0,.28); border: 1px solid var(--line); color: #fff; cursor: pointer; padding: 0; } .tn ha-icon { --mdc-icon-size: 20px; } .tn.on { background: var(--a); color: #1a0a22; }
      .tp { margin-top: 12px; padding: 14px; border-radius: 18px; background: rgba(0,0,0,.2); border: 1px solid var(--line); } .tp h4 { margin: 10px 0 8px; font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: var(--a2); font-weight: 600; } .tp h4:first-child { margin-top: 0; }
      .tp input[type=range] { width: 100%; height: 34px; accent-color: var(--a); } .sw { display: flex; flex-wrap: wrap; gap: 10px; } .c { width: 40px; height: 40px; border-radius: 50%; border: 3px solid rgba(255,255,255,.55); cursor: pointer; padding: 0; } .c:active { transform: scale(.9); }
      .tw { animation: tw 2.6s ease-in-out infinite; } @keyframes tw { 50% { opacity: .25; } } .car { animation: bn 1.1s ease-in-out infinite alternate; } @keyframes bn { to { transform: translate(112px, 35px); } } .rd { animation: rdm 1s linear infinite; } @keyframes rdm { to { stroke-dashoffset: 48; } } .spd { animation: sp .5s linear infinite; } @keyframes sp { from { transform: translateX(0); opacity: .7; } to { transform: translateX(-26px); opacity: 0; } }
      @media (prefers-reduced-motion: reduce) { .tw, .car, .rd, .spd { animation: none; } }
      .wx .wxr { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; } .wx .wxr > ha-icon { --mdc-icon-size: 46px; color: var(--a2); } .wx b { font-size: 30px; font-weight: 300; display: block; } .wx small { opacity: .75; font-size: 13px; } .wxs { margin-left: auto; display: flex; flex-direction: column; gap: 4px; font-size: 13px; opacity: .9; } .wxs span { display: flex; align-items: center; gap: 4px; } .wxs ha-icon { --mdc-icon-size: 16px; color: var(--a2); }
      .pr .prr { display: flex; align-items: center; gap: 14px; } .pr b { font-size: 18px; font-weight: 500; display: block; } .pr small { opacity: .75; font-size: 13px; } .pd { flex: none; width: 16px; height: 16px; border-radius: 50%; background: #5b6275; box-shadow: 0 0 0 4px rgba(255,255,255,.06); } .pd.on { background: #3fe0a5; box-shadow: 0 0 0 4px rgba(63,224,165,.2), 0 0 16px #3fe0a5; }
      ${c.theme === 'gaming' ? `
      .wrap { font-family: 'Segoe UI', system-ui, Roboto, sans-serif; } .wrap::before { content: ''; position: absolute; inset: 0; pointer-events: none; background: repeating-linear-gradient(0deg, rgba(255,255,255,.025) 0 1px, transparent 1px 3px); z-index: 0; }
      .hl small { color: #c6ff2e; letter-spacing: .3em; font-weight: 700; } .hl b { font-weight: 800; letter-spacing: .08em; background: linear-gradient(90deg, #00f0ff, #ff2bd6); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; text-shadow: none; filter: drop-shadow(0 0 14px rgba(0,240,255,.5)); }
      .g { border: 2px solid transparent; border-radius: 4px 20px 4px 20px; background: linear-gradient(#0d0826, #0b0720) padding-box, conic-gradient(from 140deg, #00f0ff, #ff2bd6, #c6ff2e, #00f0ff) border-box; box-shadow: 0 0 22px rgba(0,240,255,.18), inset 0 0 28px rgba(255,43,214,.06); backdrop-filter: none; -webkit-backdrop-filter: none; }
      h3 { color: #00f0ff; letter-spacing: .24em; font-weight: 800; text-shadow: 0 0 10px rgba(0,240,255,.6); } h3::before { content: '▸ '; color: #ff2bd6; }
      .it { border-radius: 3px 14px 3px 14px; background: rgba(0,240,255,.06); border: 1px solid rgba(0,240,255,.3); } .it ha-icon { color: #00f0ff; } .it.pd { border-color: #c6ff2e; box-shadow: 0 0 16px rgba(198,255,46,.4); } .it.pd ha-icon { color: #c6ff2e; }
      .xp { margin-bottom: 12px; } .xpt b { font-size: 15px; letter-spacing: .12em; color: #c6ff2e; text-shadow: 0 0 10px rgba(198,255,46,.5); } .xpt small { display: block; opacity: .75; font-size: 12px; margin: 2px 0 8px; } .xpb { height: 16px; border-radius: 3px 8px 3px 8px; background: rgba(255,255,255,.08); border: 1px solid rgba(0,240,255,.4); overflow: hidden; } .xpb i { display: block; height: 100%; background: linear-gradient(90deg, #00f0ff, #c6ff2e); box-shadow: 0 0 16px rgba(0,240,255,.8); -webkit-mask-image: repeating-linear-gradient(90deg, #000 0 12px, transparent 12px 15px); mask-image: repeating-linear-gradient(90deg, #000 0 12px, transparent 12px 15px); transition: width .6s; }
      .wx .wxr > ha-icon, .wxs ha-icon { color: #ff2bd6; } .wx b { font-weight: 800; color: #00f0ff; text-shadow: 0 0 12px rgba(0,240,255,.6); } .pr b { letter-spacing: .04em; } .pd.on { background: #c6ff2e; box-shadow: 0 0 0 4px rgba(198,255,46,.2), 0 0 18px #c6ff2e; }
      .dv { border-radius: 3px 14px 3px 14px; background: rgba(0,240,255,.06); border: 1px solid rgba(0,240,255,.3); } .dv.on { background: linear-gradient(145deg, #00f0ff, #ff2bd6); color: #0a0420; box-shadow: 0 0 22px rgba(0,240,255,.6); } .sn { border-radius: 3px 12px 3px 12px; background: rgba(0,240,255,.06); border: 1px solid rgba(0,240,255,.25); } .tp { border-radius: 3px 14px 3px 14px; }
      .pad { animation: bn 3.4s ease-in-out infinite alternate; } .sun { animation: sunp 4s ease-in-out infinite alternate; } @keyframes sunp { to { opacity: .6; } }
      ` : ''}
    </style><div class="wrap"><div class="art">${ART[c.theme] || ART.cars}</div><div class="in">${body}</div></div>`;
    R.querySelectorAll('button.it[data-u]').forEach((b) => { b.onclick = () => this._tap(b); });
    R.querySelectorAll('button.tn').forEach((b) => { b.onclick = () => { this._tune = this._tune === b.dataset.t ? null : b.dataset.t; this._render(); }; });
    const br = R.getElementById('br'), te = this._tune;
    if (br && te) {
      br.onchange = () => h.callService('light', 'turn_on', {entity_id: te, brightness_pct: parseInt(br.value, 10)});
      R.querySelectorAll('.c[data-i]').forEach((b) => { b.onclick = () => { const x = [[0, 100], [30, 100], [55, 100], [130, 100], [175, 100], [205, 100], [235, 100], [270, 100], [315, 100], [345, 70]][+b.dataset.i]; h.callService('light', 'turn_on', {entity_id: te, hs_color: x, brightness_pct: parseInt(br.value, 10)}); }; });
      R.querySelectorAll('.c[data-k]').forEach((b) => { b.onclick = () => { const a = h.states[te].attributes, k = Math.max(a.min_color_temp_kelvin || 2000, Math.min(a.max_color_temp_kelvin || 6500, +b.dataset.k)); h.callService('light', 'turn_on', {entity_id: te, color_temp_kelvin: k, brightness_pct: parseInt(br.value, 10)}); }; });
    }
    R.querySelectorAll('button.dv').forEach((b) => { b.onclick = () => h.callService('homeassistant', 'toggle', {entity_id: b.dataset.d}); });
  }
  _tap(b) {
    const e = b.dataset.e, u = b.dataset.u, was = b.dataset.p === '1', it = (this._items[e] || []).find((x) => x.uid === u); if (!it) return;
    const d = was ? '' : PEND + ' do akceptacji'; it.description = d; this._render();
    this._h.callService('todo', 'update_item', {entity_id: e, item: u, description: d}).catch(() => { it.description = was ? d : ''; this._load(e); });
  }
}
if (!customElements.get('aurora-kid-card')) customElements.define('aurora-kid-card', AuroraKidCard);
window.customCards = window.customCards || []; window.customCards.push({type: 'aurora-kid-card', name: 'Aurora Kids', description: 'Widok dziecka: zadania z akceptacją rodzica i pokój'});
