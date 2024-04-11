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
      <CodeLine>
        <MultiTab numberOfTabs={2} />{" "}
        <JSONText>legalFirstName: &ldquo;&rdquo;,</JSONText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />{" "}
        <JSONText>legalLastName: &ldquo;&rdquo;,</JSONText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />{" "}
        <JSONText>college: &ldquo;&rdquo;,</JSONText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />{" "}
        <JSONText>major: &ldquo;&rdquo;,</JSONText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />{" "}
        <JSONText>graduationTerm: &ldquo;&rdquo;,</JSONText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <CommentText>Enter &lsquo;preferredName&rsquo; below: </CommentText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        {userInput ? (
          <CodeBlockInput
            value={userInput}
            attributes={{
              // onChange: (event) => {
              //   userInput(input.id, event.target.value);
              // },
              // name: userInput,
              type: "text",
              placeholder: "Enter Answer Here",
            }}
          />
        ) : (
          <CodeBlockInput
            attributes={{
              // onChange: (event) => {
              //   userInput(input.id, event.target.value);
              // },
              // name: input.variableName,
              type: "text",
              placeholder: "Enter Answer Here",
            }}
          />
        )}
        <JSONText> =&ldquo;&rdquo;,</JSONText>
      </CodeLine>
      <CodeLine>
        <Tab /> <ReactText> &#125;); </ReactText>
      </CodeLine>
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
      <CodeLine>
        <Tab /> <ReactText> const submitForm = () =&#62; &#123;</ReactText>
      </CodeLine>
      <CodeLine>
        {" "}
        <MultiTab numberOfTabs={2} /> <ReactText>hello</ReactText>
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
        <HTMLTag> onClick=&#123;() =&#62; </HTMLTag>
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
