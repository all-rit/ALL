import React from "react";
import {bindActionCreators} from "redux";
import {actions as exerciseActions} from "../../../../reducers/lab10/ExerciseReducer";
import {connect} from "react-redux";
import Game from "../components/Simulation/Game";

const BuildingAI = () => {
    return (
        <div>
            <Game/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return state.exercise10;
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({...exerciseActions}, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildingAI);
