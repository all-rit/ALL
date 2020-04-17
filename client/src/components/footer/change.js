import React, {Component} from "react";
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
class Change extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontSize: 0
        };
    }

    changeSize = (size)=>{
        let state_size = this.state.fontSize;
        changeTSize(size);
        this.setState({fontSize: state_size+ size});
    };
    adjustSize = (size, className)=>{
        console.log(this.state.fontSize)
        changeTSize(size, className);
    };

    disappearNext = (count) => {
        if (count >= 4) {
            return true;
        } else {
            return false;
        }
    };

    disappearBack = (count) => {
        if (count <= 0) {
            return true;
        } else {
            return false;
        }
    };

    handleIncrement = (count, actions) => {
        if (count < 4) {
            actions.setBody(count + 1);
        }
    };

    handleDecrement = (count, actions) => {
        if (count > 0) {
            actions.setBody(count - 1);
        }
    };
    render() {
        console.log(this.props);
        const {state, actions} = this.props;
        let display = state.game.state === "GAME_IDLE" || state.app.body !== 2;
        return (
            <div>
                <div className="container" style={{display: display ? "block" : "none"}}>
                    <button
                        className="btn btn-second btn-xl text-uppercase js-scroll-trigger back "
                        onClick={() => this.handleDecrement(state.app.body, actions)
                        }
                        disabled={this.disappearBack(state.app.body) ? "disabled" : false}
                    >
                        back
                    </button>
                    <button
                        className="btn btn-primary btn-xl text-uppercase js-scroll-trigger next"
                        onClick={() => this.handleIncrement(state.app.body, actions)}
                        disabled={this.disappearNext(state.app.body) ? "disabled" : false}
                    >
                        next
                    </button>
                    <div className="btn-change">
                        <button
                            class="btn-text btn btn-bottom-buttons text-uppercase"
                            alt="Increase text size"
                            title="Larger text"
                            onClick={() => this.changeSize(1)}
                        >
                            Text+
                        </button>
                        <button
                            className="btn-text btn btn-bottom-buttons text-uppercase"
                            alt="Decrease text size"
                            title="Smaller text"
                            onClick={() => this.changeSize(-1)}
                        >
                            Text-
                        </button>
                        {/*<button className="btn btn-disabled text-uppercase `jscolor ${ chosen-value,  setTextColor(this)}`" >Change Text Color</button>*/}
                        {/*/!*jscolor {valueElement:'chosen-value', onFineChange:'setTextColor(this)*!/*/}
                        {/*<button className="btn btn-disabled text-uppercase" >Change Background Color</button>*/}

                    </div>
                </div>
                <div className="container" style={{display: display ? "none" : "block"}}>
                    <div className="btn-information">
                        The navigation and accessibility buttons are disabled so as to not interfere with the
                        accessibility-related portions of the lab.
                    </div>
                </div>

            </div>
        );

    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(Change);
