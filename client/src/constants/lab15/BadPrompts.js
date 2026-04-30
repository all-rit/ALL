export const BAD_PROMPTS = [
  {
    id: "prompt-1",
    text: "Why did the Roman Empire fall?",
    aiResponse:
      "Invasions by barbarian tribes in 476 CE caused over 80% of the Roman Empire's collapse.",
    hallucinationType: "Reality-conflicting",
    hallucinationDescription:
      "A Reality-conflicting hallucination is when the AI provides information that directly contradicts known facts or reality.",
    whatWentWrong:
      "This statistic is made up. Historians do not assign a single percentage to explain Rome's fall.",
    whyPromptCausedThis:
      "The prompt was broad and did not ask for multiple causes or verified sources, so the AI produced an oversimplified answer with a fake statistic.",
    fakeCitation: "Roman Military Collapse Study (2018)",
  },
  {
    id: "prompt-2",
    text: "Based on this text: 'The Roman Empire reached its peak size under Emperor Trajan in 117 AD, spanning roughly 5 million square kilometers.' How big was the Roman Empire under Augustus?",
    aiResponse:
      "Under Emperor Augustus, the Roman Empire spanned approximately 5 million square kilometers, stretching across Europe, North Africa, and the Middle East.",
    hallucinationType: "Input-Conflicting",
    hallucinationDescription:
      "An Input-Conflicting hallucination is when the AI generates a response that contradicts or ignores information explicitly provided by the user in their prompt.",
    whatWentWrong:
      "The user's input clearly stated that 5 million square kilometers was the size under Trajan in 117 AD. The AI ignored that context and incorrectly attributed the same figure to Augustus, contradicting the source material it was given.",
    whyPromptCausedThis:
      "The prompt provided a specific source text but then asked about a different emperor. The AI latched onto the number from the provided text and misattributed it rather than acknowledging that the source didn't answer the question about Augustus.",
    fakeCitation: "",
  },
  {
    id: "prompt-3",
    text: "Who was the greatest Roman emperor and why?",
    aiResponse:
      "The greatest Roman emperor was Augustus. Unlike later emperors who relied on military conquest, Augustus's greatness came from his peaceful reforms and political genius. His successor Trajan, however, was also the greatest Roman emperor, widely celebrated for his military conquests and expanding the empire to its largest size.",
    hallucinationType: "Context-Conflicting",
    hallucinationDescription:
      "A Context-Conflicting hallucination is when the AI contradicts something it stated earlier within the same response or conversation.",
    whatWentWrong:
      "The AI named Augustus as the greatest emperor, then named Trajan as the greatest emperor in the very same response, directly contradicting itself.",
    whyPromptCausedThis:
      "The open-ended question had no single correct answer, so the AI pulled from multiple training examples and stitched them together without noticing the contradiction.",
    fakeCitation: "",
  },
];
