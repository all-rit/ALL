# Accessibility Learning Labs

## About Our Project:

According to World Bank’s Disability Inclusion statistics,  15% of the world has a disability in some form. In order to ensure the ability of these people to use your websites, it’s important to follow guidelines written with the usability for disabled users in mind. Such a definition can be found in WCAG, the Web Content Accessibility Guidelines, defined by the Web Accessibility Initiative of the World Wide Web Consortium, the main international standards organisation for the internet. In a study of a million sites, 98% of them had a detectable WCAG violation. This can partially be blamed on the lack of materials regarding web accessibility that are easily adoptable.

The objectives of Accessible Learning Labs include but are not limited to addressing that lack of materials, by providing self-encapsulated, browser based, educational accessibility-related material to convey the importance of accessible interfaces.

The website for all of the accessibility labs can be found [here](http://all.rit.edu).

This project is part of The National Science Foundation's Grant for Developing Experiential Laboratories for Computing Accessibility Education. Grant #1825023. Information for this grant can be found [here](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1825023&HistoricalAwards=false).

# Development

## Requirements

- [Docker ~= 20.10.7](https://docs.docker.com/engine/install/)
- [Docker-Compose ~= 1.29.2](https://docs.docker.com/compose/install/)
NOTE - If you install Docker Desktop on MacOS or on Windows, docker-compose comes packaged with it! There is no need to install separately.

## Setup

0. Ensure you've installed [Docker and Docker Compose](#requirements)

1. Clone the repository and open the folder

2. Docker Compose as well as the server, is expecting a file called `.env` located in the `/server` folder. It should contain the following information:

```
# Database stuff:
DB_HOST=database
POSTGRES_USER=(Your Postgres user's name)
POSTGRES_PASSWORD=(Your postgres user's password)
POSTGRES_DB=all_db

# OAuth Authentication information
# This is optional. Google Login won't work without it,
# But the rest of the web app will.
GOOGLE_CLIENT_ID=(Your Google Client ID)
GOOGLE_SECRET=(Your Google Secret)
GOOGLE_CALLBACK_URL=(Your Google Callback URI)

# Client stuff
CLIENT_URL=https://client
KEY=(Your client session secret)
```

3. The client is also expecting a .env file. Create a file called `.env` in the `/client` folder containing the following information:

```
REACT_APP_SERVER_URL=http://server:5005
REACT_APP_GA_TRACKING_ID=(Your Google Analytics tracking ID)
```

4. The website in default configuration will want an SSL certificate. Here's a couple of options:
    - Create a self-signed SSL certificate using something like OpenSSL in the `client/nginx` server, called `localhost.key` and `localhost.crt`.
    - Edit the `ssl_certificate` and `ssl_certificate_key` lines in `client/nginx/default.conf` to point to an existing certificate that you would like to use.
    - If you don't want to bother with SSL at all and just serve the site over HTTP, change `default_https.conf` to `default_http.conf` in `client/Dockerfile` to serve the app over HTTP instead.

5. Once you have all your top secret information set, you can finally start the system. Do so by running `docker-compose up --build -d` in the top level of the repo.

6. Navigate to `localhost` in your favorite browser for the frontend, or to `localhost:8080` to access the API.

7. When you're done, you can stop both the client and the server by running `docker-compose down`.

# Contributing

The general process to contribute code to this repository is as follows: 
- Create a branch with a detailed name
- Add your code (follow the [setup](#setup) instructions to run the project locally)
- Commit (with a descriptive message) and push to your branch
- Create a pull request into the `master` branch.
- Ensure that your code passes the CI/CD requirements
- Your pull request will be reviewed and merged into master, where it will be deployed to our production server

## Branch naming

Branches should be descriptively named to make it easy to tell what they do. One way to do this is to start with the type of addition - this can be a feature, bug fix, or something else. Then, come up with one or two words describing what it does. Finally, if it's to fix an issue tracked by GitHub, it can be helpful to add the issue number to the end of the branch name. Some example names include `feature-google-login` or `issue-nonresponsive-resize-20`

## Commit messages

Commit messages are important to get an overall idea of what's been changed. In general, they should be no longer than 50 characters. This is so that the message fits on one line when commands like `git log` are used. If more text is necessary, anything after the first line will be treated as a description and not show up in the main message.

## Opening a PR

Before you open a pull request, please ensure all code you've committed works as you expect. Also ensure that commands like `npm run build` for the client don't error out - this is a strong indication of broken code.

Pull requests should be named the same way as commits - A short name that describes the overall changes, with a description as needed. Fill out the pull request checklist as well.