import ReactText from "../../../all-components/CodeBlock/StyleComponents/ReactText";
import CodeLine from "../../../all-components/CodeBlock/Components/CodeLine";
import Tab from "../../../all-components/CodeBlock/Components/Tab";
import CommentText from "../../../all-components/CodeBlock/StyleComponents/CommentText";
import CodeBlockInput from "../../../all-components/CodeBlock/Components/CodeBlockInput";
import MultiTab from "../../../all-components/CodeBlock/Components/MultiTab";
import PropTypes from "prop-types";
import HTMLTag from "../../../all-components/CodeBlock/StyleComponents/HTMLTag";
import HTMLText from "../../../all-components/CodeBlock/StyleComponents/HTMLText";
import React, { useEffect, useState } from "react";
import ErrorText from "src/components/all-components/CodeBlock/StyleComponents/ErrorText";

export const NavBarRepair = (props = {}) => {
  const { navItems, userInput } = props;

  const [error, setError] = useState(false);

  const handleError = (id, value) => {
    userInput(id, value);
    const navItem = navItems.find((item) => item.id === id);
    if (navItem && value !== navItem.correct_expression) {
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
    navItems.forEach((item) => {
      handleError(item.id, item.userInput);
      console.log(item.id);
    });
  }, []);

  return (
    <>
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
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <CommentText> {element.comment} </CommentText>
          </CodeLine>
          <CodeLine>
            <MultiTab numberOfTabs={4} /> <HTMLTag> &#60;img href = </HTMLTag>
            <CodeBlockInput
              attributes={{
                onChange: (event) => {
                  userInput(element.id, event.target.value);
                  handleError(element.id, event.target.value);
                },
                name: element.name,
                type: "text",
                placeholder: "Enter icon image file here",
              }}
            />
            {error[element.id] && (
              <CodeLine>
                <MultiTab numberOfTabs={3} />
                <ErrorText>
                  Error in form submission. Please check your input values and
                  resubmit.
                </ErrorText>
              </CodeLine>
            )}
            <HTMLTag>/&#62; </HTMLTag>
          </CodeLine>
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
};

export default NavBarRepair;
