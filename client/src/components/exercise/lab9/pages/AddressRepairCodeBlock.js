import Tab from "../../../all-components/CodeBlock/Components/Tab";
import CodeLine from "../../../all-components/CodeBlock/Components/CodeLine";
import MultiTab from "../../../all-components/CodeBlock/Components/MultiTab";
import ReactText from "../../../all-components/CodeBlock/StyleComponents/ReactText";
import CommentText from "../../../all-components/CodeBlock/StyleComponents/CommentText";
import JSONText from "../../../all-components/CodeBlock/StyleComponents/JSONText";
import CodeBlockInput from "../../../all-components/CodeBlock/Components/CodeBlockInput";
import PropTypes from "prop-types";
import React from "react";

const AddressRepairCodeBlock = (props) => {
  const { addressForms, userInput } = props;
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

      <br />
      <CodeLine>
        <Tab /> <ReactText> const addressFormats = &#123; </ReactText>
      </CodeLine>

      {addressForms.map((country) => (
        <>
          {/* line 1 */}
          <CodeLine>
            <MultiTab numberOfTabs={2} />
            <ReactText>
              {" "}
              &ldquo;{country.countryVariable}&rdquo; = &#123;
            </ReactText>
          </CodeLine>

          {/* line 2 */}
          <CodeLine>
            <MultiTab numberOfTabs={3} />
            <CommentText>{country.comment}</CommentText>
          </CodeLine>

          {/* line 3 */}
          <CodeLine>
            <MultiTab numberOfTabs={3} />
            <JSONText>&ldquo;addressFormat&rdquo; :</JSONText>
            {country.userInput ? (
              <CodeBlockInput
                value={country.userInput}
                attributes={{
                  onChange: (event) => {
                    userInput(country.id, event.target.value);
                  },
                  name: country.countryName,
                  type: "text",
                  placeholder: "Enter Address Format Here",
                  // overwrite styling to make input wider
                  className: "p-1 tw-w-[34rem] code_editor__input",
                }}
              />
            ) : (

              <CodeBlockInput
                attributes={{
                  onChange: (event) => {
                    userInput(country.id, event.target.value);
                  },
                  name: country.countryName,
                  type: "text",
                  placeholder: "Enter Address Format Here",
                  // overwrite styling to make input wider
                  className: "p-1 tw-w-[34rem] code_editor__input",
                }}
              />
            )}
          </CodeLine>

          {/* line 4 */}
          <CodeLine>
            <MultiTab numberOfTabs={2} />
            <ReactText> &#125;, </ReactText>
          </CodeLine>
        </>
      ))}
      <CodeLine>
        <Tab />
        <ReactText> &#125; </ReactText>
      </CodeLine>
      <ReactText>&#125;</ReactText>
      <ReactText>export default AddressFormats;</ReactText>
    </>
  );
};

AddressRepairCodeBlock.propTypes = {
  addressForms: PropTypes.array,
  userInput: PropTypes.func,
};

export default AddressRepairCodeBlock;
