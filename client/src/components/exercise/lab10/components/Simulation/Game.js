import React from "react";
import {bindActionCreators} from "redux";
import {actions as exerciseActions} from "../../../../../reducers/lab10/ExerciseReducer";
import {connect} from "react-redux";
import WalkingMan from "./WalkingMan";


const Game = () => {

    return (
        <div
            className={"tw-flex tw-flex-col tw-shadow-xl tw-border-solid tw-border-2 tw-border-[#BFBFBF] tw-bg-[#F8F8F8] tw-rounded tw-h-96"}>
            {/* Falling object section */}
            <div>

            </div>

            {/* Walking man section */}
            <div className={"tw-mt-auto tw-pt-6 tw-border-solid tw-border-0 tw-border-t-2 tw-border-[#BFBFBF]"}>
                <WalkingMan/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return state.exercise10;
    // return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({...exerciseActions}, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
