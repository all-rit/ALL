import React, { Component, Fragment} from "react";
import { navigate } from "@reach/router";
import Button from "@material-ui/core/Button";
import {EXERCISE_IDLE, LAB_ID} from "../../../../constants/lab4";
import UserLabService from "../../../../services/UserLabService";

class Finish extends Component {

    handleSubmit() {
        UserLabService.complete_exercise(LAB_ID);
        navigate("/Lab4/Exercise");
    }

    componentDidMount() {
        const {actions} = this.props;
        actions.updateState(EXERCISE_IDLE);
    }

    render() {
        const buttonStyle = { marginRight: "10px", marginLeft: "10px" };
        return (
            <Fragment>
                <div>
                    <p className="playthrough__title">
                        Congratulations on finishing the module!
                    </p>
                    <br/>
                    <Button
                        href="#"
                        onClick={this.handleSubmit}
                        variant={"contained"}
                        color={"primary"}
                        style={buttonStyle}
                    >
                        Home
                    </Button>
                </div>
            </Fragment>
        );
    }
}

export default Finish;
