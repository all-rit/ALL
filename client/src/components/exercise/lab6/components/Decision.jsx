import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const Decision = (props) => {
  const { id, primary, secondary, handleInput, incrementInput } = props;

  const [toggle, setToggle] = useState(null);
  const [hasInput, setHasInput] = useState(false);

  return (
    <div className="decision">
      <fieldset id={id} className="decision__radio">
        <input name={`${id}switch`} id={`${id}on`} type="radio" />
        <label
          onClick={() => {
            if (!hasInput) {
              setHasInput(true);
              incrementInput();
            }
            setToggle(true);
            if (!toggle) {
              handleInput(id);
            }
          }}
          htmlFor={`${id}on`}
          className="primary"
        >
          {primary}
        </label>
        <input name={`${id}switch`} id={`${id}off`} type="radio" />
        <label
          onClick={() => {
            if (!hasInput) {
              setHasInput(true);
              incrementInput();
            }
            if (toggle) {
              handleInput(id);
            }
            setToggle(false);
          }}
          htmlFor={`${id}off`}
          className="secondary"
        >
          {secondary}
        </label>
      </fieldset>
    </div>
  );
};

Decision.propTypes = {
  id: PropTypes.number.isRequired,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  incrementInput: PropTypes.func.isRequired,
};

export default Decision;
