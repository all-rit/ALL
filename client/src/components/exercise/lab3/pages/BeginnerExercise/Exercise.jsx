/* eslint-disable react/prop-types */
import React, { Component } from "react";
// link to image: https://pixabay.com/vectors/cat-pet-animal-kitty-kitten-cute-6484941/
// license: https://pixabay.com/service/license/
import catImage from "../../../../../assets/images/lab3/exercise/cat.svg";
// link to image: https://pixabay.com/vectors/taxi-cab-car-vehicle-47204/
// license: https://pixabay.com/service/license/
import carImage from "../../../../../assets/images/lab3/exercise/car.svg";
// link to image: https://pixabay.com/vectors/hamburger-cheeseburger-fast-food-31775/
// license: https://pixabay.com/service/license/
import burgerImage from "../../../../../assets/images/lab3/exercise/hamburger.svg";
// link to image: https://pixabay.com/vectors/cow-animal-mammal-horns-white-159731/
// license: https://pixabay.com/service/license/
import cowImage from "../../../../../assets/images/lab3/exercise/cow.svg";
import CatClickFirstNavigate from "../../helpers/CatClickFirstNavigate";
import { PageService } from "../../../../../services/PageService";
import { EXERCISE_PLAYING, LAB_ID } from "../../../../../constants/lab3/index";
import { actions as exerciseActions } from "../../../../../reducers/lab3/ExerciseReducer";
import { bindActionCreators } from "redux";
import { actions as mainActions } from "../../../../../reducers/MainReducer";
import { actions as repairActions } from "../../../../../reducers/lab3/RepairReducer";
import { connect } from "react-redux";
import SuccessCheck from "../../../../all-components/SuccessCheck";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      { ...exerciseActions, ...mainActions, ...repairActions },
      dispatch,
    ),
  };
};

class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: "",
      secondsElapsed: 0,
      catClicked: false,
    };
  }

  renderNextButton(path) {
    if (this.state.render === "CatClickNavigate") {
      return <CatClickFirstNavigate path={path} />;
    }
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
    this.interval = setInterval(
      () => this.setState({ secondsElapsed: this.state.secondsElapsed + 1 }),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const catClick = () => {
      const name = "NonSimulatedExercise";
      PageService.createPage(name, this.state.secondsElapsed, LAB_ID);
      this.setState({ render: "CatClickNavigate", catClicked: true });
    };

    return (
      <div className={`tw-bg-none`}>
        <p className={"center tw-body-text tw-text-2xl tw-p-6"}>
          Click on the image of a cat.
        </p>
        <div className={"tw-grid tw-grid-cols-2 tw-gap-3"}>
          <button
            className={
              "tw-relative tw-w-full hover:tw-shadow-lg hover:tw-shadow-[#bbb] hover:tw-bg-[#ccc] tw-border-none tw-bg-[#ddd] tw-rounded-lg"
            }
            onClick={() => catClick()}
          >
            <img
              className={"tw-w-[14rem] tw-h-[14rem]"}
              src={catImage}
              alt={"image1"}
            />
            <div className={"tw-absolute tw-top-[40%] tw-right-[40%]"}>
              {this.state.catClicked && <SuccessCheck />}
            </div>
          </button>
          <button
            className={
              "tw-w-full hover:tw-shadow-lg hover:tw-shadow-[#bbb] hover:tw-bg-[#ccc] tw-border-none tw-bg-[#ddd] tw-rounded-lg"
            }
          >
            <img
              className={"tw-w-[14rem] tw-h-[14rem]"}
              src={carImage}
              alt={"image2"}
            />
          </button>
          <button
            className={
              "tw-w-full hover:tw-shadow-lg hover:tw-shadow-[#bbb] hover:tw-bg-[#ccc] tw-border-none tw-bg-[#ddd] tw-rounded-lg"
            }
          >
            <img
              className={"tw-w-[14rem] tw-h-[14rem]"}
              src={burgerImage}
              alt={"image3"}
            />
          </button>
          <button
            className={
              "tw-w-full hover:tw-shadow-lg hover:tw-shadow-[#bbb] hover:tw-bg-[#ccc] tw-border-none tw-bg-[#ddd] tw-rounded-lg"
            }
          >
            <img
              className={"tw-w-[14rem] tw-h-[14rem]"}
              src={cowImage}
              alt={"image4"}
            />
          </button>
        </div>
        {this.renderNextButton("/Lab3/Exercise/ExerciseInstructions")}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);
