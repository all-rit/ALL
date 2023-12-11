const LAB_ID = 11;
const REPAIR = "/Repair";
const EXERCISE_PATH = "/Lab11/Exercise";
const INFORMATION_LETTER_INTRODUCTION = "/InformationLetterIntroduction";
const FOG_INDEX_FORMULA_INTRODUCTION = "/FogIndexFormulaIntroduction";
const FOG_INDEX_FORMULA_SENTENCES = "/FogIndexFormulaSentences";
const FOG_INDEX_FORMULA_COMPLEX_WORDS = "/FogIndexFormulaComplexWords";
const FOG_INDEX_FORMULA_CONCLUSION = "/FogIndexFormulaConclusion";
const INFORMATION_LETTER_WORD_COUNT = "/InformationLetterWordCount";
const INFORMATION_LETTER_SENTENCE_COUNT = "/InformationLetterSentenceCount";
const INFORMATION_LETTER_COMPLEX_WORD_COUNT =
  "/InformationLetterComplexWordCount";
const INFORMATION_LETTER_FOG_INDEX_FORMULA =
  "/InformationLetterFogIndexFormula";
const LITERACY_EXERCISE_END = "/ExerciseEnd";

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

const LETTER_TEXT_FOG_INDEX_CREATE_YOUR_OWN = `Salutations Students! [Click/Navigate here to edit this text.]`;

const LETTER_TEXT_FOG_INDEX_12 = `
As the vernal equinox unfurls its fecund blossoms, we bid you an effusive welcome to the commencement of a new semester replete with scholastic opportunities. For freshmen and fledgling scholars embarking on novel academic journeys, orient yourselves to the manifold intellectual pursuits our venerable institution curates. Avail yourselves of the copious resources at our disposal—from our unparalleled anthology of incunabula to cutting-edge laboratory equipment for propitious scientific discovery. Veterans of campus life revel in reuniting with professors and peers after the languor of summer and winter respites dissolved productive scholarly collaboration. Now we reconvene our elevated colloquies anew. Let erudite contemplation and fecund cogitation see your nascent notions transformed into myriad fruits of human progress. Together we shall illuminate the gloom of ignorance and celebrate the abundant creativity within every student.
`;

const LETTER_TEXT_FOG_INDEX_20 = `As the terrestrial orb concluded its perennial revolution and this venerable institution tempestuously resumed its scholarly pursuits, erudite intelligentsia once more coalesced within our hallowed, ivy-strewn edifices—their cerebrations bearing the abundant potential to elucidate manifold mysteries which have heretofore obstinately obfuscated human ontology. Embarking students initiate their nascent erudition by assimilating copious foundational facts and theories through assiduous perusal of our abundant anthologies and compendia. Matriculated upperclassmen generate multitudinous postulates and hypotheses in laboratories replete with sophisticated investigative instrumentation. All stalwart students able to assuage the ennui of winter respite: immerse yourselves within salubrious academic dialogue, allowing bracing dialectics to suffuse your intellect. This semester shall witness our luminous coterie disseminate its creative ingenuity through myriad channels—book and periodical publications, scientific advancements, philosophical treatises—all fruits of applied ratiocination.`;

const LETTER_TEXT_FOG_INDEX_16 = `As our eminent institution reopens its palatial portals to inaugurate another term of erudite ratiocination and speculation after the inclement yet salubrious hiatus, we salute the convocation of preeminent savants within these halcyon, ivy-clad edifices. Resplendent neophytes embark upon nascent intellectual odysseys, imbibing the elucubrations of bygone philosophes and polymaths, thus auguring sagacious scholarliness. Concurrently, their perspicacious forbearers generate experiments and treatises expanding human cognition: altruistic contributions toward illumination and edification. All stalwart academics, bask within our academe’s effulgence! Allow fecund dialectics to germinate innovative insights. Assessing the prodigious potential of this burgeoning term, myriad groundbreaking developments shall indubitably eventuate from the fruitful pens and lips of our institution’s luminaries. What boons untold await revelation through cogent ratiocination and assiduous extrapolation of new theorems flowing from this numinous font of wisdom!`;

