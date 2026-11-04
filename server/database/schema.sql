create table imagine22
(
    id              serial,
    userid          integer,
    avatar          json,
    squad           json,
    "lobbyMessages" json,
    constraint "Imagine_pkey"
        primary key (id)
);

create table enrollment
(
    id              serial,
    "userID"        integer,
    "groupID"       integer,
    "enrolledDate"  DATE,
    "isActive"      boolean,
    primary key (id)
);

create table group_labs
(
    id         serial,
    "groupID"  integer,
    "labID"    integer,
    "isActive" boolean,
    primary key (id)
);

create table groups
(
    id                 serial,
    "instructorUserID" integer,
    "groupName"        text,
    "createdDate"      timestamp with time zone,
    "color"            text,
    "isActive"         boolean,
    code               text,
    primary key (id),
    unique (code)
);

create table imagine
(
    id              serial,
    userid          integer,
    avatar          json,
    squad           json,
    "lobbyMessages" json,
    primary key (id)
);

create type enum_imagine23 as enum ('experiential','discomfortCountPOC','discomfortCountNonPOC','control');

create table imagine23
(
    id                           serial,
    userid                       text,
    section                      enum_imagine23,
    study                        json,
    "preSurvey"                  json,
    "postSurvey"                 json,
    "readMoreCount"              integer,
    "readMoreTimeElapsed"        json,
    "readingSectionPagePosition" json,
    "readingPageTime"            integer,
    primary key (id)
);

create type enum_lab0_progress_category as enum ('DESIGN', 'BACKEND', 'FRONTEND');

create type enum_lab0_progress_section as enum (
    'LabIdeation',
    'LabDecision',
    'WireframeIntro',
    'ScrumIntro',
    'LabDataRepair', 
    'SchemaRepair', 
    'ServiceControllerRepair', 
    'RoutingRepair', 
    'BackendTipsTricks', 
    'IntegrationRepair',
    'CoreLabPagesRepair',
    'ComponentLibrary',
    'FrontendTipsTricks'
);

create type enum_lab0_progress_section_status as enum ('IN_PROGRESS', 'COMPLETED');

create table lab0_progress (
    id              serial,
    userid          bigint,
    category        enum_lab0_progress_category,
    section         enum_lab0_progress_section,
    "sectionStatus" enum_lab0_progress_section_status,
    primary key (id) 
);

create table lab1_choice
(
    choiceid  serial,
    roundid   integer,
    boxnumber integer,
    correct   boolean,
    primary key (choiceid)
);

create table lab1_exercise
(
    exerciseid    serial,
    usersessionid bigint,
    score         integer default 0,
    playthrough   integer,
    timeplayed    timestamp with time zone,
    primary key (exerciseid)
);

create table lab1_repair
(
    repairid                   serial,
    usersessionid              bigint,
    availablemessage           varchar(255),
    unavailablemessage         varchar(255),
    availablebackgroundcolor   varchar(255),
    unavailablebackgroundcolor varchar(255),
    primary key (repairid)
);

create table lab1_round
(
    roundid     serial,
    exerciseid  integer,
    hintused    boolean,
    soundoption boolean,
    primary key (roundid)
);

create table lab2_repair
(
    repairid            serial,
    usersessionid       bigint,
    background          varchar(255),
    "correctColor"      varchar(255),
    "incorrectColorOne" varchar(255),
    "incorrectColorTwo" varchar(255),
    primary key (repairid)
);

create table lab3_repair
(
    repairid         serial,
    usersessionid    bigint,
    "cowAltValue"    varchar(255),
    "carAltValue"    varchar(255),
    "burgerAltValue" varchar(255),
    "catAltValue"    varchar(255),
    primary key (repairid)
);

create table lab4_repair
(
    repairid      serial,
    usersessionid bigint,
    height        integer,
    width         integer,
    skiptomain    varchar(255),
    tabindex      integer,
    primary key (repairid)
);

create table lab5_exercise
(
    exerciseid     serial,
    usersessionid  bigint,
    correct        boolean,
    question       varchar(255),
    selectedoption varchar(255),
    options        varchar(255),
    primary key (exerciseid)
);

create table lab5_repair
(
    repairid      serial,
    usersessionid bigint,
    activity      varchar(255),
    repair        varchar(255),
    primary key (repairid)
);

create table lab6_exercise
(
    exerciseid             serial,
    usersessionid          bigint,
    avatar                 json,
    qualificationquestions json,
    aianalysisquestion     json,
    hiredcanidates         json,
    aireasoningquestion    json,
    fixedhiredcanidates    json,
    primary key (exerciseid)
);

create table lab6_repair
(
    repairid        serial,
    userid          integer,
    appearance      integer,
    yearsexperience integer,
    availability    integer,
    expectedpay     integer,
    primary key (repairid)
);

create table lab7_exercise
(
    exerciseid serial,
    userid     bigint,
    report     json,
    primary key (exerciseid)
);

create table lab7_repair
(
    repairid      serial,
    usersessionid bigint,
    activity      varchar(255),
    repair        varchar(255),
    report        json,
    primary key (repairid)
);

create table lab_authors
(
    id         serial,
    "labID"    integer,
    "memberID" integer,
    primary key (id)
);

create table labs
(
    id                    serial,
    "labName"             text,
    "labShortName"        text,
    category              text,
    "thumbnailImageURL"   text,
    "shortDescription"    text,
    "fullDescription"     text,
    "learningObjectives"  json,
    authors               text,
    "labURL"              text,
    "copyrightAttributes" text,
    about                 text,
    reading               json,
    reinforcement         json,
    quiz                  json,
    difficulty             integer,
    "slideshow"             text,
    "walkthroughVideo"      text,
    "isActive"            boolean default false,
    primary key (id)
);

