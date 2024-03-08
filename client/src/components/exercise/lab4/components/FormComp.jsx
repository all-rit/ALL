import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Alert } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { PageService } from "../../../../services/PageService";
import { navigate } from "@reach/router";
import { LAB_ID } from "../../../../constants/lab4";

const FormComp = (props) => {
  const [state, setState] = useState({
    secondsElapsed: 0,
    animal: "",
    color: "",
    candy: "",
    city: "",
    show: false,
    alert: "Fill Out Form Completely",
    submitted: false,
  });

  useEffect(() => {
    const interval = setInterval(
      () =>
        setState((prevState) => ({
          ...prevState,
          secondsElapsed: prevState.secondsElapsed + 1,
        })),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  const change = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  const focusElem = (e) => {
    e.target.blur();
    props.parentCallback("error");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    PageService.createPage(props.name, state.secondsElapsed, LAB_ID);
    navigate(props.url);
  };

  const form_sub = (e) => {
    e.preventDefault();
    setState({ ...state, submitted: true });
    if (props.rule) {
      if (
        state.animal === "" ||
        state.city === "" ||
        state.candy === "" ||
        state.color === ""
      ) {
        setState({ ...state, show: true, alert: "Fill Out Form Completely" });
      } else if (
        state.animal === "" ||
        state.city === "" ||
        state.color !== "violet" ||
        state.candy === "" ||
        state.color === ""
      ) {
        setState({
          ...state,
          show: true,
          alert: "Color doesn't meet 'hint' criteria.",
        });
      } else {
        handleSubmit(e);
      }
    } else {
      if (
        state.animal === "" ||
        state.city === "" ||
        state.candy === "" ||
        state.color === ""
      ) {
        setState({ ...state, show: true });
      } else {
        handleSubmit(e);
      }
    }
  };

  return (
    <main>
      <div className="overlap" onClick={(e) => focusElem(e)}>
        <Form>
          <FormGroup>
            <Label for="animal">Favorite Animal</Label>
            <Input
              type="text"
              name="animal"
              id="animal"
              placeholder="Type Favorite Animal Here"
              onChange={(e) => change(e)}
              value={state.animal}
            />
          </FormGroup>
          <FormGroup>
            <Label for="color">Favorite Color</Label>
            <Input
              type="text"
              name="color"
              id="color"
              placeholder="Type Favorite Color Here"
              onChange={(e) => change(e)}
              value={state.color}
            />
          </FormGroup>
          <FormGroup>
            <Label for="candy">Favorite Candy</Label>
            <Input
              type="text"
              name="candy"
              id="candy"
              placeholder="Type Favorite Candy Here"
              onChange={(e) => change(e)}
              value={state.candy}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">Favorite City</Label>
            <Input
              type="text"
              name="city"
              id="city"
              placeholder="Type Favorite City Here"
              onChange={(e) => change(e)}
              value={state.city}
            />
          </FormGroup>
          {state.show ? <Alert color="danger">{state.alert}</Alert> : null}
          <Input
            type="submit"
            onClick={(e) => form_sub(e)}
            className="formButtonSubmit"
          />
          {props.rule && state.submitted && (
            <Input
              type="submit"
              value="Give Up"
              className="formButtonHelp"
              style={{ marginLeft: "20px" }}
              onClick={(e) => handleSubmit(e)}
            />
          )}
        </Form>
      </div>
    </main>
  );
};

FormComp.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  rule: PropTypes.bool,
  parentCallback: PropTypes.func,
};

export default FormComp;
