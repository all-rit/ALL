import React from "react";
import CodeBlockInput from "src/components/all-components/CodeBlock/Components/CodeBlockInput";
import { useLab13 } from "../Lab13Context";
import Repair from "src/components/body/Repair/Repair";
import PropTypes from "prop-types";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";

const IDEExercise = () => {
  const {
    exercisePromptsState,
    validInputs,
    isFirst,
    handleUserInputChange,
    checkInputValid,
    fetchRepair,
    postRepair,
  } = useLab13();

  const handleContinue = () => {
    startExercise();
    navigate("/Lab13/Exercise/PanelswithIDEFixes");
  };

  const CodeBlock = React.useCallback(
    ({ inputs, userInput, validInputs, isFirst }) => (
      <div
        style={{
          background: "#222",
          color: "#fff",
          borderRadius: 8,
          padding: 24,
          fontFamily: "monospace",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div style={{ marginBottom: 20 }}>
          <span style={{ color: "#8ef" }}>function</span>{" "}
          <span style={{ color: "#fff" }}>addDisclaimers</span>() {"{"}
        </div>
        <div style={{ marginLeft: 24, marginBottom: 16 }}>
          <div
            style={{
              color: "#6a9955",
              fontFamily: "monospace",
              fontSize: "1em",
              marginBottom: 4,
            }}
          >
            {
              "// Enter 'Disclaimer - ALL-IE's outputs can be wrong and should be double-checked.' below:"
            }
          </div>
          <span style={{ color: "#ffb347" }}>disclaimerText</span> = &quot;
          <CodeBlockInput
            value={inputs.find((i) => i.id === "disclaimer").value}
            attributes={{
              type: "text",
              onChange: (e) => userInput("disclaimer", e.target.value),
              placeholder: "Enter Answer Here",
              className: "tw-p-1 code_editor__input",
              style: {
                width: 400,
                fontFamily: "monospace",
                fontSize: "1em",
                margin: "0 8px",
                borderRadius: 4,
                border:
                  validInputs.disclaimer === false && !isFirst
                    ? "1px solid #e00"
                    : "1px solid #888",
                padding: "2px 6px",
                background: "#333",
                color: "lightsalmon",
              },
            }}
          />
          &quot;;
          {validInputs.disclaimer === false && !isFirst && (
            <div style={{ color: "#e00", fontSize: 12, marginTop: 2 }}>
              Please enter the correct disclaimer.
            </div>
          )}
        </div>
        <div style={{ marginLeft: 24, marginBottom: 16 }}>
          <div
            style={{
              color: "#6a9955",
              fontFamily: "monospace",
              fontSize: "1em",
              marginBottom: 4,
            }}
          >
            {"// Enter 'True' below:"}
          </div>
          <span style={{ color: "#ffb347" }}>showConfidenceScores</span> =
          <CodeBlockInput
            value={inputs.find((i) => i.id === "confidence").value}
            attributes={{
              type: "text",
              onChange: (e) => userInput("confidence", e.target.value),
              placeholder: "Enter Answer Here",
              className: "tw-p-1 code_editor__input",
              style: {
                width: 400,
                fontFamily: "monospace",
                fontSize: "1em",
                margin: "0 8px",
                borderRadius: 4,
                border:
                  validInputs.confidence === false && !isFirst
                    ? "1px solid #e00"
                    : "1px solid #888",
                padding: "2px 6px",
                background: "#333",
                color: "lightsalmon",
              },
            }}
          />
          {validInputs.confidence === false && !isFirst && (
            <div style={{ color: "#e00", fontSize: 12, marginLeft: 8 }}>
              Please enter &quot;True&quot;.
            </div>
          )}
        </div>
        <div style={{ marginLeft: 24, marginBottom: 16 }}>
          <div
            style={{
              color: "#6a9955",
              fontFamily: "monospace",
              fontSize: "1em",
              marginBottom: 4,
            }}
          >
            {"// Enter 'True' below:"}
          </div>
          <span style={{ color: "#ffb347" }}>showCitations</span> =
          <CodeBlockInput
            value={inputs.find((i) => i.id === "citations").value}
            attributes={{
              type: "text",
              onChange: (e) => userInput("citations", e.target.value),
              placeholder: "Enter Answer Here",
              className: "tw-p-1 code_editor__input",
              style: {
                width: 400,
                fontFamily: "monospace",
                fontSize: "1em",
                margin: "0 8px",
                borderRadius: 4,
                border:
                  validInputs.citations === false && !isFirst
                    ? "1px solid #e00"
                    : "1px solid #888",
                padding: "2px 6px",
                background: "#333",
                color: "lightsalmon",
              },
            }}
          />
          {validInputs.citations === false && !isFirst && (
            <div style={{ color: "#e00", fontSize: 12, marginLeft: 8 }}>
              Please enter &quot;True&quot;.
            </div>
          )}
        </div>
        <div>{"}"}</div>
      </div>
    ),
    [],
  );

  CodeBlock.propTypes = {
    inputs: PropTypes.array.isRequired,
    userInput: PropTypes.func.isRequired,
    validInputs: PropTypes.object.isRequired,
    isFirst: PropTypes.bool.isRequired,
  };

  const data = {
    exercisePromptsState,
    validInputs,
    isFirst,
  };
  const functions = {
    handleUserInputChange,
    checkInputValid,
    fetchRepair,
    postRepair,
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
            fileName: "ALLIEChatbot.py",
            implementation: CodeBlock,
          },
        ]}
        navigateNext={handleContinue}
      />
    </div>
  );
};

export default IDEExercise;
