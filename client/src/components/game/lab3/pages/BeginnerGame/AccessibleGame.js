import React, { Component } from "react";
import catImage from "../../assets/images/c1.svg";
import carImage from "../../assets/images/c2.svg";
import burgerImage from "../../assets/images/b.png";
import cowImage from "../../assets/images/cow.jpg";
import CatClickNavigate from "../../components/helpers/CatClickNavigate.js";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar/AppBar";
import {PageService} from "../../services/PageService";

class AccessibleGame extends Component {
  constructor(props) {
    super(props);
    this.state = { render: "", secondsElapsed: 0 };
    document.body.style = "background: black";
  }

  _renderSubComp() {
    if (this.state.render === "CatClickNavigate") {
      return <CatClickNavigate path={"/CodeChange"} />;
    }
  }

  componentDidMount() {
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
      const name = "AccessibleGame";
      PageService.createPage(name, this.state.secondsElapsed);
      this.setState({ render: "CatClickNavigate" });
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
      border: "1px solid black",
      opacity: "0.0",
      tabIndex: "0"
    };
    const tableStyle = {
      border: "1px solid black",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
      tabIndex: "0"
    };
    const textStyle = { color: "white", tabIndex: "0" };
    return (
      <div>
        <AppBar position="static" className = "appBar">
          <Toolbar>
            <Typography
              variant={"h4"}
              aria-label={"Click on the image of a cat"}
              color={"inherit"}
              tabIndex={"0"}
            >
              Accessible Game
            </Typography>
          </Toolbar>
        </AppBar>
        <p style={textStyle} tabIndex={"0"}>
          Click on the image of a cat. You can use the keyboard to navigate by
          tabbing across the page. Press the enter key to select.
        </p>
        <table style={tableStyle} tabIndex={"0"}>
          <tbody>
            <tr>
              <td tabIndex={"0"}>
                <input
                  style={imgStyle}
                  type={"image"}
                  src={catImage}
                  onClick={() => catClick()}
                  alt={"image of cat"}
                  tabIndex={"0"}
                />
              </td>
              <td tabIndex={"0"}>
                <input
                  style={imgStyle}
                  type={"image"}
                  src={carImage}
                  onClick={() => carClick()}
                  alt={"image of car"}
                  tabIndex={"0"}
                />
              </td>
            </tr>
            <tr>
              <td tabIndex={"0"}>
                <input
                  style={imgStyle}
                  type={"image"}
                  src={burgerImage}
                  onClick={() => burgerClick()}
                  alt={"image of burger"}
                  tabIndex={"0"}
                />
              </td>
              <td tabIndex={"0"}>
                <input
                  style={imgStyle}
                  type={"image"}
                  src={cowImage}
                  onClick={() => cowClick()}
                  alt={"image of cow"}
                  tabIndex={"0"}
                />
              </td>
            </tr>
          </tbody>
        </table>
        {this._renderSubComp()}
      </div>
    );
  }
}

export default AccessibleGame;
