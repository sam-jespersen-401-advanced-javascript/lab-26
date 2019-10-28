const fs = require('fs');

function write(str, path) {
  console.log('Writing', path);

  return fs.writeFileSync(path, str);
}

function writeJson(obj, path) {

  return write(JSON.stringify(obj), path);
}

module.exports = {
  write,
  writeJson
};