import { React } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";
import { Tabs } from "../components/Tab/Tabs";
import { Tab } from "../components/Tab/Tab";

const AIPanel = () => {
  const handleContinue = () => {
    startExercise();
    navigate("/Lab13/Exercise/HaloExplination");
  };

  const lorem = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    `;

  return (
    <div>
      {/* AI Panel Page */}
      {/* TESTER TABS */}
      <Tabs>
        <Tab label="Example 1">
          <h2>Introduction to AI</h2>
          <p>{lorem.repeat(5)}</p>
          <hr />
          <p>{lorem.repeat(3)}</p>
          <br />
          <p>{lorem.repeat(2)}</p>
        </Tab>

        <Tab label="Example 2">
          <h2>Example Cases of AI</h2>
          <p>{lorem.repeat(4)}</p>
          <hr />
          <ul>
            <li>Self-driving cars</li>
            <li>Speech recognition</li>
            <li>Recommendation systems</li>
          </ul>
          <br />
          <p>{lorem.repeat(2)}</p>
        </Tab>

        <Tab label="Example 3">
          <h2>Example 3</h2>
          <p>{lorem.repeat(6)}</p>
          <hr />
          <p>{lorem.repeat(3)}</p>
        </Tab>

        <Tab label="Example 4">
          <h2>Example 4</h2>
          <p>{lorem.repeat(5)}</p>
          <hr />
          <p>{lorem.repeat(2)}</p>
          <br />
          <p>{lorem.repeat(3)}</p>
        </Tab>
      </Tabs>
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default AIPanel;
