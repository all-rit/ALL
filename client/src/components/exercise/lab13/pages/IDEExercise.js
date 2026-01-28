import React from "react";
import Repair from "src/components/body/Repair/Repair";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";

const IDEExercise = () => {
  const handleContinue = () => {
    startExercise();
    navigate("/Lab13/Exercise/PanelswithIDEFixes");
  };

  const CodeBlock = () => {
    const [inputValue, setInputValue] = React.useState("");
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "1em",
          fontFamily: "monospace",
        }}
      >
        <span>{`function addDisclaimers() { disclaimerText = "
        `}</span>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            width: "80px",
            fontFamily: "monospace",
            fontSize: "1em",
            margin: "0 8px",
            borderRadius: 4,
            border: "1px solid #888",
            padding: "2px 6px",
            background: "#fff",
            color: "#222",
          }}
          placeholder="?"
        />
        <span>{`"; }`}</span>
      </div>
    );
  };

  const data = {
    exercisePromptsState: [],
    validInputs: {},
    isFirst: true,
  };
  const functions = {
    handleUserInputChange: () => {},
    checkInputValid: () => true,
    fetchRepair: () => {},
    postRepair: () => {},
  };

  return (
    <div>
      <Repair
        data={data}
        functions={functions}
        headingText={"Disclaimers, Confidence Scores and Citations"}
        repairText={[
          "Fill in the blanks to add the disclaimers, confidence scores, and citations to the chatbot outputs.",
        ]}
        files={[
          {
            fileId: 0,
            fileName: "ALLIEChatbot.js",
            implementation: CodeBlock,
          },
        ]}
        navigateNext={() => {}}
      />
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default IDEExercise;
