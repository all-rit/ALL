const avatarSelections = {
  skinColor: {
    options: {
      Pale: "Light",
      Brown: "Medium",
      Black: "Dark",
    },
    label: "Skin Color",
  },

  hairStyle: {
    options: {
      LongHairStraight: "Long",
      LongHairCurly: "Curly",
      ShortHairShortCurly: "Short",
      NoHair: "Bald",
    },
    label: "Hair Style",
  },

  hairColor: {
    options: {
      Black: "Black",
      Brown: "Brown",
      Blonde: "Blonde",
      SilverGray: "Gray",
    },
    label: "Hair Color",
  },

  clotheColor: {
    options: {
      Red: "Red",
      Black: "Black",
      PastelBlue: "Blue",
    },
    label: "Shirt Color",
  },
};

const teammateAvatars = [
  {
    hairStyle: "ShortHairShortFlat",
    hairColor: "Blonde",
    clotheColor: "Red",
    skinColor: "Pale",
  },
  {
    hairStyle: "LongHairCurly",
    hairColor: "SilverGray",
    clotheColor: "PastelBlue",
    skinColor: "Pale",
  },
  {
    hairStyle: "ShortHairShortFlat",
    hairColor: "Black",
    clotheColor: "Black",
    skinColor: "Brown",
  },
  {
    hairStyle: "LongHairStraight",
    hairColor: "Black",
    clotheColor: "PastelBlue",
    skinColor: "Black",
  },
];

const opponentAvatars = [
  {
    hairStyle: "Bald",
    hairColor: "Black",
    clotheColor: "PastelBlue",
    skinColor: "Black",
  },
  {
    hairStyle: "ShortHairShortFlat",
    hairColor: "Blonde",
    clotheColor: "Black",
    skinColor: "Pale",
  },
  {
    hairStyle: "LongHairStraight",
    hairColor: "Brown",
    clotheColor: "PastelBlue",
    skinColor: "Pale",
  },
  {
    hairStyle: "LongHairCurly",
    hairColor: "Black",
    clotheColor: "Red",
    skinColor: "Black",
  },
];

export { avatarSelections, teammateAvatars, opponentAvatars };
