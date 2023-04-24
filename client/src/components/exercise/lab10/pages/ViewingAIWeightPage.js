import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import AIWeightCodeBlock from "../components/AIWeightCodeBlock";
import { EXERCISE_PLAYING } from "../../../../constants/lab10";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ViewAIWeightPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: "ViewAIWeightPage",
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
  }

  handleNav() {
    navigate("/Lab10/Exercise/UpdatedSim");
  }

  render() {
    return (
      <div>
        <Fragment>
          <div className="center-div">
            <div className="guidance margin-bottom-2">
              <p className="playthrough__sentence">
                Looks like you got hit by a couple blocks! With each colored
                block you were hit by, the AI was able to gather data that
                created higher weight based on the color of block you were hit
                by most, and lower weight by those you avoided.
              </p>
              <p className="playthrough__sentence">
                Take a look at the code block below to see how our AI was able
                to acquire these numbers.
              </p>
              <p className={"playthrough__sentence"}>
                However, we now have uneven weight for different colored blocks,
                therefore creating unwanted bias in our system. Lets see how we
                can remove this bias.
              </p>
            </div>
          </div>
        </Fragment>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={this.handleNav.bind(this)}
          key="Next"
        >
          Next
        </button>
        <AIWeightCodeBlock />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

ViewAIWeightPage.propTypes = {
  actions: PropTypes.object,
};
export default connect(null, mapDispatchToProps)(ViewAIWeightPage);