create table page
(
    pageid         serial,
    usersessionid  bigint,
    pagename       text,
    completiontime integer,
    labid          integer,
    primary key (pageid)
);

create table professors
(
    id            serial,
    "firstName"   text,
    "lastName"    text,
    title         text,
    affiliation    text,
    "imageURL"    text,
    socials       json,
    aboutme       text,
    work          text,
    "datesActive" text,
    primary key (id)
);

create table session
(
    usersessionid  serial,
    userid        integer,
    primary key (usersessionid)
);

create table team_members
(
    id            serial,
    "firstName"    text,
    "lastName"    text,
    title         text,
    "imageURL"    text,
    socials       json,
    work          text,
    "datesActive" text,
    "isActive"    boolean default true,
    aboutMe       text,
    favoriteLab   integer,
    labCredits    integer[],
    primary key (id)
);

create table dev_partners
(
    id            serial,
    "partnerName"   text,
    "imageURL"      text,
    "websiteURL"    text,
    primary key   (id)                    
);

create table participating_schools
(
    id            serial,
    "schoolName"   text,
    "imageURL"      text,
    "websiteURL"    text,
    primary key   (id)                    
);

create table userlab
(
    userlabid                  serial,
    usersessionid              bigint,
    labid                      integer,
    quizscore                  integer default 0,
    aboutcompletedtime         timestamp with time zone,
    readingcompletedtime       timestamp with time zone,
    exercisecompletedtime      timestamp with time zone,
    reinforcementcompletedtime timestamp with time zone,
    quizcompletedtime          timestamp with time zone,
    quizresult                 text,
    primary key (userlabid)
);

create table userlabcompletion
(
    id                         serial,
    userid                     integer,
    labid                      integer,
    labstarttime               timestamp with time zone,
    aboutcompletedtime         timestamp with time zone,
    readingcompletedtime       timestamp with time zone,
    exercisecompletedtime      timestamp with time zone,
    reinforcementcompletedtime timestamp with time zone,
    quizcompletedtime          timestamp with time zone,
    quizscore                  integer default 0,
    labcompletiontime          timestamp with time zone,
    primary key (id)
);

create table users
(
    userid      serial,
    firstname   text,
    lastinitial char,
    email1      text,
    email2      text,
    userpfp     text,
    PRIMARY KEY (userid),
    UNIQUE (email1),
    UNIQUE (email2)
);
insert into users (userid, firstname, lastinitial, email1, email2, userpfp)
VALUES (98, 'Ally', 'A', 'allyaccessibility@all.edu', null, null), (99, 'Lily', 'L', 'lilylabs@all.edu', null, null), (100, 'Edna', 'E', 'ednaeducation@all.edu', null, null);

create table lab8_exercise
(
    "repairId"   serial,
    userid       bigint,
    repair       json,
    "isComplete" boolean,
    "numRepair"  bigint,
    primary key ("repairId")
);

create table lab10_exercise
(
    exerciseid serial,
    userid     bigint,
    weights    json,
    session    json,
    primary key (exerciseid)
);

create table lab9_exercise
(
    "repairId"           serial,
    userid               bigint,
    "isAddressComplete"  boolean,
    "isDateComplete"     boolean,
    "isNavComplete"      boolean,
    "attemptTime"        timestamp with time zone,
    "isExerciseComplete" boolean,
    "hasViewed"          boolean,
    "attemptCount"       integer,
    primary key ("repairId")
);

create table lab11_exercise
(
    "repairId"                         serial,
    userid                             bigint,
    "isRepairWordCountComplete"        boolean,
    "isRepairSentenceCountComplete"    boolean,
    "isRepairComplexWordCountComplete" boolean,
    "attemptTime"                      timestamp with time zone,
    "attemptCount"                     integer,
    primary key ("repairId")
);

create type enum_lab11_repair_section as enum ('WordCount', 'SentenceCount', 'ComplexWordCount');

create table lab11_repair
(
    "repairId"    serial,
    userid        bigint,
    section       enum_lab11_repair_section,
    repair        json,
    "isComplete"  boolean,
    "attemptTime" timestamp with time zone,
    "repairCount" bigint,
    primary key ("repairId")
);

create type enum_lab9_repair_section as enum ('address-repair', 'date-repair', 'nav-repair');

create table lab9_repair
(
    "repairId"    serial,
    userid        bigint,
    section       enum_lab9_repair_section,
    repair        json,
    "isComplete"  boolean,
    "attemptTime" timestamp with time zone,
    "repairCount" bigint,
    primary key ("repairId")
);

create type enum_lab12_repair_section as enum ('FormRepair', 'DatabaseRepair');

create table lab12_repair (
                              "repairId"    serial,
                              userid        bigint,
                              section       enum_lab12_repair_section,
                              repair        json,
                              "isComplete"  boolean,
                              "attemptTime" timestamp with time zone,
                              "repairCount" bigint,
                              primary key ("repairId")
);

create table lab12_exercise
(
    "repairId"                         serial,
    userid                             bigint,
    "isFormRepairComplete"             boolean,
    "isDatabaseRepairComplete"         boolean,
    "attemptTime"                      timestamp with time zone,
    "isExerciseComplete"               boolean,
    "hasViewed"                        boolean,
    "attemptCount"                     integer,
    primary key ("repairId")
);

-- Seed data for this table lives in server/database/seeds/labs.sql — see #1613.

-- Seed data for this table lives in server/database/seeds/professors.sql — see #1613.

-- Seed data for this table lives in server/database/seeds/team_members.sql — see #1613.
-- Seed data for this table lives in server/database/seeds/dev_partners.sql — see #1613.

-- Seed data for this table lives in server/database/seeds/participating_schools.sql — see #1613.
