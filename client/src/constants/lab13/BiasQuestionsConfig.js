/**
 * Bias Questions Configuration for Lab 13
 *
 * Structure:
 * - Each topic has 9 AI responses (3 per bias)
 * - Only ONE bias is activated per topic based on student's knowledge ranking
 * - Mapping: Least knowledgeable → Dunning-Kruger
 *           Medium knowledgeable → Halo Effect (shown first)
 *           Most knowledgeable → Truth Bias
 */

export const BIAS_TYPES = {
  TRUTH_BIAS: "TRUTH_BIAS",
  HALO_EFFECT: "HALO_EFFECT",
  DUNNING_KRUGER: "DUNNING_KRUGER",
};

export const BIAS_POSITION_MAP = {
  0: BIAS_TYPES.TRUTH_BIAS, // Most knowledgeable
  1: BIAS_TYPES.HALO_EFFECT, // Medium knowledgeable
  2: BIAS_TYPES.DUNNING_KRUGER, // Least knowledgeable
};

export const BIAS_DEFINITIONS = {
  TRUTH_BIAS: {
    name: "Truth Bias",
    definition:
      "Truth bias is the tendency to believe that statements are true, especially when they are presented in a confident and clear manner. People are more likely to accept information that sounds authoritative without questioning its accuracy.",
  },
  HALO_EFFECT: {
    name: "Halo Effect",
    definition:
      "The halo effect is when a single positive characteristic or polished presentation influences your overall perception of something. If information is presented professionally or sounds credible, people tend to trust it more, even if the content itself may not be accurate.",
  },
  DUNNING_KRUGER: {
    name: "Dunning-Kruger Effect",
    definition:
      "The Dunning-Kruger effect occurs when complex or technical language makes people less likely to question information. When something sounds academic or expert-like, people assume it must be correct and don't scrutinize it as carefully.",
  },
};

