import React from "react";
import CodeLine from "src/components/all-components/CodeBlock/Components/CodeLine";
import ReactText from "src/components/all-components/CodeBlock/StyleComponents/ReactText";
import PropTypes from "prop-types";

const IdentityRepairImplementation = () => {
  // const { identityData, userInput, isInputValid, isFirst } = props;

  return (
    <>
      <CodeLine>
        <ReactText>const identityForm = ( props ) =&#62; &#123;</ReactText>
      </CodeLine>
      <CodeLine>&#125;</CodeLine>
    </>
  );
};

IdentityRepairImplementation.propTypes = {
  userInput: PropTypes.func,
  identityData: PropTypes.array,
  isInputValid: PropTypes.func,
  isFirst: PropTypes.bool,
};

export default IdentityRepairImplementation;
