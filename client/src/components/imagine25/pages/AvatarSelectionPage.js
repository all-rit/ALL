import React from "react";
import { Frame } from "../components/Frame";
import PropTypes from "prop-types";
import useMainStateContext from "src/reducers/MainContext";
import { ERROR } from "src/constants/notifications";
import ImagineHeader from "../components/ImagineHeader";
import AvatarSelection from "../components/AvatarSelection";

const AvatarSelectionPage = (props) => {
  //snackbar
  const { actions } = useMainStateContext();

  return (
    <>
      <ImagineHeader title={"Select Your " + props.title} />
      {Frame(
        <AvatarSelection
          avatars={props.avatars}
          avatarSelected={props.avatarSelected}
          setAvatarSelected={props.setAvatarSelected}
        />,
        async () => {
          if (props.avatarSelected != null) {
            props.nextNavigation();
            await props.imagineService(
              sessionStorage.getItem("userID"),
              props.avatars[props.avatarSelected],
              25,
            );
            return;
          }
          actions.showSnackbar(
            "Please select your " + props.title,
            ERROR,
            "center",
            "top",
          );
        },
        props.prevNavigation,
      )}
    </>
  );
};

AvatarSelectionPage.propTypes = {
  title: PropTypes.string.isRequired,
  avatars: PropTypes.arrayOf(PropTypes.object).isRequired,
  imagineService: PropTypes.func.isRequired,
  nextNavigation: PropTypes.func,
  prevNavigation: PropTypes.func,
  avatarSelected: PropTypes.number,
  setAvatarSelected: PropTypes.func.isRequired,
};

export default AvatarSelectionPage;
