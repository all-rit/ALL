import PropTypes from "prop-types";
import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core";
import { navigate } from "@reach/router";
import Typography from "@material-ui/core/Typography";

/**
 * CatClickNavigate component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.path - The path to navigate to.
 * @returns {JSX.Element} The rendered CatClickNavigate component.
 */
const CatClickNavigate = ({ path }) => {
  const handleOnclick = () => {
    navigate(path);
  };

  const textToSpeech = (e, text) => {
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
  };

  const typographyStyle = { color: "white" };

  return (
    <div id={"catClickMessage"}>
      <Typography
        variant={"h6"}
        aria-label={"Cat clicked! Please click the 'next' button to continue."}
        tabIndex={"0"}
        style={typographyStyle}
        onFocus={(e) =>
          textToSpeech(
            e,
            "Cat clicked! Please click the next button to continue."
          )
        }
      >
        Cat clicked! Please click the &lsquo;next&rsquo; button to continue.
      </Typography>
      <br />
      <Button
        component={Link}
        onClick={handleOnclick}
        variant="contained"
        className="btn btn-second btn-xl text-uppercase  leftButton"
        onFocus={(e) => textToSpeech(e, "Next")}
      >
        Next
      </Button>
    </div>
  );
};

CatClickNavigate.propTypes = {
  path: PropTypes.string.isRequired,
};

export default CatClickNavigate;
