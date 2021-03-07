import React, { Component, Fragment } from "react";
import AppInstructions from "../components/AppInstructions";
import ExtraNav from "../components/ExtraNav";
import FormComp from "../components/FormComp";
import {GAME_PLAYING} from "../../../../constants/lab4";

class FormHintInaccessible extends Component {
    constructor(props) {
        super(props);
        this.btn = React.createRef();
    }

    state = { class: "app__instructions2" };

    callbackFunction = childData => {
        this.setState({ class: "app__instructions3" });
    };

    componentDidMount() {
        const { actions } = this.props;
        actions.updateState(GAME_PLAYING);
    }

    render() {
        const instructions =
            `Complete the form again, and try to access the hint.
            Use tab to go next, and shift+tab to go back.`;
        const instructions2 = "Do not use the mouse!";
        const url = "/Lab4/Game/AccessibleGuideline";
        const tab = null;
        const name = "FormHintInaccessible";
        return (
            <Fragment>
                <a className="skip-main" href="#main">
                    Skip to main content
                </a>
                <ExtraNav />
                <AppInstructions
                    class={this.state.class}
                    instructions2={instructions2}
                    instructions={instructions}
                />
                <FormComp
                    url={url}
                    rule={true}
                    tab={tab}
                    parentCallback={this.callbackFunction}
                    name={name}
                />
            </Fragment>
        );  
    }
}

export default FormHintInaccessible;
