# Precommit Setup instructions

These are the instructions on how to install and properlly setup the new precommit tools that are used within the project.

First you need to cd into the ALL directory and run npm install. This will setup the infrastructure needed to run the pre-commit runner and install eslint.

        npm install

to test that this worked try making a commit. This will fail but intentionally

## Client Configuration

1.  First you are gonna have to run a clean install of node modules with the `--legacy-peer-deps`

        npm ci --legacy-peer-deps

2.  we are going to need you to follow the setup for adding in eslint to the project also

        npm init @eslint/config

- After entering the setup we need to select the last option in
- Second you should select the first
- third you should select React
- No
- This should run in the browser
- Use a popular style and select google
- Config file should be selected in JSON
- for the last menu hit no and run this command after to install the correct dependencies
