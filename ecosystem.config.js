module.exports = {
  apps: [
    {
      name: 'prod-client',
      script: 'npm',
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