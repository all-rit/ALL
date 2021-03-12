import React, {Component} from "react";
import "../../assets/stylesheets/components/css/colorPicker.css"
import {connect} from "react-redux";
import {actions as appActions} from '../../reducers/lab1/AppReducer';
import {actions as mainActions} from '../../reducers/MainReducer';
import {bindActionCreators} from 'redux';
import {changeTSize, setTextColor, setBackgroundColor, onNextPageChangeTSize} from "./edit/editPage";
import {Panel as ColorPickerPanel} from 'rc-color-picker';
import { Sections } from "../../constants/index";
import handleRedirect from '../../helpers/Redirect';
import getGameState from '../../helpers/GetReducer';

const mapStateToProps = (state) => {
    return {
        // General
        state: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...appActions, ...mainActions}, dispatch)
    };
};
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontSize: 0,
            textColor: false,
            bgColor: false,
            displayColorPalette: false,
            backgroundColor: null,
            color: null
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() {
        document.addEventListener("click", this.handleClick)
    }

    componentDidUpdate(prevProps){
       if (prevProps.state.main.body !== this.props.state.main.body || prevProps.state.main.lab !== this.props.state.main.lab) {
           this.adjustSizeColor(this.state.fontSize);
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
    adjustSizeColor = (fontSize) => {
        for (let x=0; x<Math.abs(fontSize);x++){
            if(fontSize<0 ) {
                onNextPageChangeTSize(-1);
            }
            else{
                onNextPageChangeTSize(1);
            }
        }
        if (this.state.color){setTextColor(this.state.color)}
        if (this.state.backgroundColor){setBackgroundColor(this.state.backgroundColor)}
    };

    disappearNext = (count) => {
        return count >= 4;
    };
    disappearBack = (count) => {
        return count <= 0;
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
            bgColor: !this.state.bgColor,
            textColor: false
        });
    };

    OnTextColorChange(obj) {
        setTextColor(obj.color);
        this.setState({color: obj.color})
    };

    OnBgColorChange(obj) {
        setBackgroundColor(obj.color);
        this.setState({backgroundColor: obj.color})
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
        const lab = state.main.lab;
        const body = state.main.body;
        let display = getGameState(state) === "GAME_IDLE" || body !== 2;
        let hideOnLanding = lab === 0; // for buttons that should not be displayed on the landing page
        return (
            <div className="footer">
                <div className="container" style={{display: display ? "block" : "none"}}>
                    <button
                        className="btn btn-second btn-xl text-uppercase js-scroll-trigger back "
                        onClick={() => handleRedirect(actions, lab, body - 1)}
                        style={{display: this.disappearBack(body) || hideOnLanding ? "none" : "block"}}
                    >
                        Previous - {body > 0 && typeof Sections[lab][body - 1] !== "undefined" ? Sections[lab][body - 1].name : ""}
                    </button>
                    <button
                        className="btn btn-primary btn-xl text-uppercase js-scroll-trigger next"
                        onClick={() => handleRedirect(actions, lab, body + 1)}
                        style={{display: this.disappearNext(body) || hideOnLanding ? "none" : "block"}}
                    >
                        Next - {body < 4 && typeof Sections[lab][body + 1] !== "undefined" ? Sections[lab][body + 1].name : ""}
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
                            <ColorPickerPanel enableAlpha={false} defaultColor={'#345679'} color={ this.state.color} onChange={this.OnTextColorChange.bind(this)}/>
                        </div>}
                        {this.state.bgColor && <div id="bg-panel" className="div-style-bgColor">
                            <ColorPickerPanel enableAlpha={false} defaultColor={'#345679'} color={ this.state.backgroundColor}  onChange={this.OnBgColorChange.bind(this)} />
                        </div>}
                    </div>
                </div>
                <div className="container" style={{display: display || hideOnLanding ? "none" : "block"}}>
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
