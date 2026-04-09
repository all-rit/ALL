const { isWindows, WINDOWS_PATH, UNIX_PATH } = require('./configPath');

module.exports = {
  apps: [
    {
      name: 'prod-client',
      script: isWindows ? WINDOWS_PATH : UNIX_PATH, // If Windows, use correct NPM path.
      cwd: './client',
      args: 'start',
    },
    {
      name: 'prod-backend',
      script: 'node',
      cwd: './server',
      args: 'app.js',
    },
  ],
};