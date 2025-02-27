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
import { ERROR } from "src/constants/notifications";
import useMainStateContext from "src/reducers/MainContext";

//Function for each respective row in the avatarcreation page to stylize them
const AvatarStyling = (
  currentAvatarStyle,
  userAvatarType,
  setAvatarState,
  options,
) => {
  //basic toggling and changing functionality for dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  /*this grabs the repsecitve display value from the options for user readability.
  "\u00A0" is a invisible character used to push the caret (little tirangle on the right of the dropdown" to the right.
  if no value is detected, this will apear as a blank feild, else it will show the users current sellection.*/
  const [displayedValue, setDisplayedValue] = useState(
    options[currentAvatarStyle] == null
      ? "\u00A0"
      : options[currentAvatarStyle],
  );

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
  const { actions } = useMainStateContext();
  const nextOnClick = async () => {
    //Check to see if all feilds have been selected
    if (
      props.userAvatar.hairColor != "" &&
      props.userAvatar.hairStyle != "" &&
      props.userAvatar.clotheColor != "" &&
      props.userAvatar.skinColor != ""
    ) {
      navigate("/Imagine2025/TeammateSelection");
      await ImagineService.postUserAvatar("1", props.userAvatar, 25);
      return;
    }
    actions.showSnackbar("Please finish creating your avatar", ERROR);
  };

  return (
    <>
      <h3 className={"tw-title tw-pb-3"}>
        Create an Avatar That Resembles You!
      </h3>
      <div className={"tw-flex tw-justify-center"}>
        <hr className={"tw-w-3/5 tw-bg-labLightGray"} />
      </div>
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
                  {AvatarStyling(
                    props.userAvatar.skinColor,
                    "skinColor",
                    props.setUserAvatar,
                    {
                      Pale: "Pale",
                      Light: "Light",
                      Brown: "Medium Light",
                      DarkBrown: "Medium Dark",
                      Black: "Dark",
                    },
                  )}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Label className="mx-2 fw-bold tw-body-text">
                    Hair Style
                  </Label>
                  {AvatarStyling(
                    props.userAvatar.hairStyle,
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
                  {AvatarStyling(
                    props.userAvatar.hairColor,
                    "hairColor",
                    props.setUserAvatar,
                    {
                      Black: "Black",
                      Brown: "Brown",
                      Blonde: "Blonde",
                      SilverGray: "Gray",
                    },
                  )}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Label className="mx-2 fw-bold tw-body-text">
                    Shirt Color
                  </Label>
                  {AvatarStyling(
                    props.userAvatar.clotheColor,
                    "clotheColor",
                    props.setUserAvatar,
                    {
                      Gray01: "Gray",
                      Black: "Black",
                      PastelBlue: "Blue",
                      PastelYellow: "Yellow",
                      Pink: "Pink",
                    },
                  )}
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
