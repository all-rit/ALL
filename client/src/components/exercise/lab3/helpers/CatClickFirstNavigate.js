import React from "react";
import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";
import Typography from "@material-ui/core/Typography";
import Proptypes from "prop-types";

/**
 * Renders a component that displays a message and a button. When the button is clicked, it logs the provided path and navigates to that path.
 * @param {Object} props - The component props.
 * @param {string} props.path - The path to navigate to when the button is clicked.
 * @returns {JSX.Element} The rendered component.
 */
const CatClickFirstNavigate = ({ path }) => {
  const handleOnclick = () => {
    console.log(path);
    navigate(path);
  };

  const typographyStyle = { color: "white" };

  return (
    <div id={"catClickMessage"}>
      <Typography
        variant={"h6"}
        aria-label={"Cat clicked! Please click the 'next' button to continue."}
        tabIndex={"0"}
        style={typographyStyle}
      >
        Cat clicked! Please click the &lsquo;next&rsquo; button to continue.
      </Typography>
      <br />
      <Button
        onClick={handleOnclick}
        variant="contained"
        className="btn btn-second btn-xl text-uppercase  leftButton"
      >
        Next
      </Button>
    </div>
  );
};

CatClickFirstNavigate.propTypes = {
  path: Proptypes.string.isRequired,
};

export default CatClickFirstNavigate;
