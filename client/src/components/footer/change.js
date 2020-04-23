import React, {Component} from "react";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";
import "./../../css/colorPicker.css"
import {connect} from "react-redux";
import {actions as appActions} from '../../reducers/AppReducer';
import {bindActionCreators} from 'redux';
import {changeTSize, setTextColor, setBackgroundColor, onNextPageChangeTSize} from "../../js/edit/editPage";
import "../../js/edit/jscolor";
import {Panel as ColorPickerPanel} from 'rc-color-picker';

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
            fontSize: 0,
            textColor: false,
            bgColor: false,
            displayColorPalette: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);

    }

    componentDidUpdate(prevprops){
       if (prevprops.state.app.body !== this.props.state.app.body) {
           this.adjustSize(this.state.fontSize);
       }
    }

    changeSize = (size) => {
        let state_size = this.state.fontSize;
        changeTSize(size);
        this.setState({fontSize: state_size + size});
    };
    adjustSize = (fontSize) => {
        onNextPageChangeTSize(fontSize);
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


    handleClick() {
        if (!this.state.displayColorPalette) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            displayColorPalette: !prevState.displayColorPalette,
        }));
    }

    handleOutsideClick(e) {
        this.handleClick();
    }


    render() {
        console.log(this.props);
        var ColorPicker = require('rc-color-picker');
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
                        // onClick={() => {this.handleIncrement(state.app.body, actions)}}
                        onClick={() => {this.handleIncrement(state.app.body, actions)}}
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
                        <button
                            className="btn btn-text btn-bottom-buttons text-uppercase"
                            onClick={this.renderTextColorPalette}
                        >

                            Change Text Color
                        </button>

                        <button
                            className="btn btn-text btn-bottom-buttons text-uppercase"
                            onClick={this.renderBgColorPalette}
                        >
                            Change Background Color
                        </button>
                        {this.state.textColor && <div className="div-style-text">
                            <ColorPickerPanel enableAlpha={false} color={'#345679'} onChange={this.OnTextColorChange}
                                              mode="RGB"/>
                        </div>}
                        {this.state.bgColor && <div className="div-style-bgColor">
                            <ColorPickerPanel enableAlpha={false} color={'#345679'} onChange={this.OnBgColorChange}
                                              mode="RGB"/>
                        </div>}
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
