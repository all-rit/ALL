const LAB_ID = 11;
const EXERCISE_PLAYING = "EXERCISE_PLAYING";
const EXERCISE_IDLE = "EXERCISE_IDLE";
const REPAIR = "/Repair";
const EXERCISE_PATH = "/Lab11/Exercise";

const REPAIR_WORD_COUNT = "WordCount";
const REPAIR_SENTENCE_COUNT = "SentenceCount";
const REPAIR_COMPLEX_WORDS = "ComplexWordCount";

const WORD_COUNT_REPAIR_HEADING = "Word Count Repair";
const SENTENCE_COUNT_REPAIR_HEADING = "Sentence Count Repair";
const COMPLEX_WORD_COUNT_REPAIR_HEADING = "Complex Word Count Repair";

const EXERCISE_STATES = {
  REPAIR_WORD_COUNT,
  REPAIR_SENTENCE_COUNT,
  REPAIR_COMPLEX_WORDS,
};

const LETTER_TEXT = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
    eros tellus, hendrerit quis iaculis non, blandit eget turpis. Sed
    at tristique ex. Nam feugiat sodales nulla, ac lobortis diam
    porttitor vel. Orci varius natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus. Sed iaculis lectus
    orci, eget imperdiet lectus venenatis non.

    Sem et tortor consequat id porta. Nibh praesent tristique
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
    
    Donec ultrices tincidunt arcu non sodales neque. Donec et
    odio pellentesque diam volutpat commodo sed egestas. Nisl nisi
    scelerisque eu ultrices vitae auctor eu. Cras sed felis eget velit
    aliquet. Libero volutpat sed cras ornare arcu. Vitae turpis massa
    sed elementum tempus egestas sed. Facilisi etiam dignissim diam
    quis enim. Tellus elementum sagittis vitae et leo. Rhoncus mattis
    rhoncus urna neque viverra justo nec ultrices. Risus nec feugiat
    in fermentum posuere urna nec tincidunt praesent. Risus ultricies
    tristique nulla aliquet enim tortor at. Nulla aliquet porttitor
    lacus luctus accumsan. Integer eget aliquet nibh praesent.
`;

export {
  LAB_ID,
  EXERCISE_PLAYING,
  EXERCISE_IDLE,
  EXERCISE_STATES,
  LETTER_TEXT,
  REPAIR,
  EXERCISE_PATH,
  WORD_COUNT_REPAIR_HEADING,
  SENTENCE_COUNT_REPAIR_HEADING,
  COMPLEX_WORD_COUNT_REPAIR_HEADING,
};
