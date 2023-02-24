/* eslint-disable react/prop-types */
import React from "react";
import { navigate } from "@reach/router";

const GameBoard = (props) => {
    const { linkNum } = props;
    const handleNext = () => {
        navigate("Imagine" + linkNum + "/CBInstructions");
    };

    return (
        <div className="container bottomSpace center-div">
            <button
                className="btn btn-primary text-black btn-x1 text-uppercase"
                onClick={handleNext}
                key="next"
            >
                Next
            </button>
        </div>
    )
}

export default GameBoard;