import React from "react";
import CodeLine from "src/components/all-components/CodeBlock/Components/CodeLine";
import ReactText from "src/components/all-components/CodeBlock/StyleComponents/ReactText";
import PropTypes from "prop-types";
import Tab from "src/components/all-components/CodeBlock/Components/Tab";
import MultiTab from "src/components/all-components/CodeBlock/Components/MultiTab";
import HTMLText from "src/components/all-components/CodeBlock/StyleComponents/HTMLText";
import JSONText from "src/components/all-components/CodeBlock/StyleComponents/JSONText";
import CommentText from "src/components/all-components/CodeBlock/StyleComponents/CommentText";
import CodeBlockInput from "src/components/all-components/CodeBlock/Components/CodeBlockInput";
import IdentityFormData from "src/constants/lab12/FormRepair";
import ErrorText from "../../../../all-components/CodeBlock/StyleComponents/ErrorText";

/**
 * FormRepairImplementation is a component that is responsible for displaying the codeblock contents
 * and user inpunts where the participant will make their changes to the codebase and complete the repair section.
 * @param {props} identityData contains the data used for answer validation and display of it's contents
 * @param {props} userInput is a function that takes the user's input in each input and sends the data to the useDataService hook,
 * which then sends that to the useLabService hook
 * @param {props} isInputValid returns an array based on the number of correct and incorrect inputs of the user in the repair section
 * @param {props} isFirst returns a boolean value of whether or not this is the first time a user is viewing this repair section
 * @returns
 */

