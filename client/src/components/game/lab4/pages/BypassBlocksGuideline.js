import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";
import {GAME_PLAYING} from "../../../../constants/lab4";

class BypassBlocksGuideline extends Component {
    handleSubmit() {
        navigate("/Lab4/Game/CodeChangeBlocks");
    }

    componentDidMount() {
        const { actions } = this.props;
        actions.updateState(GAME_PLAYING);
    }

    render() {
        const buttonStyle = { marginRight: "10px", marginLeft: "10px" };
        return (
            <Fragment>
                <div>
                    <h2 className="playthrough__title">Was That Difficult?</h2>
                    <p className="playthrough__sentence">
                        People with mobile dexterity disabilities sometimes use a keyboard
                        to navigate the page. This can be cumbersome if there is no way to
                        skip to the main section. Software should follow the{" "}
                        <a
                            href="https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WGAC 2.4.1: Bypass Blocks Guideline
                        </a>
                        . Go ahead and make the changes to the code by clicking “continue”.
                    </p>

                    <Button
                        href="#"
                        onClick={this.handleSubmit}
                        variant={"contained"}
                        color={"primary"}
                        style={buttonStyle}
                    >
                        Continue
                    </Button>
                </div>
                <br/>
            </Fragment>
        );
    }
}

export default BypassBlocksGuideline;
