const pug = require('pug');
const fs = require('fs');

fs.writeFile('index.html', pug.renderFile('index.pug'));