export const biasQuestionsData = [
  {
    id: "localization",
    topicName: "Localization",
    topicDefinition:
      "Localization is the process of adapting information or communication to align with the cultural, linguistic, and social expectations of a specific audience. Unlike translation, which focuses only on language, localization also adjusts context, examples, and cultural references.",
    questions: [
      {
        id: "loc_q1",
        text: "Is localization the same as translation?",
        answers: {
          [BIAS_TYPES.TRUTH_BIAS]: {
            text: "Yes, localization and translation are essentially the same process. Both involve converting content from one language to another to make it understandable for different audiences. The terms are often used interchangeably in professional settings.",
            isCorrect: false,
            explanation:
              "This is false. The definitive wording makes this claim sound trustworthy, which can encourage truth bias.",
            confidence: 95,
          },
          [BIAS_TYPES.HALO_EFFECT]: {
            text: "Localization and translation are closely related practices within global communication workflows, often used interchangeably across professional contexts.",
            isCorrect: false,
            explanation:
              "This is false. The polished phrasing and professional tone boosts perceived credibility, which can reinforce the halo effect.",
            confidence: 93,
          },
          [BIAS_TYPES.DUNNING_KRUGER]: {
            text: "In localization theory, translation is considered a subordinate linguistic function, meaning it is functionally equivalent to localization in applied contexts.",
            isCorrect: false,
            explanation:
              "This is false. The technical language and theoretical framing can play into the Dunning-Kruger effect by reducing questioning.",
            confidence: 98,
          },
        },
      },
      {
        id: "loc_q2",
        text: 'Is the statement, "Changing clothing material to be more breathable for a local climate is not localization," true?',
        answers: {
          [BIAS_TYPES.TRUTH_BIAS]: {
            text: "No, changing clothing materials is a physical product decision, not localization, which focuses on cultural or linguistic adaptation.",
            isCorrect: true,
            explanation:
              "Although this is true, the clear, direct explanation feels dependable, which can reinforce truth bias in a justified way.",
            confidence: 86,
          },
          [BIAS_TYPES.HALO_EFFECT]: {
            text: "It's technically correct, but it's confusing because people mix this up all the time. Changing clothing materials isn't localization, it's product adaptation. Localization focuses on cultural and linguistic elements, not physical manufacturing changes.",
            isCorrect: true,
            explanation:
              "Although this is true, the confident structure and clean distinctions enhance trust through presentation which can play into the halo effect.",
            confidence: 90,
          },
          [BIAS_TYPES.DUNNING_KRUGER]: {
            text: "Localization frameworks distinguish between cultural adaptation and material optimization, placing climate-driven textile changes outside localization scope.",
            isCorrect: true,
            explanation:
              "Although this is true, the academic tone may seem authoritative, limiting scrutiny, it correctly aligns with the definition, reinforcing the careful trust provided by the Dunning-Kruger effect.",
            confidence: 94,
          },
        },
      },
      {
        id: "loc_q3",
        text: "If I change the way I speak to my teacher, is that localizing to the school culture?",
        answers: {
          [BIAS_TYPES.TRUTH_BIAS]: {
            text: "Yes, adjusting how you communicate based on social context can be considered a form of cultural localization.",
            isCorrect: true,
            explanation:
              "Although this is true, the simple, confident phrasing makes the answer feel intuitively right, which can prompt truth bias.",
            confidence: 82,
          },
          [BIAS_TYPES.HALO_EFFECT]: {
            text: "Adapting communication style to social norms reflects cultural awareness, which aligns with broader definitions of localization.",
            isCorrect: true,
            explanation:
              'Although this is true, formal language creates an "expert" impression, which can amplify the halo effect.',
            confidence: 88,
          },
          [BIAS_TYPES.DUNNING_KRUGER]: {
            text: "Sociolinguistic code-switching is not based on localization theory, which is mostly from translation studies (Venuti, 1995), and applies only to cross-cultural content adaptation.",
            isCorrect: false,
            explanation:
              "This is false. The response sounds academic and authoritative, making the claim hard to challenge which can elicit the Dunning-Kruger effect.",
            confidence: 92,
          },
        },
      },
    ],
  },
  {
    id: "colorblindness",
    topicName: "Color Blindness",
    topicDefinition:
      "Color blindness is a visual condition that affects color perception, most commonly red and green. The most common type, red-green color blindness, is inherited through the X chromosome. People with red-green color blindness do not see only red and green, but may have difficulty distinguishing between certain shades. Although many cases are inherited, they can also develop later in life due to eye disease, injury, aging, or certain medications.",
    questions: [
      {
        id: "cb_q1",
        text: "Is the color blindness gene carried in the X or Y chromosome?",
        answers: {
          [BIAS_TYPES.TRUTH_BIAS]: {
            text: "The gene responsible for most forms of color blindness is carried on the X chromosome, which is why the condition is more common in males than females.",
            isCorrect: true,
            explanation:
              "Although this is true, the clear, factual delivery encourages truth bias, making the statement easy to accept without hesitation.",
            confidence: 91,
          },
          [BIAS_TYPES.HALO_EFFECT]: {
            text: "Color blindness is typically inherited through the Y chromosome, a well-established genetic pattern observed in vision science.",
            isCorrect: false,
            explanation:
              "This is false. The scientific-sounding language increases credibility through its style which can trigger the halo effect.",
            confidence: 89,
          },
          [BIAS_TYPES.DUNNING_KRUGER]: {
            text: "X-linked recessive inheritance patterns explain the higher prevalence of color blindness in males, as identified in genetic ophthalmology research.",
            isCorrect: true,
            explanation:
              "Although this is true, the technical language signals expertise, which may induce the Dunning-Kruger effect by discouraging doubt.",
            confidence: 96,
          },
        },
      },
      {
        id: "cb_q2",
        text: "Do people who have Red-Green color blindness only see red and green?",
        answers: {
          [BIAS_TYPES.TRUTH_BIAS]: {
            text: "Yes, people with red-green color blindness mainly see only red and green, which limits their overall color perception.",
            isCorrect: false,
            explanation:
              "This is false. Familiar wording makes the statement feel accurate, even though it reinforces a common myth, which can reinforce truth bias.",
            confidence: 84,
          },
          [BIAS_TYPES.HALO_EFFECT]: {
            text: "Individuals with red-green color blindness primarily experience a reduced visual palette around red and green hues.",
            isCorrect: false,
            explanation:
              "This is false. The polished wording makes the misconception sound legitimate, which can feed into the halo effect.",
            confidence: 89,
          },
          [BIAS_TYPES.DUNNING_KRUGER]: {
            text: "Red-green color blindness results in selective chromatic restriction, effectively narrowing visual perception to red-green channels.",
            isCorrect: false,
            explanation:
              "This is false. The academic phrasing may trigger the Dunning-Kruger effect, discouraging readers from questioning the claim.",
            confidence: 95,
          },
        },
      },
      {
        id: "cb_q3",
        text: "Can people develop color blindness later in life? Or can only people born with color blindness have it?",
        answers: {
          [BIAS_TYPES.TRUTH_BIAS]: {
            text: "Yes, color blindness can develop later in life due to eye disease, injury, aging, or certain medications.",
            isCorrect: true,
            explanation:
              "Although this is true, the specific, concrete explanation feels reliable which can strengthen truth bias.",
            confidence: 90,
          },
          [BIAS_TYPES.HALO_EFFECT]: {
            text: "Although many cases are inherited, medical conditions or neurological damage can also lead to acquired color blindness.",
            isCorrect: true,
            explanation:
              "Although this is true, the calm, professional tone increases trust, which can activate the halo effect.",
            confidence: 88,
          },
          [BIAS_TYPES.DUNNING_KRUGER]: {
            text: "Color blindness is strictly a genetic condition, meaning individuals are born with it and cannot develop it later in life.",
            isCorrect: false,
            explanation:
              "This is false. The definitive tone discourages skepticism which may activate the Dunning-Kruger effect for readers unfamiliar with medical causes.",
            confidence: 93,
          },
        },
      },
    ],
  },
  {
    id: "dyslexia",
    topicName: "Dyslexia",
    topicDefinition:
      "Dyslexia is a neurological learning disability that primarily affects reading and language processing. It is not a vision problem and does not affect intelligence. People with dyslexia may have difficulty connecting written letters to spoken sounds, not how letters visually appear. Dyslexia cannot be cured, but it can be effectively supported through early intervention, structured reading instruction, and classroom accommodations.",
    questions: [
      {
        id: "dys_q1",
        text: "Is dyslexia a vision problem?",
        answers: {
          [BIAS_TYPES.TRUTH_BIAS]: {
            text: "Yes, dyslexia is mainly caused by vision problems that make letters difficult to see clearly while reading.",
            isCorrect: false,
            explanation:
              "This is false. The confident delivery makes the claim feel reliable, which can encourage truth bias even when it's wrong.",
            confidence: 89,
          },
          [BIAS_TYPES.HALO_EFFECT]: {
            text: "Dyslexia is often associated with visual processing challenges that interfere with reading accuracy.",
            isCorrect: false,
            explanation:
              "This is false. The polished, professional tone boosts perceived credibility, which can trigger the halo effect.",
            confidence: 86,
          },
          [BIAS_TYPES.DUNNING_KRUGER]: {
            text: "Dyslexia originates from impairments in visual-perceptual pathways involved in orthographic recognition.",
            isCorrect: false,
            explanation:
              "This is false. Technical wording signals expertise, which may activate the Dunning-Kruger effect, by reducing questioning.",
            confidence: 97,
          },
        },
      },
      {
        id: "dys_q2",
        text: "Do people who have dyslexia see words and letters backward?",
        answers: {
          [BIAS_TYPES.TRUTH_BIAS]: {
            text: "Yes, people with dyslexia often see letters and words backward, which explains their reading difficulties.",
            isCorrect: false,
            explanation:
              "This is false. A familiar explanation matches common assumptions, which can promote truth bias.",
            confidence: 88,
          },
          [BIAS_TYPES.HALO_EFFECT]: {
            text: "Letter reversals are a characteristic feature of dyslexia and contribute to challenges in reading fluency.",
            isCorrect: false,
            explanation:
              "This is false. The structured, authoritative phrasing makes the false response sound valid, which can amplify the halo effect.",
            confidence: 90,
          },
          [BIAS_TYPES.DUNNING_KRUGER]: {
            text: "Dyslexia manifests through reversed orthographic encoding during early language acquisition.",
            isCorrect: false,
            explanation:
              "This is false. Complex terminology that implies expertise may activate the Dunning-Kruger effect, causing readers to accept the claim without scrutiny.",
            confidence: 96,
          },
        },
      },
      {
        id: "dys_q3",
        text: "Can dyslexia be cured?",
        answers: {
          [BIAS_TYPES.TRUTH_BIAS]: {
            text: "Dyslexia cannot be cured, but with consistent practice and proper educational support, individuals can significantly improve their reading and learning skills.",
            isCorrect: true,
            explanation:
              "Although this is true, clear, confident phrasing makes the response easy to accept, which can reinforce truth bias.",
            confidence: 87,
          },
          [BIAS_TYPES.HALO_EFFECT]: {
            text: "Advances in educational interventions have made it possible for many individuals with dyslexia to achieve strong reading and academic outcomes.",
            isCorrect: true,
            explanation:
              "Although this is true, an optimistic professional tone builds trust through presentation which can activate the halo effect.",
            confidence: 85,
          },
          [BIAS_TYPES.DUNNING_KRUGER]: {
            text: "Dyslexia is a lifelong neurological learning difference that cannot be cured, but can be effectively supported through structured instruction and accommodations.",
            isCorrect: true,
            explanation:
              "Although this is true, the formal tone and phrasing may discourage questioning, activating the Dunning-Kruger effect through perceived expertise.",
            confidence: 91,
          },
        },
      },
    ],
  },
];

