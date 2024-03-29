/* eslint-disable no-case-declarations */
/* eslint-disable require-jsdoc */

const createAvatarData = (avatarNumber, weightedValues) => {
  let appearanceWeight =
    weightedValues === undefined ? 7 : weightedValues?.appearance;
  let experienceWeight =
    weightedValues === undefined ? 6 : weightedValues?.yearsexperience;
  let payWeight =
    weightedValues === undefined ? 3 : weightedValues?.expectedpay;
  let availabilityWeight =
    weightedValues === undefined ? 4 : weightedValues?.availability;

  function generateName() {
    return (
      firstName[Math.floor(Math.random() * firstName.length)] +
      " " +
      lastNames[Math.floor(Math.random() * lastNames.length)]
    );
  }
  const firstName = [
    "Mark",
    "Vincent",
    "Tiffany",
    "Raymond",
    "Abraham",
    "Courtney",
    "Felicia",
    "Gustavo",
    "Benny",
    "Janet",
    "Jennifer",
    "Silvia",
    "Carmen",
    "Teri",
    "Jaden",
    "Bernadette",
    "Horace",
    "Lois",
    "Gerald",
    "Cody",
    "Bill",
    "Adam",
    "Wesley",
    "Meredith",
    "Carla",
    "Georgia",
    "Lela",
    "Patricia",
    "Jonathan",
    "Angelica",
    "Sonja",
    "Dana",
    "Alfredo",
    "Katrina",
    "Vanessa",
    "Violet",
    "Elena",
    "Lillian",
    "Evelyn",
    "Kimberly",
    "Clark",
    "Elbert",
    "Irene",
    "Warren",
    "Maria",
    "Roxanne",
    "Toni",
    "Jerald",
    "Terri",
    "Willis",
    "Jonathon",
    "Marianne",
    "Kathleen",
    "Georgia",
    "Beth",
    "Lawrence",
    "Kelly",
    "Antoinette",
    "Brett",
    "Tim",
    "Lauren",
    "Terry",
    "Brent",
    "Troy",
    "Wilbert",
    "Vega",
    "Darrin",
    "Bobbie",
    "Clarke",
    "Camille",
    "Lester",
    "Mindy",
    "Morton",
    "Brandi",
  ];
  const lastNames = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  //Biases
  const hats = ["Hat", "WinterHat1", "WinterHat2", "WinterHat3"];
  const glasses = [
    "Kurt",
    "Prescription01",
    "Prescription02",
    "Round",
    "Sunglasses",
    "Wayfarers",
  ];
  const shirtColor = ["Blue01", "Blue02", "Blue03", "PastelBlue"];
  const hairColor = ["SilverGray", "Red", "Blue", "PastelPink"];

  const bias = ["hats", "glasses", "shirtColor", "hairColor"];

  const TopType = [
    "NoHair",
    "ShortHairShaggyMullet",
    "Hijab",
    "Turban",
    "LongHairBob",
    "LongHairBigHair",
    "LongHairCurly",
    "LongHairCurvy",
    "LongHairFro",
    "LongHairFroBand",
    "LongHairNotTooLong",
    "LongHairMiaWallace",
    "LongHairStraightStrand",
    "ShortHairDreads01",
    "ShortHairDreads02",
    "ShortHairFrizzle",
    "ShortHairShaggyMullet",
    "ShortHairShortCurly",
    "ShortHairShortFlat",
    "ShortHairShortRound",
    "ShortHairShortWaved",
    "ShortHairSides",
    "ShortHairTheCaesar",
    "ShortHairTheCaesarSidePart",
  ];

  const noBaldTopType = [
    "ShortHairShaggyMullet",
    "Hijab",
    "Turban",
    "LongHairBob",
    "LongHairBigHair",
    "LongHairCurly",
    "LongHairCurvy",
    "LongHairFro",
    "LongHairFroBand",
    "LongHairNotTooLong",
    "LongHairMiaWallace",
    "LongHairStraightStrand",
    "ShortHairDreads01",
    "ShortHairDreads02",
    "ShortHairFrizzle",
    "ShortHairShaggyMullet",
    "ShortHairShortCurly",
    "ShortHairShortFlat",
    "ShortHairShortRound",
    "ShortHairShortWaved",
    "ShortHairSides",
    "ShortHairTheCaesar",
    "ShortHairTheCaesarSidePart",
  ];
  const ClothesColor = [
    "Black",
    "Gray01",
    "Gray02",
    "Heather",
    "PastelGreen",
    "PastelOrange",
    "PastelRed",
    "PastelYellow",
    "Pink",
    "Red",
    "White",
  ];
  const HairColors = [
    "Auburn",
    "Black",
    "Blonde",
    "BlondeGolden",
    "Brown",
    "BrownDark",
  ];
  const FacialHairs = [
    "Blank",
    "Blank",
    "Blank",
    "Blank",
    "Blank",
    "Blank",
    "Blank",
    "Blank",
    "Blank",
    "Blank",
    "Blank",
    "BeardMedium",
    "BeardLight",
    "BeardMajestic",
    "MoustacheFancy",
    "MoustacheMagnum",
  ];
  const Clothes = [
    "BlazerShirt",
    "BlazerSweater",
    "CollarSweater",
    "GraphicShirt",
    "Hoodie",
    "Overall",
    "ShirtCrewNeck",
    "ShirtScoopNeck",
    "ShirtVNeck",
  ];
  const noBlazerClothes = [
    "CollarSweater",
    "GraphicShirt",
    "Hoodie",
    "Overall",
    "ShirtCrewNeck",
    "ShirtScoopNeck",
    "ShirtVNeck",
  ];
  const Eyes = ["Default", "Happy", "Wink"];
  const Eyebrow = [
    "Default",
    "DefaultNatural",
    "FlatNatural",
    "UpDown",
    "UpDownNatural",
  ];
  const Mouth = ["Default", "Serious", "Smile", "Twinkle"];
  const Skin = ["Tanned", "Brown", "DarkBrown", "Black", "Pale", "Light"];

  const Gender = ["Male", "Female", "Non-binary"];

  //need min and max val's for age
  const age = "N/A";

  const Availability = ["Full-Time", "Part-Time"];
  let avatarData = [];
  for (let i = 0; i < avatarNumber; i++) {
    let currentWeight = 0;
    let biasType = bias[Math.floor(Math.random() * bias.length)];
    let years = Math.floor(Math.random() * 5) + 1;
    let candidateavailability =
      Availability[Math.floor(Math.random() * Availability.length)];
    let pay = Math.floor(Math.random() * 15 + 20);
    currentWeight += years >= 1 && years <= 3 ? experienceWeight : 0;
    currentWeight +=
      candidateavailability == "Full-Time" ? availabilityWeight : 0;
    currentWeight += pay >= 25 && pay <= 32 ? payWeight : 0;

    switch (biasType) {
      case "hats":
        avatarData.push({
          id: i + 1,
          name: generateName(),
          avatarAttributes: {
            topType: hats[Math.floor(Math.random() * hats.length)],
            accessoriesType: "Blank",
            hairColor:
              HairColors[Math.floor(Math.random() * HairColors.length)],
            facialHairType:
              FacialHairs[Math.floor(Math.random() * FacialHairs.length)],
            clotheType: Clothes[Math.floor(Math.random() * Clothes.length)],
            clotheColor:
              ClothesColor[Math.floor(Math.random() * ClothesColor.length)],
            eyeType: Eyes[Math.floor(Math.random() * Eyes.length)],
            eyebrowType: Eyebrow[Math.floor(Math.random() * Eyebrow.length)],
            mouthType: Mouth[Math.floor(Math.random() * Mouth.length)],
            skinColor: Skin[Math.floor(Math.random() * Skin.length)],
          },
          //added attributes to each case
          gender: Gender[Math.floor(Math.random() * Gender.length)],
          age: age,

          years: years,
          availability: candidateavailability,
          pay: "$" + pay + "/hr",
          ai: currentWeight >= 15 ? "Yes" : "No",
          bias: "Avatar is wearing a hat",
        });
        break;
      case "glasses":
        avatarData.push({
          id: i + 1,
          name: generateName(),
          avatarAttributes: {
            topType: TopType[Math.floor(Math.random() * TopType.length)],
            accessoriesType:
              glasses[Math.floor(Math.random() * glasses.length)],
            hairColor:
              HairColors[Math.floor(Math.random() * HairColors.length)],
            facialHairType:
              FacialHairs[Math.floor(Math.random() * FacialHairs.length)],
            clotheType: Clothes[Math.floor(Math.random() * Clothes.length)],
            clotheColor:
              ClothesColor[Math.floor(Math.random() * ClothesColor.length)],
            eyeType: Eyes[Math.floor(Math.random() * Eyes.length)],
            eyebrowType: Eyebrow[Math.floor(Math.random() * Eyebrow.length)],
            mouthType: Mouth[Math.floor(Math.random() * Mouth.length)],
            skinColor: Skin[Math.floor(Math.random() * Skin.length)],
          },
          //added attributes to each case
          gender: Gender[Math.floor(Math.random() * Gender.length)],
          age: age,

          years: years,
          availability: candidateavailability,
          pay: "$" + pay + "/hr",
          ai: currentWeight >= 15 ? "Yes" : "No",
          bias: "Avatar is wearing glasses",
        });
        break;
      case "shirtColor":
        currentWeight += appearanceWeight;
        let scolor = shirtColor[Math.floor(Math.random() * shirtColor.length)];
        avatarData.push({
          id: i + 1,
          name: generateName(),
          avatarAttributes: {
            topType: TopType[Math.floor(Math.random() * TopType.length)],
            accessoriesType: "Blank",
            hairColor:
              HairColors[Math.floor(Math.random() * HairColors.length)],
            facialHairType:
              FacialHairs[Math.floor(Math.random() * FacialHairs.length)],
            clotheType:
              noBlazerClothes[
                Math.floor(Math.random() * noBlazerClothes.length)
              ],
            clotheColor: scolor,
            eyeType: Eyes[Math.floor(Math.random() * Eyes.length)],
            eyebrowType: Eyebrow[Math.floor(Math.random() * Eyebrow.length)],
            mouthType: Mouth[Math.floor(Math.random() * Mouth.length)],
            skinColor: Skin[Math.floor(Math.random() * Skin.length)],
          },
          //added attributes to each case
          gender: Gender[Math.floor(Math.random() * Gender.length)],
          age: age,

          years: years,

          availability: candidateavailability,
          pay: "$" + pay + "/hr",
          ai: currentWeight >= 15 ? "Yes" : "No",
          bias: "Avatar's shirt is the color " + scolor,
        });
        break;
      case "hairColor":
        currentWeight += appearanceWeight;
        let hcolor = hairColor[Math.floor(Math.random() * hairColor.length)];
        avatarData.push({
          id: i + 1,
          name: generateName(),
          avatarAttributes: {
            topType:
              noBaldTopType[Math.floor(Math.random() * noBaldTopType.length)],
            accessoriesType: "Blank",
            hairColor: hcolor,
            facialHairType:
              FacialHairs[Math.floor(Math.random() * FacialHairs.length)],
            clotheType: Clothes[Math.floor(Math.random() * Clothes.length)],
            clotheColor:
              ClothesColor[Math.floor(Math.random() * ClothesColor.length)],
            eyeType: Eyes[Math.floor(Math.random() * Eyes.length)],
            eyebrowType: Eyebrow[Math.floor(Math.random() * Eyebrow.length)],
            mouthType: Mouth[Math.floor(Math.random() * Mouth.length)],
            skinColor: Skin[Math.floor(Math.random() * Skin.length)],
          },
          //added attributes to each case
          gender: Gender[Math.floor(Math.random() * Gender.length)],
          age: age,
          years: years,

          availability: candidateavailability,
          pay: "$" + pay + "/hr",
          ai: currentWeight >= 15 ? "Yes" : "No",
          bias: "Avatar's hair is the color " + hcolor,
        });
        break;
      default:
        break;
    }
  }
  return avatarData;
};

export default createAvatarData;
