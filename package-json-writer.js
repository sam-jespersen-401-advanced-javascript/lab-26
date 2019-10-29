const { writeJson } = require('./writer');
const packageJson = require('./starter-code/package.json');

module.exports = path => {
  return writeJson(packageJson, path);
};