# NOX RolePlay Loading Screen 🎮

Premium cinematic FiveM loading screen by **power0matin**  
Part of the **HyperSentry Labs** ecosystem.

**NOX RolePlay Loading Screen** is a modern, immersive, and performance-focused FiveM loading UI built for roleplay servers that need a polished first impression. It includes a cinematic video background, real FiveM loading progress sync, smooth stage-based UI feedback, custom cursor, glassmorphism panels, keyboard audio shortcuts, and a clean local-asset architecture.

![Preview](assets/preview.png)

## ✨ Features

### 🎬 Cinematic Visual System

- Fullscreen video-based loading background
- Layered background depth system
- Cinematic glow, particles, grading, noise, and vignette effects
- Glassmorphism cards and HUD components
- Animated logo/title presentation
- GPU-friendly CSS animations
- Fully local assets with no CDN dependency

### 📊 FiveM Loading Progress Sync

- Supports native FiveM `loadProgress` messages
- Smooth interpolated progress animation
- Prevents visual progress rollback from noisy loading events
- Stage-based progress behavior:
  - `CONNECTING`
  - `DOWNLOADING`
  - `STREAMING`
  - `FINALIZING`
  - `READY`
- Stable 100% completion snap logic
- Status text updates with fade transitions
- Loading hints synchronized with current loading stage

### 🎵 Audio System

- Uses the background video audio directly
- No required MP3 dependency
- Play/Pause button intentionally removed
- Background video remains active as a cinematic layer
- Mute / unmute support
- Volume slider support
- Smooth audio fade-in when unmuting
- Smooth audio fade-out when muting
- Keyboard shortcuts:
  - `M` = mute / unmute
  - `Space` = mute / unmute
  - `ArrowUp` = increase volume
  - `ArrowDown` = decrease volume
- Browser audio unlock handling for modern autoplay policies

### 🖱️ Custom Cursor

- Custom cinematic cursor system
- Smooth dot + ring cursor movement
- Hover expansion on interactive UI elements
- Click pulse effect
- Native cursor hidden globally on desktop
- Automatically disabled on touch devices
- Prevents default Windows cursor from appearing over UI layers

### 🔒 Interaction Locking

- Text selection disabled across the page
- Dragging disabled for images, videos, and UI elements
- Context menu disabled
- Helps keep the loading screen clean and game-like

### 🌐 Social Links

- TeamSpeak link support
- Website link support
- Styled social buttons with hover effects

## 📁 Project Structure

```txt
hs-loadingscreen/
├── fxmanifest.lua
├── index.html
├── favicon.ico
├── assets/
│   ├── background.mp4
│   ├── poster.jpg
│   ├── preview.png
│   ├── logo.png
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── svg/
│   │   └── *.svg
│   └── fonts/
│       └── Inter/
│           ├── inter.css
│           └── *.woff2
└── README.md
```

## 🚀 Installation

Place the resource inside your FiveM server resources directory:

```txt
resources/[ui]/hs-loadingscreen
```

Add this to your `server.cfg`:

```cfg
ensure hs-loadingscreen
```

Restart your server or run:

```cfg
refresh
ensure hs-loadingscreen
```

## ⚙️ FiveM Manifest

Recommended `fxmanifest.lua` for the current release:

```lua
fx_version 'cerulean'
game 'gta5'

author 'power0matin / HyperSentry Labs'
description 'NOX RolePlay Loading Screen - Premium FiveM Loading UI'
version '1.1.0'

ui_page 'index.html'

files {
    -- Entry
    'index.html',

    -- Core
    'assets/css/style.css',
    'assets/js/script.js',

    -- Media
    'assets/background.mp4',
    'assets/poster.jpg',
    'assets/logo.png',
    'favicon.ico',

    -- SVG icons
    'assets/svg/*.svg',

    -- Fonts
    'assets/fonts/Inter/inter.css',
    'assets/fonts/Inter/*.woff2'
}

loadscreen 'index.html'
loadscreen_cursor 'yes'
loadscreen_manual_shutdown 'yes'
```

> This release does **not** require `assets/audio/bg-music.mp3`.
> Audio is controlled directly from the background video.

## 🎵 Audio Setup

The current version does not require an MP3 file.

Audio is handled through:

```txt
assets/background.mp4
```

To change the background music, replace the audio track inside `background.mp4`.

Recommended export settings:

