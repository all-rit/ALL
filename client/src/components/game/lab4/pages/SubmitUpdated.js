import React, { Component, Fragment } from "react";
import { Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AppInstructions from "../components/AppInstructions";
import { navigate } from "@reach/router";
import {PageService} from "../../../../services/PageService";
import {GAME_PLAYING} from "../../../../constants/lab4";
import {LAB_ID} from "../../../../constants/lab4";

class SubmitUpdated extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0,
            marginRight: this.style.marginRight + "px",
            marginLeft: this.style.marginLeft + "px",
            width: this.style.width + "px",
            height: this.style.height + "px",
            fontSize: this.style.fontSize + "px",
            top: "px",
            left: "px"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { actions } = this.props;
        actions.updateState(GAME_PLAYING);
        if (window.location.state !== undefined) {
            this.setState({
                width: window.location.state.width + "px",
                height: window.location.state.height + "px"
            });
        }
        this.interval = setInterval(
            () => this.setState({ secondsElapsed: this.state.secondsElapsed + 1 }),
            1000
        );
    }
    style = {
        marginRight: 10,
        marginLeft: 10,
        width: 44,
        height: 44,
        fontSize: 10
    };
    wiggle = e => {
        let distX = this.calculateDistanceX(this.myDiv, e.screenX);
        let distY = this.calculateDistanceY(this.myDiv, e.screenY);
        let right = -distX / 2 > -300 ? -(distX / 2) : -(distX / 2) / 25;
        let top = distY / 2 < 300 ? (distY / 5) : 300;
        this.setState({ right: right + "px", top: top + "px" });
    };

    calculateDistanceX(elem, mouseX) {
        return Math.floor(mouseX - (elem.offsetLeft + this.style.width / 2));
    }
    calculateDistanceY(elem, mouseY) {
        return Math.floor(mouseY - (elem.offsetTop + this.style.height / 2));
    }

    handleSubmit() {
        const name = "SubmitUpdated";
        PageService.createPage(name, this.state.secondsElapsed, LAB_ID);
        navigate("/Lab4/Game/FormSkipToMainBroken");
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const instructions = "Click the start button.";
        return (
            <Fragment>
                <div>
                    <AppInstructions instructions={instructions} />
                    <div
                        style={{
                            width: "200px",
                            height: "200px",
                            margin: "auto",
                            paddingTop: "30px",
                            position: "relative",
                        }}
                        onMouseMove={e => this.wiggle(e)}
                    >
                        <Button
                            ref={c => (this.myDiv = c)}
                            href="#"
                            onClick={this.handleSubmit}
                            component={Link}
                            variant={"contained"}
                            color={"primary"}
                            style={this.state}
                        >
                            Start
                        </Button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SubmitUpdated;