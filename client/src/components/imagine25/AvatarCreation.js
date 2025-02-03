import React, { useEffect, useState } from "react";
import Avatar from "avataaars";
import useMainStateContext from "../../reducers/MainContext";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Label,
} from "reactstrap";

//Function for each respective row in the avatarcreation page to stylize them
function AvatarStyling(setAvatarState, options) {
  //basic toggling and changing functionality for dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [currentSelection, setCurrentSelection] = useState("");

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} classname="bg-light">
      <DropdownToggle color={"light"} className="border boder-dark" caret>
        {currentSelection}
      </DropdownToggle>
      <DropdownMenu>
        {/*Itterate thought the options sent through, value is what is displayed.
                The key controlls the avatar state */}
        {Object.entries(options).map(([key, value]) => {
          return (
            <DropdownItem
              key={key}
              onClick={() => {
                //Displayed Value
                setCurrentSelection(value);
                //Value that was set
                setAvatarState(key);
              }}
            >
              {value}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}

const AvatarCreation = () => {
  //removes lame buttons from top of screen
  const { actions } = useMainStateContext();
  const startImagine = () => actions.setIsImagine(true);

  //keep track of current avatar state
  const [hairStyle, setHairStyle] = useState("LongHairStraight");
  const [hairColor, setHairColor] = useState("Black");
  const [shirtColor, setShirtColor] = useState("Blue");
  const [skinColor, setSkinColor] = useState("Light");

  useEffect(() => {
    startImagine();
  }, []);
  return (
    <>
      <p>Design your avatar!</p>
      <Avatar
        clotheType="ShirtCrewNeck"
        topType={hairStyle}
        hairColor={hairColor}
        clotheColor={shirtColor}
        skinColor={skinColor}
      />
      <FormGroup>
        {/*Each AvatarStyling() function takes in their respective setState, and a map of options.
                The Key will represent the code-side implementation and the value is what the user will see
                as a selection choice. Labels must be added mannually prior to Avatar styling.*/}
        <Label>Hair Style</Label>
        {AvatarStyling(setHairStyle, {
          ShortHairShortCurly: "Short Curly",
          LongHairCurly: "Long Curly",
          ShortHairShortFlat: "Short Straight",
          LongHairStraight: "Long Straight",
        })}
        <Label>Hair Color</Label>
        {AvatarStyling(setHairColor, {
          Black: "Black",
          Blonde: "Blonde",
          Blue: "Blue",
          Red: "Red",
        })}
        <Label>Shirt Color</Label>
        {AvatarStyling(setShirtColor, {
          Gray01: "Gray",
          Black: "Black",
          PastelYellow: "Yellow",
          Pink: "Pink",
        })}
        <Label>Skin Color</Label>
        {AvatarStyling(setSkinColor, {
          Light: "White",
          Brown: "Brown",
          DarkBrown: "Dark Brown",
          Black: "Black",
        })}
      </FormGroup>
    </>
  );
};

export default AvatarCreation;
