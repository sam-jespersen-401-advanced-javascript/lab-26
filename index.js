const writePackage = require('./package-json-writer');
const eslintWriter = require('./eslint-writer');
const babelWriter = require('./babel-writer');
const webpackWriter = require('./webpack-writer');
const travisWriter = require('./travis-writer');
const gitignoreWriter = require('./gitignore-writer');
const srcIndexWriter = require('./src-index-writer');

writePackage('./test/package.json');
eslintWriter('./test/.eslintrc');
babelWriter('./test/.babelrc');
webpackWriter('./test/webpack.config.js');
travisWriter('./test/.travis.yml');
gitignoreWriter('./test/.gitignore');
srcIndexWriter('./test/src/');