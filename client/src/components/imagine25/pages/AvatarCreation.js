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
import "./avatarStyling.css";

//Function for each respective row in the avatarcreation page to stylize them
function AvatarStyling(currentSelection, setAvatarState, options) {
  //basic toggling and changing functionality for dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color={"light"} className="dropDownToggle" caret>
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
  useEffect(() => {
    startImagine();
  }, []);

  //keep track of current avatar state
  const [hairStyle, setHairStyle] = useState("LongHairStraight");
  const [hairColor, setHairColor] = useState("Black");
  const [shirtColor, setShirtColor] = useState("Gray");
  const [skinColor, setSkinColor] = useState("Light");

  return (
    <>
      <h3>Design your avatar!</h3>
      <div className="decorativeLineBlueHorizontal"></div>
      <div className="d-flex justify-content-center">
        <div className="decorativeLineYellowVertical"></div>
        <div>
          <Avatar
            clotheType="ShirtCrewNeck"
            topType={hairStyle}
            hairColor={hairColor}
            clotheColor={shirtColor}
            skinColor={skinColor}
            className="avatar"
          />
          {/*Each AvatarStyling() function takes in their respective setState, and a map of options.
                The Key will represent the code-side implementation and the value is what the user will see
                as a selection choice. Labels must be added mannually prior to Avatar styling.*/}
          <Form className="my-3">
            <FormGroup row>
              <Col>
                <Label className="mx-2 fw-bold">Hair Style</Label>
                {AvatarStyling(hairStyle, setHairStyle, {
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
                {AvatarStyling(hairColor, setHairColor, {
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
                {AvatarStyling(shirtColor, setShirtColor, {
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
                {AvatarStyling(skinColor, setSkinColor, {
                  Light: "White",
                  Brown: "Brown",
                  DarkBrown: "Dark Brown",
                  Black: "Black",
                })}
              </Col>
            </FormGroup>
          </Form>
        </div>
        <div className="decorativeLineYellowVertical"></div>
      </div>
      <div className="d-flex">
        <Button className="avatarButton">Previous</Button>
        <div className="decorativeLineBlueHorizontal"></div>
        <Button className="avatarButton">Next</Button>
      </div>
    </>
  );
};

export default AvatarCreation;
