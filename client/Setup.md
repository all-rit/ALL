# Precommit Setup instructions

These are the instructions on how to install and properlly setup the new precommit tools that are used within the project.

1.  First you are gonna have to run a clean install of node modules with the `--legacy-peer-deps`

        npm ci --legacy-peer-deps

2.  we are going to need you to follow the setup for adding in eslint to the project also

        npm init @eslint/config

- for the first menu hit the last option
- Second you should select the first
- third you should select React
- No
- This should run in the browser
- Use a popular style and select google
- Config file should be selected in JSON
- for the last menu hit no and run this command after to install the correct dependencies

  npm install eslint-config-google@latest --legacy-peer-deps --save

  npm install eslint eslint-plugin-react --legacy-peer-deps --save-dev
