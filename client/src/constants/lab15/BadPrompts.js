export const BAD_PROMPTS = [
  {
    id: "prompt-1",
    text: "Why did the Roman Empire fall?",
    aiResponse:
      "Invasions by barbarian tribes in 476 CE caused over 80% of the Roman Empire's collapse.",
    hallucinationType: "Fabricated Statistic",
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
      "At its peak, the Roman Empire stretched from Ireland to India, covering most of Europe and large parts of Asia.",
    hallucinationType: "Geographical Exaggeration",
    whatWentWrong:
      "The Roman Empire never controlled Ireland or India. This part of the answer exaggerates Rome's real territory.",
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
    whatWentWrong:
      'Historians do not universally agree on which Roman emperor was the "greatest." This is a debated question.',
    whyPromptCausedThis:
      'The prompt used subjective language like "greatest" without defining any criteria, so the AI answered with one interpretation as if it were settled fact.',
    fakeCitation: "",
  },
];
