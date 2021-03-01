import React, { Component } from "react";
import catImage from "../../../../../assets/images/c1.svg";
import carImage from "../../../../../assets/images/c2.svg";
import burgerImage from "../../../../../assets/images/b.png";
import cowImage from "../../../../../assets/images/cow.jpg";
import CatClickFirstNavigate from "../../../lab3/helpers/CatClickFirstNavigate";
import { Typography } from "@material-ui/core";
import {PageService} from "../../../../../services/PageService";
import { navigate } from "@reach/router";
import {GAME_PLAYING, LAB_ID} from "../../../../../constants/lab3/index";
import {actions as gameActions} from '../../../../../reducers/lab3/GameReducer';
import {bindActionCreators} from 'redux';
import {actions as mainActions} from "../../../../../reducers/MainReducer";
import {actions as repairActions} from '../../../../../reducers/lab3/RepairReducer';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...gameActions, ...mainActions, ...repairActions}, dispatch)
  };
};

class Game extends Component {
  handleSubmit() {
    navigate("/Lab3/Game/GameInstructions");
  }
  constructor(props) {
    super(props);
    this.state = { render: "", secondsElapsed: 0 };
  }

  _renderSubComp(path) {
    if (this.state.render === "CatClickNavigate") {
      return <CatClickFirstNavigate path={path} />;
    }
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(GAME_PLAYING);
    this.interval = setInterval(
      () => this.setState({ secondsElapsed: this.state.secondsElapsed + 1 }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const catClick = () => {
      console.log("Cat image clicked!");
      const name = "NonSimulatedGame";
      PageService.createPage(name, this.state.secondsElapsed, LAB_ID);
      this.setState( { render: "CatClickNavigate" });
    };
    const burgerClick = () => {
      console.log("Burger image clicked!");
    };
    const carClick = () => {
      console.log("Car image clicked!");
    };
    const cowClick = () => {
      console.log("Cow image clicked!");
    };
    const imgStyle = {
      width: "128px",
      height: "128px",
      border: "1px solid black"
    };
    const tableStyle = {
      border: "1px solid black",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center"
    };
    return (
      <div>
        <Typography
          variant={"h4"}
          aria-label={"Click on the image of a cat"}
          color={"inherit"}
        >
          Click on the image of a cat.
        </Typography>
        <br />
        <table style={tableStyle} className={"center"}>
          <tbody>
            <tr>
              <td>
                <button style={imgStyle} onClick={() => catClick()}>
                  <img src={catImage} alt={"image1"} />
                </button>
              </td>
              <td>
                <button style={imgStyle} onClick={() => carClick()}>
                  <img src={carImage} alt={"image2"} />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button style={imgStyle} onClick={() => burgerClick()}>
                  <img src={burgerImage} alt={"image3"} />
                </button>
              </td>
              <td>
                <button style={imgStyle} onClick={() => cowClick()}>
                  <img src={cowImage} alt={"image4"} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {this._renderSubComp("/Lab3/Game/GameInstructions")}
      </div>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps)(Game);
