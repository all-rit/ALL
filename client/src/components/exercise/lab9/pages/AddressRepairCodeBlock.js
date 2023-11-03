import Tab from "../../../all-components/CodeBlock/Components/Tab";
import CodeLine from "../../../all-components/CodeBlock/Components/CodeLine";
import ReactText from "../../../all-components/CodeBlock/StyleComponents/ReactText";
import PropTypes from "prop-types";
import React from 'react'

const AddressRepairCodeBlock = (props) => {
  const {addressForms } = props;
  return (
    <>
      <ReactText>const AddressFormats = (props) =&#62; &#123;</ReactText>
      {/* eslint-disable-next-line no-unused-vars */}
      {addressForms.map((country, index) => (
        // eslint-disable-next-line react/jsx-key
        <CodeLine>
          <Tab />{" "}
          <ReactText>
            {" "}
            const {country.countryVariable} = &ldquo;{country.countryName}
            &rdquo;{" "}
          </ReactText>
        </CodeLine>
      ))}

      <CodeLine>
        <Tab /> <ReactText> const addressFormats = &#123; </ReactText>
      </CodeLine>
    </>
  );
};


AddressRepairCodeBlock.propTypes = {
  addressForms: PropTypes.array,
  userInput: PropTypes.func
}

export default AddressRepairCodeBlock;
