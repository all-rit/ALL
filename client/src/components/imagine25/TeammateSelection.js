import React from "react";
import Avatar from "avataaars";

import { Container } from "reactstrap";

//array that will dicate avatars displayed
const avatars = [
  {
    hairStyle: "ShortHairShortCurly",
    hairColor: "Black",
    shirtColor: "Gray01",
    skinColor: "Light",
  },
  {
    hairStyle: "LongHairCurly",
    hairColor: "Blonde",
    shirtColor: "Black",
    skinColor: "Brown",
  },
  {
    hairStyle: "ShortHairShortFlat",
    hairColor: "Blue",
    shirtColor: "PastelYellow",
    skinColor: "DarkBrown",
  },
  {
    hairStyle: "LongHairStraight",
    hairColor: "Red",
    shirtColor: "Pink",
    skinColor: "Black",
  },
];

const TeammateSelection = () => {
  return (
    <>
      <h3>Select Your Teammate!</h3>
      <Container className>
        {avatars.map((avatar, index) => (
          <Avatar
            key={index}
            topType={avatar.hairStyle}
            hairColor={avatar.hairColor}
            clotheColor={avatar.shirtColor}
            skinColor={avatar.skinColor}
            clotheType="ShirtCrewNeck"
            className="col-6 tw-h-[25vh] tw-w-[10vw]"
          />
        ))}
      </Container>
    </>
  );
};

export default TeammateSelection;