```txt
Format: MP4
Video codec: H.264
Audio codec: AAC
Resolution: 1920x1080
FPS: 30 or 60
Audio loudness: keep moderate, because JS applies output reduction
```

The script applies an output multiplier to keep the loading screen audio controlled and non-aggressive:

```js
outputMultiplier: 0.1;
```

## ⌨️ Controls

| Key         | Action              |
| ----------- | ------------------- |
| `M`         | Mute / Unmute audio |
| `Space`     | Mute / Unmute audio |
| `ArrowUp`   | Increase volume     |
| `ArrowDown` | Decrease volume     |

There is intentionally **no Play/Pause button**.
The loading screen is designed to keep the cinematic video running continuously as a background layer.

## 🧠 NUI Events Supported

The loading screen listens to FiveM loading messages:

### `loadProgress`

Used to update the loading percentage.

```js
{
  eventName: "loadProgress",
  loadFraction: 0.5
}
```

### `status`

Used to update the current loading status text.

```js
{
  eventName: "status",
  message: "Loading resources..."
}
```

## 📤 Example Usage

### Lua Example

```lua
SendNUIMessage({
    eventName = "loadProgress",
    loadFraction = 0.5
})

SendNUIMessage({
    eventName = "status",
    message = "Streaming world data..."
})
```

### JavaScript Message Handler

The UI already listens for these messages:

```js
window.addEventListener("message", handleFiveMMessage);
```

## 📊 Loading Stage System

The internal stage system is based on progress thresholds.

| Stage         |       Range | Description                         |
| ------------- | ----------: | ----------------------------------- |
| `CONNECTING`  |  `0% - 14%` | Establishing connection and session |
| `DOWNLOADING` | `15% - 49%` | Downloading server assets           |
| `STREAMING`   | `50% - 84%` | Streaming world and entities        |
| `FINALIZING`  | `85% - 99%` | Preparing final environment         |
| `READY`       |      `100%` | Loading complete                    |

Each stage has its own:

- Display label
- Smooth progress speed
- Rotating contextual hints

## 🖱️ Custom Cursor System

The loading screen includes a custom cursor with:

- Dot cursor
- Smooth trailing ring
- Hover scaling
- Click pulse
- Full desktop cursor override
- Touch-device fallback

Required HTML elements:

```html
<div class="cursor-dot" aria-hidden="true"></div>
<div class="cursor-ring" aria-hidden="true"></div>
```

Recommended placement: before the script tag at the end of `body`.

```html
<div class="cursor-dot" aria-hidden="true"></div>
<div class="cursor-ring" aria-hidden="true"></div>

<script src="assets/js/script.js"></script>
```

## 🔒 Selection & Drag Protection

The UI prevents common unwanted browser interactions:

- Text selection
- Image dragging
- Video dragging
- Context menu

This keeps the loading screen feeling like part of the game instead of a normal webpage.

## 🧩 Configuration

Most behavior can be adjusted inside `assets/js/script.js`.

```js
const CONFIG = {
  audio: {
    defaultVolume: 0.5,
    outputMultiplier: 0.1,
    fadeDuration: 3000,
    fadeOutDuration: 900,
  },

  progress: {
    snapThreshold: 0.015,
    eventThreshold: 0.25,
    readySnap: 99.9,
  },

  cursor: {
    dotLerp: 0.72,
    ringLerp: 0.18,
    pulseDuration: 560,
  },
};
```

### Audio Config

| Option             | Description                       |
| ------------------ | --------------------------------- |
| `defaultVolume`    | Default slider volume             |
| `outputMultiplier` | Final audio output reduction      |
| `fadeDuration`     | Fade-in duration in milliseconds  |
| `fadeOutDuration`  | Fade-out duration in milliseconds |

### Progress Config

| Option           | Description                           |
| ---------------- | ------------------------------------- |
| `snapThreshold`  | Prevents tiny endless interpolation   |
| `eventThreshold` | Ignores tiny noisy progress updates   |
| `readySnap`      | Snaps progress to 100 near completion |

### Cursor Config

| Option          | Description              |
| --------------- | ------------------------ |
| `dotLerp`       | Cursor dot follow speed  |
| `ringLerp`      | Cursor ring follow speed |
| `pulseDuration` | Click pulse lifetime     |

## 🎨 Customization

### Change Logo

Replace:

```txt
assets/logo.png
```

### Change Background Video

Replace:

```txt
assets/background.mp4
```

### Change Poster Image

Replace:

```txt
assets/poster.jpg
```

### Change Preview Image

