const fs = require('fs');

fs.rmSync('dist', { recursive: true, force: true })
fs.mkdirSync('dist')
fs.cpSync('src', 'dist', {recursive: true});