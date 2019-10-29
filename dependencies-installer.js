const installer = require('./installer');

const deps = ['react', 'react-dom'];

module.exports = path => {

  installer(path, deps, false);

};
