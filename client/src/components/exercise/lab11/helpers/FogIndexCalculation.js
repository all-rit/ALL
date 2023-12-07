/**
 * Counts the number of syllables in a given word.
 * @param {string} word - The word to count syllables for.
 * @returns {number} The number of syllables in the word.
 */
const countSyllables = (word) => {
  const vowels = new Set(["a", "e", "i", "o", "u", "y"]);
  let syllableCount = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.has(word[i]) && (i === 0 || !vowels.has(word[i - 1]))) {
      syllableCount++;
    }
  }

  if (word.endsWith("le") && word.length > 2 && !vowels.has(word[word.length - 3])) {
    syllableCount++;
  }

  if (word.endsWith("e") && (!word.endsWith("le") || vowels.has(word[word.length - 3]))) {
    syllableCount--;
  }

  return Math.max(syllableCount, 1);
};

/**
 * Calculates the fog index of a given letter.
 * @param {string} letterContent - The content of the letter.
 * @param {boolean} words - Whether or not to calculate the word count.
 * @param {boolean} sentences - Whether or not to calculate the sentence count.
 * @param {boolean} complexWords - Whether or not to calculate the complex word count.
 * @returns {object} An object containing the word count, sentence count, complex word count, and fog index.
 * @example
 * fogIndexCalculation("This is a sentence.", true, true, true);
 * // returns { wordCount: 4, sentenceCount: 1, complexWordCount: 0, fogIndex: 4.4 }
 **/
const fogIndexCalculation = (letterContent, words, sentences, complexWords) => {
  let wordCount = words ? letterContent.split(" ").length : 0;
  let sentenceCount = sentences ? letterContent.split(".").length - 1 : 0;
  let complexWordCount = complexWords
    ? letterContent.split(" ").filter((word) => countSyllables(word) > 3).length
    : 0;
  
  let fogIndex = complexWords
    ? (
        0.4 *
        (wordCount / sentenceCount + 100 * (complexWordCount / wordCount))
      ).toFixed(4)
    : sentenceCount
    ? (0.4 * (wordCount / sentenceCount + 100 * wordCount)).toFixed(4)
    : (0.4 * (wordCount + 100 * wordCount)).toFixed(4);

  fogIndex = parseFloat(fogIndex);

  return {
    wordCount,
    sentenceCount,
    complexWordCount,
    fogIndex,
  };
};

export { fogIndexCalculation, countSyllables };