Replace:

```txt
assets/preview.png
```

### Change Main Color

Edit `assets/css/style.css`:

```css
:root {
  --primary: #ff7878;
  --primary-hover: #ff5c5c;
}
```

### Change Social Links

Edit `index.html`:

```html
<a href="ts3server://sv.nox-rp.ir" class="social-item">TeamSpeak</a>
<a
  href="https://nox-rp.ir"
  class="social-item"
  target="_blank"
  rel="noopener noreferrer"
  >Website</a
>
```

## 🧹 Recommended `.gitignore`

This project should not push MP3 files by default.

```gitignore
# =========================
# AUDIO FILES
# =========================

*.mp3


# =========================
# SYSTEM FILES
# =========================

.DS_Store
Thumbs.db
Desktop.ini


# =========================
# EDITOR / IDE
# =========================

.vscode/
.idea/


# =========================
# LOGS / TEMP
# =========================

*.log
tmp/
temp/


# =========================
# ENV
# =========================

.env
.env.*
!.env.example
```

If you use large local raw files, you can also ignore:

```gitignore
assets/raw/
assets/audio/
assets/music/
```

## ⚡ Performance Notes

This loading screen is designed for FiveM NUI environments.

Performance-focused choices:

- No external JavaScript framework
- No external CDN dependency
- `requestAnimationFrame` progress rendering
- Minimal DOM updates
- CSS transform-based animations
- GPU-friendly visual effects
- Local font loading
- Stable event handling for frequent FiveM progress updates

## 🛠️ Troubleshooting

### Audio does not start immediately

Modern browsers and FiveM NUI can block audio until user interaction.
The script unlocks audio after the first pointer or keyboard interaction.

Supported unlock actions:

- Mouse click
- `M`
- `Space`
- Any first keydown except protected toggle conflicts

### MP3 is not playing

This release does not use MP3 by default.
Audio should be embedded in:

```txt
assets/background.mp4
```

### Custom cursor does not appear

Make sure these elements exist in `index.html`:

```html
<div class="cursor-dot" aria-hidden="true"></div>
<div class="cursor-ring" aria-hidden="true"></div>
```

Also confirm cursor CSS exists in `style.css`.

### Native Windows cursor appears sometimes

Make sure your CSS includes global cursor lock:

```css
html,
body,
body *,
body *::before,
body *::after {
  cursor: none !important;
}
```

### Progress is stuck at 0%

FiveM must send `loadProgress` events.
The UI expects:

```js
{
  eventName: "loadProgress",
  loadFraction: 0.5
}
```

### Status text is not changing

The UI expects:

```js
{
  eventName: "status",
  message: "Your status message"
}
```

## ✅ Release Checklist

Before publishing a new release:

- [ ] `fxmanifest.lua` version updated
- [ ] `README.md` version details updated
- [ ] `assets/background.mp4` exists
- [ ] `assets/poster.jpg` exists if referenced
- [ ] `assets/logo.png` exists
- [ ] `assets/preview.png` exists
- [ ] `assets/css/style.css` exists
- [ ] `assets/js/script.js` exists
- [ ] Inter font files exist
- [ ] MP3 files are not committed unless intentionally needed
- [ ] `.gitignore` includes `*.mp3`
- [ ] Resource starts correctly with `ensure hs-loadingscreen`
- [ ] `M` toggles mute/unmute
- [ ] `Space` toggles mute/unmute
- [ ] Volume slider works
- [ ] Fade-in works
- [ ] Fade-out works
- [ ] Custom cursor appears on desktop
- [ ] Text selection is disabled
- [ ] Progress reaches 100%

## 📌 Version

Current release:

```txt
v1.1.0
```

### v1.1.0 Highlights

- Removed MP3 dependency from release manifest
- Removed Play/Pause behavior
- Added mute/unmute via `M` and `Space`
- Added smooth audio fade-out
- Improved audio fade-in handling
- Added custom cursor system
- Added click pulse cursor effect
- Added text selection and drag prevention
- Improved progress stability
- Improved FiveM event handling
- Updated release-ready `fxmanifest.lua`

## 👤 Author & Credits

Developed by **power0matin**
Part of **HyperSentry Labs**

GitHub:

- [https://github.com/power0matin](https://github.com/power0matin)
- [https://github.com/HyperSentry-Labs](https://github.com/HyperSentry-Labs)

## 💙 License

MIT License — free to use, modify, and expand.

Credit is appreciated when used in public projects.
