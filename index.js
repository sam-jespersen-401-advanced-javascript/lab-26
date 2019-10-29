#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const writePackage = require(__dirname + '/package-json-writer');
const eslintWriter = require(__dirname + '/eslint-writer');
const babelWriter = require(__dirname + '/babel-writer');
const webpackWriter = require(__dirname + '/webpack-writer');
const travisWriter = require(__dirname + '/travis-writer');
const gitignoreWriter = require(__dirname + '/gitignore-writer');
const srcIndexWriter = require(__dirname + '/src-index-writer');
const dependenciesInstaller = require(__dirname + '/dependencies-installer');
const devDependenciesInstaller = require(__dirname + '/dev-dependencies-installer');

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


