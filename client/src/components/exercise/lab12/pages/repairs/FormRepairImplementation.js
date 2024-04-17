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
import IdentityFormData from "src/constants/lab12/RepairData";

const FormRepairImplementation = (props) => {
  const { userInput } = props;

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
      {IdentityFormData.inputData.map((item) => (
        <div key={item.id}>
          <CodeLine>
            <MultiTab numberOfTabs={2} />
            <CommentText>
              Enter &lsquo;{item.variableName}&rsquo; below:{" "}
            </CommentText>
          </CodeLine>
          <CodeLine>
            <MultiTab numberOfTabs={2} />
            {userInput ? (
              <CodeBlockInput
                value={userInput}
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
                  name: item.input,
                  type: "text",
                  placeholder: "Enter Answer Here",
                }}
              />
            )}
            <JSONText>: &ldquo;&rdquo;,</JSONText>
          </CodeLine>
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
      {IdentityFormData.inputData.map((item) => (
        <div key={item.id}>
          <CodeLine>
            <MultiTab numberOfTabs={3} />{" "}
            <CommentText>
              Enter &lsquo;formData.{item.variableName}&rsquo; below:{" "}
            </CommentText>
          </CodeLine>
          <CodeLine key={item.id}>
            <MultiTab numberOfTabs={3} />{" "}
            <JSONText>{item.variableName}:</JSONText>
            {userInput ? (
              <CodeBlockInput
                value={userInput}
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
                  name: item.input,
                  type: "text",
                  placeholder: "Enter Answer Here",
                }}
              />
            )}
          </CodeLine>
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
  isInputValid: PropTypes.func,
  isFirst: PropTypes.bool,
};

export default FormRepairImplementation;
