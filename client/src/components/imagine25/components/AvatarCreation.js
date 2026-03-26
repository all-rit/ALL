import React, { useState } from "react";
import { createAvatar } from "@dicebear/core";
import { avataaars } from "@dicebear/collection";
import { convertAvatarToDicebear } from "../../../all-components/convertAvatarToDicebear";
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
import PropTypes from "prop-types";

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
  return (
    <div className="d-flex justify-content-center">
      <div>
        <img
          src={convertAvatarToDicebear({
            topType: props.userAvatar.hairStyle || "Default",
            clotheType: "ShirtCrewNeck",
            hairColor: props.userAvatar.hairColor || "Default",
            clotheColor: props.userAvatar.clotheColor || "Default",
            skinColor: props.userAvatar.skinColor || "Default",
          })}
          alt="User Avatar"
          className="xs:tw-h-[125px] xs:tw-w-[125px] md:tw-h-[125px] md:tw-w-[125px] xl:tw-h-[175px] xl:tw-w-[175px]"
        />
        {/*Iterate over nested data structure. Note this needs to be a specific data structure, check out Contants/imagine25/Avatar.js for an example.
    Key also needs to be one of the possible Avataaaars keys. Check out their documentation for the different atriubutes that can be applied.*/}
        <Form className="tw-my-[1vw]">
          {Object.entries(props.AvatarSelections).map(
            ([key, { options, label }]) => (
              <FormGroup key={key} row>
                <Col>
                  <Label className="mx-2 fw-bold tw-body-text">{label}</Label>
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
    </div>
  );
};

AvatarCreation.propTypes = {
  userAvatar: PropTypes.object.isRequired,
  setUserAvatar: PropTypes.func.isRequired,
  AvatarSelections: PropTypes.object.isRequired,
};

export default AvatarCreation;
