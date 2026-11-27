/* Konfiguracja demonstracyjnego dashboardu Aurora Pulse (zmyślony dom: salon, kuchnia, pokoje Oli i Kuby, łazienka, przedpokój). */
window.DEMO_CFG = {
  rooms: [
    {id: 'salon', name: 'Salon', icon: 'mdi:sofa-outline', c: 'sky', occ: 'binary_sensor.demo_salon_occ', t: 'sensor.demo_salon_t', h: 'sensor.demo_salon_h', lux: 'sensor.demo_salon_lux',
     dev: [['light.demo_salon_led', 'Taśma LED', 'mdi:led-strip-variant'], ['light.demo_salon_lampa', 'Lampa podłogowa', 'mdi:floor-lamp-outline']]},
    {id: 'kuchnia', name: 'Kuchnia', icon: 'mdi:chef-hat', c: 'peach', occ: 'binary_sensor.demo_kuchnia_occ', t: 'sensor.demo_kuchnia_t', h: 'sensor.demo_kuchnia_h',
     dev: [['light.demo_kuchnia_led', 'Blat', 'mdi:countertop-outline'], ['switch.demo_kuchnia_piec', 'Piec', 'mdi:stove']]},
    {id: 'ola', name: 'Ola', icon: 'mdi:flower-tulip-outline', c: 'rose', occ: 'binary_sensor.demo_ola_occ', t: 'sensor.demo_ola_t', h: 'sensor.demo_ola_h', msg: 'demo/panel-ola/wiadomosc',
     dev: [['light.demo_ola_lampa', 'Lampa', 'mdi:lamp-outline'], ['switch.demo_ola_biurko', 'Biurko', 'mdi:desk-lamp']]},
    {id: 'kuba', name: 'Kuba', icon: 'mdi:controller-classic-outline', c: 'sky', occ: 'binary_sensor.demo_kuba_occ', t: 'sensor.demo_kuba_t', h: 'sensor.demo_kuba_h', msg: 'demo/panel-kuba/wiadomosc',
     dev: [['light.demo_kuba_lampa', 'Lampa', 'mdi:lamp-outline']]},
    {id: 'lazienka', name: 'Łazienka', icon: 'mdi:shower-head', c: 'aqua', occ: 'binary_sensor.demo_lazienka_occ', t: 'sensor.demo_lazienka_t', h: 'sensor.demo_lazienka_h', dev: []},
    {id: 'przedpokoj', name: 'Przedpokój', icon: 'mdi:door-open', c: 'butter', occ: 'binary_sensor.demo_przedpokoj_occ', lux: 'sensor.demo_przedpokoj_lux', door: 'binary_sensor.demo_door',
     dev: [['switch.demo_przedpokoj_lampa', 'Lampa', 'mdi:lamp-outline']]}
  ],
  out: {t: 'sensor.demo_out_t', h: 'sensor.demo_out_h', weather: 'weather.demo_pogoda'},
  pm: 'sensor.demo_pm25', purifier: 'fan.demo_oczyszczacz', fuel: [], cal: ['calendar.demo_rodzina'], calDays: 2,
  lightsOff: ['light.demo_salon_led', 'light.demo_salon_lampa', 'light.demo_kuchnia_led', 'light.demo_ola_lampa', 'light.demo_kuba_lampa', 'switch.demo_ola_biurko', 'switch.demo_kuchnia_piec', 'switch.demo_przedpokoj_lampa'],
  mute: '', wash: {status: '', end: '', idle: [], phase: {}}, gas: 'binary_sensor.demo_gas', floodK: 'binary_sensor.demo_flood', floodL: '', alarm: 'select.demo_alarm', alarmSw: '', door: 'binary_sensor.demo_door',
  bats: ['sensor.demo_bat_drzwi', 'sensor.demo_bat_okno'],
  temps: [['SALON', 'sensor.demo_salon_t'], ['KUCHNIA', 'sensor.demo_kuchnia_t'], ['OLA', 'sensor.demo_ola_t'], ['KUBA', 'sensor.demo_kuba_t'], ['ŁAZIENKA', 'sensor.demo_lazienka_t']],
  hums: [['SALON', 'sensor.demo_salon_h'], ['KUCHNIA', 'sensor.demo_kuchnia_h'], ['OLA', 'sensor.demo_ola_h'], ['KUBA', 'sensor.demo_kuba_h'], ['ŁAZIENKA', 'sensor.demo_lazienka_h']],
  humMin: 35, humMax: 60, offline: [], events: [], f1: {on: false}, tab: {bat: '', chg: ''}, reminders: [], remSlots: [], remWarn: 3, order: [], hide: [], pipeline: '', warn: '',
  media: {active: '', radio: '', tvs: []}, server: {nodes: [], guests: [], storages: []},
  todo: {editors: ['Rodzic'], viewers: ['Rodzic']},
  guard: [{id: 'ola', name: 'Ola'}, {id: 'kuba', name: 'Kuba'}]
};
window.DEMO_KIDS = {
  ola: {type: 'custom:aurora-kid-card', name: 'Ola', theme: 'unicorn', todo: 'todo.zadania_ola', deny: ['Kuba'],
    devices: [{e: 'light.demo_ola_lampa', n: 'Lampa', icon: 'mdi:lamp-outline'}, {e: 'switch.demo_ola_biurko', n: 'Biurko', icon: 'mdi:desk-lamp'}],
    sensors: [{e: 'sensor.demo_ola_t', n: 'Temperatura', u: '°C'}, {e: 'sensor.demo_ola_h', n: 'Wilgotność', u: '%'}]},
  kuba: {type: 'custom:aurora-kid-card', name: 'Kuba', theme: 'gaming', todo: 'todo.zadania_kuba', deny: ['Ola'], weather: 'weather.demo_pogoda', wTemp: 'sensor.demo_out_t', wHum: 'sensor.demo_out_h', presence: 'binary_sensor.demo_kuba_occ',
    devices: [{e: 'light.demo_kuba_lampa', n: 'Lampa', icon: 'mdi:lamp-outline'}],
    sensors: [{e: 'sensor.demo_kuba_t', n: 'Temperatura', u: '°C'}, {e: 'sensor.demo_kuba_h', n: 'Wilgotność', u: '%'}]},
  view: {type: 'custom:aurora-kid-card', mode: 'view', theme: 'gaming', children: [{name: 'Ola', theme: 'unicorn', todo: 'todo.zadania_ola'}, {name: 'Kuba', theme: 'gaming', todo: 'todo.zadania_kuba'}]}
};
