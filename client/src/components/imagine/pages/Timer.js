import React, { useEffect, useRef, useState } from "react";

const Timer = ({seconds: startTime, finished}) => {//does it need to be "App"?
    const [seconds, updateSeconds] = useState(startTime);
    const timer = useRef(null);

    useEffect(() => {
        timer.current = setInterval(() => {
            updateSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => {
            clearInterval(timer.current);
            timer.current = null;//safer to set to null
        }
    }, []);

    useEffect(() => {
        if (seconds === 0) {
            clearInterval(timer.current);
            timer.current = null;
            finished();//change this or the logic inside
        }
    }, [seconds]);

    return (
        <div className="timer">
            <div>
                <h3>Time until penalty is lifted</h3>
                <h1>{seconds}</h1>
                <h3>Timer</h3>
            </div>
        </div>
    )
}

export default Timer;