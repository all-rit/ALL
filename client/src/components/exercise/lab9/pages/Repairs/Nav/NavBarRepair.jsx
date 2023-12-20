import ReactText from "../../../../../all-components/CodeBlock/StyleComponents/ReactText";
import CodeLine from "../../../../../all-components/CodeBlock/Components/CodeLine";
import Tab from "../../../../../all-components/CodeBlock/Components/Tab";
import CommentText from "../../../../../all-components/CodeBlock/StyleComponents/CommentText";
import CodeBlockInput from "../../../../../all-components/CodeBlock/Components/CodeBlockInput";
import MultiTab from "../../../../../all-components/CodeBlock/Components/MultiTab";
import PropTypes from "prop-types";
import HTMLTag from "../../../../../all-components/CodeBlock/StyleComponents/HTMLTag";
import HTMLText from "../../../../../all-components/CodeBlock/StyleComponents/HTMLText";
import React from "react";
import ErrorText from "src/components/all-components/CodeBlock/StyleComponents/ErrorText";
import ImportText from "src/components/all-components/CodeBlock/StyleComponents/ImportText";

const NavBarRepair = (props = {}) => {
  const { navItems, userInput, isInputValid, isFirst } = props;

  return (
    <>
      <CodeLine>
        <ReactText>import house from {" "}</ReactText>
        <ImportText>&ldquo;./img/house&rdquo;</ImportText>
        <ReactText>;</ReactText>
      </CodeLine>

      <CodeLine>
        <ReactText> import briefcase from {" "} </ReactText>
        <ImportText> &ldquo;./img/briefcase&rdquo;</ImportText>
        <ReactText>;</ReactText>
      </CodeLine>

      <CodeLine>
        <ReactText>import grad_cap from {" "}</ReactText>
        <ImportText>&ldquo;./img/grad_cap&rdquo;</ImportText>
        <ReactText>;</ReactText>
      </CodeLine>

      <CodeLine>
        <ReactText>import phone from {" "} </ReactText>
        <ImportText>&ldquo;./img/phone&rdquo;</ImportText>
        <ReactText>;</ReactText>
      </CodeLine>

      <ReactText>const NavBar = () =&#62; &#123;</ReactText>
      <CodeLine>
        <Tab /> <ReactText> return ( </ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} /> <HTMLTag> &#60;span&#62;</HTMLTag>
      </CodeLine>
      {navItems.map((element, index) => (
        <div key={index}>
          <CodeLine>
            <MultiTab numberOfTabs={3} />{" "}
            <HTMLTag> &#60;div className = &ldquo;nav-item&rdquo;&#62;</HTMLTag>
          </CodeLine>
          <CodeLine>
            <MultiTab numberOfTabs={4} />
            <HTMLTag> &#60;p className = &ldquo;nav-text&rdquo;&#62;</HTMLTag>
          </CodeLine>
          <CodeLine>
            <MultiTab numberOfTabs={5} />
            <HTMLText> {element.navbar_item} </HTMLText>
          </CodeLine>
          <CodeLine>
            <MultiTab numberOfTabs={4} />
            <HTMLTag> &#60;/p&#62;</HTMLTag>
          </CodeLine>
          <CodeLine>
            <MultiTab numberOfTabs={4} />
            <CommentText> {element.comment} </CommentText>
          </CodeLine>
          <CodeLine>
            <MultiTab numberOfTabs={4} />{" "}
            <HTMLTag> &#60;img href = {"{"}</HTMLTag>
            <CodeBlockInput
              attributes={{
                onChange: (event) => {
                  userInput(element.id, event.target.value);
                },
                name: element.name,
                type: "text",
                placeholder: "Enter icon image file here",
              }}
            />
            <HTMLTag>{"}"}/&#62; </HTMLTag>
          </CodeLine>
          {!isInputValid[index] && !isFirst && (
            <CodeLine>
              <MultiTab numberOfTabs={4} />
              <ErrorText>
                Error in form submission. Please enter &quot;
                {element.correct_expression}&quot; and resubmit.
              </ErrorText>
            </CodeLine>
          )}
          <CodeLine>
            <MultiTab numberOfTabs={3} />
            <HTMLTag> &#60;/div&#62;</HTMLTag>
          </CodeLine>
        </div>
      ))}
      <CodeLine>
        <MultiTab numberOfTabs={2} /> <HTMLTag> &#60;/span&#62;</HTMLTag>
      </CodeLine>
      <CodeLine>
        <Tab /> <HTMLTag>);</HTMLTag>
      </CodeLine>
      <ReactText>&#125;</ReactText>
      <br />
      <ReactText>export default NavBar;</ReactText>
    </>
  );
};

NavBarRepair.propTypes = {
  userInput: PropTypes.func,
  navItems: PropTypes.array,
  isInputValid: PropTypes.array,
  isFirst: PropTypes.bool,
};

export default NavBarRepair;
