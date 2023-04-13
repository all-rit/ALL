import React, { useState } from "react";
import ReactDOM from "react-dom";

function counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };
};

export default counter;