const LETTER_TEXT_FOG_INDEX_6 = `Welcome Back Students!
We hope you enjoyed your break and are rested and recharged for the start of a new semester here on campus. Whether you went home or stayed here over the holidays, we're excited to have you back!
As you return to your classes, clubs, sports, and more, remember that your student resources are here to support you. Tutoring services can help sharpen your skills and prep for exams. Counseling and wellness programs support overall health. And campus events let you meet up with friends or make new ones.
This semester, be sure to tap into the great amenities that make our campus community special. Catch up over coffee at the student union. Hit the newly upgraded gym after classes. Or study with friends at the library before heading out to enjoy the sunny quad.
We look forward to seeing all that you accomplish this term! Let us know how we can back you up on your journey. Have a great start!`;

const LETTER_TEXT_FOG_INDEX_10 = `Greetings Students,
As we find ourselves embarking upon another semester here at our beloved institution of higher learning, a warm welcome to you all whether returning from a restful holiday respite or persevering straight on through enrollment. This close-knit campus provides fertile soil for personal betterment and we trust your roots have sunk deeply into said bounty.
Please do empower your scholastic efforts during this budding term. Strong guidance is at the ready to bolster comprehension, while counsel remains prepared to uphold mental well-being. Take joy in the student union over refreshing drinks, athletic feats honed side-by-side in the newly refurbished gymnasium, and the whispering halls of knowledge united in learning’s cause at our library’s trying tables.
Communicate any needs requiring assistance and we shall provide support through the peaks and valleys ahead. For now, fare thee well and do embark up the educational mountain with aplomb!`;

const LETTER_TEXT_FOG_INDEX_8 = `Welcome back for another semester! We hope all students returning from break feel recharged and ready for the weeks ahead as we resume our vibrant on-campus community. We're glad to have everyone back together in this stimulating academic environment.
Take advantage of our stellar resources to aid your learning goals this term. Seek out peer tutoring groups collaborating to comprehend challenging topics. Talk with counselors available for advice on managing study stress and staying mentally and physically healthy. Reflect on wellness tips for balancing busy schedules.
Come together and connect over all that enriches campus life. Chat with classmates over coffee for spirited discussions that brew new thinking. Make new friends for moral support while exercising in the gym or dining halls. Find your band of compatible peers hitting the books in the library—learning thrives on teamwork.
We walk with each student, offering backup so you can feel engaged, empowered and determined seeing this promising term through. We expect great personal growth and discovery in the months ahead! Let the adventure begin!
`;

const LETTER_TEXT_ARRAY = [
  LETTER_TEXT_FOG_INDEX_6,
  LETTER_TEXT_FOG_INDEX_8,
  LETTER_TEXT_FOG_INDEX_10,
  LETTER_TEXT_FOG_INDEX_12,
  LETTER_TEXT_FOG_INDEX_16,
  LETTER_TEXT_FOG_INDEX_20,
  LETTER_TEXT_FOG_INDEX_CREATE_YOUR_OWN,
];

export {
  LAB_ID,
  EXERCISE_STATES,
  LETTER_TEXT_FOG_INDEX_6,
  LETTER_TEXT_FOG_INDEX_8,
  LETTER_TEXT_FOG_INDEX_10,
  LETTER_TEXT_FOG_INDEX_12,
  LETTER_TEXT_FOG_INDEX_16,
  LETTER_TEXT_FOG_INDEX_20,
  LETTER_TEXT_FOG_INDEX_CREATE_YOUR_OWN,
  REPAIR,
  EXERCISE_PATH,
  WORD_COUNT_REPAIR_HEADING,
  SENTENCE_COUNT_REPAIR_HEADING,
  COMPLEX_WORD_COUNT_REPAIR_HEADING,
  LETTER_TEXT_ARRAY,
  INFORMATION_LETTER_INTRODUCTION,
  FOG_INDEX_FORMULA_INTRODUCTION,
  FOG_INDEX_FORMULA_SENTENCES,
  FOG_INDEX_FORMULA_COMPLEX_WORDS,
  FOG_INDEX_FORMULA_CONCLUSION,
  INFORMATION_LETTER_WORD_COUNT,
  INFORMATION_LETTER_SENTENCE_COUNT,
  INFORMATION_LETTER_COMPLEX_WORD_COUNT,
  INFORMATION_LETTER_FOG_INDEX_FORMULA,
  LITERACY_EXERCISE_END,
};
