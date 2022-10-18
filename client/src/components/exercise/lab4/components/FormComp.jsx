/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Alert } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Toolitip from "../helpers/tooltip";
import { PageService } from "../../../../services/PageService";
import { navigate } from "@reach/router";
import { LAB_ID } from "../../../../constants/lab4";

class FormComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
      animal: "",
      color: "",
      candy: "",
      city: "",
      show: false,
      alert: "Fill Out Form Completely",
      submitted: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };
  focusElem = (e) => {
    e.target.blur();
    this.props.parentCallback("error");
  };

  handleSubmit(e) {
    e.preventDefault();
    PageService.createPage(this.props.name, this.state.secondsElapsed, LAB_ID);
    navigate(this.props.url);
  }

  form_sub = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    if (this.props.rule) {
      if (
        this.state.animal === "" ||
        this.state.city === "" ||
        this.state.candy === "" ||
        this.state.color === ""
      ) {
        this.setState({ show: true, alert: "Fill Out Form Completely" });
      } else if (
        this.state.animal === "" ||
        this.state.city === "" ||
        this.state.color !== "violet" ||
        this.state.candy === "" ||
        this.state.color === ""
      ) {
        this.setState({
          show: true,
          alert: "Color doesn't meet 'hint' criteria.",
        });
      } else {
        this.handleSubmit(e);
      }
    } else {
      if (
        this.state.animal === "" ||
        this.state.city === "" ||
        this.state.candy === "" ||
        this.state.color === ""
      ) {
        this.setState({ show: true });
      } else {
        this.handleSubmit(e);
      }
    }
  };
  render() {
    return (
      <main>
        <div className="overlap" onClick={(e) => this.focusElem(e)}></div>
        <Form className="formComp">
          <FormGroup>
            <Label for="animal">Favorite Animal e.g. Tiger</Label>
            <Input
              type="text"
              name="animal"
              id="main"
              onChange={(e) => this.change(e)}
              value={this.state.animal}
            />
          </FormGroup>
          <FormGroup>
            <Label for="color">
              Favorite Color e.g. Blue{" "}
              {this.props.rule && <Toolitip tab={this.props.tab} />}
            </Label>
            <Input
              type="text"
              name="color"
              id="color"
              onChange={(e) => this.change(e)}
              value={this.state.color}
            />
          </FormGroup>
          <FormGroup>
            <Label for="candy">Favorite Candy e.g. Skittles</Label>
            <Input
              type="text"
              name="candy"
              id="candy"
              onChange={(e) => this.change(e)}
              value={this.state.candy}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">Favorite City e.g. NYC</Label>
            <Input
              type="text"
              name="city"
              id="city"
              onChange={(e) => this.change(e)}
              value={this.state.city}
            />
          </FormGroup>
          {this.state.show ? (
            <Alert color="danger">{this.state.alert}</Alert>
          ) : null}
          <Input
            type="submit"
            onClick={(e) => this.form_sub(e)}
            className="formButtonSubmit"
          />
          {this.props.rule && this.state.submitted && (
            <Input
              type="submit"
              value="Give Up"
              className="formButtonHelp"
              style={{ marginLeft: "20px" }}
              onClick={(e) => this.handleSubmit(e)}
            />
          )}
        </Form>
      </main>
    );
  }
}

export default FormComp;
