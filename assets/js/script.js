document.addEventListener("DOMContentLoaded", () => {
  // ----------------------
  // STATE
  // ----------------------
  const state = {
    progress: 0,
    status: "CONNECTING",
    muted: false,
    volume: 0.5,
  };

  // ----------------------
  // ELEMENTS
  // ----------------------
  const el = {
    progressFill: document.getElementById("progressFill"),
    progressText: document.getElementById("progressPercent"),
    statusText: document.getElementById("statusText"),
    tipText: document.getElementById("tipText"),

    video: document.querySelector(".bg-video"),

    playBtn: document.getElementById("playBtn"),
    muteBtn: document.getElementById("muteBtn"),
    volume: document.getElementById("volumeSlider"),
  };

  if (!el.video) {
    console.error("Background video not found");
    return;
  }

  // ----------------------
  // VIDEO INIT
  // ----------------------
  el.video.loop = true;

  const VOLUME_REDUCTION = 0.9;
  const BASE_VOLUME_MULTIPLIER = 1 - VOLUME_REDUCTION;

  el.video.volume = 0;

  el.volume.value = state.volume;

  document.addEventListener(
    "click",
    () => {
      el.video.muted = false;
    },
    { once: true },
  );
  el.video.addEventListener("play", () => {
    fadeInAudio();
  });
  // ----------------------
  // 🎬 AAA AUDIO FADE-IN
  // ----------------------
  const FADE_DURATION = 3000; // 3 seconds

  function fadeInAudio() {
    const targetVolume = state.volume * BASE_VOLUME_MULTIPLIER;

    let current = 0;
    const step = 16 / FADE_DURATION;

    const fade = setInterval(() => {
      current += step;

      const eased = current * current;

      const volume = Math.min(targetVolume, eased * targetVolume);

      el.video.volume = volume;

      if (volume >= targetVolume) {
        el.video.volume = targetVolume;
        clearInterval(fade);
      }
    }, 16);
  }

  // ----------------------
  // MUTE / VOLUME CONTROL
  // ----------------------
  function toggleMute() {
    state.muted = !state.muted;
    el.video.muted = state.muted;

    el.muteBtn.innerHTML = state.muted
      ? `<svg viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1-3.29-2.5-4.03v8.05c1.5-.73 2.5-2.25 2.5-4.02zM3 9v6h4l5 5V4L7 9H3z"/></svg>`
      : `<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg>`;
  }

  el.muteBtn.onclick = toggleMute;

  el.volume.oninput = (e) => {
    state.volume = parseFloat(e.target.value);

    const VOLUME_REDUCTION = 0.9;
    const BASE_VOLUME_MULTIPLIER = 1 - VOLUME_REDUCTION;

    el.video.volume = Math.max(0, state.volume * BASE_VOLUME_MULTIPLIER);
  };

  // keyboard mute
  document.addEventListener("keydown", (e) => {
    const tag = document.activeElement.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;

    if (e.code === "KeyM" || e.code === "Space") {
      e.preventDefault();
      toggleMute();
    }
  });

  // ----------------------
  // PLAY BUTTON (disabled)
  // ----------------------
  el.playBtn.style.display = "none";

  // ----------------------
  // STATUS SYSTEM
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

  // ----------------------
  // PROGRESS SYSTEM
  // ----------------------
  let targetProgress = 0;
  let currentProgress = 0;
  let displayProgress = 0;
  let lastServerProgress = 0;

  function animateProgress() {
    const lerpSpeed = 0.06;

    displayProgress += (targetProgress - displayProgress) * lerpSpeed;

    if (Math.abs(targetProgress - displayProgress) < 0.01) {
      displayProgress = targetProgress;
    }

    el.progressFill.style.width = displayProgress.toFixed(2) + "%";
    el.progressText.textContent = Math.floor(displayProgress) + "%";

    requestAnimationFrame(animateProgress);
  }

  animateProgress();

  function setProgress(value) {
    const safeValue = Math.min(Math.max(Number(value) || 0, 0), 100);

    if (safeValue < lastServerProgress) {
      return;
    }

    lastServerProgress = safeValue;
    targetProgress = safeValue;

    if (safeValue < 25) setStatus("CONNECTING");
    else if (safeValue < 60) setStatus("DOWNLOADING");
    else if (safeValue < 90) setStatus("STREAMING");
    else setStatus("FINALIZING");
  }

  // ----------------------
  // HINT SYSTEM
  // ----------------------
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
    ],
    STREAMING: ["Processing dynamic entities...", "Streaming world data..."],
    FINALIZING: ["Optimizing environment...", "Preparing spawn location..."],
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

  // ----------------------
  // FIVEM HOOKS
  // ----------------------
  let lastStatus = null;

  let lastProgressEvent = 0;

  window.addEventListener("message", (e) => {
    const d = e.data;

    if (d.eventName === "loadProgress") {
      const value = d.loadFraction * 100;

      if (Math.abs(value - lastProgressEvent) > 0.3) {
        lastProgressEvent = value;
        setProgress(value);
      }
    }

    if (d.eventName === "status") {
      if (d.message && d.message !== lastStatus) {
        lastStatus = d.message;
        queueMicrotask(() => setStatus(d.message));
      }
    }
  });
});