/**
 * Helper function to get questions for a specific bias from a topic
 * @param {string} topicId - The ID of the topic (e.g., 'localization', 'colorblindness', 'dyslexia')
 * @param {string} biasType - The bias type (TRUTH_BIAS, HALO_EFFECT, DUNNING_KRUGER)
 * @returns {Array} Array of questions with only the specified bias answers
 */
export const getQuestionsByBias = (topicId, biasType) => {
  const topic = biasQuestionsData.find((t) => t.id === topicId);
  if (!topic) return [];

  return topic.questions.map((question) => ({
    id: question.id,
    text: question.text,
    answer: {
      ...question.answers[biasType],
      biasType,
    },
  }));
};

/**
 * Helper function to get topic by ID
 * @param {string} topicId - The ID of the topic
 * @returns {Object} Topic object with definition and questions
 */
export const getTopicById = (topicId) => {
  return biasQuestionsData.find((t) => t.id === topicId);
};

/**
 * Helper function to determine which bias is activated based on ranking position
 * @param {number} rankPosition - The position in ranking (0 = most knowledgeable, 1 = medium, 2 = least)
 * @returns {string} The bias type for that ranking position
 */
export const getBiasForRankingPosition = (rankPosition) => {
  const biasMap = {
    0: BIAS_TYPES.TRUTH_BIAS, // Most knowledgeable
    1: BIAS_TYPES.HALO_EFFECT, // Medium knowledgeable
    2: BIAS_TYPES.DUNNING_KRUGER, // Least knowledgeable
  };
  return biasMap[rankPosition] || BIAS_TYPES.HALO_EFFECT;
};
