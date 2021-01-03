import React, {Component} from "react";
import "../../assets/stylesheets/components/css/agency.min.css";
import "../../assets/stylesheets/components/css/style.css";
import "../../assets/stylesheets/components/css/colorPicker.css"
import {connect} from "react-redux";
import {actions as appActions} from '../../reducers/lab1/AppReducer';
import {bindActionCreators} from 'redux';
import {changeTSize, setTextColor, setBackgroundColor, onNextPageChangeTSize} from "./edit/editPage";
import "./edit/jscolor";
import {Panel as ColorPickerPanel} from 'rc-color-picker';
import { Sections } from "../../App";

const mapStateToProps = (state) => {
    return {
        // General
        state: state
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(appActions, dispatch)
});

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontSize: 0,
            textColor: false,
            bgColor: false,
            displayColorPalette: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() {
        document.addEventListener("click", this.handleClick)
    }

    componentDidUpdate(prevProps){
       if (prevProps.state.app.body !== this.props.state.app.body) {
           this.adjustSize(this.state.fontSize);
       }
    }
    
    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick)
    }

    changeSize = (size) => {
        let state_size = this.state.fontSize;
        changeTSize(size);
        this.setState({fontSize: state_size + size});
    };
    adjustSize = (fontSize) => {
        for (let x=0; x<Math.abs(fontSize);x++){
            if(fontSize<0 ) {
                onNextPageChangeTSize(-1);
            }
            else{
                onNextPageChangeTSize(1);
            }
        }
    };

    disappearNext = (count) => {
        return count >= 4;
    };

    disappearBack = (count) => {
        return count <= 0;
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

    renderTextColorPalette = () => {
        this.setState({
            // displayColorPalette: !this.state.displayColorPalette,
            textColor: !this.state.textColor,
            bgColor: false
        });
    };
    renderBgColorPalette = () => {
        this.setState({
            // displayColorPalette: !this.state.displayColorPalette,
            bgColor: !this.state.bgColor,
            textColor: false
        });
    };

    OnTextColorChange(obj) {
        setTextColor(obj.color)
    };

    OnBgColorChange(obj) {
        setBackgroundColor(obj.color)
    };

    handleClick(e) {
        if (this.state.textColor) {
            if (e.target.tagName === "HTML") {
                this.setState({
                    textColor: false
                })
            } else if (e.target.parentNode.className) {
                if (!e.target.parentNode.className.includes("rc-color-picker") && e.target.id !== "changeTextColor") {
                    this.setState({
                        textColor: false
                    })
                }
            }
        }
        if (this.state.bgColor) {
            if (e.target.tagName === "HTML") {
                this.setState({
                    bgColor: false
                })
            } else if (e.target.parentNode.className) {
                if (!e.target.parentNode.className.includes("rc-color-picker") && e.target.id !== "changeBackgroundColor") {
                    this.setState({
                        bgColor: false
                    })
                }
            }
        }
    }

    render() {
        const {state, actions} = this.props;
        let display = state.game.state === "GAME_IDLE" || state.app.body !== 2;
        return (
            <div>
                <div className="container" style={{display: display ? "block" : "none"}}>
                    <button
                        className="btn btn-second btn-xl text-uppercase js-scroll-trigger back "
                        onClick={() => this.handleDecrement(state.app.body, actions)}
                        style={{display: this.disappearBack(state.app.body) ? "none" : "block"}}
                    >
                        Previous — {state.app.body > 0 ? Sections[state.app.body - 1].name : ""}
                    </button>
                    <button
                        className="btn btn-primary btn-xl text-uppercase js-scroll-trigger next"
                        onClick={() => {this.handleIncrement(state.app.body, actions)}}
                        style={{display: this.disappearNext(state.app.body) ? "none" : "block"}}
                    >
                        Next — {state.app.body < 4 ? Sections[state.app.body + 1].name : ""}
                    </button>
                    <div className="btn-change">
                        <button
                            className="btn-text btn btn-bottom-buttons text-uppercase"
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
                        <button
                            id="changeTextColor"
                            className="btn btn-text btn-bottom-buttons text-uppercase"
                            onClick={this.renderTextColorPalette}
                        >
                            Change Text Color
                        </button>

                        <button
                            id="changeBackgroundColor"
                            className="btn btn-text btn-bottom-buttons text-uppercase"
                            onClick={this.renderBgColorPalette}
                        >
                            Change Background Color
                        </button>
                        {this.state.textColor && <div id="text-panel" className="div-style-text" style={{display: this.state.textColor === true ? "block" : "none"}}>
                            <ColorPickerPanel enableAlpha={false} color={'#345679'} onChange={this.OnTextColorChange} />
                        </div>}
                        {this.state.bgColor && <div id="bg-panel" className="div-style-bgColor">
                            <ColorPickerPanel enableAlpha={false} color={'#345679'} onChange={this.OnBgColorChange} />
                        </div>}
                    </div>
                </div>
                <div className="container" style={{display: display ? "none" : "block"}}>
                    <div className="btn-information">
                        The previously available navigation and accessibility buttons are disabled until the game is complete.
                    </div>
                </div>
            </div>
        );
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Footer);
