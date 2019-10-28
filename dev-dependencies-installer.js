const installer = require('./installer');
const dependencies = require('./starter-code/package.json').devDependencies;

const packages = Object.keys(dependencies);

module.exports = path => {

  installer(path, packages, true);

};
