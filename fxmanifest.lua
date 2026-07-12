fx_version 'cerulean'
game 'gta5'

author 'power0matin / HyperSentry Labs'
description 'NOX RolePlay Loading Screen - Premium FiveM Loading Screen Script | Cinematic UI, 60fps, No CDN'
version '1.2.0'

-- ============================================================================
-- NOX ROLEPLAY LOADING SCREEN
-- ============================================================================
-- Premium cinematic loading screen for FiveM roleplay servers
-- https://github.com/HyperSentry-Labs/hs-loadingscreen
-- ============================================================================

-- Features:
-- ✅ Cinematic video background with 7-layer effects
-- ✅ Real-time FiveM loading progress sync
-- ✅ Custom cursor system with hover effects
-- ✅ Keyboard shortcuts (M, Space, Arrow keys)
-- ✅ Smooth audio fade transitions
-- ✅ Glassmorphism UI design
-- ✅ 60fps GPU-optimized animations
-- ✅ No CDN dependency — 100% local assets
-- ✅ Mobile responsive design
-- ✅ Free & open source (MIT License)

ui_page 'index.html'

files {
    -- Entry point
    'index.html',

    -- Core styling & logic
    'assets/css/style.css',
    'assets/js/script.js',

    -- Media assets
    'assets/background.mp4',
    'assets/preview.png',
    'assets/logo.png',
    'favicon.ico',

    -- SVG icons
    'assets/svg/*.svg',

    -- Fonts (local, no CDN)
    'assets/fonts/Inter/inter.css',
    'assets/fonts/Inter/*.woff2'
}

-- Loading screen configuration
loadscreen 'index.html'
loadscreen_cursor 'yes'
loadscreen_manual_shutdown 'yes'

-- ============================================================================
-- INSTALLATION
-- ============================================================================
-- 1. Copy this folder to: resources/[ui]/hs-loadingscreen
-- 2. Add to server.cfg: ensure hs-loadingscreen
-- 3. Restart server or run: refresh; ensure hs-loadingscreen
-- ============================================================================