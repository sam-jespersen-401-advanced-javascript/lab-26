const { writeJson } = require('./writer');
const fs = require('fs').promises;

module.exports = path => {
  return fs.readFile(__dirname + '/starter-code/.eslintrc', 'utf8')
    .then(data => {
      writeJson(JSON.parse(data), path);
    });
};