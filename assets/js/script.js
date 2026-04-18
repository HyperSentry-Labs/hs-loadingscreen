const state = {
  progress: 0,
  status: "CONNECTING",
  muted: false,
  volume: 0.5,
};

// Elements
const el = {
  progressFill: document.getElementById("progressFill"),
  progressText: document.getElementById("progressPercent"),
  statusText: document.getElementById("statusText"),
  tipText: document.getElementById("tipText"),
  music: document.getElementById("bgMusic"),
  playBtn: document.getElementById("playBtn"),
  muteBtn: document.getElementById("muteBtn"),
  volume: document.getElementById("volumeSlider"),
};

// ----------------------
// 🎬 STATUS SYSTEM
// ----------------------
const statusMap = {
  CONNECTING: "Connecting to server...",
  DOWNLOADING: "Downloading assets...",
  STREAMING: "Streaming world data...",
  FINALIZING: "Finalizing environment...",
};

function setStatus(status) {
  state.status = status;

  el.statusText.style.opacity = 0;

  setTimeout(() => {
    el.statusText.textContent = statusMap[status] || status;
    el.statusText.style.opacity = 1;

    updateRealHint();
  }, 120);
}

// ======================
// 📊 SMOOTH PROGRESS FIXED
// ======================
let targetProgress = 0;
let currentProgress = 0;

function animateProgress() {
  const diff = targetProgress - currentProgress;

  currentProgress += diff * 0.08;

  // clamp
  if (Math.abs(diff) < 0.01) currentProgress = targetProgress;

  el.progressFill.style.width = currentProgress.toFixed(2) + "%";
  el.progressText.textContent = Math.floor(currentProgress) + "%";

  requestAnimationFrame(animateProgress);
}

animateProgress();

function setProgress(value) {
  targetProgress = value;

  if (value < 25) setStatus("CONNECTING");
  else if (value < 60) setStatus("DOWNLOADING");
  else if (value < 90) setStatus("STREAMING");
  else setStatus("FINALIZING");
}

// ======================
// 🎵 MUSIC SYSTEM FIXED
// ======================
let isPlaying = false;

el.volume.value = state.volume;
el.music.volume = state.volume;
el.music.loop = true;

// helper: update play icon
function setPlayIcon(playing) {
  el.playBtn.innerHTML = playing
    ? `
    <svg viewBox="0 0 24 24">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
    </svg>
  `
    : `
    <svg viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z"/>
    </svg>
  `;
}

// PLAY / PAUSE
el.playBtn.onclick = async () => {
  try {
    if (!isPlaying) {
      await el.music.play();
      isPlaying = true;
    } else {
      el.music.pause();
      isPlaying = false;
    }

    setPlayIcon(isPlaying);
  } catch (err) {
    console.log("Audio blocked until user interaction");
  }
};

// MUTE
el.muteBtn.onclick = () => {
  state.muted = !state.muted;
  el.music.muted = state.muted;

  el.muteBtn.innerHTML = state.muted
    ? `<svg viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1-3.29-2.5-4.03v8.05c1.5-.73 2.5-2.25 2.5-4.02zM3 9v6h4l5 5V4L7 9H3z"/></svg>`
    : `<svg viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1-3.29-2.5-4.03v8.05c1.5-.73 2.5-2.25 2.5-4.02zM3 9v6h4l5 5V4L7 9H3z"/></svg>`;
};

// VOLUME
el.volume.oninput = (e) => {
  state.volume = parseFloat(e.target.value);
  el.music.volume = state.volume;
};

// FADE IN (FIXED - prevents stacking intervals)
let fadeInterval = null;

el.music.addEventListener("play", () => {
  if (fadeInterval) clearInterval(fadeInterval);

  let v = 0;
  el.music.volume = 0;

  fadeInterval = setInterval(() => {
    if (v < state.volume) {
      v += 0.02;
      el.music.volume = Math.min(v, state.volume);
    } else {
      clearInterval(fadeInterval);
    }
  }, 30);
});

// ======================
// 🌐 FIVEM HOOKS FIXED
// ======================
let lastStatus = null;

window.addEventListener("message", (e) => {
  const d = e.data;

  // progress
  if (d.eventName === "loadProgress") {
    const value = Math.min(Math.max(d.loadFraction * 100, 0), 100);
    setProgress(value);
  }

  // status (anti-spam)
  if (d.eventName === "status") {
    if (d.message && d.message !== lastStatus) {
      lastStatus = d.message;
      setStatus(d.message);
    }
  }
});

// ======================
// 🌐 PROGRESS BAR HINTS
// ======================
const hints = [
  "Initializing rendering pipeline...",
  "Syncing player data...",
  "Loading world assets...",
  "Preparing RP environment...",
];

const realHints = {
  CONNECTING: [
    "Establishing secure session...",
    "Requesting server token...",
    "Syncing handshake packets...",
  ],
  DOWNLOADING: [
    "Fetching textures...",
    "Loading models...",
    "Receiving map data...",
    "Caching audio streams...",
  ],
  STREAMING: [
    "Applying world metadata...",
    "Processing dynamic entities...",
    "Streaming online resources...",
  ],
  FINALIZING: [
    "Optimizing environment variables...",
    "Preparing spawn location...",
    "Finalizing UI layers...",
  ],
};

function updateRealHint() {
  const group = realHints[state.status];
  if (!group) return;

  const text = group[Math.floor(Math.random() * group.length)];

  el.tipText.style.opacity = 0;

  setTimeout(() => {
    el.tipText.textContent = text;
    el.tipText.style.opacity = 1;
  }, 150);
}

// unlock audio on first interaction (FiveM fix)
document.addEventListener(
  "click",
  () => {
    if (el.music.paused) {
      el.music.play().then(() => {
        isPlaying = true;
        setPlayIcon(true);
      });
    }
  },
  { once: true },
);
