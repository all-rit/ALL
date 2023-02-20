export const EXERCISE_PLAYING = "EXERCISE_PLAYING";
export const EXERCISE_IDLE = "EXERCISE_IDLE";

export const AI_CORRECT = "AI CORRECT";
export const AI_INCORRECT = "AI INCORRECT";

export const OPEN_FILE = "OPEN";
export const LOCKED_FILE = "LOCKED";
export const FILE_INTRUSION = "FILE_INTRUSION";
export const FILE_INCORRECT = "FILE_INCORRECT";
export const FILE_PROTECTED = "FILE_PROTECTED";

export const LAB_ID = 7;
export const THREAT_MAX = 3;
export const DELAY_TIME = 1500;
export const READ_TIME = 10000;
export const ROUND_LIMIT = 10;

export const POPUP_MESSAGES = {
  INVALID_EXPRESSION: "You must pass a valid expression.",
  ZERO_DIVISION: "Zero division is not allowed.",
  SUCCESS: "The repairs have successfully been implemented.",
  FILE_SENS_NOT_INCLUDED: "Must include 'file.sensitivityLevel'",
  THREAT_LVL_NOT_INCLUDED: "Must include 'threatLvl'",
};
export const POPUP_DELAY = 6000;

export const BAD_AI_EXPLANATION = "BadAIExplanation";
export const ALTERATION_START = "AlterationStart";

export const SCORE_MAP = {
  FILE_PROTECTED: 20,
  FILE_INCORRECT: -20,
  FILE_INTRUSION: -50,
  PERFECT_SCORE: 50,
};

export const THREAT_LEVEL_TEXT = { 1: "Low", 2: "Medium", 3: "High" };

export const MESSAGES = {
  SSN: "Someone’s social security number was stolen during the security breach. As a result of the breach, an identity thief was able to steal an individual's identity. This autonomous system decision-mistake caused a case of indentity theft.",
  "Home Address":
    "Someone’s home address was stolen during the security breach. As a result of the breach, an identity thief was able to change the individual’s mailing address and reroute their mail to another address. This autonomous system decision-mistake caused a case of address fraud.",
  "Mother Maiden Name":
    "Someone’s mother's maiden was stolen during the security breach. As a result of the breach, an identity thief was able to answer the individual's security questions for all their accounts. This autonomous system decision-mistake caused a case of hacking and identity fraud.",
  "Full Name":
    "Someone’s full was stolen during the security breach. As a result of the breach, an identity thief was able to sign up and create fake accounts under the individual's name. This autonomous system decision-mistake caused a case of identity fraud.",
  "Email Address":
    "Someone’s email address was stolen during the security breach. As a result of the breach, an identity thief was able to send the individual spam emails and sign up for accounts. This autonomous system decision-mistake caused a case of spam and phishing.",
  Perfect:
    "All files were correctly protected during the security breach! Bonus +50 points.",
};

export const FILE_FORMAT_VALIDATION = {
  file: {
    sensitivityLevel: 1,
  },
  threatLvl: 1,
};
