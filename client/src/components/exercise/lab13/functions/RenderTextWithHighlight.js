import React from "react";

// Helper function to parse text and highlight specific patterns
export const renderTextWithHighlight = (text, highlightPatterns = []) => {
  if (!text || !highlightPatterns.length) return text;

  // Combine all patterns into one regex on a single pass
  const sortedPatterns = [...highlightPatterns].sort(
    (a, b) => b.length - a.length,
  );
  const escapedPatterns = sortedPatterns.map((p) =>
    p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const combinedPattern = escapedPatterns.map((p) => `(${p})`).join("|");
  const regex = new RegExp(combinedPattern, "gi");

  // Split once - capturing groups make matches return at odd indices
  const segments = text.split(regex);
  let keyCounter = 0;

  return segments.map((segment, i) => {
    // Odd indices are matches (from capturing groups)
    if (i % 2 === 1 && segment) {
      return (
        <span
          key={`highlight-${keyCounter++}`}
          className="tw-bg-primary-yellow tw-px-1 tw-rounded-sm tw-font-semibold"
        >
          {segment}
        </span>
      );
    }
    return segment;
  });
};
