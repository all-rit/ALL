import React, { useState } from "react";
import Avatar from "avataaars";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Label,
  Form,
  Col,
} from "reactstrap";
import { Frame } from "../components/Frame";
import ImagineService from "src/services/ImagineService";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";

//Function for each respective row in the avatarcreation page to stylize them
const AvatarStyling = (
  defaultValue,
  userAvatarType,
  setAvatarState,
  options,
) => {
  //basic toggling and changing functionality for dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [displayedValue, setDisplayedValue] = useState(defaultValue);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        color={"light"}
        className="xs:tw-w-[150px] sm:tw-w-[150px] md:tw-w-[200px] tw-h-[30px] tw-flex tw-justify-between tw-items-center tw-color-[#22252a] tw-border-2 tw-boarder-solid tw-border-[#22252a]"
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
                setAvatarState((prevState) => ({
                  ...prevState,
                  [userAvatarType]: key,
                }));
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
};

const AvatarCreation = (props) => {
  const nextOnClick = async () => {
    //default userID set to 1 for now
    navigate("/Imagine2025/TeammateSelection");
    await ImagineService.postUserAvatar("1", props.userAvatar, 25);
  };

  return (
    <>
      <h3>Design your avatar!</h3>
      {Frame(
        <div className="d-flex justify-content-center">
          <div>
            <Avatar
              clotheType="ShirtCrewNeck"
              topType={props.userAvatar.hairStyle}
              hairColor={props.userAvatar.hairColor}
              clotheColor={props.userAvatar.clotheColor}
              skinColor={props.userAvatar.skinColor}
              className="xs:tw-h-[125px] xs:tw-w-[125px] md:tw-h-[125px] md:tw-w-[125px] xl:tw-h-[175px] xl:tw-w-[175px]"
            />
            {/*Each AvatarStyling() function takes in their respective setState, and a map of options.
                  The Key will represent the code-side implementation and the value is what the user will see
                  as a selection choice. Labels must be added mannually prior to Avatar styling.*/}
            <Form className="tw-my-[1vw]">
              <FormGroup row>
                <Col>
                  <Label className="mx-2 fw-bold">Hair Style</Label>
                  {AvatarStyling(
                    "Long Straight",
                    "hairStyle",
                    props.setUserAvatar,
                    {
                      ShortHairShortCurly: "Short Curly",
                      LongHairCurly: "Long Curly",
                      ShortHairShortFlat: "Short Straight",
                      LongHairStraight: "Long Straight",
                    },
                  )}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Label className="mx-2 fw-bold">Hair Color</Label>
                  {AvatarStyling("Black", "hairColor", props.setUserAvatar, {
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
                  {AvatarStyling("Gray", "clotheColor", props.setUserAvatar, {
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
                  {AvatarStyling("White", "skinColor", props.setUserAvatar, {
                    Light: "White",
                    Brown: "Brown",
                    DarkBrown: "Dark Brown",
                    Black: "Black",
                  })}
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>,
        nextOnClick,
      )}
    </>
  );
};

AvatarCreation.propTypes = {
  userAvatar: PropTypes.object.isRequired,
  setUserAvatar: PropTypes.func.isRequired,
};

export default AvatarCreation;
