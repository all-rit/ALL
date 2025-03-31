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
import ImagineHeader from "../components/ImagineHeader";

//Function for each respective row in the avatarcreation page to stylize them
/**
 *
 * @param {*} currentAvatarStyle current avatar being displayed
 * @param {*} userAvatarType the type of attribute that is being changed, such as clothe color or hair color
 * @param {*} setAvatarState function passed down by parent component, allows for the setting of the avatar state
 * @param {*} options All the different options that can be chosen for the afroementioned attribute
 * @returns
 */
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
    //Check to see if all fields have been selected
    if (
      props.userAvatar.hairColor != "Default" &&
      props.userAvatar.hairStyle != "Default" &&
      props.userAvatar.clotheColor != "Default" &&
      props.userAvatar.skinColor != "Default"
    ) {
      navigate("/Imagine2025/TeammateSelection");
      await ImagineService.postUserAvatar(
        sessionStorage.getItem("userID"),
        props.userAvatar,
        25,
      );
      return;
    }
    actions.showSnackbar(
      "Please finish creating your avatar",
      ERROR,
      "center",
      "top",
    );
  };

  return (
    <>
      <ImagineHeader title="Make an Avatar That Resembles You!" />
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
            {/*Iterate over nested data structure. Note this needs to be a specific data structure, check out Contants/imagine25/Avatar.js for an example.
            Key also needs to be one of the possible Avataaaars keys. Check out their documentation for the different atriubutes that can be applied.*/}
            <Form className="tw-my-[1vw]">
              {Object.entries(props.AvatarSelections).map(
                ([key, { options, label }]) => (
                  <FormGroup key={key} row>
                    <Col>
                      <Label className="mx-2 fw-bold tw-body-text">
                        {label}
                      </Label>
                      {AvatarStyling(
                        props.userAvatar[key],
                        key,
                        props.setUserAvatar,
                        options,
                      )}
                    </Col>
                  </FormGroup>
                ),
              )}
            </Form>
          </div>
        </div>,
        nextOnClick,
        null,
      )}
    </>
  );
};

AvatarCreation.propTypes = {
  userAvatar: PropTypes.object.isRequired,
  setUserAvatar: PropTypes.func.isRequired,
  AvatarSelections: PropTypes.obj.isRequired,
};

export default AvatarCreation;
