# Accessible Learning Labs

[![Production CI](https://github.com/all-rit/ALL/actions/workflows/node.js.yml/badge.svg)](https://github.com/all-rit/ALL/actions/workflows/node.js.yml)

## Requirements

- NodeJS ~= v20.11.0
- NPM ~= 10.2.4
  May work for other versions but not guaranteed

## Setup

Clone the repository and open the command line for the upcoming instructions.

### ESlint and Pre-commit setup

After cloning the repository in the top level directory, run `npm install` this will install all of the tools needed to
commit and correctly format all code within the project.

### PM2 Instructions

After installing the dependencies for the super directory, first run `pm2 -v` to ensure that pm2 is installed correctly
if it gives you any issues install it to your global npm registry with this command: `npm i -g pm2`.

Next add the ecosystem.config.js file to your top level directory and this will allow you to have
the correct env for client and server. after thats complete then you can follow the install st`eps below.

### Developing Locally

To develop on the full architecture developers can now utilize the ability to run the full system without
needing to ssh into another server. To do this users are required to install the **latest version** of [Docker](https://www.docker.com/) to perform this task.
in doing so they are able to run.

To start the database container

```bash
docker compose up
```

To run in detached mode

```bash
docker compose up -d
```

To shut down database container

```bash
docker compose down
```

#### Full start up

1. Navigate to top level folder.
2. Run `npm install --legacy-peer-deps`.
3. Connect to the port of your local db or production.
   1. For local dev
      1. `cd server/database`
      2. `docker compose up -d`
         1. if you want reuse this volume to **keep your changes use** `docker compose start`
         2. in the event you want to stop it **without losing the volume** `docker compose stop`
   2. For dev connecting to staging or production
      1. run the documented developer instructions to connect.
4. `pm2 start`
5. to check the logs and see if things built correctly use `pm2 log`
   1. if there are any errors run:
   2. `pm2 delete all`
   3. `pm2 start`
6. to stop the application run `pm2 stop all` and also run if run local dev configuration `docker compose down`

### Server

1. Navigate to the server folder.
2. `npm install`
3. `node app.js`
4. The server should be accessible via `http://localhost:5000`

### Client

#### Development

1. Navigate to the client folder.
2. `npm install`
3. `npm start`
4. The client should be open by itself.

#### Publishing

1. If you have done #1-2 in `Development`, go ahead to the next step. If not, do that.
2. `npm build`
3. All the files you need are in the `build` folder.

## Part of The National Science Foundation's Grant for Developing Experiential Laboratories for Computing Accessibility Education. Grant #1825023

Information for this grant can be found at <https://www.nsf.gov/awardsearch/showAward?AWD_ID=1825023>

## The website for all the Accessible Learning Labs can be found at <https://all.rit.edu>

## Contributing

Please make a fork of the repository and submit a pull request to make changes to our system. Pull requests will need to be approved before the changes can be accepted by a member of the organization.
