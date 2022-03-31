import React, { useEffect, useRef, useState } from "react";

const Timer = ({seconds: startTime}) => {//does it need to be "App"?
    const [seconds, updateSeconds] = useState(startTime);
    const timer = useRef(null);

    useEffect(() => {
        timer.current = setInterval(() => {
            updateSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => {
            clearInterval(timer.current);
            timer.current = null;
        }
    }, []);

    useEffect(() => {
        if (seconds === 0) {
            clearInterval(timer.current);
            timer.current = null;
        }
    }, [seconds]);

    return (
        <div className="timer">
            <div>
                <h1>Hello</h1>
                <h1>{seconds}</h1>
                <h3>Timer</h3>
            </div>
        </div>
    )
}

export default Timer;