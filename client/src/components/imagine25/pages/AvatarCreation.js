import React, { useEffect, useState } from "react";
import Avatar from "avataaars";
import useMainStateContext from "../../../reducers/MainContext";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Label,
  Form,
  Col,
  Button,
} from "reactstrap";

//Function for each respective row in the avatarcreation page to stylize them
function AvatarStyling(defaultValue, setAvatarState, options) {
  //basic toggling and changing functionality for dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [displayedValue, setDisplayedValue] = useState(defaultValue);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        color={"light"}
        className="tw-w-[200px] tw-h-[4vh] tw-flex tw-justify-between tw-items-center tw-color-[#22252a] tw-border-2 tw-boarder-solid tw-border-[#22252a]"
        caret
      >
        {displayedValue}
      </DropdownToggle>
      <DropdownMenu>
        {/*Itterate thought the options sent through, value is what is displayed.
                The key controlls the avatar state */}
        {Object.entries(options).map(([key, value]) => {
          return (
            <DropdownItem
              key={key}
              onClick={() => {
                //Value that was set
                setAvatarState(key);
                setDisplayedValue(value);
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
  useEffect(() => {
    startImagine();
  }, []);

  //keep track of current avatar state
  const [hairStyle, setHairStyle] = useState("LongHairStraight");
  const [hairColor, setHairColor] = useState("Black");
  const [shirtColor, setShirtColor] = useState("Gray");
  const [skinColor, setSkinColor] = useState("Light");

  //Constant syling methods
  const avatarButton =
    "tw-w-[125px] tw-height-[50px] tw-text-center tw-text-[#22252a] tw-bg-white tw-border-0 tw-shadow-[2px_2px_5px_#22252a]";
  const blueLine =
    "tw-w-[35vw] tw-h-[5px] tw-bg-[#0045d5] tw-my-[15px] tw-mx-auto";
  const yellowLine =
    "tw-w-[5px] tw-h-[55vh] tw-bg-[#ffc335] tw-my-[15px] tw-mx-auto";

  return (
    <>
      <h3>Design your avatar!</h3>
      <div className={blueLine}></div>
      <div className="d-flex justify-content-center">
        <div className={yellowLine}></div>
        <div>
          <Avatar
            clotheType="ShirtCrewNeck"
            topType={hairStyle}
            hairColor={hairColor}
            clotheColor={shirtColor}
            skinColor={skinColor}
            className="tw-max-h-[25vh] tw-max-w-[25vw]"
          />
          {/*Each AvatarStyling() function takes in their respective setState, and a map of options.
                        The Key will represent the code-side implementation and the value is what the user will see
                        as a selection choice. Labels must be added mannually prior to Avatar styling.*/}
          <Form className="tw-my-[1vw]">
            <FormGroup row>
              <Col>
                <Label className="mx-2 fw-bold">Hair Style</Label>
                {AvatarStyling("Long Straight", setHairStyle, {
                  ShortHairShortCurly: "Short Curly",
                  LongHairCurly: "Long Curly",
                  ShortHairShortFlat: "Short Straight",
                  LongHairStraight: "Long Straight",
                })}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Label className="mx-2 fw-bold">Hair Color</Label>
                {AvatarStyling("Black", setHairColor, {
                  Black: "Black",
                  Blonde: "Blonde",
                  Blue: "Blue",
                  Red: "Red",
                })}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Label className="mx-2 fw-bold">Shirt Color</Label>
                {AvatarStyling("Gray", setShirtColor, {
                  Gray01: "Gray",
                  Black: "Black",
                  PastelYellow: "Yellow",
                  Pink: "Pink",
                })}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Label className="mx-2 fw-bold">Skin Color</Label>
                {AvatarStyling("Light", setSkinColor, {
                  Light: "White",
                  Brown: "Brown",
                  DarkBrown: "Dark Brown",
                  Black: "Black",
                })}
              </Col>
            </FormGroup>
          </Form>
        </div>
        <div className={yellowLine}></div>
      </div>
      <div className="d-flex">
        <Button className={avatarButton}>Previous</Button>
        <div className={blueLine}></div>
        <Button className={avatarButton}>Next</Button>
      </div>
    </>
  );
};

export default AvatarCreation;
