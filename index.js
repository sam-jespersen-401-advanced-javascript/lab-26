const fs = require('fs');
const path = require('path');
const writePackage = require('./package-json-writer');
const eslintWriter = require('./eslint-writer');
const babelWriter = require('./babel-writer');
const webpackWriter = require('./webpack-writer');
const travisWriter = require('./travis-writer');
const gitignoreWriter = require('./gitignore-writer');
const srcIndexWriter = require('./src-index-writer');
const dependenciesInstaller = require('./dependencies-installer');
const devDependenciesInstaller = require('./dev-dependencies-installer');

const userPath = process.argv[2];

if(userPath !== '.' && !fs.existsSync(userPath)) {
  fs.mkdirSync(userPath);
}
Promise.all([
  writePackage(path.join(userPath, 'package.json')),
  eslintWriter(path.join(userPath, '.eslintrc')),
  babelWriter(path.join(userPath, '.babelrc')),
  webpackWriter(path.join(userPath, 'webpack.config.js')),
  travisWriter(path.join(userPath, '.travis.yml')),
  gitignoreWriter(path.join(userPath, '.gitignore')),
  srcIndexWriter(path.join(userPath, 'src/'))
])
  .then(() => {
    dependenciesInstaller(userPath);
    devDependenciesInstaller(userPath);
  });


