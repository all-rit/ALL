/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ReactText from "../../../all-components/CodeBlock/StyleComponents/ReactText";
import CodeLine from "../../../all-components/CodeBlock/Components/CodeLine";
import Tab from "../../../all-components/CodeBlock/Components/Tab";
import CommentText from "../../../all-components/CodeBlock/StyleComponents/CommentText";
import JSONText from "../../../all-components/CodeBlock/StyleComponents/JSONText";
import CodeBlockInput from "../../../all-components/CodeBlock/Components/CodeBlockInput";
import MultiTab from "../../../all-components/CodeBlock/Components/MultiTab";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ErrorText from "../../../all-components/CodeBlock/StyleComponents/ErrorText";

const DateFormRepair = (props = {}) => {
  const { dateForms, userInput } = props;
  const [error, setError] = useState(false);

  const handleError = (id, value) => {
    userInput(id, value);
    const country = dateForms.find((country) => country.id === id);
    if (country && value !== country.correct_expression) {
      setError((prevState) => ({
        ...prevState,
        [id]: true,
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        [id]: false,
      }));
    }
  };

  useEffect(() => {
    dateForms.forEach((country) => {
      handleError(country.id, country.userInput)
      console.log(country.id)
    })
  }, []);

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

      {dateForms.map((country, index) => (
        <div key={index}>
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
            {country.userInput ? (
              <CodeBlockInput
                value={country.userInput}
                attributes={{
                  onChange: (event) => {
                    userInput(country.id, event.target.value);
                    handleError(country.id, event.target.value);
                  },
                  name: country.name,
                  type: "text",
                  placeholder: "Enter Dateform Here",
                }}
              />
            ) : (
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
            )}
          </CodeLine>
          {error[country.id] && (
            <CodeLine>
              <MultiTab numberOfTabs={3} />
              <ErrorText>
                Error in form submission. Please check your input values and
                resubmit.
              </ErrorText>
            </CodeLine>
          )}
          <CodeLine>
            <MultiTab numberOfTabs={2} />
            <ReactText> &#125;, </ReactText>
          </CodeLine>
        </div>
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
