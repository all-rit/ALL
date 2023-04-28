import React from "react";
import Simulation from "../components/Simulation";

const UpdatedTraining = () => {

    return (
        <div>
            <div>
                <p className={"playthrough__sentence"}>
                    The simulation has been updated so that the biases are equally distributed.
                    Try the simulation again to see the difference!
                </p>
            </div>
            <Simulation />
        </div>
    );
};

export default UpdatedTraining;