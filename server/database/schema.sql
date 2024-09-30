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
    "imageURL"    text,
    socials       json,
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
    "firstName"   text,
    "lastName"    text,
    title         text,
    "imageURL"    text,
    socials       json,
    work          text,
    "datesActive" text,
    "isActive"    boolean default true,
    primary key (id)
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
    PRIMARY KEY (userid),
    UNIQUE (email1),
    UNIQUE (email2)
);

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

INSERT INTO public.labs (id, "labName", "labShortName", category, "thumbnailImageURL", "shortDescription", "fullDescription", "learningObjectives", authors, "labURL", "copyrightAttributes", about, reading, reinforcement, quiz, "isActive") VALUES (1, 'Accessibility to Sound and Speech', 'Sound & Speech', 'Accessibility', '/ear.jpg', 'Learn about designing the web for the Deaf and Hard-of-Hearing community.', 'This lab explores the Perceivable accessibility principle in regards to sound and speech. This principle states that information and elements of the interface must be presented to users in ways they can perceive without loss of information. The lab demonstrates how having only audio cues for a certain objective makes the software inaccessible for users who are deaf or hard of hearing.', '["LO1: Knowledge of user significance, characteristics, and needs: Recognize the significance of the population that is deaf and hard of hearing and their needs for accessible software (Knowledge)","LO2: Exposure to and analysis of poorly accessible design: Examine a software application that doesn’t properly accommodate accessibility for people with difficulties with sound and speech (Analysis)","LO3: Apply solutions to solve access problems: Use knowledge of accessibility design solutions to construct corrective measures to allow previously inaccessible software to become accessible to appropriate parties (Application)","LO4: Develop further empathy: Relate to individuals who experience difficulties with accessibility to sound and speech (Comprehension)"]', 'Jan Guillermo, Saad Khan, Heather Moses, Manali Chakraborty, Komal Sorte, Sakshi Karnawat', 'https://all.rit.edu/Lab1/', null, e'In this lab, you will learn why it is important to create software
            that is accessible to users with hearing impairments.
            You will learn how organizations like the National Association of the Deaf (NAD)
            fought for easier access for hearing impaired individuals,
            increase your understanding through an interactive module about hearing impairments,
            view related media to reinforce the topic, and take a quiz to test your knowledge. Click "Next" to start!', e'{
    "piechart":
       {"header":"Approximate Deaf and Hard of Hearing Population in the United States",
       "caption":[""],
       "data":{
          "labels": [
                "Deaf (ASL is primary language) [millions]",
                "Oral Deaf [millions]",
                "Profound hearing loss [millions]",
                "Severe hearing loss [millions]",
                "Moderate hearing loss [millions]",
                "Mild hearing loss [millions]"
             ],
          "datasets": [
                   {
                   "label": "Approxiate Deaf and Hard of Hearing Population in the United States",
                   "borderColor": "black",
                   "backgroundColor": ["#d73027", "#fc8d59", "#fee090", "#e0f3f8", "#91bfdb", "#4575b4"],
                   "data": [1.08, 1.08, 3.6, 8.64, 10.8, 10.8],
                   "borderWidth": "1"
                   }
             ]
          }
    },
	"description":{
		"header":"",
		"content":""
	},
	"body":[
		{
			"header":"Accessibility Standards",
			"type":"",
			"content":["In order to establish accessibility standards throughout government-run technology applications, allowing for anyone with or without a disability to interact with fundamental government websites, kiosks, and mobile applications, Section 508 of the Rehabilitation Act was established in 1998. This section outlines all of the necessary components of web infrastructure to keep its promise to ensure applications are accessible to all. Section 508.C & D is fundamental to this project, as it outlines the necessity for applications to use alternative approaches to make audio cues more accessible to meet the WCAG AAA standards. This relates directly to this web application, as its main focus is to outline and teach the necessity of creating accessible software to ensure individuals with hearing loss can properly identify prominent information in student’s web applications moving forward."]
		},
		{
			"header":"",
			"type":"links",
			"content":[
				{
					"name":"Section 508 of the Rehabilitation Act",
					"link":"https://www.section508.gov/"
				},
				{
					"name":"Section 508.C & D",
					"link":"https://www.access-board.gov/ict/app-d.html#subpart_c"
				},
				{
					"name":"WCAG AAA standards",
					"link":"https://www.w3.org/WAI/standards-guidelines/wcag/#versions"
				}
			]
		},
		{
			"header":"Validators",
			"type":"",
			"content":["Existing validators, such as AChecker, can help to ensure this standard is met. Validators analyze a webpage by inputting a URL and ensure that the page follows the WCAG\'s Perceivable accessibility principle. If software is not accessible to people with hearing loss, this can be in violation of the American with Disabilities Act (ADA) and the individual could sue the company for their inaccessible software."]
		},
		{
			"header":"",
			"type":"links",
			"content":[
				{
					"name":"AChecker",
					"link":"https://achecker.achecks.ca/checker/index.php"
				},
				{
					"name":"WCAG\'s Perceivable accessibility principle",
					"link":"https://www.w3.org/TR/WCAG21/#perceivable"
				},
				{
					"name":"ADA",
					"link":"https://www.ada.gov/ada_intro.htm"
				}
			]
		},
		{
			"header":"NAD vs Netflix Lawsuit",
			"type":"",
			"content":["In 2011, the National Association of the Deaf (NAD) filed a lawsuit against Netflix due to the lack of closed captioning in their streaming videos, which is considered as a violation of the ADA. More than half of all Americans use Netflix. Thus it must be made accessible to Deaf and Hard of Hearing viewers. Netflix argues that the ADA only specified that \\"places of public accommodation\\" must be accessible to people with disabilities and its business cannot be considered a \\"place of public accommodation\\" since it is not a physical place. Hence, Netflix is not subject to the ADA. NAD argued that the Internet is not exempt from the ADA, and Netflix is considered a shared or public activity, which makes the ADA applicable. The judge ruled in favor of the NAD\'s argument. Thus, Netflix had to add subtitles for their streaming videos (shown in Figure 1) to make their website accessible for Deaf and Hard of Hearing users."]
		},
		{
			"header":"",
			"type":"image",
			"content":{
				"image":"/netflix_subtitles.jpg",
				"alt":"Netflix\'s implemented subtitles settings",
				"sub_caption":"Figure 1",
				"caption":"Netflix\'s Implemented Captions"
			}
		},
		{
			"header":"",
			"type":"links",
			"content":[
				{
					"name":"Netflix Lawsuit",
					"link":"https://www.3playmedia.com/2015/07/23/nad-v-netflix-ada-lawsuit-requires-closed-captioning-on-streaming-video/"
				}
			]
		},
        {
			"header":"Professional Responsibility",
			"type":"",
			"content":["As software developers, we have a professional responsibility to uphold the Association for Computing Machinery (ACM) code of ethics, the Convention on the Rights of Persons with Disabilities (CRPD), and our own personal morals. We as individuals must ensure that we contribute to society and to human well-being, acknowledging that all people are stakeholders in computing (ACM 1.1) and that we are fair and take action not to discriminate (ACM 1.4). On top of this, we must take into account the protection and promotion of the human rights of persons with disabilities in all policies and programmes, including our web development (CRPD Article 4.C). In order to ensure we are compliant with all of these professional responsibilities, as well as ensure we as individuals are upholding our own morals, alternative approaches to audio cues must be considered in everything we create for the web, as without it, we are not treating individuals with a hearing loss as a stakeholder in computing, we are discriminating against their use of our applications, and we are not protecting the rights of these individuals to be able to access the internet the same as everyone else. Section 508.C is vital to the continued success of web applications on the internet."]
		},
		{
			"header":"",
			"type":"links",
			"content":[
				{
					"name":"ACM Code of Ethics",
					"link":"https://achecker.achecks.ca/checker/index.php"
				},
				{
					"name":"CRPD",
					"link":"https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities.html"
				},
				{
					"name":"ACM 1.1",
					"link":"https://www.acm.org/code-of-ethics#h-1.1-contribute-to-society-and-to-human-well-being,-acknowledging-that-all-people-are-stakeholders-in-computing."
				},
				{
					"name":"ACM 1.4",
					"link":"https://www.acm.org/code-of-ethics#h-1.4-be-fair-and-take-action-not-to-discriminate."
				},
				{
					"name":"CRPD Article 4.C",
					"link":"https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities/article-4-general-obligations.html"
				},
				{
					"name":"Section 508.C",
					"link":"https://www.access-board.gov/ict/app-d.html#subpart_c"
				}
			]
		}
	],
	"footer":{
		"links":[
			{
				"name":"Hearing Loss Association of America",
				"link":"https://www.nchearingloss.org"
			}
		]
	}
}', e'  [{"title":"Audio Cues","link":"https://www.youtube.com/embed/vU_Di8EtF3M"},{"title":"Audio Cues Lecture","link":"https://www.youtube.com/embed/Wlf8A0w66o0"}]
', e'[
  {
    "question": "What is an audio cue?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "A vibration that conveys key information"
      },
      {
        "val": 1,
        "type": "1",
        "content": "A playing sound that conveys key information"
      },
      {
        "val": 0,
        "type": "2",
        "content": "A visual indicator that conveys key information"
      },
      {
        "val": 0,
        "type": "3",
        "content": "None of the above"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "How many people (aged 18 and over) with hearing loss are there in the United States?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "20-30 million people"
      },
      {
        "val": 1,
        "type": "1",
        "content": "30-40 million people"
      },
      {
        "val": 0,
        "type": "2",
        "content": "40-50 million people"
      },
      {
        "val": 0,
        "type": "3",
        "content": "50-60 million people"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "When should accessibility be considered in the development process?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "At the end"
      },
      {
        "val": 1,
        "type": "1",
        "content": "From the beginning"
      },
      {
        "val": 0,
        "type": "2",
        "content": "Whenever the developer feels it\'s necessary"
      },
      {
        "val": 0,
        "type": "3",
        "content": "Only if it\'s needed for the project"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "What does the \'Perceivable\' accessibility principle mean?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "User interface components and navigation must be operable."
      },
      {
        "val": 1,
        "type": "1",
        "content": "Information and user interface components must be presentable to users in ways they can perceive."
      },
      {
        "val": 0,
        "type": "2",
        "content": "Information and the operation of user interface must be understandable."
      },
      {
        "val": 0,
        "type": "3",
        "content": "None of the above"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Do users with hearing loss have a disadvantage when they use applications that utilize audio cues?",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "Yes"
      },
      {
        "val": 0,
        "type": "1",
        "content": "No"
      }
    ],
    "multiChoice": false
  }
]
', true),
 (2, 'Accessibility to Color Blindness', 'Color Blindness', 'Accessibility', '/colorblindness.jpg', 'Learn more about designing the web for color blind individuals.', 'This lab explores accessibility issues involving color blindness. This will be introduced to the user through a simulated color blind lens. The user will then be asked to navigate through the exercise with the lens activated and once without. The user will then be asked to implement accessible colors that will allow every user to have the same experience.', '["LO1: Knowledge of user significance, characteristics, and needs: Recognize the significance of the population that is colorblind, the types of colorblindness that they have, and their needs for accessible use of software (Knowledge)","LO2: Exposure to and analysis of poorly accessible design: Examine a software application that doesn’t properly accommodate accessibility for those who are colorblind (Analysis)","LO3: Apply solutions to solve access problems: Use knowledge of accessibility design solutions to construct corrective measures to allow previously inaccessible software to become accessible to appropriate parties (Application)","LO4: Develop further empathy: Relate to individuals who experience difficulties with accessibility to colorblindness (Comprehension)"]', 'Scott Frauenknecht', 'https://all.rit.edu/Lab2/', null, e'In this lab, you will learn about why it is important to create
            software that is accessible to users with visual impairments.
            You will learn about different color vision deficiencies,
            increase your understanding through an interactive module about
            visual impairments, view related media to reinforce the topic, and take a
            quiz to test your knowledge. Click "Next" to start!', e'{
	"piechart":
		{"header":"Color Vision Deficiencies",
		"caption":["Color Vision Deficiencies (or CVDs) affects 1 in 12 men (8%) and 1 in 200 Women across the world.","The pie chart above shows this data in a population of 10,000 people."],
		"data":{
			"labels": [
				"Males With A CVD",
				"Females With A CVD",
				"Males Without A CVD",
				"Females Without A CVD"
			  ],
			  "datasets": [
				{
				  "label": "Color Visions Deficiencies in a Population of 10,000 People",
				  "borderColor": "black",
				  "backgroundColor": ["orange","darkred", "lightblue", "purple"],
				  "data": [416.67, 25, 4583.33, 4975],
				  "borderWidth": "2"
				}
			  ]
		  }
	},
	"description":"",
	"body":[
		{
			"header":"Four Main Types of Color Vision Deficiencies",
			"type":"non-bullet-list",
			"content":[
				{
					"header":"Protanomaly (proht-n-om-uh-lee):",
					"content":"There is a reduced sensitivity to red light. Most people with this have issues distinguishing between reds, greens, browns, and oranges. There can also be confusion when comparing blues and purples to one another. This is one of the most common forms of a CVD."
				},
				{
					"header":"Deuteranomaly (deu-ter-​anom-a-ly):",
					"content":"There is a reduced sensitivity to green light. Most people with this also have issues distinguishing between reds, greens, browns, and oranges. They can also confuse blues and purples when copmpared to one another. This is the other most common form of a CVD."
				},
				{
					"header":"Tritanomaly (trī′tə-nŏm′ə-lē):",
					"content":"There is a reduced sensitivity to blue light. Most people with this have issues distinguishing between blue and yellow, violet and red, and blue and green. Most of the colors someone with this would see are pink, red, black, white, grey, and turquoise. This CVD is extremely rare."
				},
				{
					"header":"Monochromacy (mon-o-chro-ma-cy):",
					"content":"Individuals with this deficiency can see no colors at all. Everything is a shade of grey that ranges between white and black. This is incredibly rare (approximately 1 in 33,000 people are diagnosed with this condition). Due to the range of colors these individuals can see, it can make it difficult to perform even everyday tasks."
				}
			]
		},
		{
			"header":"Each form of CVD has varying levels of severity.",
			"type":"",
			"content":[]
		},
		{
			"header":"What, in the eye, is causing colors to be perceived in this way?",
			"type":"",
			"content":["For individuals with Protanomaly, Deuteranomaly, and Tritanomaly, they are considered dichromatic, meaning that they only have two types of cones in their eyes to perceived colors. People without these deficiencies have three cones and each cone is responsible for perceiving red, green, and blue. This is where the reduced sensitivity comes from, as the reduction in one cone causes a section of the color spectrum to not be viewable to the individual. This section happens to overlap for individuals with Protanomaly and Deuteranomaly, which is why some individuals may refer to their deficiency as \'red/green colorblindness\', as these individuals may tend to see the world in very similar ways."]
		},
		{
			"header":"Causes of color vision deficiencies:",
			"type":"",
			"content":["Color vision deficiencies are normally caused by genetic conditions and are usually inheritied from an individual\'s parents. Men are more often impacted than women because the gene is carried in the X chromosome. There can be some other cases that cause color vision deficiencies however their causes are still being researched to determine the exact cause."]
		},
		{
			"header":"At this moment in time, there is no cure to these deficiencies.",
			"type":"",
			"content":[]
		}
	],
	"footer":{
		"links":[
			{
				"name":"Colour Blind Awareness",
				"link":"http://www.colourblindawareness.org/"
			},
			{
				"name":"American Optometric Association",
				"link":"https://www.aoa.org/patients-and-public/eye-and-vision-problems/glossary-of-eye-and-vision-conditions/color-deficiency"
			},
			{
				"name":"Colblindor",
				"link":"https://www.color-blindness.com/"
			}
		]
	}
}
', '[{"title":"Color Blindness Testimony","link":"https://www.youtube.com/embed/d6KKsmmOKEI"},{"title":"Color Contrast Lecture","link":"https://www.youtube.com/embed/zrl0CW8m-Qk"}]', e'[
  {
    "question": "Which of the following best describes \'color contrast\'?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "A measurement of a color’s brightness"
      },
      {
        "val": 0,
        "type": "1",
        "content": "A condition resulting in reduced sensitivity to green light"
      },
      {
        "val": 1,
        "type": "2",
        "content": "A measurement of the difference between two colors when they are layered on top of each other"
      },
      {
        "val": 0,
        "type": "3",
        "content": "None of the above"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Which of the following is NOT a form of color vision deficiency?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Protanopia"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Deuteranopia"
      },
      {
        "val": 0,
        "type": "2",
        "content": "Tritanopia"
      },
      {
        "val": 1,
        "type": "3",
        "content": "Dichrompia"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "What is the minimum contrast allowed by the WCAG AAA Color Standards?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "4"
      },
      {
        "val": 1,
        "type": "1",
        "content": "7"
      },
      {
        "val": 0,
        "type": "2",
        "content": "9"
      },
      {
        "val": 0,
        "type": "3",
        "content": "11"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Which of the following is the best way to correct an improper ratio in color contrast?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Do nothing, it’s impossible to fix"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Make everything black and white"
      },
      {
        "val": 1,
        "type": "2",
        "content": "Use a color contrast calculator"
      },
      {
        "val": 0,
        "type": "3",
        "content": "None of the above"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "If placed in a color contrast calculator, which of the following would result in a proper color contrast ratio?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Dark red placed on another shade of dark red"
      },
      {
        "val": 0,
        "type": "1",
        "content": "White placed on light pink"
      },
      {
        "val": 1,
        "type": "2",
        "content": "Light pink placed on black"
      },
      {
        "val": 0,
        "type": "3",
        "content": "Black placed on black"
      }
    ],
    "multiChoice": false
  }
]
', true),
(3, 'Accessibility with Screen Readers', 'Screen Readers', 'Accessibility', '/screen_reader.jpg', 'Learn more about screen readers.', 'This lab will introduce the different types of vision impairments and the importance of creating software that is accessible to these users utilizing screen readers. Participants will learn how to design a screen reader-friendly interface. In the exercise portion of the lab, they will encounter an interface that is not screen-reader friendly, and learn how to implement an interface that is navigable by screen readers.', '["LO1: Knowledge of user significance, characteristics, and needs: Recognize the significance of the population that has vision impairments, and their needs for accessible use of software (Knowledge)","LO2: Exposure to and analysis of poorly accessible design: Examine a software application that doesn’t properly accommodate accessibility for people with vision impairments (Analysis)","LO3: Apply solutions to solve access problems: Use knowledge of accessibility design solutions to construct corrective measures to allow previously inaccessible software to become accessible to appropriate parties (Application)","LO4: Develop further empathy: Relate to individuals who experience difficulties with accessibility with screen readers (Comprehension)"]', 'Parth Sane, Saad Khan, Heather Moses, Mark Sternefeld, Christopher Savan', 'https://all.rit.edu/Lab3/', null, e'In this lab, you will learn about why it is important to create software
                that is accessible to users who utilize screenreaders.
                You will learn about using alt tags,
                increase your understanding through an interactive module about
                screenreaders and alt tags, view related media to reinforce the topic, and take a quiz
                to test your knowledge. Click "Next" to start!', e'{
	"piechart":
		{"header":"Approximate Visually Impaired Population in the World",
		"caption":["Currently, as high as 80% of all visual impairments are preventable or curable.","Globally the number of people of all ages visually impaired is estimated to be 285 million, of whom 39 million are blind.","People of age 50 and over account for 82% of the blind.","Understanding the degree of visual impairment and its causes are important in adequately allocating resources to various health areas of work."],
		"data":{
			"labels": ["World Population (Millions)", "Visually Impaired (Millions)"],
			"datasets": [
			  {
				"label": "Visually Impaired in a Population of 6,697 People",
				"borderColor": "black",
				"backgroundColor": ["blue", "red"],
				"data": [6697, 285],
				"borderWidth": "1"
			  }
			]
		  }
	},
	"description":{
		"header":"What is a Screen Reader?",
		"content":"A screen reader is an essential software program that aids visually impaired or blind users in reading text displayed on a computer screen. This is achieved through the use of a speech synthesizer or braille display. In simple terms, screen readers turn text that is displayed on a screen into a tactile or auditory form, or both."
	},
	"body":[
		{
			"header":"What are some examples of visual impairment?",
			"type":"study__list",
			"content":["Diabetic retinopathy","Childhood blindness","Age-related macular degeneration (AMD)","Corneal opacities","Glaucoma","Trachoma","Cataracts","Uncorrected refractive errors"]
		},
		{
			"header":"Effect that impaired vision has on the computing world",
			"type":"",
			"content":["By acknowledging that visual impairment is a major global health issue, the computing world made necessary advances in screen readers. Screen readers have increased in both availability and popularity. One example of such screen readers is JAWS (Job Access With Speech) which is the world’s most popular screen reader. Screen readers now include many more features that allow the visually impaired to get through life much more easily."]
		},
		{
			"header":"Usability tips for screen reader friendly interfaces:",
			"type":"study__list",
			"content":["Use many headings and subheadings","Code headings correctly with proper size","Keep big blocks of text short","Increase button size","Include “Skip” links","Decrease the number of links","Limit the use of popups"]
		}
	],
	"footer":{
		"links":[
			{
				"name":"American Foundation for the Blind",
				"link":"https://www.afb.org/"
			},
			{
				"name":"World Health Organization",
				"link":"https://www.who.int/"
			},
			{
				"name":"Braille Institute",
				"link":"https://www.brailleinstitute.org/"
			}
		]
	}
}', '[{"title":"Accessibility for Blind/Visually-Impaired Users","link":"https://www.youtube.com/embed/1by5J7c5Vz4"},{"title":"How a blind developer uses accessibility features in Visual Studio","link":"https://www.youtube.com/embed/94swlF55tVc?"}]', e'[
  {
    "question": "How many people around the world have visual impairments?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "12 million"
      },
      {
        "val": 1,
        "type": "1",
        "content": "285 million"
      },
      {
        "val": 0,
        "type": "2",
        "content": "39 million"
      },
      {
        "val": 0,
        "type": "3",
        "content": "500 million"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "What is the most popular screen reader currently available?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "COBRA"
      },
      {
        "val": 0,
        "type": "1",
        "content": "BRLTTY"
      },
      {
        "val": 1,
        "type": "2",
        "content": "JAWS"
      },
      {
        "val": 0,
        "type": "3",
        "content": "iMax for Mac"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Which of the following is one way to make a screen reader interface more user-friendly?",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "Use many headings and subheadings"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Increase the number of paragraphs"
      },
      {
        "val": 0,
        "type": "2",
        "content": "Decrease text size"
      },
      {
        "val": 0,
        "type": "3",
        "content": "Increase the number of buttons and links"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "About what percentage of all blind people are aged 50 years or older?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "55%"
      },
      {
        "val": 0,
        "type": "1",
        "content": "70%"
      },
      {
        "val": 1,
        "type": "2",
        "content": "82%"
      },
      {
        "val": 0,
        "type": "3",
        "content": "92%"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Which of the following should you do to ensure that an image is made accessible to a screen reader?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Make the image smaller"
      },
      {
        "val": 1,
        "type": "1",
        "content": "Use an alt attribute to communicate the function of the image"
      },
      {
        "val": 1,
        "type": "2",
        "content": "Provide a brief description of the image"
      },
      {
        "val": 0,
        "type": "3",
        "content": "Use it to add ambiance or visual interest to the page"
      }
    ],
    "multiChoice": true
  }
]', true),
(4, 'Accessibility to Dexterity', 'Dexterity', 'Accessibility', '/hand.jpg', 'Learn more about designing the web for individuals with motor and dexterity impairments.', 'This lab gives an overview of dexterity impairments and the effects they can have on a person’s ability to use software. In addition, the lab gives several examples of web standards related to dexterity accessibility. Users are immersed in an environment that simulates the experience of a user with a dexterity impairment by having to click a small, moving button. The user then updates the code to make the button large enough to follow accessibility guidelines. Additionally, users also experience filling out a form using only their keyboard. The user then makes updates to the code to make the form accessible to those with dexterity impairments.', '["LO1: Knowledge of user significance, characteristics, and needs: Recognize the significance of the population that has dexterity impairments , the types of dexterity impairments that they have, and their needs for accessible use of software (Knowledge)","LO2: Exposure to and analysis of poorly accessible design: Examine a software application that doesn’t properly accommodate accessibility for people with dexterity impairments (Analysis)","LO3: Apply solutions to solve access problems: Use knowledge of accessibility design solutions to construct corrective measures to allow previously inaccessible software to become accessible to appropriate parties (Application)","LO4: Develop further empathy: Relate to individuals who experience difficulties with accessibility to dexterity (Comprehension)"]', 'Saad Khan, Heather Moses', 'https://all.rit.edu/Lab4/', null, e'In this lab, you will learn about why it is important to create software
                that is accessible to users with dexterity impairments.
                You will learn about issues related to dexterity,
                increase your understanding through an interactive module about
                dexterity impairments, view related media to reinforce the topic,
                and take a quiz to test your knowledge. Click "Next" to start!', e'{
	"piechart":{
		"header":"Approximate Population with Dexterity Impairments in the US",
		"caption":["16.3% of the US adult population is affected by a mobility impairment"],
		"data":{
				"labels": [
					"Population without Dexterity Impairments (Millions)",
					"Population with Dexterity Impairments (Millions)"
				],
				"datasets": [
					{
					  "label": "Dexterity Impaired in a Population of 328 Million People",
					  "borderColor": "black",
					  "backgroundColor": ["blue", "red"],
					  "data": [328, 40.7],
					  "borderWidth": "1"
					}
				]
		}
	},
	"description":{
		"header":"What Is a Dexterity Impairment?",
		"content":"Many types of dexterity impairments exist, but all limit the functionality of one or more limbs and cause the loss of fine control of movement. They can be caused by an injury, a genetic disorder, or a disease. For example, Muscular dystrophy is a genetic disorder that causes progressive weakness in the muscles."
	},
	"body":[
		{
			"header":"Examples of Dexterity Impairments",
			"type":"study__list",
			"content":["Spinal cord injury","Loss or damage of limb","Cerebral palsy","Muscular dystrophy","Multiple sclerosis","Spina bifida","Amyotrophic Lateral Sclerosis (ALS)","Arthritis","Parkinson’s disease","Essential tremor"]
		},
		{
			"header":"Effects of Dexterity Impairments on Software Usage",
			"type":"",
			"content":["Dexterity impairments can make it difficult to use traditional technologies such as a keyboard or mouse. To combat these challenges, people with dexterity impairments can use various assistive technologies. For example, voice-activated technologies can be used to browse the web with only voice commands. Other technologies include keyboard-only navigation, alternative keyboards, switch devices, and on-screen keyboard programs. It is important to be aware that some users may become fatigued from using assistive technologies."]
		},
		{
			"header":"Accessibility Standards for Dexterity Impairment",
			"type":"",
			"content":["The W3C organization makes several suggestions for making software accessible to users with dexterity impairments. One guideline is to ensure that all features can be accessed via a keyboard. In addition, another guideline is to make all touch targets (for example, a button) at least 9mm high by 9mm wide."]
		}
	],
	"footer":{
		"links":[
			{
				"name":"Assistive Technologies",
				"link":"https://webaim.org/articles/motor/assistive"
			},
			{
				"name":"W3 Mobile Accessibility",
				"link":"https://www.w3.org/TR/mobile-accessibility-mapping/"
			},
			{
				"name":"W3 Physical Disabilities",
				"link":"https://www.w3.org/WAI/people-use-web/abilities-barriers/#physical"
			}
		]
	}
}', '[{"title":"Motor Impaired User Review","link":"https://www.youtube.com/embed/yE1S0Biuxcc"},{"title":"Digital Accessibility User Impact: Motor Disabilities","link":"https://www.youtube.com/embed/nnDw7JPJBAE"}]', e'[
  {
    "question": "What is a dexterity/mobility impairment?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Inability to hear"
      },
      {
        "val": 1,
        "type": "1",
        "content": "Loss of fine control of movement"
      },
      {
        "val": 0,
        "type": "2",
        "content": "Loss of vision"
      },
      {
        "val": 0,
        "type": "3",
        "content": "Inability to distinguish between certain colors"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "What are some examples of assistive technology for people with dexterity impairments?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Altered keyboards"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Voice/speech recognition systems"
      },
      {
        "val": 0,
        "type": "2",
        "content": "On-screen keyboard programs"
      },
      {
        "val": 1,
        "type": "3",
        "content": "All of the above"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "What is one way to improve web accessibility for people with dexterity/mobility impairments?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Use many headings and subheadings"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Ensure that text and interactive elements have a color contrast ratio of at least 4.5:1"
      },
      {
        "val": 0,
        "type": "2",
        "content": "Use audio cues upon completion of an interaction"
      },
      {
        "val": 1,
        "type": "3",
        "content": "Ensure all functions can be accessed with the keyboard"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "A large portion of the elderly community deal with worsening motor capabilities, making it hard for them to use the web.",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "True"
      },
      {
        "val": 0,
        "type": "1",
        "content": "False"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Which of the following are challenges that people with dexterity/mobility impairments experience?",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "Users may become fatigued when using the assistive technologies"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Users are able to physically interact with their hardware device"
      },
      {
        "val": 0,
        "type": "2",
        "content": "Users may become well-adapted to the assistive technologies over time"
      },
      {
        "val": 1,
        "type": "3",
        "content": "Users may not be able to use the mouse or peripherals"
      }
    ],
    "multiChoice": true
  }
]', true),
 (5, 'Accessibility to Cognitive Impairments', 'Cognitive Impairments', 'Accessibility', '/cognitiveimpairment.jpg', 'Learn more about designing the web for users with cognitive impairments.', 'This lab introduces cognitive accessibility challenges. The user will be introduced to common cognitive impairments and what difficulties a person with said impairment would experience. During the exercise portion the user will be brought through certain scenarios that are inaccessible to those with said impairments. The user will then make changes to improve accessibility for said scenario.', '["LO1: Knowledge of user significance, characteristics, and needs: Recognize the significance of the population that has cognitive impairments, the types of cognitive impairments that they have, and their needs for accessible use of software (Knowledge)","LO2: Exposure to and analysis of poorly accessible design: Examine a software application that doesn’t properly accommodate accessibility for people with cognitive impairments (Analysis)","LO3: Apply solutions to solve access problems: Use knowledge of accessibility design solutions to construct corrective measures to allow previously inaccessible software to become accessible to appropriate parties (Application)","LO4: Develop further empathy: Relate to individuals who experience difficulties with accessibility to cognitive impairments (Comprehension)"]', 'Saad Khan', 'https://all.rit.edu/Lab5/', null, e'In this lab, you will learn about why it is important to create software
               that is accessible to users who face cognitive impairments.
               You will learn about using clear descriptive headings, handling time driven notifications, and
               creating informative form responses. Afterwards, you will view related media to reinforce the topic and take a quiz
               to test your knowledge. Click "Next" to start!
', e'{
	"piechart":
		{"header":"How Many People are Affected?",
		"caption":["Survey information gathered by the CDC concludes that as high as 11% of all Americans face a cognitive disability resulting in serious difficulty concentrating, remembering, or making decisions.","According to research conducted by the National Institute of Health (NIH), the current prevalence of adult ADHD in the US is 4.4%. Another NIH research study concluded that the prevalence of dyslexia in the US is 20%, or one in five people.","Understanding the degree of cognitive impairment and its causes is important in adequately allocating resources for research in accessibility improvements."],
		"data":{
			"labels": [
					"US Population without Cognitive Impairment (Millions)",
					"US Population with Cognitive Disability (CDC Survey) (Millions)",
                    "US Population with Dyslexia (Millions)",
                    "US Population with ADHD (Millions)"
				],
			"datasets": [
						{
						"label": "Cognitively Impaired in a Population of 328 People",
						"borderColor": "black",
						"backgroundColor": ["#335C67", "#9e2a2b", "#FFF3B0", "#E09F3E"],
						"data": [212, 36, 66, 14],
						"borderWidth": "1"
						}
				]
			}
	},
	"description":{
		"header":"What is a Cognitive Impairment?",
		"content":"The term cognitive impairment or cognitive disability refers to a broad range of disabilities including intellectual disabilities and age-related issues regarding thinking and remembering, as well as learning disabilities and other cognitive issues such as dyslexia and attention deficit hyperactivity disorder (ADHD)."
	},
	"body":[
        {
			"header":"",
			"type":"links",
			"content":[
				{
					"name":"Cognitive Disability Prevalence (CDC)",
					"link":"https://www.cdc.gov/ncbddd/disabilityandhealth/infographic-disability-impacts-all.html"
				},
				{
					"name":"ADHD Prevalence (NIH)",
					"link":"https://www.nimh.nih.gov/health/statistics/attention-deficit-hyperactivity-disorder-adhd"
				},
				{
					"name":"Dyslexia Prevalence Research (NIH)",
					"link":"https://pubmed.ncbi.nlm.nih.gov/33278155/"
				}
			]
		},
		{
			"header":"Common Challenges",
			"type":"study__list",
			"content":["Understanding content","Remembering how to complete tasks","Confusion caused by inconsistent or non-traditional web page layouts","Keeping focus while completing a task","Different processing speed, requiring additional time"]
		},
		{
			"header":"How to Address These Problems?",
			"type":"non-bullet-list",
			"content":[
				{
					"header":"",
					"content":"WCAG, Web Content Accessibility Guidelines, includes several guidelines to improve cognitive accessibility. They define 17 specific guidelines, of which six are especially relevant for cognitive accessibility."
				},
				{
					"header":"Adaptability",
					"content":"All information should be available in a form that can be perceived by all users. For example, the information could be spoken aloud via a narration tool. Thus you should ensure the content can be understood by the software."
				},
				{
					"header":"Time",
					"content":"It is important to allow users the time they require to complete tasks. Guideline 2.2 states \'provide users enough time to read and use content.\' People with cognitive disabilities may require more time to read content, or to perform functions such as filling out forms."
				},
				{
					"header":"Navigation",
					"content":"Guideline 2.4 states to include clear and descriptive headings so users can easily find information and understand relationships between different content sections."
				},
				{
					"header":"Readability",
					"content":"Guideline 3.1 states \'make text content readable and understandable.\' Keep the writing style simple and easy to understand."
				},
				{
					"header":"Predictability",
					"content":"Guideline 3.2 states to \'make web pages appear and operate in predictable ways.\' Use consistency with the page layout."
				},
				{
					"header":"Input Assistance",
					"content":"Guideline 3.3 states to \'help users avoid and correct mistakes.\' If they do make a mistake, ensure the message allows them to easily fix the error."
				}
			]
		},
		{
			"header":"Practical Applications of Cognitive Accessibility",
			"type":"non-bullet-list",
			"content":[
				{
					"header":"",
					"content":"We all enjoy online shopping. However, a person’s ability to use websites effectively declines by 0.8% every year over the age of 25, according to Nielsen Norman Group. Optimally designing for memory limitations will be especially important as the population ages. These techniques include:"
				},
				{
					"header":"User Authentication",
					"content":"Offer at least one alternative method that does not rely on a user to memorize character strings."
				},
				{
					"header":"Don’t hide important/frequent controls",
					"content":"Show both the text and icon labels for controls making it easier for users to remember their purpose."
				},
				{
					"header":"Grouping Content",
					"content":"Group similar items semantically and visually with a suggested maximum group size of five. This makes decision the process easier when choosing between similar items."
				},
				{
					"header":"Path Markers",
					"content":"Remind site visitors where they are in a process."
				}
			]
		}
	],
	"footer":{
		"links":[
			{
				"name":"Mozilla Cognitive Accessibility",
				"link":"https://developer.mozilla.org/en-US/docs/Web/Accessibility/Cognitive_accessibility"
			},
			{
				"name":"W3 Cognitive Accessibility",
				"link":"https://www.w3.org/WAI/cognitive/"
			},
			{
				"name":"Making Content Accessible",
				"link":"https://www.w3.org/TR/coga-usable/"
			}
		]
	}
}', '[{"title":"Dyslexia & Web Accessibility","link":"https://www.youtube.com/embed/9XiHhQikNrY"},{"title":"Web Accessibility Perspectives: Understandable Content","link":"https://www.youtube.com/embed/BYRxF2yInfA"}]', e'[
  {
    "question": "How many people in the US have cognitive impairments?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "1.3 million"
      },
      {
        "val": 1,
        "type": "1",
        "content": "16 million"
      },
      {
        "val": 0,
        "type": "2",
        "content": "285 million"
      },
      {
        "val": 0,
        "type": "3",
        "content": "500 million"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "What is a common challenge for cognitively impaired users?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Hearing audio cues"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Clicking large buttons"
      },
      {
        "val": 0,
        "type": "2",
        "content": "Distinguishing colors apart"
      },
      {
        "val": 1,
        "type": "3",
        "content": "Working under time constraints"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "How can you improve accessibility for cognitively impaired users?",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "Use proper headings and subheadings"
      },
      {
        "val": 1,
        "type": "1",
        "content": "Clearly define any errors and suggestions to fix them"
      },
      {
        "val": 1,
        "type": "2",
        "content": "Provide them enough time to read the content"
      },
      {
        "val": 0,
        "type": "3",
        "content": "Increase the number of buttons and links"
      }
    ],
    "multiChoice": true
  },
  {
    "question": "What are various types of cognitive disabilities?",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "Alzheimer\'s"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Deuteranope"
      },
      {
        "val": 1,
        "type": "2",
        "content": "Dementia"
      },
      {
        "val": 1,
        "type": "3",
        "content": "Dyslexia"
      }
    ],
    "multiChoice": true
  },
  {
    "question": "What is a common challenge of dyslexic users?",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "Trouble matching letters with the sounds of those letters"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Writing with their non dominant hand"
      },
      {
        "val": 1,
        "type": "2",
        "content": "Spelling"
      },
      {
        "val": 0,
        "type": "3",
        "content": "Memorizing pronouns"
      }
    ],
    "multiChoice": true
  }
]
', true), (6, 'Ethics of AI', 'Ethics of AI', 'AI', '/ethicsai.jpg', 'Learn more about the ethics behind AI.', 'This lab introduces the ethics behind AI. The user will be introduced to what goes into the development of an AI and what needs to be done to make it ethical. The exercise portion will bring the user through multiple scenarios where the AI has a bias against certain groups. The user will then be asked about the issues bias brings and asks the user to make changes to the AI.', '["LO1: Recognize different ethical challenges in AI (Comprehension)","LO2: Practice consideration of ethics in a AI-related scenario (Application)","LO3: Diagnose ethical implications of choices made by AI (Synthesis)","SLO1 Supplemental: Assess impact and determine appropriate response to ethical scenarios (Synthesis)"]', 'Mark Sternefeld, Jaden Wedner, Kyle Messerle', 'https://all.rit.edu/Lab6/', null, 'In this lab, you will learn about the importance of ethical implications of using Artificial Intelligence (AI). You will learn about issues related to a lack of diversity and human biases in data, increase your understanding through an interactive module about bias in software, view related media to reinforce the topic, and take a quiz to test your knowledge. Click "Next" to start!', e'{
    "piechart":
       {"header":"AI use cases in manufacturing industry percentages worldwide as of 2020",
       "caption":[""],
       "data":{
          "labels": [
                "Quality Contol", "Inventory Management", "Monitoring Diagnostics", " Customer Care", "Personalization of Products", " Asset Maintenance"
             ],
          "datasets": [
                   {
                   "label": "AI use cases in manufacturing industry worldwide as of 2020",
                   "borderColor": "Black",
                   "backgroundColor": [
                      "#283D3B",
                      "#197278",
                      "#83A8A6",
                      "#EDDDD4",
                      "#C44536",
                      "#772E25"
                  ],
                   "data": [59,44,32,29,22,22],
                   "borderWidth": "1"
                   }
             ]
          }
    },
    "description":{
       "header":"What is an AI?",
       "content":"Artificial Intelligence (AI) is the study of simulating human thought processes to complete a task. An artificial intelligence processes data through advanced algorithms and can look through large amounts of data to effectively find patterns or features humans can possibly miss. The algorithms used to make the intelligence run are designed by human beings and are currently incapable of simulating human emotion. This intelligence does not have an I.Q. (Intelligence Quotient) since IQ is used to track the growth of intellgicence in children and can not be applied to a computer. Contemporarily, AI is used in conjunction with big data to analyze user data and adjust the company\'s practices to better serve their customers."
    },
    "body":[
        {
            "header":"Common uses of AI",
            "type":"study__list",
            "content":["Self-driving cars", "Online Shopping and retail", "Streaming Services and chatbots", "Cybersecurity and Surveillance", "Surgery analytics and Diagnosing diseases"]
        },
       {
          "header":"A.C.L.U v. Clearview AI",
          "type":"",
          "content":["On May 28th, 2020, The American Civil Liberties Union (ACLU), ACLU of Illinois, and the law firm Edelson PC filed a lawsuit against Clearview AI claiming a violation of Illinois residents\' privacy rights under the Illinois Biometric Information Privacy Act (BIPA). Clearview AI built a database which shows about 3 Billion facial images captured illegally of people all over the world without their consent and put them in a database giving access to private companies, wealthy individuals, and enforcement agencies. The AI captured millions of new faces instead of focusing on people who gave consent. This technology did not acknowledge harmful decisions inflicted on survivors of domestic violence, undocumented immigrants, communities of color, and many more. Clearview AI settled and agreed to limit the images by not releasing to private companies, including individuals, as well as allowing the public to opt-out of any search results. "]
       }
    ],
    "footer":{
       "links":[
            {
                "name":"Clearview AI Lawsuit",
                "link":"https://www.aclu.org/cases/aclu-v-clearview-ai"
            },
            {
                "name":"Risk of AI in Weapons",
                "link":"https://hms.harvard.edu/news/risks-artificial-intelligence-weapons-design"
            },
            {
                "name":"Privacy",
                "link":"https://cybersecurity.illinois.edu/policies-governance/privacy-considerations-for-generative-ai/"
            }
        ]
    }
  }
  ', e'[{"title":"Ethics & AI: Equal Access and Algorithmic Bias","link":"https://www.youtube.com/embed/tJQSyzBUAew"},
   {"title":"Moral Code: The Ethics of AI","link":"https://www.youtube.com/embed/GboOXAjGevA"}]', e'[
  {
    "question": "What field can AI be used in?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Self-driving cars"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Chatbots"
      },
      {
        "val": 0,
        "type": "2",
        "content": "Surveillance"
      },
      {
        "val": 1,
        "type": "3",
        "content": "All of the Above"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Does AI have an IQ?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Yes, AI is measured just like human intelligence."
      },
      {
        "val": 1,
        "type": "1",
        "content": "No, AI is measured differently than human intelligence."
      },
      {
        "val": 0,
        "type": "2",
        "content": "The computer science community is unsure."
      },
      {
        "val": 0,
        "type": "3",
        "content": "Yes, but AI is not measured the same as human intelligence."
      }
    ],
    "multiChoice": false
  },
  {
    "question": "What manufacturing industry uses AI most frequently?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Monitoring Diagnostics"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Inventory Management"
      },
      {
        "val": 1,
        "type": "2",
        "content": "Quality Control"
      },
      {
        "val": 0,
        "type": "3",
        "content": "Customer Care"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "How many facial images were captured illegally of people around the world by Clearview AI?",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "3 Billion"
      },
      {
        "val": 0,
        "type": "1",
        "content": "4 Billion"
      },
      {
        "val": 0,
        "type": "2",
        "content": "5 Billion"
      },
      {
        "val": 0,
        "type": "3",
        "content": "6 Billion"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Who is responsible for the management of AI?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Corporations"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Government"
      },
      {
        "val": 0,
        "type": "2",
        "content": "Society"
      },
      {
        "val": 1,
        "type": "3",
        "content": "All of the above"
      }
    ],
    "multiChoice": false
  }
]
', true), (7, 'AI Cybersecurity', 'AI Cybersecurity', 'AI', '/aicybersecurity.jpg', 'Learn more about the basics of AI in cybersecurity.', 'This lab will provide participants with a fundamental understanding of the core aspects of autonomous systems through a cybersecurity lens, which is a significant area of application for AI and Machine Learning. To strengthen this understanding, the participant will progress through a simulation of an autonomous system that will modify the access of sensitive files when security threats are present in the system.', '["LO1: Recognize foundational components of a cybersecurity-focused autonomous system (Comprehension)", "LO2: Use provided elements to demonstrate basic cyber security-focused autonomous systems in action (Application)", "LO3: Compose a minor alteration to an existing cyber security-focused autonomous system and assess its impacts (Evaluation)", "LO4: Recognize and identify the ethical impact of cyber security-focused autonomous systems and decision-making", "SLO1 Supplemental: Construct a basic cyber security-focused autonomous system (Synthesis)"]', 'Kelley Lam, Jonathan Cruz, Domenic Mangano, Janae Moring', 'https://all.rit.edu/Lab7/', null, e'In this lab, you will learn about the basics of AI and Machine Learning
through a cybersecurity lens. You will learn the fundamental components
and impact of AI and Machine Learning in a cybersecurity-focused environment.
Afterwards, you will view related media to reinforce the topic and take a quiz
to test your knowledge. Click "Next" to start!', e'{
  "piechart": {
    "header": "The Most Common Types of Cyber Crimes in 2020",
    "caption": [
      "Number of Americans who fell victim to these types of internet crimes in 2020."
    ],
    "data": {
      "labels": [
        "Phishing/Vishing/Smishing",
        "Non-Payment/Non-Delivery",
        "Extortion",
        "Personal Data Breach",
        "Identity Theft",
        "Spoofing"
      ],
      "datasets": [
        {
          "label": "Number of Americans who fell victim to these types of internet crimes in 2020.",
          "borderColor": "black",
          "backgroundColor": [
            "#d73027",
            "#fc8d59",
            "#fee090",
            "#e0f3f8",
            "#91bfdb",
            "#4575b4"
          ],
          "data": [
            241342,
            108869,
            76741,
            45330,
            43330,
            28218
          ],
          "borderWidth": "1"
        }
      ]
    }
  },
  "description": {
    "header": "What is Cybersecurity?",
    "type": "non-bullet-list",
    "content": "Cybersecurity is the use of technology to protect systems, data, devices, and applications from cyber attacks and cyber crimes. Cybersecurity aims to protect systems and technologies from any malware that may attempt to exploit them."
  },
  "body": [
    {
      "header": "Why is Cybersecurity Important?",
      "type": "non-bullet-list",
      "content": [
        {
          "header": "",
          "content": "Technology has become such a major part of our everyday lives. From cell phones to social media to software that we use for school and work, the truth is that many aspects of our lives are online. Whether cybersecurity seems interesting to you, or irrelevant, anyone who uses the internet is at risk of a cyber attack and needs cybersecurity."
        },
        {
          "header": "",
          "content": "As technology continues to be a prominent part of our lives, cyber crime continues to grow as a business. According to a 2020 report by McAfee, the estimated global monetary loss from cyber crime in 2020 was approximately one trillion dollars. The truth is that cybercrime continues to grow and the cost of resolving cyber security breaches is not cheap. Companies and organizations who experience cybersecurity breaches are charged significant fines for breaking privacy laws and also suffer from non-financial costs, such as time, damage to their reputation, and employee retention."
        },
        {
          "header": "",
          "content": "In an effort to improve cybersecurity, the use of machine learning has been incorporated into cybersecurity to address the increasing number of cyber attacks and threats. With machine learning, some cybersecurity tasks can be simplified; for example, repetitive tasks can be automated and algorithms can be used to identify threats. By doing so, machine learning can make cybersecurity simpler, cheaper, and more effective."
        },
        {
          "header": "Common Cyber Attacks",
          "content": ["Common cyber attacks that you may have heard of or experienced include: viruses that damage files or slow down computers, identity theft, password stealing/hacking, pop-up ads, and phishing emails with harmful links or attachments."
          ]
        }
      ]
    },
    {
      "header": "What is Machine Learning?",
      "type": "non-bullet-list",
      "content": [
        {
          "header": "",
          "content": [
            "Many people use the terms artificial intelligence and machine learning interchangeably, but they are not the same. Artificial intelligence is the ability of a computer to do tasks that require human intelligence and judgment. Machine learning, on the other hand, is the use of algorithms to get computers to perform and improve automatically through data analysis and experience instead of explicit programming. While they are not the same, machine learning is a subset of artificial intelligence."
          ]
        }
      ]
    },
    {
      "header": "Fundamentals of Machine Learning",
      "type": "non-bullet-list",
      "content": [
        ""
      ]
    },
    {
      "header": "Supervised Learning",
      "type":"non-bullet-list",
      "content": [
        {
          "header": "",
          "content": "Supervised learning is when the machines are trained with labeled training data and the machines use the labeled data to predict the output correctly. In other words, the machine is learning and being trained under the “supervision” of the labeled training data. There are two types of supervised learning tasks: Regression and Classification."
        },
        {
          "header": "Regression",
          "content": "The algorithm is used to see if there is a relationship between the input and output variables in the dataset."
        },
        {
          "header": "Classification",
          "content": "The algorithm categorizes the output into distinct classes: yes or no, true or false, or a letter of the alphabet (in a letter recognition model)."
        },
        {
          "header": "Real-World Examples of Supervised Learning",
          "content": "Some real-world examples of supervised learning models are: self-driving cars, fraud detection, house price prediction, spam filtering, and image classification."
        }
      ]
    },
    {
      "header": "Unsupervised Learning",
      "type":"non-bullet-list",
      "content": [
        {
          "header": "",
          "content": "Unsupervised learning, on the other hand, is when the machines are “unsupervised” and use algorithms to find hidden patterns in unlabeled data without any human involvement. There are two types of unsupervised learning tasks: Clustering and Association."
        },
        {
          "header": "Clustering",
          "content": "The algorithm groups together objects in the dataset based on similarities."
        },
        {
          "header": "Classification",
          "content": "The algorithm tries to find insight and relationships between objects in the database based on patterns."
        },
        {
          "header": "Real-World Examples of Unsupervised Learning ",
          "content": "Some real-world examples of unsupervised learning models are: finding customer segment in marketing, anomaly detection in mechanics, and recommender systems."
        }
      ]
    },
    {
      "header": "Autonomous Systems",
      "type":"non-bullet-list",
      "content":[
        {
          "header": "",
          "content": "What makes machine learning beneficial in the cybersecurity field is its autonomous system capabilities. With machine learning, repetitive cybersecurity tasks, such as analysis and assessments, can be automated to reduce costs."
        },
        {
          "header": "",
          "content": "Autonomous systems come in various forms and complexities but overall, they are systems that can act independently without human supervision. Common real-world examples include self-driving cars, smart thermostats, and factory production assistants. There are also software autonomous systems that are responsible for autonomously detecting and classifying threats and data. Despite its form, complexity, or functionality, all autonomous systems have the following foundational components: sensing, perceiving and understanding, making decisions, and taking action."
        },
        {
          "header": "",
          "content": "In this lab, we will be working with an autonomous system that is responsible for classifying sensitive data files and preventing a data breach when threats are detected within the system."
        }
      ]
    }
  ],
  "footer": {
    "links": [
      {
        "name": "McAfee Cybercrime Cost Report 2020",
        "link": "https://www.itgovernance.co.uk/what-is-cybersecurity#:~:text=Cyber%20security%20is%20the%20application,of%20systems%2C%20networks%20and%20technologies"
      },
      {
        "name": "Supervised vs. Unsupervised Learning",
        "link": "https://www.ibm.com/cloud/blog/supervised-vs-unsupervised-learning"
      },
      {
        "name": "Machine Learning and Cybersecurity: Hype and Reality",
        "link": "https://cset.georgetown.edu/publication/machine-learning-and-cybersecurity/"
      },
      {
        "name": "The Growing Role of Machine Learning in Cybersecurity",
        "link": "https://www.securityroundtable.org/the-growing-role-of-machine-learning-in-cybersecurity/"
      }
    ]
  }
}', '[{"title":"How does artificial intelligence learn? - Briana Brownell","link":"https://www.youtube.com/embed/0yCJMt9Mx9c"}, {"title":"Applying Deep Learning To Detect Any Cyber-Threat | NVIDIA", "link":"https://www.youtube.com/embed/_qdvTAgKiv0"},{"title":"Artificial Intelligence for smarter Cybersecurity | IBM Technology", "link":"https://www.youtube.com/embed/rH9-m7AhJhk"}]', e'[
  {
    "question": "What is the MAIN difference between supervised and unsupervised learning?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Supervised learning requires human intervention, while an unsupervised learning does not"
      },
      {
        "val": 1,
        "type": "1",
        "content": "Supervised learning uses labeled input and output data, while an unsupervised learning does not"
      },
      {
        "val": 0,
        "type": "2",
        "content": "Supervised learning makes more accurate decisions than unsupervised learning"
      },
      {
        "val": 0,
        "type": "3",
        "content": "Supervised learning is less time-consuming to train than unsupervised learning"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Based on the exercise, what type of machine learning was the autonomous file access system?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Semi-supervised learning"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Unsupervised learning"
      },
      {
        "val": 0,
        "type": "2",
        "content": "Reinforcement learning"
      },
      {
        "val": 1,
        "type": "3",
        "content": "Supervised learning"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "What are the foundational components of an autonomous system?",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "Sensing"
      },
      {
        "val": 1,
        "type": "1",
        "content": "Perceiving and Understanding"
      },
      {
        "val": 1,
        "type": "2",
        "content": "Taking Action"
      },
      {
        "val": 0,
        "type": "3",
        "content": "Training"
      },
      {
        "val": 1,
        "type": "4",
        "content": "Making Decisons"
      }
    ],
    "multiChoice": true
  },
  {
    "question": "Based on the exercise, what does the autonomous system identify as sensitive information?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Social security number"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Home Address"
      },
      {
        "val": 0,
        "type": "2",
        "content": "Full Name"
      },
      {
        "val": 0,
        "type": "3",
        "content": "Email Address"
      },
      {
        "val": 1,
        "type": "4",
        "content": "All of the above"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Why is machine learning model performance important?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Machine learning are expensive to develop and to use"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Machine learning need to perform well to replace humans in the workplace"
      },
      {
        "val": 1,
        "type": "2",
        "content": "Machine learning decisions have significant impact on people’s lives"
      },
      {
        "val": 0,
        "type": "3",
        "content": "All of the above"
      }
    ],
    "multiChoice": false
  }
]
', true),
 (8, 'Algorithmic Bias', 'Algorithmic Bias', 'AI', '/aibias.png', 'Learn more about bias in machine learning.', 'This lab explores machine learning bias and associated guiding principles to mitigate this bias. The user will learn about examples of real-world biased AI models and their impacts. Additionally, the lab demonstrates that an inequitable dataset can result in inappropriate bias in a sentiment analysis scenario.', e'["LO1: Identify how human prejudice infiltrates datasets resulting in biased machine learning systems (Knowledge).",
"LO2: Classify different types of inequitable bias in machine learning systems (Comprehension).",
"LO3: Apply standard guiding principles when developing machine learning systems (Application).",
"LO4: Analyze examples of real-world machine learning systems to diagnose the impact of harmful bias (Synthesis)."
]', 'Heather Moses, Jaden Wedner, Ryan Webb, Domenic Magano, Andreas Leonard-Calcano', 'https://all.rit.edu/Lab8/', null, 'In this lab, you will learn about the importance of mitigating machine learning bias as well as the ethical guidelines that developers should follow when building machine learning software. You will learn about the demographics of individuals that have consistently been biased against and increase your understanding through an interactive module about inherent bias of an AI based on an unfair dataset. You’ll then have the opportunity to view related media to reinforce the topic, and take a quiz to test your knowledge. Click "Next" to start!', e'{
	"piechart": {
    "header": "Opinion on Algorithms Used by Social Media",
    "caption": [
      "American sentiment towards computer programs used by social media companies to find false information on their sites"
    ],
    "data": {
      "labels": [
        "Good idea for society",
        "Bad idea for society",
        "Not sure",
        "No answer"
      ],
      "datasets": [
        {
          "label": "American view of computer programs used by social media companies to find false information on their sites",
          "borderColor": "black",
          "backgroundColor": [
            "#d55e00",
            "#cc79a7",
            "#0072b2",
            "#f0e442"
          ],
          "data": [
            38,
            31,
            30,
            1
          ],
          "borderWidth": "1"
        }
      ]
    }
  },
    "description":{
		"header":"",
		"content":""
	},
	"body":[
    {
      "header":"Introduction",
      "type":"",
      "content": ["Artificial intelligence, or AI, refers to software that has been programmed to emulate human intelligence. One method to achieve this is machine learning, or ML, where software algorithms (called models) learn from a set of training data to become increasingly capable of producing accurate and intelligent responses to new data. However, when the data represented in the training set has been influenced by human bias, the machine learning model replicates and magnifies this bias, harmfully affecting relevant groups."]
    },
    {
      "header": "",
      "type": "links",
      "content": [
        {
          "name":"Machine Learning and Bias",
          "link":"https://developer.ibm.com/articles/machine-learning-and-bias/"
        }
      ]
    },
    {
      "header":"Bias in Machine Learning Models",
      "type":"",
      "content": ["In order to properly train a machine learning model, a vast data set must first be curated for use. In the case of the image generation model DALL·E by OpenAI, the dataset included over 5 billion pairs of images and text scraped from the web. Similarly, OpenAI’s GPT-3 (the basis for ChatGPT) was trained on 570 GB of text (hundreds of billions of words) scraped from books and the internet. In the words of the researchers who trained GPT-3, “internet-trained models have internet-scale biases.” There are many forms of bias that can manifest themselves in a machine learning model. Forms of bias include:"]
    },
		{
			"type":"non-bullet-list",
			"content":[
        {
          "header":"Selection Bias",
          "content":["Selection Bias occurs when the data represented in a dataset does not reflect a balanced distribution of its subgroups. Proper randomization and sampling coverage must be performed to help avoid this form of bias."]
        },
        {
          "header": "Interaction Bias",
          "content": "Interaction Bias occurs in machine learning systems that learn from interactions with humans. Interaction bias stems from the cognitive bias of the people interacting with the model."
        },
        {
          "header": "Latent Bias",
          "content": "Latent Bias occurs when a dataset is composed of historical data that reflects past inequalities. Latent bias can also develop from data which embodies contemporary inequalities."
        },
        {
          "header": "Implicit Confirmation Bias",
          "content": ["Implicit Confirmation Bias occurs when machine learning engineers train a model in such a way that the model’s behavior reaffirms the engineers’ own prejudices."]
        }
      ]
		},
    {
      "header": "",
      "type": "links",
      "content": [
        {
          "name":"Fairness: Types of Bias",
          "link":"https://developers.google.com/machine-learning/crash-course/fairness/types-of-bias"
        }
      ]
    },
		{
			"header":"Real-world Examples",
			"type":"",
			"content":["Unfortunately, there are many instances of biased machine learning models being used to make critical decisions with harmful outcomes. For example, in 2014, Amazon’s AI/ML developers created recruiting software to identify the strongest candidates for software engineering and other technical positions. After a year, however, the developers realized that their software was unfairly biased against women and identified men more often for these positions. This is an example of latent bias because the dataset of past engineers employed by Amazon was skewed towards men. Additionally, this is an example of selection bias because the dataset used to train the model did not represent men and women equally. "]
		},
    {
			"header":"",
			"type":"links",
			"content":[
        {
            "name":"Amazon Recruiting Tool",
            "link":"https://www.reuters.com/article/us-amazon-com-jobs-automation-insight/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women-idUSKCN1MK08G"
        }
      ]
		},
		{
			"header":"",
			"type":"",
			"content":["Another example of a biased model is Northpointe’s COMPAS (Correctional Offender Management Profiling for Alternative Sanctions) software. COMPAS is an AI software system designed to identify a criminal defendant\'s likelihood of repeating an offense, and is used in many courts across the US. After being trained on a set of data, COMPAS misclassified 45% of black defendants as having a higher risk of reoffending, but misclassified only 23% of white defendants. COMPAS’ developers have addressed this problem, but the effects of the algorithm’s bias were profound. This is an example of selection bias because the dataset did not accurately balance the demographics of prison inmates."]
		},
    {
			"header":"",
			"type":"links",
			"content":[
        {
            "name":"COMPAS Case",
            "link":"https://link.springer.com/article/10.1007/s00146-022-01441-y#:~:text=Second%2C%20COMPAS%20reflects%20race%20and,are%20based%20on%20statistical%20correlations"
        }
      ]
		},
    {
      "header":"Guiding Principles",
      "type":"",
      "content": ["Due to the far-reaching impact of bias in AI software, organizations such as the Institute of Electrical and Electronics Engineers (IEEE) have established a set of guiding principles to follow when developing AI software. These principles include:"]
    },
    {
			"type":"ordered-list",
			"content": [
        "Human Rights",
        "Well-being",
        "Data Agency",
        "Effectiveness",
        "Transparency",
        "Accountability",
        "Awareness of Misuse",
        "Competence"
      ]
		},
		{
			"header":"",
			"type":"",
			"content":["Following these principles can help to avoid bias and create fair, equitable AI software."]
		},
    {
			"header":"",
			"type":"links",
			"content":[
        {
          "name":"IEEE principles",
          "link":"https://standards.ieee.org/wp-content/uploads/import/documents/other/ead1e_general_principles.pdf"
        }
      ]
		}
	],
	"footer":{
		"links":[
			{
				"name":"ChatGPT and DALL-E-2",
				"link":"https://www.linkedin.com/pulse/chatgpt-dall-e-2-show-me-data-sources-dennis-layton/"
			},
      {
        "name":"How to Develop Responsible AI",
        "link":"https://aiworldschool.com/research/ai-and-human-bias-how-to-develop-responsible-ai/"
      }
		]
	}
}', e'[
    {
        "title":"AI: Training Data & Bias",
        "link":"https://www.youtube.com/embed/x2mRoFNm22g"
    },
    {
        "title":"Biases are being baked into artificial intelligence",
        "link":"https://www.youtube.com/embed/NaWJhlDb6sE"
    },
    {
        "title":"Computing human bias with AI technology",
        "link":"https://www.youtube.com/embed/RyanJ2h-9-g"
    }
]', e'[
  {
    "question": "How is bias introduced to Artificial Intelligence (AI) software?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "At random"
      },
      {
        "val": 1,
        "type": "1",
        "content": "Biased training data sets"
      },
      {
        "val": 1,
        "type": "2",
        "content": "Biased developers"
      },
      {
        "val": 0,
        "type": "3",
        "content": "It is unknown how bias is introduced to AI software"
      }
    ],
    "multiChoice": true
  },
  {
    "question": "Which of the following is true regarding bias in Artificial Intelligence(AI)/ Machine Learning(ML) software ? ",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "It can amplify bias already present in datasets"
      },
      {
        "val": 0,
        "type": "1",
        "content": "It results in software that may treat certain groups and demographics unfairly"
      },
      {
        "val": 0,
        "type": "2",
        "content": "Bias can be minimized by following IEEE ethical principles for the use of AI in software"
      },
      {
        "val": 1,
        "type": "3",
        "content": "All of the above"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Which of the following is NOT an example of a biased AI model?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "A recruiting tool that selects men more than women for technical roles"
      },
      {
        "val": 0,
        "type": "1",
        "content": "A corrections assessment tool that misclassifies black inmates as having a disproportionately higher chance of reoffense than white inmates"
      },
      {
        "val": 1,
        "type": "2",
        "content": "A plagiarism-checking tool that identifies plagiarized sections of a paper"
      },
      {
        "val": 0,
        "type": "3",
        "content": "An ad targeting tool that shows certain ads only to a specific demographic"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Which of the following is considered a guiding principle established by the Institute of Electrical and Electronics Engineers (IEEE) to follow when developing software that uses AI?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Efficiency"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Inequality"
      },
      {
        "val": 1,
        "type": "2",
        "content": "Human Rights"
      },
      {
        "val": 0,
        "type": "3",
        "content": "Incompatibility"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Which of the following should be the goals of software developers when creating AI software?",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "Protect the interests and rights of all human demographics (i.e. race, gender, age, etc.)"
      },
      {
        "val": 1,
        "type": "1",
        "content": "Increase productivity and economic wellbeing for society (i.e. increasing the GDP)"
      },
      {
        "val": 1,
        "type": "2",
        "content": "Have more transparent terms and conditions so customers are fully aware of the consent they are giving"
      },
      {
        "val": 1,
        "type": "3",
        "content": "Hold accountable to address potential legal issues with the product"
      }
    ],
    "multiChoice": true
  },
  {
    "question": "Which of the following are methods to prevent the perpetuation of human bias in AI software?",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "Ensure that the developers creating AI software come from diverse backgrounds"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Train AI software with data representing only one demographic"
      },
      {
        "val": 1,
        "type": "2",
        "content": "Ensure the AI is trained on data that equally represents all members of society"
      },
      {
        "val": 0,
        "type": "3",
        "content": "There are no methods to prevent human bias in AI software"
      }
    ],
    "multiChoice": true
  }
]
', true),
(9, 'Accessibility to Localization', 'Localization', 'Accessibility', '/localization.jpg', 'Learn more about localization.', 'This lab explores localization and guiding principles to adapt software to meet the needs of various languages, cultures, and locales. The user will practice localizing a webpage by following the steps of the localization process.', e'["LO1: Recognize the significance of the non-English population and their needs for accessible software (Knowledge).",
"LO2: Examine a software application that doesn’t properly accommodate accessibility to localization in various (Analysis).",
"LO3: Use knowledge of accessibility design solutions to construct corrective measures to allow previously inaccessible software to become accessible to appropriate parties (Application).",
"LO4: Relate to individuals who experience difficulties with accessibility to localization (Comprehension)"
]', 'Andreas Leonard-Calcano, Heather Moses, Domenic Mangano', 'https://all.rit.edu/Lab9/', null, 'In this lab, you will learn about the importance of localization and how to adapt software to meet the needs of various languages, cultures, and locales. You will practice localizing a webpage through an interactive module and increase your understanding of the localization process. You’ll then have the opportunity to view related media to reinforce the topic, and take a quiz to test your knowledge. Click "Next" to start!', e'{
    "piechart":
       {"header":"Top 10 Most Spoken Languages in the World, 2023 (In Millions)",
       "caption":[""],
       "data":{
          "labels": [
                "English",
                "Mandarin Chinese",
                "Hindi",
                "Spanish",
                "French",
                "Standard Arabic",
                "Bengali",
                "Portuguese",
                "Russian",
                "Urdu"
             ],
          "datasets": [
                   {
                   "label": "Top 10 Most Spoken Languages in the World, 2023 (In Millions)",
                   "borderColor": "black",
                   "backgroundColor": ["#ff0000", "#ff8700", "#ffd300", "#deff0a", "#a1ff0a", "#0aff99", "#0aefff", "#147df5", "#580aff", "#be0aff"],
                   "data": [1456, 1138, 609.5, 559.1, 309.8, 274.0, 272.8, 263.6, 255.0, 231.7],
                   "borderWidth": "1"
                   }
             ]
          }
    },
	"description":{
		"header":"",
		"content":""
	},
	"body":[
        {
            "header":"",
            "type":"",
            "content":["As you can see, English only makes up 27.1% of the most spoken languages globally. When software isn’t made with languages other than English in mind, it becomes inaccessible to the vast majority of people in this world. However, while language is one important facet of localization, it’s not the whole picture."]
        },
		{
			"header":"What is Localization?",
			"type":"",
			"content":["Localization accessibility refers to the practice of designing software and digital content to be accessible and usable by people from different linguistic and cultural backgrounds. This encompasses not only translation of text but also considers cultural nuances, date and time formats, currency, keyboard usage, and other locale-specific elements. This practice is crucial in a world where digital products are used by a diverse global audience. The goal is to create an inclusive digital environment where users from any part of the world feel valued and understood. It\'s about building bridges across cultural and linguistic divides, enhancing user experience, and expanding the reach of digital products globally."]
		},
        {
            "header":"",
            "type":"",
            "content":["Localization is the process whereby the software, documentation, and user interface are adapted to suit the needs of different world markets and user segments, or what is known as a locale. As software engineers, the process that prepares software and digital content for subsequent localization, designing products from the ground up to support various languages and cultural norms without the need for redesign, is known as internationalization."]
        },
		{
            "header": "Examples of Localization Challenges",
            "type": "study__list",
            "content": ["Cultural Significance of Numbers: The number 13 is unlucky in the U.S. but lucky in Italy. This impacts product design and marketing strategies.","Content Adaptation for Cultural Relevance: The movie ‘Inside Out’ changed Riley’s disliked food from broccoli (U.S. version) to green peppers (Japanese version) to maintain cultural relatability.","Color Symbolism: White signifies purity in the West but mourning in many Asian cultures. This influences design and branding.","Date/Time Formats: The U.S. uses mm/dd/yy, Europe uses dd/mm/yy, and Japan uses yy/mm/dd. This is crucial for software interfaces and documentation.","Number Punctuation: In the United States, large numbers are separated with commas and decimals are separated with a period (e.g. 1,234.56), while in places like France, numbers the way these commas and periods are used is swapped (e.g. 1.234,56). Key for accuracy in financial transactions and data interpretation."]},
		{
			"header":"Case Study: Facebook",
			"type":"",
			"content":["In 2007, Facebook was only available in English, limiting its global reach. With a mission to connect every person on the planet, Facebook introduced a crowd-sourced translation tool, empowering native speakers to translate the site through a voting system. This innovative approach has significantly expanded Facebook\'s linguistic accessibility. Today, the platform supports 111 languages, with an additional 40 languages in the process of being added. This expansion is significant considering that out of Facebook\'s 1.7 billion users, 1 billion speak a language other than English. Beyond mere functionality, this localization effort has had an emotional impact, fostering a sense of pride and aiding in the preservation of diverse cultures among its global user base."]
		},
        {
			"header":"Software Engineer Internationalization Responsibilities ",
			"type":"study__list",
			"content":["Identify and understand locales", "Different markets may require slight but important variations in product functionality", "Validate the suitability of the localized application for the targeted markets", "Verify correctness and consistency in translations", "Ensure translation neutrality to accommodate multiple locales within individual markets", "Extend usability testing to the global population "]
		}
	],
	"footer":{
		"links":[
            {
                "name":"What is software localization? 10 best practices & examples",
                "link":"https://lokalise.com/blog/software-localization/"
            },			{
                "name":"The Complete Guide to Software Localization",
                "link":"https://phrase.com/blog/posts/software-localization/"
            },			{
                "name":"The 8 Biggest Challenges Of Software Localization",
                "link":"https://ivannovation.com/blog/challenges-of-software-localization/"
            }
        ]
	}
}', e'[
  {
    "title":"Translation and Localization",
    "link": "https://www.youtube.com/embed/J7ODeZK8TDI"
  },
  {
    "title":"Internationalis(z)ing Code",
    "link": "https://www.youtube.com/embed/0j74jcxSunY"
  },
  {
    "title":"Localization 101",
    "link":"https://www.youtube.com/embed/87dQNnslltg"
  }
]', e'[
  {
    "question": "What is the difference between translation and localization?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Translation involves changing software design, while localization does not."
      },
      {
        "val": 1,
        "type": "1",
        "content": "Translation is a part of the localization process, which includes cultural adaptation beyond language."
      },
      {
        "val": 0,
        "type": "2",
        "content": "Localization is only about language translation, while translation includes cultural adaptation."
      },
      {
        "val": 0,
        "type": "3",
        "content": "There is no difference; both terms mean the same thing."
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Which of the following are elements to consider when localizing a software application?",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "Date and time format"
      },
      {
        "val": 1,
        "type": "1",
        "content": "Language direction"
      },
      {
        "val": 1,
        "type": "2",
        "content": "Images and icons"
      },
      {
        "val": 1,
        "type": "3",
        "content": "Currency format"
      },
      {
        "val": 0,
        "type": "4",
        "content": "Links"
      }
    ],
    "multiChoice": true
  },
  {
    "question": "In the context of localization, why is the adaptation of number formats important?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "To enhance the visual appeal"
      },
      {
        "val": 0,
        "type": "1",
        "content": "To increase download speed"
      },
      {
        "val": 1,
        "type": "2",
        "content": "For accurate data interpretation and financial transactions"
      },
      {
        "val": 0,
        "type": "3",
        "content": "To reduce software development costs"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Which of the following is NOT a common challenge in localization?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Cultural nuances in translation"
      },
      {
        "val": 1,
        "type": "1",
        "content": "Changing the software’s core functionality"
      },
      {
        "val": 0,
        "type": "2",
        "content": "Adapting content for cultural relevance"
      },
      {
        "val": 0,
        "type": "3",
        "content": "Ensuring legal compliance across regions"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Which of the following is the primary responsibility of a software engineer in the process of localization?",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "Ensuring the software architecture supports localization."
      },
      {
        "val": 0,
        "type": "1",
        "content": "Translating the content into various languages."
      },
      {
        "val": 0,
        "type": "2",
        "content": "Designing marketing strategies for different regions."
      },
      {
        "val": 0,
        "type": "3",
        "content": "Conducting cultural research for each target market."
      }
    ],
    "multiChoice": false
  }
]
', true), (10, 'Neural Networks with Machine Learning', 'Machine Learning', 'AI', '/machinelearning.jpg', 'Learn more about machine learning.', 'This lab introduces machine learning', e'[
    "LO1: Construct a basic neural network using provided components (Synthesis)",
    "LO2: Simulate neural network training (Comprehension).",
    "LO3: Demonstrate bias present in a neural network (Application)."
]', 'Jonathan Cruz, Domenic Mangano, Emily Crilley', 'https://ball.rit.edu/Lab10/', null, 'In this lab, you will learn about where bias is present within neural networks and ways to help reduce the biases developed in the algorithms. You will understand how neural networks work and how to build appropriate training data sets to combat development bias, view related media to reinforce the topic, and take a quiz to test your knowledge. Click "Next" to start!', e'{
  "piechart":{
		"header":"Company investments towards AI",
		"caption":["Billions of dollars invested towards AI by major tech companies"],
		"data":{
				"labels": [
				  "Google", "Facebook", "Amazon", "Microsoft", "Alibaba"
				],
				"datasets": [
					{
					  "label": "Company investments, in billions",
					  "borderColor": "black",
					  "backgroundColor": ["#ffeb00","#ff2713","#09da4f","#9e8fe5","#d67b41","#86aedf"],
					  "data": [30.7, 22.1, 10, 10, 17],
					  "borderWidth": "1"
					}
				]
		}
	},
	"description":{
		"header":"What is a Neural Network?",
		"content":"Neural networks are one of the subtypes of artificial intelligence. Neural networks are a series of algorithms that mimic the human brain. They are used to recognize patterns and relationships in extensive data. Over time neural networks are constantly being trained for improvement."
	},
	"body":[{
          "header":"",
          "type":"",
          "content":["Neural networks rely on nodes, similar to how the human brain relies on neurons. Both are stimulated given input and must process and respond in the form of output. "]
       },{
			"header":"",
			"type":"image",
			"content":{
				"image":"/neural_network.jpg",
				"alt":"Image of a model of a neural network",
				"sub_caption":"Figure 1",
				"caption":"Neural Network Model"
			}
		},{
          "header":"Neural Network Layers",
          "type":"",
          "content":["Neural networks have three different layers: the Input Layer, Hidden Layer, and Output Layer. The input layer is where the initial neurons receive data. This data is then processed within the hidden layer using mathematical equations and shared via the output layer of the neural network. "]
       },{
            "header":"How are They Being Used in Tech?",
            "type":"",
            "content":["While neural networks were created to work similar to the human brain, they have become more complex over time and their applications have grown exponentially. Neural networks are being used in various fields, including but not limited to:"]
        },{"header": "", "type": "study__list","content": ["Computer Vision","Speech Recognition","Social Network Filters","Playing Games","Medical Diagnoses","Targeted Marketing","Identifying Fraud","Financial Predictions"]},{
          "header":"Biases in Neural Networks",
          "type":"",
          "content":["Bias is present in all facets of artificial intelligence. Necessary biases become a constant in the mathematical formulation within the hidden layer of a neural network. These necessary biases, or weights, impact the efficiency of the system. Necessary biases are needed within these formulas to help simulate real world scenarios; they make the systems more flexible and contribute to a more robust training set. "]
       },{
          "header":"",
          "type":"",
          "content":["While necessary bias is needed, too much or unwanted bias can be problematic and lead to discrimination in a system. "]
       },{
          "header":"How is the Challenge of Too Much Bias Being Addressed?",
          "type":"",
          "content":["Companies are working on various ways to reduce the impact of negative unwanted biases in artificial intelligence systems. One of the biggest ways is to incorporate extensive training sets. Another approach highly debated in practice is to create transparency in these complex systems. "]
       },{
          "header":"",
          "type":"",
          "content":["Unwanted bias is a problem for many systems in industry, so creating diverse teams to challenge potential biases early in development is often employed as a tactic to try and gain a reduction in discrimination these systems may replicate. "]
       }
    ],
	"footer":{
		"links":[
			{
				"name":"IBM Neural Networks",
				"link":"https://www.ibm.com/cloud/learn/neural-networks"
			},			{
				"name":"SAS Neural Networks",
				"link":"https://www.sas.com/en_us/insights/analytics/neural-networks.html"
			},			{
				"name":"Role of Bias",
				"link":"https://www.pico.net/kb/the-role-of-bias-in-neural-networks/#:~:text=Bias%20allows%20you%20to%20shift,transposed%20by%20the%20constant%20value"
			},			{
				"name":"Deep-Learning Systems",
				"link":"https://spectrum.ieee.org/its-too-easy-to-hide-bias-in-deeplearning-systems"
			},			{
				"name":"Effect of Bias",
				"link":"https://www.geeksforgeeks.org/effect-of-bias-in-neural-network/"
			},			{
				"name":"How Much is Invested in Artificial Intelligence?",
				"link":"https://insight.openexo.com/how-much-is-invested-in-artificial-intelligence/"
			}
		]
	}
}', '[{"title":"Neural Networks","link": "https://www.youtube.com/embed/bfmFfD2RIcg"},{"title":"Algorithmic Bias and Fairness","link": "https://www.youtube.com/embed/gV0_raKR2UQ"}]', e'[
  {
    "question": "Neural networks are modeled off of what?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Algorithm"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Heart"
      },
      {
        "val": 1,
        "type": "2",
        "content": "Human Brain"
      },
      {
        "val": 0,
        "type": "3",
        "content": "Chemistry"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Where are neural networks being used in industry?",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "Social Media"
      },
      {
        "val": 0,
        "type": "1",
        "content": "User Testing"
      },
      {
        "val": 1,
        "type": "2",
        "content": "Targeted Marketing"
      },
      {
        "val": 0,
        "type": "3",
        "content": "Making Games"
      }
    ],
    "multiChoice": true
  },
  {
    "question": "Neural networks consist of what three layers?",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "Input, Output, Hidden"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Initial, Middle, Return"
      },
      {
        "val": 0,
        "type": "2",
        "content": "One, Two, Three"
      },
      {
        "val": 0,
        "type": "3",
        "content": "Input, Middle, End"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "What is the most effective way researchers are currently attempting to reduce bias in neural networks? ",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "They aren’t"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Reducing complexity"
      },
      {
        "val": 0,
        "type": "2",
        "content": "Guessing"
      },
      {
        "val": 1,
        "type": "3",
        "content": "Extensive training sets"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Why is having an ethical AI important?",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "To promote fairness, equity, and unbiased decision-making in AI systems"
      },
      {
        "val": 0,
        "type": "1",
        "content": "To maximize profits and market share in the competitive AI industry"
      },
      {
        "val": 0,
        "type": "2",
        "content": "To create AI systems without considering the potential societal impacts"
      },
      {
        "val": 0,
        "type": "3",
        "content": "To prioritize speed and efficiency in AI development over ethical considerations"
      }
    ],
    "multiChoice": false
  }
]', true), (11, 'Accessibility to Literacy', 'Literacy', 'Accessibility', '/literacy.jpg', 'Learn more about designing the web for varying literacy levels.', 'This lab explores considerations related to literacy levels. The user will be introduced to the Fog Index formula and learn how it can be used to understand the literacy level of text. Finally, the user will be introduced to key principles related to improving content readability.', e'["LO1: Recognize the significance of the range of literacy in the population and their needs for accessible software (Knowledge).",
"LO2: Examine a scenario that doesn’t properly accommodate accessibility to literacy in a relatable context (Analysis).",
"LO3: Use knowledge of accessibility design solutions to construct corrective measures to allow a previously inaccessible scenario to become accessible to appropriate parties (Application).",
"LO4: Relate to individuals who experience difficulties with accessibility to literacy (Comprehension)."
]', 'Andreas Leonard-Calcano, Heather Moses, Domenic Mangano, & Mark Sternefeld', 'https://all.rit.edu/Lab11/', null, 'In this lab, you will learn about why it is important to develop software that is accessible for users with different literacy levels. You will learn about creating legible, readable and comprehensive software through the implementation of the “Fog index formula”. Afterwards, you will view related media to reinforce the topic and take a quiz to test your knowledge. Click "Next" to start!', e'{
    "piechart":
       {"header":"Number of U.S. Adults at Each Level of Proficiency on the PIAAC Literacy Scale, 2017 (In Millions)",
       "caption":[""],
       "data":{
          "labels": [
                "Below Level 1",
                "Level 1",
                "Level 2",
                "Level 3",
                "Level 4/5"
             ],
          "datasets": [
                   {
                   "label": "Number of U.S. Adults at Each Level of Proficiency on the PIAAC Literacy Scale, 2017 (In Millions)",
                   "borderColor": "black",
                   "backgroundColor": ["#020202", "#503B31", "#705D56", "#9097C0", "#A7BBEC"],
                   "data": [8, 29, 66, 69, 27],
                   "borderWidth": "1"
                   }
             ]
          }
    },
	"description":{
		"header":"",
		"content":""
	},
	"body":[
        {
			"header":"",
			"type":"links",
			"content":[
				{
					"name":"U.S. Adults With Low Literacy and Numeracy Skills: 2012/14 to 2017",
					"link":"https://nces.ed.gov/pubs2022/2022004/"
				}
			]
		},
		{
			"header":"What is Website Readability?",
			"type":"",
			"content":["Website readability refers to the ease with which users can read and understand the content on a website. It is a crucial aspect of web design and content creation that directly impacts user experience. Readability is influenced by various factors, including text formatting, language choice, sentence structure, and the overall design of the website."]
		},
        {
            "header":"Considerations for Literacy-Accessible Websites",
            "type":"",
            "content":["According to the UI/UX research and consulting firm Nielsen Norman Group, the primary considerations when creating impactful web content are"]
        },
		{
            "header": "",
            "type": "study__list",
            "content": ["Legibility: This refers to the visual design and typography\'s clarity.", "Readability: This concerns the level of complexity in words and sentence structures.", "Comprehension: Easy to understand and draw valid conclusions."]
        },
        {
            "header": "Key Challenges in Literacy-Inaccessible Websites",
            "type": "",
            "content": ["When you don\'t consider these three factors, challenges to users with low literacy can include:"]
        },
        {
			"header":"",
			"type":"study__list",
			"content":["Inadequate visual clarity", "Complex vocabulary", "Long and complicated sentences", "Lack of plain language", "Unfamiliar symbols and icons"]
		},
        {
            "header": "Measuring Readability with Fog Index",
            "type": "",
            "content": ["The Fog Index, developed by Robert Gunning, is a tool used to assess the readability of reading content. It calculates the complexity of a text passage based on the number of words, number of complex words, and number of sentences. The score obtained indicates the educational level required to  comprehend that text. A higher score correlates with a higher educational level. Improving readability according to the Fog Index involves making sentences simpler and using easier words while keeping the content meaningful. Aim for a lower Fog Index to help more people understand the content. By applying Fog Index analysis, software developers can optimize their material to ensure they are more comprehensible and accessible to users with diverse literacy levels."]
        },
        {
            "header": "Improving Website Readability ",
            "type": "",
            "content": ["Guidelines to improve the readability of a web application include:"]
        },
        {
            "header": "",
            "type": "study__list",
            "content": ["Use a large font size by default and allow users to adjust the font size.", "Ensure that there is a strong color contrast between text and the background.", "Prefer using straightforward language. Avoid complex wording.", "Employ active voice in text content.", "Target a reading level equivalent to eight grade to ensure better understanding.", "Utilize language that resonates with users.", "Consider displaying images or diagrams. These often convey information more effectively than lengthy paragraphs.", "Aim to be concise and brief in your writing."]
        }
	],
	"footer":{
		"links":[
            {
                "name":"How Reading Level Affects Web Accessibility",
                "link":"https://www.boia.org/blog/how-reading-level-affects-web-accessibility"
            },			{
                "name":"Gunning Fog Index Tool",
                "link":"http://gunning-fog-index.com/"
            },			{
                "name":"4 Key Ways to Engage with Low-Literacy Communities Online",
                "link":"https://granicus.com/blog/4-key-ways-engage-low-literacy-communities-online/"
            }
        ]
	}
}', e'[{"title":"Web Accessibility Perspectives: Understandable Content","link": "https://www.youtube.com/embed/BYRxF2yInfA?si=KedpgpG7XE4TK8B5"},
{"title":"How To Improve The Readability of Your Website","link": "https://www.youtube.com/embed/mtTD3uJ5e7k?si=qpUrFyTfY8Qh6OzC"}]', e'[
  {
    "question": "What does readability refer to?",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "Ease of understanding web content"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Quality of UI design"
      },
      {
        "val": 0,
        "type": "2",
        "content": "Website loading speed"
      },
      {
        "val": 0,
        "type": "3",
        "content": "Number of images used in a website"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "What are the primary considerations to creating readable web content?",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "Legibility, readability, and comprehension"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Font size, font color, and text alignment"
      },
      {
        "val": 0,
        "type": "2",
        "content": "Navigation and color schemes"
      },
      {
        "val": 0,
        "type": "3",
        "content": "Visual appealing"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "Which of the following are suggestions to improve readability?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "Improving color schemes"
      },
      {
        "val": 1,
        "type": "1",
        "content": "Use straight forward language"
      },
      {
        "val": 1,
        "type": "2",
        "content": "Use concise and brief text content"
      },
      {
        "val": 1,
        "type": "3",
        "content": "Target 8th grade reading level"
      }
    ],
    "multiChoice": true
  },
  {
    "question": "What is the recommended education level for targeting a broad consumer audience?",
    "answers": [
      {
        "val": 0,
        "type": "0",
        "content": "12th grade"
      },
      {
        "val": 1,
        "type": "1",
        "content": "8th grade"
      },
      {
        "val": 0,
        "type": "2",
        "content": "College level"
      },
      {
        "val": 0,
        "type": "3",
        "content": "1st grade"
      }
    ],
    "multiChoice": false
  },
  {
    "question": "The Fog Index calculates the complexity of text based on which factors?",
    "answers": [
      {
        "val": 1,
        "type": "0",
        "content": "Number of sentences"
      },
      {
        "val": 0,
        "type": "1",
        "content": "Font size and font color"
      },
      {
        "val": 1,
        "type": "2",
        "content": "Number of complex words"
      },
      {
        "val": 1,
        "type": "3",
        "content": "Number of words"
      }
    ],
    "multiChoice": true
  }
]
', true);

