-- Seed: dev_partners (content table, deployed automatically — see #1613)
-- Source of truth for this table's rows. The database is made to match
-- this file exactly: edit a row here to change it, remove a row here to
-- delete it from the DB, add a row here to add it. Applied by
-- server/database/seed.js, which runs every file in this directory.
BEGIN;
SELECT pg_advisory_xact_lock(161301); -- arbitrary, unique per seed file; serializes concurrent seed runs

CREATE TEMP TABLE _seed_dev_partners (LIKE dev_partners INCLUDING ALL) ON COMMIT DROP;

INSERT INTO _seed_dev_partners (id, "partnerName", "imageURL", "websiteURL") VALUES (1, 'Rochester Institute of Technology', '/RIT.png', 'https://www.rit.edu/'), 
(2, 'Daytona State College', '/Daytona.png', 'https://www.daytonastate.edu/index.html'), (3, 'Embry-Riddle Aeronautical University', '/ERAU.png', 'https://daytonabeach.erau.edu/'),
(4, 'Syracuse University', '/Syracuse.png', 'https://www.syracuse.edu/'), (5, 'Fayetteville State University', '/UNCFSU.png', 'https://www.uncfsu.edu/'),
(6, 'Philander Smith University', '/Philander.png', 'https://www.philander.edu/');

INSERT INTO dev_partners
SELECT * FROM _seed_dev_partners
ON CONFLICT (id) DO UPDATE SET
  "partnerName" = EXCLUDED."partnerName",
  "imageURL"    = EXCLUDED."imageURL",
  "websiteURL"  = EXCLUDED."websiteURL";

DELETE FROM dev_partners WHERE id NOT IN (SELECT id FROM _seed_dev_partners);

SELECT setval(pg_get_serial_sequence('dev_partners', 'id'),
              COALESCE((SELECT MAX(id) FROM dev_partners), 1));
COMMIT;
