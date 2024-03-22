import React from "react";

export const AI_CORRECT = "AI CORRECT";
export const AI_INCORRECT = "AI INCORRECT";

export const OPEN_FILE = "OPEN";
export const LOCKED_FILE = "LOCKED";
export const FILE_INTRUSION = "FILE_INTRUSION";
export const FILE_INCORRECT = "FILE_INCORRECT";
export const FILE_PROTECTED = "FILE_PROTECTED";

export const LAB_ID = 7;
export const FILE_COUNT = 5;
export const THREAT_MAX = 3;
export const NO_DELAY = 0;
export const DELAY_TIME = 3000;
export const READ_TIME = 10000;
export const ROUND_LIMIT = 5;

export const POPUP_MESSAGES = {
  INVALID_EXPRESSION: "You must pass in a valid expression.",
  ZERO_DIVISION: "Division by zero is not allowed.",
  SUCCESS: "The repairs have successfully been implemented.",
  FILE_SENS_NOT_INCLUDED: "Must include &lsquo;file.sensitivityLevel&lsquo;",
  THREAT_LVL_NOT_INCLUDED: "Must include &lsquo;threatLvl&lsquo;",
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
  SSN: (
    <>
      Someone&lsquo;s <b>social security number</b> was stolen during the
      security breach. As a result of the breach, an identity thief was able to{" "}
      <b>steal an individual&lsquo;s identity</b>. This autonomous system
      decision-mistake caused a case of <b>identity theft</b>.
    </>
  ),
  "Home Address": (
    <>
      Someone’s <b>home address</b> was stolen during the security breach. As a
      result of the breach, an identity thief was able to{" "}
      <b>
        change the individual’s mailing address and reroute their mail to
        another address
      </b>
      . This autonomous system decision-mistake caused a case of{" "}
      <b>address fraud</b>.
    </>
  ),
  "Parent's Last Name": (
    <>
      Someone’s <b>parent&lsquo;s last name</b> was stolen during the security
      breach. As a result of the breach, an identity thief was able to{" "}
      <b>
        answer the individual&lsquo;s security questions for all their accounts
      </b>
      . This autonomous system decision-mistake caused a case of <b>hacking</b>{" "}
      and <b>identity fraud</b>.
    </>
  ),
  "Full Name": (
    <>
      Someone’s <b>full name</b> was stolen during the security breach. As a
      result of the breach, an identity thief was able to{" "}
      <b>sign up and create fake accounts under the individual&lsquo;s name</b>.
      This autonomous system decision-mistake caused a case of{" "}
      <b>identity fraud</b>.
    </>
  ),
  "Email Address": (
    <>
      Someone’s <b>email address</b> was stolen during the security breach. As a
      result of the breach, an identity thief was able to{" "}
      <b>send the individual spam emails and sign up for accounts</b>. This
      autonomous system decision-mistake caused a case of <b>spam</b> and{" "}
      <b>phishing</b>.
    </>
  ),
  Perfect: (
    <b>
      All files were correctly protected during the security breach! Bonus +50
      points.
    </b>
  ),
};

export const FILE_FORMAT_VALIDATION = {
  file: {
    sensitivityLevel: 1,
  },
  threatLvl: 1,
};