const FormRepairImplementation = (props = {}) => {
  const { identityData, isInputValid, isFirst, userInput } = props;
  console.log(identityData);
  return (
    <>
      <CodeLine>
        <ReactText>const identityForm = ( props ) =&#62; &#123;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab />{" "}
        <ReactText>
          {" "}
          const [ formData, setFormData ] = useState(&#123;{" "}
        </ReactText>
      </CodeLine>
      {IdentityFormData.constData.map((item) => (
        <CodeLine key={item.id}>
          <MultiTab numberOfTabs={2} />{" "}
          <JSONText>{item.variableName}: &ldquo;&rdquo;,</JSONText>
        </CodeLine>
      ))}
      {identityData
        .filter((item) => item.id < 2)
        .map((item, index) => (
          <div key={item.id}>
            <CodeLine>
              <MultiTab numberOfTabs={2} />
              <CommentText>
                {"// "}Enter &lsquo;{item.variableName}&rsquo; below:{" "}
              </CommentText>
            </CodeLine>
            <CodeLine>
              <MultiTab numberOfTabs={2} />
              {item.userInput ? (
                <CodeBlockInput
                  value={item.userInput}
                  attributes={{
                    onChange: (event) => {
                      userInput(item.id, event.target.value);
                    },
                    name: item.variableName,
                    type: "text",
                    placeholder: "Enter Answer Here",
                  }}
                />
              ) : (
                <CodeBlockInput
                  attributes={{
                    onChange: (event) => {
                      userInput(item.id, event.target.value);
                    },
                    name: item.variableName,
                    type: "text",
                    placeholder: "Enter Answer Here",
                  }}
                />
              )}
              <JSONText>: &ldquo;&rdquo;,</JSONText>
            </CodeLine>
            {!isInputValid[index] && !isFirst && (
              <CodeLine>
                <MultiTab numberOfTabs={2} />
                <ErrorText>
                  Error in form submission. Please enter &quot;
                  {item.correct_expression}&quot; and resubmit.
                </ErrorText>
              </CodeLine>
            )}
          </div>
        ))}
      <CodeLine>
        <Tab /> <ReactText> &#125;); </ReactText>
      </CodeLine>

      {/** Submit Form Function */}
      <CodeLine>
        <Tab /> <ReactText> const submitForm = () =&#62; &#123;</ReactText>
      </CodeLine>
      <CodeLine>
        {" "}
        <MultiTab numberOfTabs={2} />{" "}
        <ReactText>const json = JSON.stringify(&#123;</ReactText>
      </CodeLine>

      {IdentityFormData.constData.map((item) => (
        <CodeLine key={item.id}>
          <MultiTab numberOfTabs={3} />{" "}
          <JSONText>{item.variableName}:</JSONText>
          <HTMLText>formData.{item.variableName},</HTMLText>
        </CodeLine>
      ))}
      {identityData
        .filter((item) => item.id > 1)
        .map((item, index) => (
          <div key={item.id}>
            <CodeLine>
              <MultiTab numberOfTabs={3} />{" "}
              <CommentText>
                {"// "}Enter &lsquo;formData.{item.variableName}&rsquo; below:{" "}
              </CommentText>
            </CodeLine>
            <CodeLine key={item.id}>
              <MultiTab numberOfTabs={3} />{" "}
              <JSONText>{item.variableName}:</JSONText>
              {item.userInput ? (
                <CodeBlockInput
                  value={item.userInput}
                  attributes={{
                    onChange: (event) => {
                      userInput(item.id, event.target.value);
                    },
                    name: item.variableName,
                    type: "text",
                    placeholder: "Enter Answer Here",
                  }}
                />
              ) : (
                <CodeBlockInput
                  attributes={{
                    onChange: (event) => {
                      userInput(item.id, event.target.value);
                    },
                    name: item.variableName,
                    type: "text",
                    placeholder: "Enter Answer Here",
                  }}
                />
              )}
            </CodeLine>
            {!isInputValid[index] && !isFirst && (
              <CodeLine>
                <MultiTab numberOfTabs={3} />
                <ErrorText>
                  Error in form submission. Please enter &quot;
                  {item.correct_expression}&quot; and resubmit.
                </ErrorText>
              </CodeLine>
            )}
          </div>
        ))}
      <CodeLine>
        <MultiTab numberOfTabs={2} /> <ReactText>&#125;);</ReactText>
      </CodeLine>

      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <ReactText>fetch(</ReactText>
        <JSONText>`$&#123;url&#125;/submitApplication`, &#123;</JSONText>
      </CodeLine>

      <CodeLine>
        <MultiTab numberOfTabs={3} />
        <JSONText>method: &apos;POST&apos;,</JSONText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={3} />
        <JSONText>body: (json),</JSONText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={3} />
        <JSONText>headers: &#123;</JSONText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={4} />
        <JSONText>
          &apos;Content-Type&apos; : &apos;application/json; charset=UTF-8&apos;
        </JSONText>
      </CodeLine>
      <CodeLine>
        {" "}
        <MultiTab numberOfTabs={3} /> <ReactText>&#125;</ReactText>
      </CodeLine>
      <CodeLine>
        {" "}
        <MultiTab numberOfTabs={2} /> <ReactText>&#125;)</ReactText>
      </CodeLine>
      <CodeLine>
        {" "}
        <MultiTab numberOfTabs={2} />{" "}
        <ReactText>.then((response) =&#62; &#123;</ReactText>
      </CodeLine>
      <CodeLine>
        {" "}
        <MultiTab numberOfTabs={3} /> <ReactText>response.json();</ReactText>
      </CodeLine>
      <CodeLine>
        {" "}
        <MultiTab numberOfTabs={2} /> <ReactText>&#125;)</ReactText>
      </CodeLine>
      <CodeLine>
        {" "}
        <MultiTab numberOfTabs={2} />{" "}
        <ReactText>.then((data) =&#62; &#123;</ReactText>
      </CodeLine>
      <CodeLine>
        {" "}
        <MultiTab numberOfTabs={3} /> <ReactText>return data;</ReactText>
      </CodeLine>
      <CodeLine>
        {" "}
        <MultiTab numberOfTabs={2} /> <ReactText>&#125;)</ReactText>
      </CodeLine>
      <CodeLine>
        {" "}
        <MultiTab numberOfTabs={2} />{" "}
        <ReactText>.catch((error) =&#62; &#123;</ReactText>
      </CodeLine>
      <CodeLine>
        {" "}
        <MultiTab numberOfTabs={3} /> <ReactText>console.log(error)</ReactText>
      </CodeLine>
      <CodeLine>
        {" "}
        <MultiTab numberOfTabs={2} /> <ReactText>&#125;)</ReactText>
      </CodeLine>
      <CodeLine>
        {" "}
        <Tab /> <ReactText>&#125;</ReactText>
      </CodeLine>

      <CodeLine>
        <ReactText>&#125;</ReactText>
      </CodeLine>
    </>
  );
};

FormRepairImplementation.propTypes = {
  userInput: PropTypes.func,
  identityData: PropTypes.array,
  isInputValid: PropTypes.array,
  isFirst: PropTypes.bool,
};

export default FormRepairImplementation;
