/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ReactText from "../../../all-components/CodeBlock/StyleComponents/ReactText";
import CodeLine from "../../../all-components/CodeBlock/Components/CodeLine";
import Tab from "../../../all-components/CodeBlock/Components/Tab";
import CommentText from "../../../all-components/CodeBlock/StyleComponents/CommentText";
import JSONText from "../../../all-components/CodeBlock/StyleComponents/JSONText";
import CodeBlockInput from "../../../all-components/CodeBlock/Components/CodeBlockInput";
import MultiTab from "../../../all-components/CodeBlock/Components/MultiTab";
import React from "react";
import PropTypes from "prop-types";
//import { DateFormData } from "../../../../constants/lab9/DateFormData";

const DateFormRepair = (props = {}) => {
  const { dateForms, userInput } = props;

  return (
    <>
      <ReactText>const DateForm = (props) =&#62; &#123;</ReactText>
      {/* eslint-disable-next-line no-unused-vars */}
      {dateForms.map((country, index) => (
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
        <Tab /> <ReactText> const dates = &#123; </ReactText>
      </CodeLine>

      {/* eslint-disable-next-line no-unused-vars */}
      {dateForms.map((country, index) => (
        <>
          <CodeLine>
            <MultiTab numberOfTabs={2} />
            <ReactText>
              {" "}
              &ldquo;{country.countryVariable}&rdquo; = &#123;
            </ReactText>
          </CodeLine>
          <CodeLine>
            <MultiTab numberOfTabs={3} />
            <CommentText>{country.comment}</CommentText>
          </CodeLine>
          <CodeLine>
            <MultiTab numberOfTabs={3} />
            <JSONText> &ldquo;dateform&rdquo; : </JSONText>
            <CodeBlockInput
              attributes={{
                onChange: (event) => {
                  userInput(country.id, event.target.value);
                },
                name: country.name,
                type: "text",
                placeholder: "Enter Dateform Here",
              }}
            />
          </CodeLine>
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
      <ReactText>export default DateForm;</ReactText>
    </>
  );
};

CodeBlockInput.propTypes = {
  userInput: PropTypes.func,
  dateForms: PropTypes.array,
};

export default DateFormRepair;