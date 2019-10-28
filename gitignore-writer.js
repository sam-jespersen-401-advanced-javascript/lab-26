const { write } = require('./writer');
const fs = require('fs').promises;

module.exports = path => {
  fs.readFile('./starter-code/.gitignore', 'utf8')
    .then(data => {
      write(data, path);
    });
};