import React, { Component } from "react";
import carImage from "../../../../../assets/images/c2.svg";
import helloWorldImage from "../../../../../assets/images/hello_world.png";
import { Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar/AppBar";
import { navigate } from "@reach/router";

class HelloWorld extends Component {
  handleSubmit() {
    navigate("/Lab3/Game");
  }
  render() {
    const tableStyle = {
      border: "1px solid black",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center"
    };
    return (
      <div>
        <AppBar position="static" className = "appBar">
          <Toolbar>
            <Typography
              variant={"h4"}
              aria-label={"Hello World Example Page For Accessibility"}
              color={"inherit"}
              tabIndex={"0"}
            >
              Hello World Example Page For Accessibility
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <Typography variant={"subtitle1"} aria-label={"Images"}>
          Images
        </Typography>
        <br />
        <Typography variant={"subtitle1"} aria-label={"InAccessible Image"}>
          InAccessible Image
        </Typography>
        <img src={carImage} alt={""} tabIndex={"0"} />
        <br />
        <h3 tabIndex={"0"}>Accessible Image</h3>
        <img src={carImage} alt={"Car"} tabIndex={"0"} />
        <br />
        <h3 tabIndex={"0"}>Example Accessible text</h3>
        <p tabIndex={"0"}>Hello world</p>
        <br />
        <h3 tabIndex={"0"}>Example InAccessible text</h3>
        <img
          src={helloWorldImage}
          alt={""}
          height={"25%"}
          width={"25%"}
          tabIndex={"0"}
        />
        <br />
        <h3 tabIndex={"0"}> Table</h3>
        <br />
        <table tabIndex={"0"} style={tableStyle}>
          <thead>
            <tr>
              <th>UserID</th>
              <th>Name</th>
              <th>Favorite Animal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td tabIndex={"0"}>1</td>
              <td tabIndex={"0"}>Liz</td>
              <td tabIndex={"0"}>Horse</td>
            </tr>
            <tr>
              <td tabIndex={"0"}>2</td>
              <td tabIndex={"0"}>Aurora</td>
              <td tabIndex={"0"}>Sheep</td>
            </tr>
            <tr>
              <td tabIndex={"0"}>3</td>
              <td tabIndex={"0"}>Jai</td>
              <td tabIndex={"0"}>Panda</td>
            </tr>
            <tr>
              <td tabIndex={"0"}>4</td>
              <td tabIndex={"0"}>Noah</td>
              <td tabIndex={"0"}>Tiger</td>
            </tr>
          </tbody>
        </table>
        <br />
          <div style={{textAlign: "center"}}>
        <Button
          href="#"
          onClick={this.handleSubmit}
          component={Link}
          className = "btn btn-second btn-xl text-uppercase js-scroll-trigger leftButton"
          variant={"contained"}
          tabIndex={"0"}
        >
          Back To Lab 3 Homepage
        </Button>
          </div>
      </div>
    );
  }
}

export default HelloWorld;
