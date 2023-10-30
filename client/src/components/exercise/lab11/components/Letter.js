/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import grad_hat from "../../../../assets/images/lab11/grad_hat.png";
import signature from "../../../../assets/images/lab11/signature.png";
import { useContext } from "react";
import ExerciseStateContext from "../Lab11Context";

const Letter = (props) => {
  const {
    letterContent,
    setLetterContent,
    totalWords,
    setTotalWords,
    totalSentences,
    setTotalSentences,
    totalComplexWords,
    setTotalComplexWords,
    fogIndex,
    setFogIndex,
  } = useContext(ExerciseStateContext);

  function countSyllables(word) {
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

  useEffect(() => {
    let words = letterContent.split(" ").length;
    let sentences = letterContent.split(".").length;
    let complex = letterContent
      .split(" ")
      .filter((word) => countSyllables(word) > 3).length;
    let fogIndex = (
      0.4 *
      (words / sentences + 100 * (complex / words))
    ).toFixed(4);
    setTotalWords(words);
    setTotalSentences(sentences);
    setTotalComplexWords(complex);
    setFogIndex(fogIndex);
  }, [letterContent]);

  return (
    <div className={`tw-w-full tw-h-auto`}>
      {/* Letter Header */}
      <div className={`tw-my-8 tw-flex tw-flex-row tw-w-full`}>
        <div
          className={`tw-w-full md:tw-w-1/2 sm:tw-px-5 tw-flex tw-flex-row sm:tw-space-x-6 tw-items-center`}
        >
          <div className={`tw-flex tw-flex-row tw-h-full tw-items-center`}>
            <div className={`tw-bg-[#431407] tw-w-3 tw-h-[76px]`} />
            <div className={`tw-flex tw-flex-col`}>
              <div className={`tw-bg-[#431407] tw-w-full tw-h-3`} />
              <img className={`tw-w-9 tw-h-9 tw-m-2`} src={grad_hat} />
              <div className={`tw-bg-[#431407] tw-h-3 tw-w-full`} />
            </div>
            <div className={`tw-w-3 tw-h-[76px]`} />
          </div>
          <div
            className={`tw-text-[#1c1917] tw-text-4xl tw-font-light tw-break-words`}
            style={{ fontFamily: "Kumbh Sans" }}
          >
            ALL University
          </div>
        </div>
        <div
          className={`tw-w-1/3 md:tw-w-1/2 tw-h-auto tw-flex tw-flex-row max-sm:tw-hidden`}
        >
          <div className={`tw-flex tw-flex-col tw-w-2/3`}>
            <div className={`tw-h-[42.5%] `} />
            <div className={`tw-h-[15%] tw-bg-[#431407]`} />
            <div className={`tw-h-[42.5%] `} />
          </div>
          <div
            className={`tw-bg-[#431407] tw-w-1/3 tw-h-[65%] tw-self-center`}
          />
        </div>
      </div>
      {/* Letter Content */}
      <div className={`tw-flex tw-w-full tw-flex-row tw-h-auto`}>
        <div className="tw-flex tw-flex-col tw-w-[5%]">
          <div className="tw-h-1/3 " />
          <div className="tw-h-2/3 tw-bg-[#431407]" />
        </div>
        <div className="tw-w-[90%] tw-flex tw-justify-center">
          <div className={`tw-w-[85%] tw-h-auto tw-flex tw-flex-col tw-px-2`}>
            <div
              className={`tw-h-auto tw-text-xl tw-text-black tw-font-medium tw-self-start tw-text-start tw-word-breaks tw-mb-16`}
              style={{ fontFamily: "Kumbh Sans" }}
            >
              Fake Name Here
              <br />
              111 Street Name Here,
              <br />
              City, State, 14626
            </div>
            <div
              className={`tw-h-auto tw-text-xl tw-text-black tw-font-bold tw-self-start tw-mb-10`}
              style={{ fontFamily: "Kumbh Sans" }}
            >
              Dear Lorem,
            </div>
            <div className="tw-flex tw-flex-row tw-w-full tw-space-x-6 tw-py-6 tw-text-2xl">
              <div>Total Words: {totalWords}</div>
              <div>Total Sentences: {totalSentences}</div>
              <div>Total Complex Words: {totalComplexWords}</div>
              <div>Fog Index: {fogIndex}</div>
            </div>
            <div
              id="editable-letter"
              aria-label="Please edit the letter below to change fog index."
              contentEditable="true"
              suppressContentEditableWarning={true}
              tabIndex={0}
              className={`tw-px-2 tw-text-black tw-text-xl tw-font-medium tw-break-words tw-text-start `}
              style={{ fontFamily: "Kumbh Sans" }}
              onInput={(e) => {
                setLetterContent(e.target.innerText);
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eros tellus, hendrerit quis iaculis non, blandit eget turpis. Sed
              at tristique ex. Nam feugiat sodales nulla, ac lobortis diam
              porttitor vel. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Sed iaculis lectus
              orci, eget imperdiet lectus venenatis non.
              <br />
              <br /> Sem et tortor consequat id porta. Nibh praesent tristique
              magna sit amet purus gravida. Nibh venenatis cras sed felis eget.
              Consequat id porta nibh venenatis cras sed. Commodo odio aenean
              sed adipiscing. Volutpat commodo sed egestas egestas fringilla.
              Mattis vulputate enim nulla aliquet porttitor. Curabitur gravida
              arcu ac tortor dignissim convallis aenean et. Habitant morbi
              tristique senectus et netus et malesuada. Ullamcorper morbi
              tincidunt ornare massa eget egestas purus viverra. Arcu cursus
              euismod quis viverra nibh cras. Nunc non blandit massa enim nec
              dui. Placerat vestibulum lectus mauris ultrices eros. In mollis
              nunc sed id.
              <br />
              <br /> Donec ultrices tincidunt arcu non sodales neque. Donec et
              odio pellentesque diam volutpat commodo sed egestas. Nisl nisi
              scelerisque eu ultrices vitae auctor eu. Cras sed felis eget velit
              aliquet. Libero volutpat sed cras ornare arcu. Vitae turpis massa
              sed elementum tempus egestas sed. Facilisi etiam dignissim diam
              quis enim. Tellus elementum sagittis vitae et leo. Rhoncus mattis
              rhoncus urna neque viverra justo nec ultrices. Risus nec feugiat
              in fermentum posuere urna nec tincidunt praesent. Risus ultricies
              tristique nulla aliquet enim tortor at. Nulla aliquet porttitor
              lacus luctus accumsan. Integer eget aliquet nibh praesent.
            </div>
            <div
              className={`tw-h-auto tw-text-xl tw-text-black tw-font-bold tw-break-words tw-self-start tw-text-start tw-mt-10`}
              style={{ fontFamily: "Kumbh Sans" }}
            >
              Sincerly,
              <br />
              Fake Name
            </div>
            <img
              className={`tw-w-[50px] tw-h-[50px] tw-mb-10 tw-self-start`}
              src={signature}
            />
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-w-[5%]">
          <div className="tw-h-1/3 " />
          <div className="tw-h-2/3 tw-bg-[#431407]" />
        </div>
      </div>
      <div className="tw-w-full tw-h-10 tw-bg-[#431407]" />
    </div>
  );
};

export default Letter;
