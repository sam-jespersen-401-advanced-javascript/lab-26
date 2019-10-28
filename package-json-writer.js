const { writeJson } = require('./writer');
const packageJson = require('./starter-code/package.json');

module.exports = path => {
  writeJson(packageJson, path);
};