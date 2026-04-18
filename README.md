# NOX RolePlay Loading Screen 🎮

Premium FiveM Loading UI by **power0matin**  
Part of the **HyperSentry Labs** ecosystem.

A modern and cinematic FiveM loading screen built with 2026‑style UI/UX principles and fully optimized performance.

## 📸 Preview

![Preview](assets/preview.png)

## ✨ Features

- 🎬 Cinematic video‑based background with depth layers
- 🎵 Music player (play/pause, mute, volume slider, waveform animation)
- 📊 Smooth progress HUD synced with FiveM NUI events
- 💬 Dynamic tips, rules, and announcement panels
- 🧊 Glassmorphism UI styling
- 🌐 Custom social links (TeamSpeak + Website)
- ⚡ GPU‑optimized animations (very low CPU usage)
- 🖼️ Inter font fully hosted locally (no Google Fonts)

<!-- ## 📁 Project Structure

```

assets/
audio/
bg-music.mp3
css/
style.css
js/
script.js
fonts/
Inter/
Inter-Regular.woff2
Inter-Medium.woff2
Inter-SemiBold.woff2
Inter-Bold.woff2
inter.css
svg/
background.mp4
logo.png

index.html
fxmanifest.lua
README.md

``` -->

## 🚀 Installation (FiveM)

1. Place the folder inside your server resources:

```
resources/[ui]/hs-loadingscreen
```

2. Add this line to your `server.cfg`:

```
ensure hs-loadingscreen
```

## 🎵 Music Setup

Add or replace your audio file here:

```

assets/audio/bg-music.mp3

```

The UI automatically loads it when the resource starts.

## 🔧 NUI Events Supported

The loading screen supports the following events:

- `loadProgress`
- `status`

Example:

```lua
SendNUIMessage({
    eventName = "loadProgress",
    loadFraction = 0.50
})
```

## 🧠 Tech Stack

- HTML5
- CSS3 (Glassmorphism + GPU animations)
- Vanilla JavaScript
- FiveM NUI
- Local Inter Font (no external CDN)

## ⚡ Performance

- No external JS/CSS frameworks
- Pure GPU‑driven animation pipeline
- Lightweight music system
- Zero runtime dependencies

## 📌 Author & Credits

Developed by **power0matin**  
Part of **HyperSentry Labs**

🔗 GitHub Profiles:

- https://github.com/power0matin
- https://github.com/HyperSentry-Labs

## 💙 License

MIT License — Free to use, modify, and expand.
