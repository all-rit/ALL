# Creating a New Lab

This walks through everything required to add a new lab end-to-end: database, backend
middleware, and frontend. It's written from the existing pattern used by labs 1–15 — follow
`lab1` as the reference implementation for the interactive exercise pieces described below.

## Mental model first

Not every part of a lab needs custom code. The platform has two categories:

- **Generic, data-driven pages** — About, Reading, Reinforcement, and Quiz are all rendered by
  shared components (`components/body/About`, `components/body/Reading`,
  `components/body/Reinforcement`, `components/quiz/components/QuizHandler`) that pull their
  content from a single row in the `labs` table via `labID`. Progress tracking for these
  (`completeAbout`, `completeReading`, `completeReinforcement`, `completeQuiz`) is also generic —
  `UserLabController`/`UserLabService` take `labid` as a parameter, no lab-specific code needed.
- **Custom, per-lab code** — the interactive **Exercise** (and, for some labs, a **Repair**
  activity) is bespoke: its own DB tables, service, controller, routes, and React component tree.
  This is the part that requires new files for every lab.

So concretely: adding a new lab's About/Reading/Reinforcement/Quiz content is a **data entry
task** (one row in `labs`). Adding the new lab's actual exercise/game is a **code task** that
touches the layers below.

## Step 0 — Pick a lab number

Labs are identified by an integer `<N>` used consistently as a folder/route suffix
(`lab12`, `Lab12`, `/lab12/...`, etc.). Pick the next unused number.

## Step 1 — Register lab metadata (`labs` table)

Add a row for the lab to **`server/database/seeds/labs.sql`** — this file is the source of truth
for the `labs` table's content (see #1613). It's no longer something you insert directly into a
running database by hand, and it's no longer part of `schema.sql` (which holds DDL only now).

Add a new `(id, ...)` tuple to the `INSERT INTO _seed_labs (...)` statement near the top of the
file, using the next unused id and the full column list already declared there:

```
labName, labShortName, category, thumbnailImageURL, shortDescription, fullDescription,
learningObjectives (JSON), authors, labURL, copyrightAttributes, about, reading (JSON),
reinforcement (JSON), quiz (JSON), difficulty, slideshow, walkthroughVideo, isActive
```

Apply it with `npm run db:seed` — or just restart the `server` container locally, since
`npm run dev` seeds automatically before starting the app. The same file is what staging/prod
deploy from via `server_deploy.sh`, so there's no manual SQL against a live database for this
step anymore.

