/* eslint-disable react/prop-types */
import React from "react";
import TrainingAICodeBlock from "./TrainingAICodeBlock";
import Popup from "../../../shared/Popup";
import { navigate } from "@reach/router";
const TrainingAIRepair = (props) => {
    const { actions, state } = props;

    console.log(state);
    function handleNav() {
        return navigate("http://localhost:3000/Lab10/Reinforcement");
    }
    return (
        <div>
            <div className="center-div">
                <p className="playthrough__sentence">
                    The amount of time the Neural Network takes to collect data effects
                    its decision making.
                </p>
                <p className="playthrough__sentence">
                    Let&lsquo;s edit the AI&lsquo;s configuration to allow for more time
                    to gather data
                </p>
            </div>
            <p className="playthrough__sentence">
                Click the &lsquo;<span className={"tw-font-bold"}>Repair</span>
                &lsquo; button to view and edit the configuration file
            </p>
            <Popup
                message={state.repair10.popupMessage}
                handler={actions.updatePopup}
                error={state.repair10.repairError}
            />
            <button
                className="btn btn-second btn-xl text-uppercase leftButton"
                onClick={actions.openRepair}
                key="repair"
            >
                Repair
            </button>
            <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                key="Next"
                onClick={handleNav}
            >
                Next
            </button>
            {state.repair10.repairVisible && <TrainingAICodeBlock />}
        </div>
    );
};

export default TrainingAIRepair;
