module.exports = {
  apps: [
    {
      name: 'prod-backend',
      script: 'node',
      cwd: './server',
      args: 'app.js',
    },
  ],
};