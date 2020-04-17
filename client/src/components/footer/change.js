import React from "react";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";
import { connect } from "react-redux";
import {actions as appActions} from '../../reducers/AppReducer';
import {bindActionCreators} from 'redux';
import {changeTSize} from "../../js/edit/editPage";
import "../../js/edit/jscolor"

const mapStateToProps = (state) => {
    return {
        // General
        state: state
    };
};
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(appActions, dispatch)
});

const disappearNext = (count) => {
    if (count >= 4) {
        return true;
    } else {
        return false;
    }
};

const disappearBack = (count) => {
    if (count <= 0) {
        return true;
    } else {
        return false;
    }
};

const handleIncrement = (count, actions) => {
    if (count < 4) {
        actions.setBody(count+1)
    }
};

const handleDecrement = (count, actions) => {
    if (count>0) {
        actions.setBody(count-1)
    }
};
const Change = (props) => {
    console.log(props);
    const {state, actions} = props;
    let display = state.game.state === "GAME_IDLE" || state.app.body !== 2;
    return (
        <div>
            <div className="container" style={{display: display ? "block": "none"}}>
                <button
                    className="btn btn-second btn-xl text-uppercase js-scroll-trigger back "
                    onClick={() => handleDecrement(state.app.body, actions)}
                    disabled={disappearBack(state.app.body) ? "disabled" : false}
                >
                    back
                </button>
                <button
                    className="btn btn-primary btn-xl text-uppercase js-scroll-trigger next"
                    onClick={() => handleIncrement(state.app.body, actions)}
                    disabled={disappearNext(state.app.body) ? "disabled" : false}
                >
                    next
                </button>
                <div className="btn-change">
                    <button
                        class="btn-text btn btn-bottom-buttons text-uppercase"
                        alt="Increase text size"
                        title="Larger text"
                        onClick={() => changeTSize(1)}
                    >
                        Text+
                    </button>
                    <button
                        className="btn-text btn btn-bottom-buttons text-uppercase"
                        alt="Decrease text size"
                        title="Smaller text"
                        onClick={() => changeTSize(-1)}
                    >
                        Text-
                    </button>
                    <button className="btn btn-disabled text-uppercase `jscolor ${ chosen-value,  setTextColor(this)}`" >Change Text Color</button>
                    {/*jscolor {valueElement:'chosen-value', onFineChange:'setTextColor(this)*/}
                    <button className="btn btn-disabled text-uppercase" >Change Background Color</button>

                </div>
            </div>
            <div className="container" style={{display: display ? "none": "block"}}>
                <div className="btn-information">
                    The navigation and accessibility buttons are disabled so as to not interfere with the
                    accessibility-related portions of the lab.
                </div>
            </div>

        </div>
    );

};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Change);
