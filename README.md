# NOX RolePlay Loading Screen 🎮

Premium FiveM Loading UI by **power0matin**  
Part of the **HyperSentry Labs** ecosystem.

A modern and cinematic FiveM loading screen built with 2026-style UI/UX principles, featuring a **realistic FiveM-style loading system**, optimized rendering pipeline, and smooth stage-based progress behavior.

## 📸 Preview

![Preview](assets/preview.png)

## ✨ Features

- 🎬 Cinematic video-based background with layered depth system
- 🎵 Built-in music player (play/pause, mute, volume control, waveform animation)
- 📊 **FiveM-realistic progress system (stage-based loading simulation)**
- ⚡ Smooth animated progress interpolation with adaptive easing
- 🧠 Status-driven loading phases (CONNECTING → DOWNLOADING → STREAMING → FINALIZING)
- 🌐 Custom social links (TeamSpeak + Website)
- 🧊 Glassmorphism UI design system (2026 UI standard)
- ⚡ GPU-optimized animations (low CPU overhead)
- 🖼️ Fully local assets (no external CDN or dependencies)
- 🚫 Simplified UI state (removed dynamic tips system for stability)

## 🚀 Installation (FiveM)

1. Place the resource inside your server directory:

```

resources/[ui]/hs-loadingscreen

```

2. Add to your `server.cfg`:

```

ensure hs-loadingscreen

```

## 🎵 Music Setup

Replace or add your background audio:

```

assets/audio/bg-music.mp3

```

The music system automatically initializes on resource start.

## 🔧 NUI Events Supported

This loading screen listens to:

- `loadProgress`
- `status`

### Example (Lua):

```lua
SendNUIMessage({
    eventName = "loadProgress",
    loadFraction = 0.5
})
```

## 🧠 Technical Highlights

### 🔹 Realistic FiveM Progress System

- Stage-based loading simulation (engine-like behavior)
- Adaptive speed per loading phase
- Smooth interpolation without UI jitter
- Stable 100% snap completion logic

### 🔹 Performance Optimization

- requestAnimationFrame-based rendering loop
- Minimal DOM updates per frame
- No external libraries or frameworks
- Fully GPU-accelerated UI effects

### 🔹 Architecture Improvements

- Clean separation of status + progress logic
- Reduced UI side effects (no tip system)
- Stable NUI event handling
- Improved scalability for server-side customization

## ⚡ Performance

- No external dependencies
- Lightweight rendering pipeline
- Optimized for FiveM NUI environments
- Low CPU/GPU usage even under continuous loading updates

## 📌 Author & Credits

Developed by **power0matin**
Part of **HyperSentry Labs**

🔗 GitHub Profiles:

- [https://github.com/power0matin](https://github.com/power0matin)
- [https://github.com/HyperSentry-Labs](https://github.com/HyperSentry-Labs)

## 💙 License

MIT License — Free to use, modify, and expand.
