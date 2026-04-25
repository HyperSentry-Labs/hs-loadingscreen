fx_version 'cerulean'
game 'gta5'

author 'power0matin / HyperSentry Labs'
description 'NOX RolePlay Loading Screen - Premium FiveM Loading UI'
version '1.1.0'

-- NOX RolePlay Loading Screen
-- Release: 1.1.0
-- Notes:
-- - Premium cinematic loading UI
-- - Custom cursor support
-- - FiveM load progress sync
-- - Smooth audio fade in / fade out
-- - Mute / unmute with M and Space
-- - No MP3 dependency in release manifest

ui_page 'index.html'

files {
    -- Entry
    'index.html',

    -- Core
    'assets/css/style.css',
    'assets/js/script.js',

    -- Media
    'assets/background.mp4',
    'assets/preview.png',
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

-- Keep this resource client-safe.
-- Add only files that must be available to the loading screen.