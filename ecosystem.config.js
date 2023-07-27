



module.exports = {
    apps : [{
      name   : "prod-client",
      script: "npm",
        cwd: "./client",
        env: { "REACT_APP_SERVER_URL": "http://localhost:5005" },
      args : "start"
    },
    {
      name : "prod-backend",
        script: "node",
        cwd:"./server",
        args: "app.js",
        env: {
            "DB_HOST":"localhost",
            "DB_USER":"all_user",
            "DB_PASS":"all_password@2018",
            "DB_SCHEMA":"testing",
            "ENVIRONMENT":"dev",
            "GOOGLE_CLIENT_ID": "72098413641-et9mgdob2qbhng5uu4cqvkng4mukf4ra.apps.googleusercontent.com",
            "GOOGLE_SECRET": "zKwVzqRG3fCXbNkguQEyVcxm",
            "GOOGLE_CALLBACK_URL": "http://localhost:5005/auth/google/callback",
            "KEY": "ACCESSIBILITY_LAB_1_ROCKS",
            "CLIENT_URL": "http://localhost:3000",
        }
    }
    ]
  }
  