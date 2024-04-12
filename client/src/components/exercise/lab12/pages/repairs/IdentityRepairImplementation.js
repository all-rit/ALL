import React from "react";
import CodeLine from "src/components/all-components/CodeBlock/Components/CodeLine";
import ReactText from "src/components/all-components/CodeBlock/StyleComponents/ReactText";
import PropTypes from "prop-types";
import Tab from "src/components/all-components/CodeBlock/Components/Tab";
import MultiTab from "src/components/all-components/CodeBlock/Components/MultiTab";
import HTMLTag from "src/components/all-components/CodeBlock/StyleComponents/HTMLTag";
import HTMLText from "src/components/all-components/CodeBlock/StyleComponents/HTMLText";
import JSONText from "src/components/all-components/CodeBlock/StyleComponents/JSONText";
import CommentText from "src/components/all-components/CodeBlock/StyleComponents/CommentText";
import CodeBlockInput from "src/components/all-components/CodeBlock/Components/CodeBlockInput";
import IdentityFormData from "src/constants/lab12/RepairData";

const IdentityRepairImplementation = (props) => {
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
          <JSONText>{item.itemName}: &ldquo;&rdquo;,</JSONText>
        </CodeLine>
      ))}
      {IdentityFormData.inputData.map((item) => (
        <div key={item.id}>
          <CodeLine>
            <MultiTab numberOfTabs={2} />
            <CommentText>
              Enter &lsquo;{item.itemName}&rsquo; below:{" "}
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
                  name: item.itemName,
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

      {/* Handle Change function */}
      <CodeLine>
        <Tab />
        <ReactText>const handleChange = (e) =&#62; &#123;</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <ReactText>setFormData(&#123;</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={3} />
        <ReactText>...formData,</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={3} />
        <ReactText>[e.target.name]: e.target.value</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <ReactText>&#125;)</ReactText>
      </CodeLine>
      <CodeLine>
        {" "}
        <Tab /> <ReactText>&#125;</ReactText>
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
          <MultiTab numberOfTabs={3} /> <JSONText>{item.itemName}:</JSONText>
          <HTMLText>formData.{item.itemName},</HTMLText>
        </CodeLine>
      ))}
      {IdentityFormData.inputData.map((item) => (
        <div key={item.id}>
          <CodeLine>
            <MultiTab numberOfTabs={3} />{" "}
            <CommentText>
              Enter &lsquo;formData.{item.itemName}&rsquo; below:{" "}
            </CommentText>
          </CodeLine>
          <CodeLine key={item.id}>
            <MultiTab numberOfTabs={3} /> <JSONText>{item.itemName}:</JSONText>
            {userInput ? (
              <CodeBlockInput
                value={userInput}
                attributes={{
                  onChange: (event) => {
                    userInput(item.id, event.target.value);
                  },
                  name: item.itemName,
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
        <Tab /> <ReactText>&#125;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <ReactText> return ( </ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <HTMLTag>
          &#60;div className = &ldquo;tw-flex tw-flex-col tw-m-3&rdquo;&#62;
        </HTMLTag>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={3} />
        <HTMLTag>&#60;button</HTMLTag>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={4} />
        <HTMLTag>className=&ldquo;btn btn-xl btn-primary&rdquo;&#62;</HTMLTag>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={4} />
        <HTMLTag> onClick=&#123;submitForm()&#125; </HTMLTag>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={3} />
        <HTMLTag>/&#62;</HTMLTag>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <HTMLTag>&#60;div&#62;</HTMLTag>
      </CodeLine>
      <CodeLine>
        {" "}
        <Tab />
        <HTMLText>)</HTMLText>
      </CodeLine>
      <CodeLine>
        <ReactText>&#125;</ReactText>
      </CodeLine>
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
