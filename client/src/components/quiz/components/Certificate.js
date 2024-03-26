import React, { useState } from "react";
import logo from "../../../assets/images/logos/ALL_Logo_Header.svg";
import { Sections } from "../../../constants/index";
import useMainStateContext from "src/reducers/MainContext";
import PropTypes from "prop-types";

/**
 * Renders a certificate of completion for a course.
 *
 * @param {Object} props - The component props.
 * @param {number} props.quizResult - The quiz result score.
 * @param {string} props.lab - The lab name.
 * @returns {JSX.Element} The rendered Certificate component.
 */
const Certificate = ({ quizResult, lab }) => {
  const { state } = useMainStateContext();
  const [score] = useState(parseFloat(quizResult));

  /**
   * Returns the color based on the score.
   * @returns {string} The color based on the score.
   */
  const getColor = () => {
    switch (true) {
      case score <= 40:
        return "crimson";
      case score <= 70:
        return "orange";
      default:
        return "chartreuse";
    }
  };

  const today = new Date();
  const date =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        padding: "20px",
        border: "10px solid #787878",
      }}
    >
      <div
        style={{ width: "100%", height: "auto", border: "5px solid #787878" }}
      >
        <div style={{ width: "50%", margin: "auto" }}>
          <span
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Certificate of Completion
          </span>
        </div>
        <br />
        <br />
        <span
          style={{ fontSize: "25px", textAlign: "center", padding: "20px" }}
        >
          {state.main.user !== null && state.main.user.firstname ? (
            <i>
              This is to certify that <b>{state.main.user.firstname}</b> has
              completed the course:
            </i>
          ) : (
            <i>This is to certify that you have completed the course:</i>
          )}
        </span>
        <br />
        <br />
        <span
          style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}
        >
          {Sections[lab].fullname}
        </span>{" "}
        <br />
        <br />
        <span
          style={{ fontSize: "25px", textAlign: "center", padding: "20px" }}
        >
          with score of <b style={{ color: getColor() }}>{quizResult}</b>
        </span>{" "}
        <br />
        <br />
        <span
          style={{ fontSize: "25px", textAlign: "center", padding: "20px" }}
        >
          <i>dated</i>
        </span>
        <br />
        <span
          style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}
        >
          {date}
        </span>
        <br />
        <br />
        <div style={{ backgroundColor: "rgb(61, 61, 61)" }}>
          <img
            src={logo}
            alt="logo"
            style={{
              height: "120px",
              width: "500px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

Certificate.propTypes = {
  quizResult: PropTypes.string.isRequired,
  lab: PropTypes.string.isRequired,
};

export default Certificate;
