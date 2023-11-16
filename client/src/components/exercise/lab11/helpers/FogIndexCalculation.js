/**
   * Counts the number of syllables in a given word.
   * @param {string} word - The word to count syllables for.
   * @returns {number} The number of syllables in the word.
   */
const countSyllables = (word) => {
    let syllableCount = 0;
    const vowels = new Set(["a", "e", "i", "o", "u", "y"]);

    if (vowels.has(word[0])) {
      syllableCount++;
    }

    for (let i = 1; i < word.length; i++) {
      if (vowels.has(word[i]) && !vowels.has(word[i - 1])) {
        syllableCount++;
      }
    }

    if (word.endsWith("e")) {
      syllableCount--;
    }

    if (
      word.endsWith("le") &&
      word.length > 2 &&
      !vowels.has(word[word.length - 3])
    ) {
      syllableCount++;
    }

    if (syllableCount === 0) {
      syllableCount++;
    }

    return syllableCount;
  }

const fogIndexCalculation = (letterContent) => {
    let wordCount = letterContent.split(" ").length;
    let sentenceCount = letterContent.split(".").length;
    let complexWordCount = letterContent
      .split(" ")
      .filter((word) => countSyllables(word) > 3).length;
    let fogIndex = (
      0.4 *
      (wordCount / sentenceCount + 100 * (complexWordCount / wordCount))
    ).toFixed(4);

    return {
        wordCount,
        sentenceCount,
        complexWordCount,
        fogIndex
    }
}

export { fogIndexCalculation, countSyllables }