-- Seed: team_members (content table, deployed automatically — see #1613)
-- Source of truth for this table's rows. The database is made to match
-- this file exactly: edit a row here to change it, remove a row here to
-- delete it from the DB, add a row here to add it. Applied by
-- server/database/seed.js, which runs every file in this directory.
BEGIN;
SELECT pg_advisory_xact_lock(161304); -- arbitrary, unique per seed file; serializes concurrent seed runs

CREATE TEMP TABLE _seed_team_members (LIKE team_members INCLUDING ALL) ON COMMIT DROP;

INSERT INTO _seed_team_members (id, "firstName", "lastName", title, "imageURL", socials, work, "datesActive", "isActive", aboutMe, favoriteLab, labCredits) 
VALUES (1, 'Saad', 'Khan', 'PM, Engineer', '/Saad_Khan.jpg', '[{"link":"https://www.linkedin.com/in/saad-khan23/","network":"linkedin"}]', null, '2019-2021', false, null, null, '{1,3,4,5}'),
(2, 'Heather', 'Moses', 'PM, Engineer', '/Heather_Moses.jpg', '[{"link":"https://www.linkedin.com/in/heather-moses/","network":"linkedin"}]', null, '2020-2025', false, 'I’m a recent graduate of the Software Engineering program at RIT, and I’m currently pursuing an MBA, also at RIT. I’m passionate about technology!', 8, '{1,3,4,8,9,12}'),
(3, 'Christopher', 'Savan', 'Engineer', '/Christopher_Savan.jpg', '[{"link":"https://www.linkedin.com/in/christophersavan/","network":"linkedin"}]', null, '2020-2021', false, null, null, '{3}'),
(4, 'Su Thit', 'Thazin', 'PM, Engineer, Director of Outreach', '/Su_Thit_Thazin.jpg', '[{"link":"https://www.linkedin.com/in/suthitthazin/","network":"linkedin"}]', null, '2020-2023', false, null, null, null),
(5, 'Mark', 'Sternefeld', 'PM, Engineer', '/Mark_Sternefeld.jpg', '[{"link":"https://www.linkedin.com/in/mark-ferenc-sternefeld/","network":"linkedin"}]', null, '2020-2024', false, null, null, '{3,6,11}'),
(6, 'Shantanav', 'Saurav', 'Engineer', '/Shantanav_Saurav.jpg', '[{"link":"https://www.linkedin.com/in/shantanav/","network":"linkedin"}]', null, '2021-2022', false, null, null, null),
(7, 'Bashir', 'Jaji', 'Engineer', '/Bashir_Jaji.jpg', '[{"link":"https://www.linkedin.com/in/jaji-bashir-oluwatobiloba-768a52108/","network":"linkedin"}]', null, '2021-2022', false, null, null, null),
(8, 'Andreas', 'Leonard-Calcano', 'Architect, Tech Lead, Engineer', '/Andreas_Leonard_Calcano.jpg', '[{"link":"https://www.linkedin.com/in/andres-leonard-calcano/","network":"linkedin"}]', null, '2021-2024', false, null, null, '{8,9,11,12}'),
(9, 'Saige', 'Moon', 'Design', '/default_profile_image.jpg', '[]', null, '2023-2024', false, null, null, '{9,11,12}'),
(10, 'Kyle', 'Messerle', 'Outreach', '/Kyle.jpg', '[{"link":"https://www.linkedin.com/in/kyle-messerle/","network":"linkedin"}]', null, '2022-2024', false, null, null, '{6}'),
(11, 'Domenic', 'Mangano', 'Tech Lead, Engineer', '/Domenic.jpeg', '[{"link" : "https://www.linkedin.com/in/domenicmangano/"}]', null, '2022-2025', false, 'Student. Father. Engineer. Graduated from RIT in Fall 2025, I love building software and improving UI/UX across any platform, and teaching others about the importance of accessibility!', 6, '{0,7,8,9,10,11,12}'),
(12, 'Carla', 'Lopez', 'Deepfake Team Lead, Outreach, Engineer', '/Carla.jpeg', '[{"link" : "https://www.linkedin.com/in/carla-lopez-6b8aa7239/"}]', null, '2023-Present', true, null, null, null),
(13, 'Jonathan', 'Cruz', 'PM, Engineer', '/default_profile_image.jpg', '[{"link" : "https://www.linkedin.com/in/notjoncruz/"}]', null, '2023-2025', false, 'BS/MS student in Software Engineering and Computer Science. Conducting research in Quantum Simulations and Routing Algorithms.', 10, '{0,7,10}'),
(14, 'Kasim', 'O''Meally', 'Engineer', '/default_profile_image.jpg', '[{"link" : "https://www.linkedin.com/in/kasimomeally"}]', null, '2023-2025', false, 'Upcoming graduate of the Web and Mobile Computing program at RIT, and founding member of the Computing Organization for Multicultural Students at RIT!of the Computing Organization for Multicultural Students at RIT!', 2, null),
(15, 'Payton', 'Dinwiddie', 'Education', '/Payton.jpg', '[{"link": "https://www.linkedin.com/in/paytonsidneydinwiddie//","network": "linkedin"}]', null, '2022-2022', false, null, null, null),
(16, 'Destiny', 'Francois', 'Education', '/bcu_default_image.jpg', '[]', null, '2022-2022', false, null, null, null),
(17, 'Garsha', 'Thomas', 'Education', '/bcu_default_image.jpg', '[]', null, '2022-2022', false, null, null, null),
(18, 'Fabi', 'Marrufo', 'Engineer', '/Fabi.jpg', '[{"link":"https://www.linkedin.com/in/fabi-marrufo/","network":"linkedin"}]', null, '2022-2022', false, null, null, null),
(19, 'Santosh', 'Lamichhane', 'Engineer', '/Santosh.jpg', '[{"link": "https://www.linkedin.com/in/santosh-lamichhane-1b2737195/","network": "linkedin"}]', null, '2022-2022', false, null, null, null),
(20, 'Jaden', 'Wedner', 'Engineer', '/Jaden.jpg', '[{"link": "https://www.linkedin.com/in/jaden-w-3a9326190/","network": "linkedin"}]', null, '2022-2023', false, null, null, '{6,8}'),
(21, 'Kelley', 'Lam', 'Engineer', '/Kelley.jpg', '[{"link":"https://www.linkedin.com/in/kelley-lam/","network":"linkedin"}]', null, '2022-2022', false, null, null, '{7}'),
(22, 'Dynasty', 'Chappel', 'Education', '/Dynasti.jpg', '[{"link": "https://www.linkedin.com/in/dynasti-chappell-2085a51b7/","network": "linkedin"}]', null, '2022-2022', false, null, null, null),
(23, 'Ryan', 'Webb', 'Engineer', '/default_profile_image.jpg', '[{"link" : "https://www.linkedin.com/in/rfhwebb/"}]', null, '2023-2024', false, null, null, '{8}'),
(24, 'Jonathan', 'Bateman', 'Outreach', '/default_profile_image.jpg', '[{"link" : "https://www.linkedin.com/in/jonathan-b-356439264/"}]', null, '2023-2023', false, null, null, null),
(25, 'Ainsley', 'Ross', 'Engineer', '/default_profile_image.jpg', '[{"link" : "https://www.linkedin.com/in/ainsley-ross/"}]', null, '2024-2024', false, null, 12, '{12}'),
(26, 'Owen', 'Luts', 'Tech Lead, Quantum Lab Team Lead, Engineer', '/Owen_Luts.jpg', '[{"link" : "https://www.linkedin.com/in/owen-luts/"}]', null, '2024-Present', true, 'Tech Lead and Software Developer at the Accessible Learning Labs, current full-time student at the Rochester Institute of Technology, and President/Founder of the RIT Pickleball Club!', 14, '{0,12,14}'),
(27, 'Kristen', 'Fang', 'Engineer', '/Kristen_Fang.jpg', '[{"link":"https://www.linkedin.com/in/kristenfang/","network":"linkedin"}]', null, '2024-Present', true, null, 3, '{0}'),
(28, 'Melissa', 'Burisky', 'Engineer', '/Melissa_Burisky.jpg', '[{"link" : "https://www.linkedin.com/in/melissa-burisky-7b24bb230/"}]', null, '2024-2025', false, 'Computer Science graduate at RIT, and member of the Computing Organization for Multicultural Students.', 0, '{0}'),
(29, 'Michael', 'DiBiase', 'Engineer', '/default_profile_image.jpg', '[{"link" : "https://www.linkedin.com/in/michael-dibiase-8765632b8/"}]', null, '2024-2025', false, 'Junior developer at Accessible Learning Labs, Software Project Management TA, pickleball club member, and Taco Bell lover.', 12, '{0,12}'),
(30, 'Elaina', 'Trapatsos', 'Engineer, Outreach', '/Elaina_Trapatsos.jpg', '[{"link" : "https://www.linkedin.com/in/elaina-trapatsos/"}]', null, '2024-2026', false, 'Computer Science Student at Rochester Institute of Technology', null, null),
(31, 'Ursula', 'Parker', 'Project Manager, Imagine Team Lead', '/Ursula_Parker.jpg', '[{"link" : "https://www.linkedin.com/in/ursula-parker/"}]', null, '2025-2026', false, null, null, null),
(32, 'Jack', 'DeFeo', 'AI Hallucination Team Lead, Engineer', '/Jack_DeFeo.jpg', '[{"link" : "https://www.linkedin.com/in/conner-jack-defeo/"}]', null, '2025-Present', true, null, null, null),
(33, 'Jack', 'Barter', 'Maintenance Team Lead, Engineer', '/Jack_Barter.jpg', '[{"link" : "https://www.linkedin.com/in/jackbarter/"}]', null, '2025-Present', true, 'Jack Barter is a third-year Software Engineering BS/MS student who joined ALL in the Spring of 2025. Jack enjoys working in backend architecture and building full-stack applications in his engineering roles. Lastly, Jack is also pursuing a minor in Criminal Justice where he also has experience in Public Safety working as security.', 0, '{0}'),
(34, 'Emma', 'Schmitt', 'PM, AI Bias Team Lead, Outreach', '/Emma_Schmitt.jpg', '[{"link" : "https://www.linkedin.com/in/emmakschmitt/"}]', null, '2025-Present', true, null, null, null),
(35, 'Warner', 'Harper', 'Engineer, Outreach Team Lead', '/Warner_Harper.jpg', '[{"link" : "https://www.linkedin.com/in/warner-harper/"}]', null, '2025-Present', true, null, null, null),
(36, 'Juidane', 'Thomas', 'Outreach Team Lead', '/Judiane_Thomas.jpg', '[{"link" : "www.linkedin.com/in/juidane-t-b90857299"}]', null, '2025-Present', true, null, null, null),
(37, 'William', 'Herrick', 'AI Deepfake Team Lead, Engineer', '/Will_Herrick.jpg', '[{"link" : "https://www.linkedin.com/in/william-herrick/"}]', null, '2025-Present', true, 'Third year Software Engineering BS student and developer at ALL, Competitive Director for RIT Esports', null, '{14}'),
(38, 'Vivian', 'Hernandez', 'Engineer', '/Vivian_Hernandez.jpg', '[{"link" : "https://www.linkedin.com/in/vivian-ahernandez"}]', null, '2025-2026', false, null, null, '{14}'),
(39, 'Darlyn', 'Gomez', 'Engineer', '/Darlyn_Gomez.jpg', '[{"link" : "https://www.linkedin.com/in/darlyn-gomez/"}]', null, '2025-Present', true, null, null, null),
(40, 'Luther B.', 'Roxo', 'Outreach, Engineer', '/Luther_Roxo.jpg', '[{"link" : "https://www.linkedin.com/in/roxo"}]', null, '2025-Present', true, 'Software Developer at the Accessible Learning Labs, third year Game Development and Design student at the Rochester Institute of Technology with a minor in Artificial Intelligence, and a lover of horror, whimsy and big ideas.', 6, null),
(41, 'Gabby', 'Addotey', 'Outreach', '/Gabby_Addotey.png', '[{"link" : "https://www.linkedin.com/in/gabrielle-addotey-04993b300/"}]', null, '2025-Present', true, 'Fun fact: I am on the club soccer team!', null, null),
(42, 'Chrissy', 'Espeleta', 'Design', '/Chrissy_Espeleta.jpg', '[{"link" : "https://www.linkedin.com/in/christine-espeleta/"}]', null, '2025-2026', false, null, 13, '{13,14}'),
(43, 'Arnav', 'Merani', 'Maintenance', '/Arnav_Merani.jpg', '[{"link": "https://www.linkedin.com/in/arnav-merani-ab8a392b1/"}]', null, '2026-Present', true, 'Fun fact: I make niche memes on programming, lifting, and some events of my life!', null, null),
(44, 'Niamh', 'Cotter', 'Engineer', '/Niamh_Cotter.jpg', '[{"link" : "https://www.linkedin.com/in/niamhccotter/"}]', null, '2026-Present', true, 'BS/MS Computer Science student at RIT, lab developer at ALL, and holds leadership positions in a multicultural sorority and as Co-President of the Computer Science Community.', null, null),
(45, 'Aziz', 'Kane', 'Maintenance', '/Aziz_Kane.jpg', '[{"link": "https://www.linkedin.com/in/aziz-kane-77084243b/"}]', null, '2026-Present', true, 'Fun fact: I am scarily good at Mortal Kombat, but beyond that I really enjoy video editing, drawing, and of course programming!', null, null);

INSERT INTO team_members
SELECT * FROM _seed_team_members
ON CONFLICT (id) DO UPDATE SET
  "firstName"   = EXCLUDED."firstName",
  "lastName"    = EXCLUDED."lastName",
  title         = EXCLUDED.title,
  "imageURL"    = EXCLUDED."imageURL",
  socials       = EXCLUDED.socials,
  work          = EXCLUDED.work,
  "datesActive" = EXCLUDED."datesActive",
  "isActive"    = EXCLUDED."isActive",
  aboutMe       = EXCLUDED.aboutMe,
  favoriteLab   = EXCLUDED.favoriteLab,
  labCredits    = EXCLUDED.labCredits;

DELETE FROM team_members WHERE id NOT IN (SELECT id FROM _seed_team_members);

SELECT setval(pg_get_serial_sequence('team_members', 'id'),
              COALESCE((SELECT MAX(id) FROM team_members), 1));
COMMIT;
