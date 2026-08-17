# Accessible Learning Labs

[![Production CI](https://github.com/all-rit/ALL/actions/workflows/node.js.yml/badge.svg)](https://github.com/all-rit/ALL/actions/workflows/node.js.yml)

## Requirements

- NodeJS ~= v20.11.0
- NPM ~= 10.2.4
  May work for other versions but not guaranteed

## Setup

Clone the repository and open the command line for the upcoming instructions.

### ESlint and Pre-commit setup

After cloning the repository in the top level directory, run `npm install`. This will install all of the tools needed to
commit and correctly format all code within the project.

### Developing Locally

The full stack (client, server, and database) runs in Docker via `.devcontainer/docker-compose.yml`. This replaces
the previous PM2-based workflow. Install the **latest version** of [Docker](https://www.docker.com/) to get started.

#### Environment variables

Create `server/.env` and `client/.env` (not committed — ask a teammate for values, or see below for the keys that
must match the Docker network specifically):

- `server/.env` must point `DB_HOST`/`DB_PORT` at the `db` **service**, not your host machine:
  ```
  DB_HOST=db
  DB_PORT=5433
  ```
  (plus `DB_USER`, `DB_PASS`, `DB_SCHEMA`, and the matching `POSTGRES_*` variables the `db` service reads on init)
- `client/.env` must use Vite's `VITE_` prefix, not the old Create React App `REACT_APP_` prefix — the client was
  migrated from CRA to Vite, and Vite only exposes `import.meta.env` variables prefixed `VITE_`. An old
  `REACT_APP_SERVER_URL` will silently resolve to `undefined` in the app (labs, auth, and other API calls will fail
  with no visible error) instead of failing loudly:
  ```
  VITE_SERVER_URL=http://localhost:5005
  ```

#### Running

```bash
cd .devcontainer
docker compose up -d --build
```

- Client: <http://localhost:3000>
- Server: <http://localhost:5005>
- Database: `localhost:5433`

To view logs: `docker compose logs -f [client|server|db]`. To stop: `docker compose down`. The `db` service has no
persistent volume, so its data does not survive a `down`/`up` cycle — it re-seeds from `server/database/schema.sql`
every time the container starts fresh.

#### HMR / Fast Refresh notes

- Docker Desktop's bind mounts do not reliably forward native filesystem change events into the container (verified
  on macOS with VirtioFS), so `client/vite.config.mjs` enables Chokidar polling
  (`server.watch.usePolling`/`VITE_WATCH_POLL_INTERVAL`) for file-change detection. This is required, not a
  workaround to remove.
- This project's React components use `.js` extensions rather than `.jsx`. Under `@vitejs/plugin-react`'s default
  (automatic) JSX runtime, only `.jsx`/`.tsx` files qualify as Fast Refresh boundaries, so `.js` component edits
  would otherwise force a full page reload instead of an instant hot update. `vite.config.mjs` sets
  `jsxRuntime: "classic"` on the plugin, which instead qualifies any file with a literal `import React` — true for
  every component here — restoring instant Fast Refresh.

## Part of The National Science Foundation's Grant for Developing Experiential Laboratories for Computing Accessibility Education. Grant #1825023

Information for this grant can be found at <https://www.nsf.gov/awardsearch/showAward?AWD_ID=1825023>

## The website for all the Accessible Learning Labs can be found at <https://all.rit.edu>

## Contributing

Please make a fork of the repository and submit a pull request to make changes to our system. Pull requests will need to be approved before the changes can be accepted by a member of the organization.
