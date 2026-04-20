export const BAD_PROMPTS = [
  {
    id: "prompt-1",
    text: "Why did the Roman Empire fall?",
    aiResponse:
      "Invasions by barbarian tribes in 476 CE caused over 80% of the Roman Empire's collapse.",
    hallucinationType: "Fabricated Statistic",
    hallucinationDescription:
      "A Fabricated Statistic is when the AI invents a specific number or percentage that has no basis in real research or data.",
    whatWentWrong:
      "This statistic is made up. Historians do not assign a single percentage to explain Rome's fall.",
    whyPromptCausedThis:
      "The prompt was broad and did not ask for multiple causes or verified sources, so the AI produced an oversimplified answer with a fake statistic.",
    fakeCitation: "Roman Military Collapse Study (2018)",
  },
  {
    id: "prompt-2",
    text: "How big was the Roman Empire?",
    aiResponse:
      "In 9 AD, under Emperor Augustus, the Roman Empire covered approximately 5 million square kilometers, including most of modern-day Europe, North Africa, and parts of the Middle East.",
    hallucinationType: "Factual Error",
    hallucinationDescription:
      "A Factual Error is when the AI states something that directly contradicts verifiable real world knowledge.",
    whatWentWrong:
      "The Roman Empire did control 5 million square kilometers at its height, but not in 9 AD. Augustus was still consolidating power and the empire had not yet reached its maximum territorial extent.",
    whyPromptCausedThis:
      "The prompt was too vague. It did not ask for a specific time period or precise geographic boundaries, so the AI filled in the gaps with an inaccurate but believable claim.",
    fakeCitation: "",
  },
  {
    id: "prompt-3",
    text: "Who was the greatest Roman emperor?",
    aiResponse:
      "Most historians agree that Marcus Aurelius was the greatest Roman emperor because his rule brought the empire into its most stable and prosperous period.",
    hallucinationType: "Subjective Claim Presented as Fact",
    hallucinationDescription:
      "A Subjective Claim Presented as Fact is when the AI states a personal opinion or debated topic as if everyone agrees on it, when in reality people have different views.",
    whatWentWrong:
      'Historians do not universally agree on which Roman emperor was the "greatest." This is a debated question.',
    whyPromptCausedThis:
      'The prompt used subjective language like "greatest" without defining any criteria, so the AI answered with one interpretation as if it were settled fact.',
    fakeCitation: "",
  },
];
