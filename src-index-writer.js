const { write } = require('./writer');
const fsPromise = require('fs').promises;
const fs = require('fs');

module.exports = path => {

  if(!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }

  Promise.all([
    fsPromise.readFile('./starter-code/src/index.html', 'utf8'),
    fsPromise.readFile('./starter-code/src/index.js', 'utf8'),
  ])
    .then(data => {
      write(data[0], path + 'index.html');
      write(data[1], path + 'index.js');
    });
};