One caveat specific to `labs.sql`: a re-seed never overwrites an existing row's `isActive` value
(it's owned by the Admin Page's on/off toggle at runtime, see #1647) — doesn't matter for a new
row, since there's nothing yet to conflict with; just set the value you want the lab to launch
with.

This single row is what powers the generic About/Reading/Reinforcement/Quiz pages and makes the
lab show up on the labs listing page — no route/controller changes needed for those.

## Step 2 — Database models for the exercise (and repair, if applicable)

Add a folder `server/database/models/lab<N>/` with one file per table, e.g. `Exercise.js`,
`Round.js`, `Choice.js`, `Repair.js` (only create what your lab actually needs — some labs have
just one exercise table, others have several related tables).

Each file follows the Sequelize pattern used everywhere else:

```js
module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define(
    'ExerciseLab<N>',
    {
      exerciseid: { type: DataTypes.INTEGER, unique: true, primaryKey: true, autoIncrement: true },
      usersessionid: { type: DataTypes.BIGINT },
      score: { type: DataTypes.INTEGER, defaultValue: 0 },
      // ...lab-specific fields
    },
    { tableName: 'lab<N>_exercise' },
  );
  Exercise.sync();
  return Exercise;
};
```

Model files are auto-loaded — `server/database/index.js` recursively scans
`server/database/models/`, requires every file, and calls `.sync()` on each model, so simply
adding the file is enough to create the table — no DDL or migration edits needed. (`schema.sql`
holds DDL only and isn't hand-maintained per-lab the way `server/database/seeds/labs.sql` is for
Step 1 — see #1613.)

## Step 3 — Backend services

Create `server/services/lab<N>/ExerciseService.js` (and `RepairService.js` if needed). Services
own all DB access via `db.<ModelName>` and contain the actual business logic (scoring, state
transitions, etc.). Keep this layer free of `req`/`res` — it should only take plain data in and
return promises.

```js
const db = require('../../database');

exports.createExercise = (data) => {
  return db.ExerciseLab<N>.create({ ... }).then((exercise) => exercise.exerciseid);
};
```

## Step 4 — Backend controllers

Create `server/controllers/lab<N>/ExerciseController.js` (and `RepairController.js` if needed).
Controllers are thin — they pull data off `req`, call the matching service method, and shape the
response. Session state (`req.session.exercise`, `req.session.round`, etc.) is how in-progress
exercise state is tracked between requests for a single user.

```js
const ExerciseService = require('../../services/lab<N>/ExerciseService');

exports.createExercise = (req, res) => {
  ExerciseService.createExercise({
    usersessionid: req.session.token,
    // ...fields from req.body
  }).then((id) => {
    req.session.exercise = id;
    res.sendStatus(200);
  });
};
```

## Step 5 — Register routes

In `server/routes/index.js`:

1. Import the new controller(s) near the top, alongside the other `Lab<N>` imports:
   ```js
   const ExerciseControllerLab<N> = require('../controllers/lab<N>/ExerciseController');
   ```
2. Add a `router.post`/`router.get` line per action, following the existing
   `/lab<N>/exercise/...` and `/lab<N>/repair/...` naming convention:
   ```js
   router.post('/lab<N>/exercise/start', ExerciseControllerLab<N>.createExercise);
   ```

This file is the single place all lab routes are wired up — it's manually maintained and grows
by a few lines per lab.

## Step 6 — Frontend constants

Add `client/src/constants/lab<N>/index.js` for any UI state enums, timing constants, or default
values the exercise needs (state machine states, magic numbers, etc.).

## Step 7 — Frontend reducers

Add `client/src/reducers/lab<N>/` with an `ExerciseReducer.js` (and `AppReducer.js`,
`RepairReducer.js` as needed) — these are plain Redux reducers holding the client-side state of
the exercise (current round, score, box states, popups, etc.), following the `types`/`actions`/
reducer export pattern used by lab1.

## Step 8 — Frontend API services

Add `client/src/services/lab<N>/ExerciseService.js` (and `RepairService.js` if applicable). This
is the client-side mirror of Step 5 — one `endpoints` map of the routes you just registered, and
one exported function per endpoint using `API.postWithBody` / equivalent:

```js
import API from '../API';

const endpoints = {
  CREATE_EXERCISE: '/lab<N>/exercise/start',
};

const ExerciseService = {
  createExercise: (payload) =>
    API.postWithBody(import.meta.env.VITE_SERVER_URL + endpoints.CREATE_EXERCISE, payload),
};

export default ExerciseService;
```

## Step 9 — Frontend components (the actual exercise UI)

Build the exercise under `client/src/components/exercise/lab<N>/`, with a `Main.js` (or similar)
as the entry component — this is the bulk of the new-lab work and is entirely custom per lab
(game mechanics, layout, interactions). It should dispatch the reducer actions from Step 7 and
call the service functions from Step 8.

## Step 10 — Assets

Drop any images/audio into `client/src/assets/images/lab<N>/` (and similar folders for other
asset types the lab needs).

## Step 11 — Wire the component into routing

In `client/src/App.js`:

1. Import the new exercise component:
   ```js
   import { default as ExerciseLab<N> } from './components/exercise/lab<N>/Main';
   ```
2. Add its route inside the router, alongside the existing `ExerciseLab*` entries:
   ```js
   <ExerciseLab<N> path="/Lab<N>/Exercise" user={state.main.user} />
   ```

The generic `<About>`, `<Reading>`, `<Reinforcement>`, and `<Quiz>` routes already handle any
`labID` via the `/Lab${lab}/...` pattern — nothing to add there as long as Step 1 is done.

## Step 12 — Add to "Featured Labs" Section

In `client/src/pages/landingpage/index.js`, check the `getFeaturedLabs` function.

- Remove the older lab, and replace data with the new lab's details.

## Step 13 — Add to Redirect

In `client/src/helpers/Redirect.js`, check the large 'switch' statement in `stateChange` function.

- Add the new lab as a new case claude to the end of the switch statement.

```js
case "Lab<N>":
  actions.setLab(<N>);
  break;
```

## Step 14 — Add New Lab as Constant

In `client/src/constants/index.js`, check the `Sections` constant.

Add the new lab as an entry in this dictionary.

## Step 15 — Verify

- Confirm the new row in `labs.sql` actually landed — `npm run db:seed` logs
  `Applying seed: labs.sql`; a local Docker boot does this automatically via `npm run dev`.
- Confirm the new tables appear in Postgres after boot (Sequelize `.sync()` runs on server start).
- Walk through About → Reading → Exercise → Reinforcement → Quiz as a test user and confirm
  completion is recorded (`user_lab_completion` rows) at each step.
- Check `server` console logs for Sequelize errors on first run — `.sync()` will not fix
  pre-existing tables with conflicting columns.