INSERT INTO public.professors (id, "firstName", "lastName", title, "imageURL", socials, work, "datesActive") VALUES (1, 'Daniel', 'Krutz', 'PI', '/Professor_Krutz.jpg', '[{"link":"https://danielkrutz.github.io/","network":"sharethis"}]', null, null),
(2, 'Samuel', 'Malachowsky', 'PI', '/Professor_Malachowsky.jpg', e'[{"link":"https://www.se.rit.edu/~samvse/","network":"sharethis"}]
', null, null), (3, 'Hector', 'Torres', 'PI', '/Torres.jpg', '[{"link":"https://www.linkedin.com/in/dr-hector-n-torres-41844539/","network": "sharethis"}]', null, null);

INSERT INTO public.team_members (id, "firstName", "lastName", title, "imageURL", socials, work, "datesActive", "isActive") VALUES (1, 'Saad', 'Khan', 'PM, Engineer', '/Saad_Khan.jpg', '[{"link":"https://www.linkedin.com/in/saad-khan23/","network":"linkedin"}]', null, '2019-2021', false)
,(2, 'Heather', 'Moses', 'PM, Engineer', '/Heather_Moses.jpg', '[{"link":"https://www.linkedin.com/in/heather-moses/","network":"linkedin"}]', null, '2020-Present', true)
,(3, 'Christopher', 'Savan', 'Engineer', '/Christopher_Savan.jpg', '[{"link":"https://www.linkedin.com/in/christophersavan/","network":"linkedin"}]', null, '2020-2021', false)
,(15, 'Payton', 'Dinwiddie', 'Education', '/Payton.jpg', '[{"link": "https://www.linkedin.com/in/paytonsidneydinwiddie//","network": "linkedin"}]', null, '2022-Present', true)
,(17, 'Garsha', 'Thomas', 'Education', '/bcu_default_image.jpg', '[]', null, '2022-Present', true)
,(16, 'Destiny', 'Francois', 'Education', '/bcu_default_image.jpg', '[]', null, '2022-Present', true)
,(5, 'Mark', 'Sternefeld', 'PM, Engineer', '/Mark_Sternefeld.jpg', '[{"link":"https://www.linkedin.com/in/mark-ferenc-sternefeld/","network":"linkedin"}]', null, '2020-Present', true)
,(6, 'Shantanav', 'Saurav', 'Engineer', '/Shantanav_Saurav.jpg', '[{"link":"https://www.linkedin.com/in/shantanav/","network":"linkedin"}]', null, '2021-2022', false)
,(7, 'Bashir', 'Jaji', 'Engineer', '/Bashir_Jaji.jpg', '[{"link":"https://www.linkedin.com/in/jaji-bashir-oluwatobiloba-768a52108/","network":"linkedin"}]', null, '2021-2022', false)
,(8, 'Andreas', 'Leonard-Calcano', 'Architect, Tech Lead, Engineer', '/Andreas_Leonard_Calcano.jpg', '[{"link":"https://www.linkedin.com/in/andres-leonard-calcano/","network":"linkedin"}]', null, '2021-Present', true)
,(10, 'Kyle', 'Messerle', 'Outreach', '/Kyle.jpg', '[{"link":"https://www.linkedin.com/in/kyle-messerle/","network":"linkedin"}]', null, '2022-Present', true)
,(4, 'Su Thit', 'Thazin', 'PM, Engineer, Director of Outreach', '/Su_Thit_Thazin.jpg', '[{"link":"https://www.linkedin.com/in/suthitthazin/","network":"linkedin"}]', null, '2020-2023', false)
,(9, 'Saige', 'Moon', 'Design', '/default_profile_image.jpg', '[]', null, '2023-Present', true)
,(18, 'Fabi', 'Marrufo', 'Engineer', '/Fabi.jpg', '[{"link":"https://www.linkedin.com/in/fabi-marrufo/","network":"linkedin"}]', null, '2022-2022', false)
,(13, 'Jonathan', 'Cruz', 'PM, Engineer', '/default_profile_image.jpg', '[{"link" : "https://www.linkedin.com/in/notcruz/"}]', null, '2023-Present', true)
,(19, 'Santosh', 'Lamichhane', 'Engineer', '/Santosh.jpg', '[{"link": "https://www.linkedin.com/in/santosh-lamichhane-1b2737195/","network": "linkedin"}]', null, '2022-Present', true)
,(20, 'Jaden', 'Wedner', 'Engineer', '/Jaden.jpg', '[{"link": "https://www.linkedin.com/in/jaden-w-3a9326190/","network": "linkedin"}]', null, '2022-2023', false)
,(21, 'Kelley', 'Lam', 'Engineer', '/Kelley.jpg', '[{"link":"https://www.linkedin.com/in/kelley-lam/","network":"linkedin"}]', null, '2022-2022', false)
,(14, 'Kasim', 'O''Meally', 'Engineer', '/default_profile_image.jpg', '[{"link" : "https://www.linkedin.com/in/kasimomeally"}]', null, '2023-Present', true)
,(22, 'Dynasty', 'Chappel', 'Education', '/Dynasti.jpg', '[{"link": "https://www.linkedin.com/in/dynasti-chappell-2085a51b7/","network": "linkedin"}]', null, '2022-Present', true)
,(23, 'Ryan', 'Webb', 'Engineer', '/default_profile_image.jpg', '[{"link" : "https://www.linkedin.com/in/rfhwebb/"}]', null, '2023-Present', false)
,(24, 'Jonathan', 'Bateman', 'Outreach', '/default_profile_image.jpg', '[{"link" : "https://www.linkedin.com/in/jonathan-b-356439264/"}]', null, '2023-2023', false)
,(12, 'Carla', 'Lopez', 'Outreach', '/Carla.jpeg', '[{"link" : "https://www.linkedin.com/in/carla-lopez-6b8aa7239/"}]', null, '2023-Present', true)
,(11, 'Domenic', 'Mangano', 'PM, Engineer', '/Domenic.jpeg', '[{"link" : "https://www.linkedin.com/in/domenicmangano/"}]', null, '2022-Present', true)
,(25, 'Ainsley', 'Ross', 'Engineer', '/default_profile_image.jpg', '[{"link" : "https://www.linkedin.com/in/ainsley-ross/"}]', null, '2024-Present', true)
,(26, 'Owen', 'Luts', 'Engineer', '/default_profile_image.jpg', '[{"link" : "https://www.linkedin.com/in/owen-luts/"}]', null,'2024-Present', true)
,(27, 'Michael', 'DiBiase', 'Engineer', '/default_profile_image.jpg', '[]', null,'2024-Present', true);
