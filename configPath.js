const path = require('path');
const os = require('os');

const platform = os.platform();
const isWindows = platform === 'win32'; // 'win32' is returned for all windows versions, including 64-bit systems

/*
  There is an open (Windows only) bug in PM2 that makes it find the wrong npm path when running.
  This fix finds a dev's OS, and get's their path to the npm executable if necessary.
*/
const NODE_PATH = isWindows && process.env.Path.split(';').filter(f => f.includes('node'))[0];
const WINDOWS_PATH = isWindows && path.join(NODE_PATH, 'node_modules', 'npm', 'bin', 'npm-cli.js');
const UNIX_PATH = 'npm';

module.exports = {
   isWindows,
   WINDOWS_PATH,
   UNIX_PATH
};