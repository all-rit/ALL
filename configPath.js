const path = require('path');
const os = require('os');

const NODE_MODULES = 'node_modules';
const NPM = 'npm';
const BIN = 'bin';
const NPM_CLI = 'npm-cli.js'

const platform = os.platform();
const isWindows = platform === 'win32';

const NODE_PATH = isWindows && process.env.Path.split(';').filter( f => f.includes('nodejs') )[0];
const NPM_PATH = isWindows && path.join(NODE_PATH, NODE_MODULES, NPM, BIN, NPM_CLI);

module.exports = {
   isWindows,
   NPM_PATH
};