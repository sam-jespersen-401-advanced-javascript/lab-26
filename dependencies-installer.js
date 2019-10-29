const installer = require('./installer');

const deps = ['react', 'react-dom'];

module.exports = path => {

  return installer(path, deps, false);

};
