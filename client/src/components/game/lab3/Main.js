import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { actions as appActions } from "../../../reducers/lab3/AppReducer";
import { actions as gameActions } from "../../../reducers/lab3/GameReducer";
import AppInstructions from "./components/AppInstructions";
import { navigate } from "@reach/router";

const mapStateToProps = state => {
  return {
    // General
    user: state.app.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...appActions, ...gameActions }, dispatch)
  };
};

class Main extends Component {
  handleSubmit() {
    navigate(process.env.PUBLIC_URL + "/Lab3/BeginnerGame");
  }
  handleSubmitAdv() {
    navigate(process.env.PUBLIC_URL + "/Lab3/AdvancedGame");
  }
  render() {
    // const { user, state, plays } = this.props;
    const buttonStyleLeft = {
      marginTop:10,
      marginRight:2
    };
    const buttonStyleRight = {
      marginTop:10,
      marginLeft:2
    };
    return (
      <Fragment>

        <div class="center-div">
          <AppInstructions />
          <Button
            href="#"
            onClick={this.handleSubmit}
            component={Link}
            variant={"contained"}
            color={"primary"}
            style={buttonStyleLeft}
          >
            Beginner Game
          </Button>
          <Button
            href="#"
            onClick={this.handleSubmitAdv}
            component={Link}
            variant={"contained"}
            color={"secondary"}
            style={buttonStyleRight}
          >
            Advanced Game
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
