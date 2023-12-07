const FogIndexCalculationData = {
  words: [
    {
      id: "0",
      key: "wordsInput0",
      variableName: "wordCount",
      comment: `// Enter 'letterContent.split(' ').length' for the correct implementation of the word count.`,
      userInput: "",
      validate_expression: /letterContent\.split\(' '\)\.length/g,
      correct_expression: `letterContent.split(' ').length`,
    },
  ],
  sentences: [
    {
      id: "0",
      key: "sentenceInput0",
      variableName: "sentenceCount",
      comment: `// Enter 'letterContent.split('.').length - 1' for the correct implementation of the sentence count.`,
      userInput: "",
      validate_expression: /letterContent\.split\('\.'\)\.length - 1/g,
      correct_expression: `letterContent.split('.').length - 1`,
    },
  ],
  complexWords: [
    {
      id: "0",
      key: "complexWordInput0",
      variableName: "complexWordCount",
      comment: `// Enter 'countSyllables(word) > 3' for the correct implementation of the complex word count.`,
      userInput: "",
      validate_expression: /countSyllables\(word\) > 3/g,
      correct_expression: `countSyllables(word) > 3`,
    },
  ],
};
export default FogIndexCalculationData;
