fx_version 'cerulean'
game 'gta5'

author 'power0matin / HyperSentry Labs'
description 'NOX RolePlay Loading Screen – Premium FiveM Loading UI'
version '1.0.0'

files {
    'index.html',

    -- Core assets
    'assets/css/style.css',
    'assets/js/script.js',

    -- Media
    'assets/background.mp4',
    'assets/audio/bg-music.mp3',
    'assets/logo.png',

    -- SVG icons
    'assets/svg/*.svg',

    -- Fonts
    'assets/fonts/Inter/inter.css',
    'assets/fonts/Inter/*.woff2'
}

loadscreen 'index.html'
loadscreen_cursor 'yes'
loadscreen_manual_shutdown 'yes'
