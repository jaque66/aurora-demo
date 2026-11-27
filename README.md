# Aurora – interaktywne demo / interactive demo

**PL** – Interaktywne demo projektu **Aurora**: dashboardu *Aurora Pulse* dla Home Assistanta, widoków dla dzieci (z akceptacją zadań przez rodzica) oraz aplikacji rodzicielskiej *Aurora Guard*. Demo działa w całości w przeglądarce, na **sztucznym domu** (rodzina Ola i Kuba, wymyślone urządzenia i współrzędne) – nie łączy się z żadnym prawdziwym Home Assistantem i nie wysyła żadnych danych.

**EN** – Interactive demo of the **Aurora** project: the *Aurora Pulse* dashboard for Home Assistant, kids' dashboards (tasks with parent approval) and the *Aurora Guard* parental-control app. It runs entirely in the browser on a **made-up home** (a fictional family, invented devices and coordinates). It does not connect to a real Home Assistant and sends no data anywhere.

## Co zobaczysz / What you can try
- **Pulse · tablet / telefon** – ekran główny, Puls domu (wstęga zamieniająca się w znak statusu), pokoje, światła, kalendarz, pogoda, klimat, zadania; ~10 motywów (Matrix, Jarvis, Vice City, Hologram, Strumienie, **Tech 3D**…).
- **Aurora Guard** – widok rodzica (blokady, limity czasu, statystyki z historią, lokalizacja, „znajdź telefon”, wiadomość na ekran) połączony z symulowanym telefonem dziecka: prośba o więcej czasu → akceptacja w Pulse.
- **Stan domu w podglądzie** – przełącznik nad zakładkami: ✔ Wszystko OK, ⚠ Uwagi (słabe baterie, wilgoć, chłód, zły PM2.5, otwarte drzwi), 🚨 Alarm (gaz, zalanie, syrena). Wszystkie ramki reagują razem.
- **Manager i moduły** – dashboard podstawowy oraz moduły opcjonalne (Zadania, Aurora Guard, Formuła 1, Radio, Program TV) z notatkami o wymaganiach; zaznaczenie modułu zmienia menu „Więcej” w podglądzie.
- **Dla dzieci** – dashboardy Oli (jednorożec) i Kuby (gamingowy): zadania czekające na akceptację, kolor i jasność lamp, pogoda, czujnik obecności.

## Uruchomienie / Run
Strona jest statyczna (GitHub Pages). Lokalnie: `python3 -m http.server` w tym katalogu i otwórz `http://localhost:8000/`.

## Jak to działa / How it works
Karty (`assets/*.js`) to prawdziwe karty projektu, uruchomione na sztucznym obiekcie `hass` (`js/demo-hass.js`: stany, usługi, kalendarz, prognoza, zadania, Aurora Guard). Ramki demo synchronizują się przez `BroadcastChannel`. Konfiguracja domu: `js/demo-config.js`.

## Powiązane projekty / Related
- [Aurora Manager](https://github.com/jaque66/dashboard-aurora-manager) – dodatek do Home Assistanta do tworzenia dashboardów
- [Aurora Guard](https://github.com/jaque66/aurora-guard) – aplikacja Android

## Licencja / License
MIT (kod). Ikony: [Material Design Icons](https://pictogrammers.com/library/mdi/) (Apache-2.0) – w `js/mdi-bundle.js`.
