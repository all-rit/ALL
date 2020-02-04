import React, { Component } from "react";

import LoginButton from "./LoginButton";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as appActions } from "../../reducers/AppReducer";
const mapStateToProps = state => ({
  state: state
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
});
class WelcomeMessage extends Component {
  render() {
    return <LoginButton enabled={true} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeMessage);
