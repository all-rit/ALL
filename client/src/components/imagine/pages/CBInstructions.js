/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { navigate } from "@reach/router";
import React from "react";
//import Button from "../components/header/buttons/button";
//import "./secondaryInstructions.css";

/*
Page containing the instructions for the second popup the user sees
this instructional popup covers color vision defiencies
*/
const CBInstructions = (props) => {
    const { linkNum } = props;
    const handleNext = () => {
        navigate("Imagine" + linkNum + "CBGameBoard");
    };

    return (
        <div className="instructionsContainer">
            <p className="secondInstructionTitle">Good job so far!</p>
            <ul>
                <li className="instructionsItem">
                    As you can see, this exercise isn't too difficult. However, to a user
                    with a <em>color vision deficiency</em>, it is.
                </li>
                <li className="instructionsItem">
                    A color vision deficiency (also sometimes referred to as color
                    blindness) is when an individual is unable to see a portion of the
                    color spectrum. These are quite common, especially in men, across the
                    world.
                </li>
                <li className="instructionsItem">
                    An app, like this one, would be impossible for someone with a color
                    vision deficiency to use properly. To simulate this, we have added the
                    ability to simulate what an individual with this deficiency would see.
                </li>
                <br />
                <h2>Did you know?</h2>
                <br />
                <li className="instructionsItem" style={{ listStyleType: "none" }}>
                    There are three main color vision deficiencies: Protanopia (Red
                    blindness), Deuteranopia (Green blindness), and Tritanopia (Blue
                    blindness). These are all options for simulation for in the exercise.
                </li>
            </ul>
            <div className="center">
                <button
                    className="btn btn-primary text-black btn-xl text-uppercase "
                    onClick={handleNext}
                    key="start"
                >
                    Start
                </button>
            </div>
        </div>
    );
};

export default CBInstructions;
