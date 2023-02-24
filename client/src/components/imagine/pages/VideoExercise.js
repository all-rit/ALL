/* eslint-disable react/prop-types */
import React from "react";
import { navigate } from "@reach/router";

const VideoExercise = (props) => {
    const { linkNum } = props;
    const handleNext = () => {
        navigate("/Imagine" + linkNum + "/ExpressionScore");
    };

    return (
        <div className="container bottomSpace center-div"> 
            <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                onClick={handleNext}
                key="start"
            >
            See Scores
            </button>
      </div>
    );
};

export default VideoExercise;