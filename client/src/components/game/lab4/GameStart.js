import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { navigate } from "@reach/router";
import {actions as mainActions} from "../../../reducers/MainReducer";
import {actions as gameActions} from "../../../reducers/lab4/GameReducer";
import AppInstructions from "./components/AppInstructions";
// import { Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const mapStateToProps = state => {
    return {
        // General
        user: state.main.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({ ...mainActions, ...gameActions }, dispatch)
    };
};

class GameStart extends Component {
    handleSubmit() {
        navigate("/Lab4/Game/SmallTarget");
    }

    render() {
        const instructions = "The next page will begin the lab";
        const buttonStyle = { marginRight: "10px", marginLeft: "10px" };
        return (
            <Fragment>
                <div>
                    <AppInstructions instructions={instructions} />
                    <Button
                        href="#"
                        onClick={this.handleSubmit}
                        // component={Link}
                        variant={"contained"}
                        color={"primary"}
                        style={buttonStyle}
                    >
                        Start
                    </Button>
                </div>
            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameStart);
