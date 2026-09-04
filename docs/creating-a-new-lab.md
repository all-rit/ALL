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

Create a row in the `labs` table (model: `server/database/models/Labs.js`) with the static
content for the lab:

```
labName, labShortName, category, thumbnailImageURL, shortDescription, fullDescription,
learningObjectives (JSON), authors, labURL, copyrightAttributes, about, reading (JSON),
reinforcement (JSON), quiz (JSON), difficulty, slideshow, walkthroughVideo, isActive
```

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
adding the file is enough to create the table (no separate migration step; `schema.sql` is a
reference dump, not something you hand-edit).

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

## Step 12 — Make the lab assignable

Add the lab to a group (`GroupController.addGroupLab` / the instructor group-management UI) so
it actually gets assigned to users and appears in their to-do list.

## Step 13 — Verify

- Confirm the new tables appear in Postgres after boot (Sequelize `.sync()` runs on server start).
- Walk through About → Reading → Exercise → Reinforcement → Quiz as a test user and confirm
  completion is recorded (`user_lab_completion` rows) at each step.
- Check `server` console logs for Sequelize errors on first run — `.sync()` will not fix
  pre-existing tables with conflicting columns.

## Quick file checklist

```
server/database/models/lab<N>/Exercise.js (+ Round.js, Choice.js, Repair.js as needed)
server/services/lab<N>/ExerciseService.js (+ RepairService.js)
server/controllers/lab<N>/ExerciseController.js (+ RepairController.js)
server/routes/index.js                          (edit: imports + route registrations)
client/src/constants/lab<N>/index.js
client/src/reducers/lab<N>/ExerciseReducer.js (+ AppReducer.js, RepairReducer.js)
client/src/services/lab<N>/ExerciseService.js (+ RepairService.js)
client/src/components/exercise/lab<N>/Main.js (+ supporting components)
client/src/assets/images/lab<N>/...
client/src/App.js                               (edit: import + route)
labs table                                       (one new row, via seed/admin insert)
```

That's roughly 10 new files plus edits to 2 shared files (`routes/index.js`, `App.js`) per lab —
which is the exact pain point worth revisiting if lab creation needs to get cheaper (see the
"condense into a single `/lab` route + config registry" idea discussed separately).
