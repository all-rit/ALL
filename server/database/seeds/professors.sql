-- Seed: professors (content table, deployed automatically — see #1613)
-- Source of truth for this table's rows. The database is made to match
-- this file exactly: edit a row here to change it, remove a row here to
-- delete it from the DB, add a row here to add it. Applied by
-- server/database/seed.js, which runs every file in this directory.
BEGIN;
SELECT pg_advisory_xact_lock(161303); -- arbitrary, unique per seed file; serializes concurrent seed runs

CREATE TEMP TABLE _seed_professors (LIKE professors INCLUDING ALL) ON COMMIT DROP;

INSERT INTO _seed_professors (id, "firstName", "lastName", title, affiliation, "imageURL", socials, aboutme, work, "datesActive")
VALUES (1, 'Daniel', 'Krutz', 'Principal Investigator', 'Rochester Institute of Technology', '/Professor_Krutz.jpg', '[{"link":"https://danielkrutz.github.io/","network":"sharethis"}]', 'Daniel Krutz is an Associate Professor at Rochester Institute of Technology, Department of Software Engineering and Center for Cybersecurity. Krutz is the Director of the Autonomy, WARfare, and Engineering (AWARE) Lab, which supports several externally funded projects for the NSF, NSA and the DOD. Krutz''s research interests include Self Adaptive Systems, Decision Support Systems and Computing Education. Krutz is the recipient of the NSF CAREER Award (2022).', null, null),
(2, 'Samuel', 'Malachowsky', 'Principal Investigator', 'Rochester Institute of Technology', '/Professor_Malachowsky.jpg', e'[{"link":"https://www.se.rit.edu/~samvse/","network":"sharethis"}]', 'Samuel A. Malachowsky is a certified career Project Manager (PMP) who currently teaches in the Software Engineering Department at the Rochester Institute of Technology. His passion lies in connecting the abstract and technical with the practical-by teaching project values, leadership, and personal professional development.', null, null),
(3, 'Brian', 'Gouker', 'Advisor', 'NSA Division Chief (Ret), National Security Agency','/Gouker.jpg', '[{"link":"https://www.afcea.org/event/sites/default/files/files/Gouker%20(Bio).pdf","network": "sharethis"}]', 'Brian is the past NSA Visiting Professor and the first-ever Chair for Cyber Studies at the U.S. Army War College. He has held numerous operational, leadership and liaison positions inside NSA and across the federal government. Brian holds technical and advanced degrees from The University of Texas at Austin, Houston Baptist University and the U.S. Army War College. ', null, null),
(4, 'Juan', 'Zheng', 'Advisor', 'Assistant Professor, Lehigh University','/Zheng.jpg', '[{"link":"https://ed.lehigh.edu/faculty/jzheng","network": "sharethis"}]', 'Dr. Zheng is an assistant professor of the Teaching, Learning, and Technology program. She has a background in both educational technology and educational psychology. Her research focuses on integrating artificial intelligence (AI) and computer simulations into science, technology, engineering, and mathematics education (STEM).', null, null),
(5, 'Saikat', 'Dutta', 'Advisor', 'Assistant Professor, Cornell University','/Dutta.jpg', '[{"link":"https://www.cs.cornell.edu/~saikatd/","network": "sharethis"}]', 'I am an Assistant Professor in the Department of Computer Science at Cornell University. My research interests are at the intersection of Software Engineering and Machine Learning. I am a member of the growing Software Engineering Group at Cornell. I received my PhD in Computer Science from the University of Illinois Urbana-Champaign in Summer 2023.', null, null);

INSERT INTO professors
SELECT * FROM _seed_professors
ON CONFLICT (id) DO UPDATE SET
  "firstName"   = EXCLUDED."firstName",
  "lastName"    = EXCLUDED."lastName",
  title         = EXCLUDED.title,
  affiliation   = EXCLUDED.affiliation,
  "imageURL"    = EXCLUDED."imageURL",
  socials       = EXCLUDED.socials,
  aboutme       = EXCLUDED.aboutme,
  work          = EXCLUDED.work,
  "datesActive" = EXCLUDED."datesActive";

DELETE FROM professors WHERE id NOT IN (SELECT id FROM _seed_professors);

SELECT setval(pg_get_serial_sequence('professors', 'id'),
              COALESCE((SELECT MAX(id) FROM professors), 1));
COMMIT;
