const { writeJson } = require('./writer');
const fs = require('fs').promises;

module.exports = path => {
  fs.readFile('./starter-code/.babelrc', 'utf8')
    .then(data => {
      writeJson(JSON.parse(data), path);
    });
};