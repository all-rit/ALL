import React, { useState } from "react";
import { navigate } from "@reach/router";
import counter from "../components/counter";

const ExpressionExercise = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };
    const handleNext = () => {
        navigate("/Imagine/ExpressionScore");
    };

    return (
        <div className="container bottomSpace center-div">
            <div className="playthrough_sentence">
                Remember, if you believe you see discomfort, hit the button!
            </div>

            <div className="video">
                <iframe className="embedvideo" src="https://www.youtube.com/watch?v=NpEaa2P7qZI" />
            </div>

            <div className="counter">
                <button
                    className="btn btn-primary text-black btn-x1 text-uppercase"
                    onClick={incrementCount}>Discomfort Detected</button>
            </div>
            <div className="counter">
                {count}
            </div>

            <button
                className="btn btn-primary text-black btn-x1 text-uppercase"
                onClick={handleNext}
                key="score"
            >
                See Score
            </button>
        </div>
    );
};

export default ExpressionExercise;