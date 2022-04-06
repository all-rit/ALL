import React from "react";

const GameScore = (props) =>{

    return(
        <div>
            {Math.floor(Math.random() * (10 - 0) + 0)+"/"+Math.floor(Math.random() * (10 - 0) + 0)+"/"+Math.floor(Math.random() * (10 - 0) + 0)}
        </div>
    );

}

export default GameScore;