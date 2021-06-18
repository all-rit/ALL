# Accessibility Learning Labs

The website for all of the accessibility labs can be found [here](http://all.rit.edu).

## Requirements

- [Docker ~= 20.10.7](https://docs.docker.com/engine/install/)
- [Docker-Compose ~= 1.29.2](https://docs.docker.com/compose/install/)
NOTE - If you install Docker Desktop on MacOS or on Windows, docker-compose comes packaged with it! There is no need to install separately.

## Setup

0. Ensure you've installed [Docker and Docker Compose](#requirements)
1. Clone the repository and open the folder
2. Docker Compose as well as the server, is expecting a file located in the `/server` folder called `.env`. It should contain the following information:
```
# Database stuff:
DB_HOST=database
POSTGRES_USER=(Your Postgres user's name)
POSTGRES_PASSWORD=(Your postgres user's password)
POSTGRES_DB=all_db

# OAuth Authentication information
GOOGLE_CLIENT_ID=(Your Google Client ID)
GOOGLE_SECRET=(Your Google Secret)
GOOGLE_CALLBACK_URL=(Your Google Callback URI)

# Client stuff
CLIENT_URL=http://client
KEY=(Your client session secret)
```
3. The client is also expecting a .env file. Create a file called `.env` in the `/client` folder containing the following information:
```
REACT_APP_SERVER_URL=http://server:5005
REACT_APP_GA_TRACKING_ID=(Your Google Analytics tracking ID)
```
4. Once you have all your top secret information set, you can finally start the system. Do so by running `docker-compose up --build -d` in the top level of the repo.
5. Navigate to `localhost` in your favorite browser for the frontend, or to `localhost:8080` to access the API.
6. When you're done, you can stop both the client and the server by running `docker-compose down`

## Development
1. Clone the repo 
2. In a command line, cd to the `client` folder and run `npm install`. Do the same for the `/server` folder
3. Run `npm start` in the client folder to start the server, and likewise in the `client` folder to start the client
4. The client will open by itself.

## Part of The National Science Foundation's Grant for Developing Experiential Laboratories for Computing Accessibility Education. Grant #1825023

Information for this grant can be found [here](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1825023&HistoricalAwards=false).

## Contributing
Please make a fork of the repository and submit a pull request to make changes to our system. Pull requests will need to be approved before the changes can be accepted by a member of the organization.
