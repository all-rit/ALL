-- Seed: participating_schools (content table, deployed automatically — see #1613)
-- Source of truth for this table's rows. The database is made to match
-- this file exactly: edit a row here to change it, remove a row here to
-- delete it from the DB, add a row here to add it. Applied by
-- server/database/seed.js, which runs every file in this directory.
BEGIN;
SELECT pg_advisory_xact_lock(161302); -- arbitrary, unique per seed file; serializes concurrent seed runs

CREATE TEMP TABLE _seed_participating_schools (LIKE participating_schools INCLUDING ALL) ON COMMIT DROP;

INSERT INTO _seed_participating_schools (id, "schoolName", "imageURL", "websiteURL") VALUES (1, 'University of Florida', '/University_of_Florida.png', 'https://www.ufl.edu/'), 
(2, 'Siena College', '/Siena.png', 'https://www.siena.edu/'), (3, 'LaGuardia Community College', '/LaGuardia.png', 'https://www.laguardia.edu/'),
(4, 'Rutgers University', '/Rutgers.png', 'https://www.rutgers.edu/'), (5, 'SUNY Sullivan', '/Sullivan.png', 'https://sunysullivan.edu/'),
(6, 'Rockland Community College', '/Rockland.png', 'https://sunyrockland.edu/'), (7, 'SUNY Schenectady', '/Schenectady.png', 'https://sunysccc.edu/index.html'),
(8, 'Binghamton University', '/Binghamton.png', 'https://www.binghamton.edu/');

INSERT INTO participating_schools
SELECT * FROM _seed_participating_schools
ON CONFLICT (id) DO UPDATE SET
  "schoolName" = EXCLUDED."schoolName",
  "imageURL"   = EXCLUDED."imageURL",
  "websiteURL" = EXCLUDED."websiteURL";

DELETE FROM participating_schools WHERE id NOT IN (SELECT id FROM _seed_participating_schools);

SELECT setval(pg_get_serial_sequence('participating_schools', 'id'),
              COALESCE((SELECT MAX(id) FROM participating_schools), 1));
COMMIT;
