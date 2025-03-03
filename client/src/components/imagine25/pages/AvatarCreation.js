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
import ImagineHeader from "../components/ImagineHeader";

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
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className="tw-body-text">
      <DropdownToggle
        color={"light"}
        className="xs:tw-w-[150px] sm:tw-w-[150px] md:tw-w-[200px] tw-h-[30px] tw-flex tw-justify-between tw-items-center tw-color-[#22252a] tw-border-darkLine hover:tw-border-black tw-border-1 tw-border-solid tw-body-text"
        caret
      >
        {displayedValue}
      </DropdownToggle>
      <DropdownMenu className="tw-body-text">
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
    await ImagineService.postUserAvatar(
      sessionStorage.getItem("userID"),
      props.userAvatar,
      25,
    );
  };

  return (
    <>
      <ImagineHeader title="Design Your Avatar" />
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
            {/*The Key represents code-side implementation and value is the displayed selection choice*/}
            <Form className="tw-my-[1vw]">
              <FormGroup row>
                <Col>
                  <Label className="mx-2 fw-bold tw-body-text">
                    Skin Color
                  </Label>
                  {AvatarStyling("Light", "skinColor", props.setUserAvatar, {
                    Light: "Light",
                    Brown: "Medium Light",
                    DarkBrown: "Medium Dark",
                    Black: "Dark",
                  })}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Label className="mx-2 fw-bold tw-body-text">
                    Hair Style
                  </Label>
                  {AvatarStyling(
                    "Long Straight",
                    "hairStyle",
                    props.setUserAvatar,
                    {
                      LongHairStraight: "Long Straight",
                      ShortHairShortFlat: "Short Straight",
                      LongHairCurly: "Long Curly",
                      ShortHairShortCurly: "Short Curly",
                      NoHair: "Bald",
                    },
                  )}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Label className="mx-2 fw-bold tw-body-text">
                    Hair Color
                  </Label>
                  {AvatarStyling("Black", "hairColor", props.setUserAvatar, {
                    Black: "Black",
                    Brown: "Brown",
                    Blonde: "Blonde",
                    SilverGray: "Gray",
                  })}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Label className="mx-2 fw-bold tw-body-text">
                    Shirt Color
                  </Label>
                  {AvatarStyling("Gray", "clotheColor", props.setUserAvatar, {
                    Gray01: "Gray",
                    Black: "Black",
                    PastelBlue: "Blue",
                    PastelYellow: "Yellow",
                    Pink: "Pink",
                  })}
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>,
        nextOnClick,
        () => {
          alert("No previous page implemented yet, HE-HE-HE-HA");
        },
      )}
    </>
  );
};

AvatarCreation.propTypes = {
  userAvatar: PropTypes.object.isRequired,
  setUserAvatar: PropTypes.func.isRequired,
};

export default AvatarCreation;
