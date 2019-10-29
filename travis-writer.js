const { write } = require('./writer');
const fs = require('fs').promises;

module.exports = path => {
  return fs.readFile(__dirname + '/starter-code/.travis.yml', 'utf8')
    .then(data => {
      write(data, path);
    });
};