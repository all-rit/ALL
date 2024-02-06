import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Alert } from "reactstrap";
import PropTypes from "prop-types";

/**
 * Form component for collecting user input.
 *
 * @param {Object} props - The component props.
 * @param {string} props.successNotification - The success notification message.
 * @param {string} props.errorNotification - The error notification message.
 * @param {string} props.borderColor - The border color for the date input field.
 * @param {Function} props.showNext - The function to show the next step.
 * @returns {JSX.Element} The rendered Form component.
 */
const FormComp = (props) => {
  const getDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    return today;
  };

  const [state, setState] = useState({
    secondsElapsed: 0,
    animal: "",
    candy: "",
    city: "",
    date: "",
    show: false,
    answered: false,
    error: false,
    success: false,
    currentDate: getDate(),
    alert: "Fill Out Form Completely",
  });

  /**
   * Handles the change event of the input fields.
   * Updates the state with the new values and checks for errors.
   *
   * @param {Event} e - The change event object.
   */
  const change = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value.toLowerCase(),
      error:
        e.target.name === "date" && e.target.value !== prevState.currentDate,
    }));
  };

  /**
   * Handles the form submission.
   * @param {Event} e - The form submission event.
   * @returns {void}
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    props.showNext();
  };

  /**
   * Handles the form submission.
   * @param {Event} e - The form submission event.
   */
  const form_sub = (e) => {
    e.preventDefault();
    if (
      state.animal === "" ||
      state.city === "" ||
      state.candy === "" ||
      state.date === ""
    ) {
      setState((prevState) => ({
        ...prevState,
        show: true,
        alert: "Fill Out Form Completely",
        success: false,
        answered: false,
      }));
    } else if (state.date !== state.currentDate) {
      setState((prevState) => ({
        ...prevState,
        show: true,
        alert: "Error in form",
        answered: true,
        success: false,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        show: false,
        answered: true,
        success: true,
      }));
      handleSubmit(e);
    }
  };

  const { successNotification, errorNotification, borderColor } = props;
  return (
    <main>
      <Form className="formComp">
        <FormGroup>
          <Label for="animal">Favorite Animal</Label>
          <Input
            type="text"
            name="animal"
            id="main"
            onChange={(e) => change(e)}
            value={this.state.animal}
          />
        </FormGroup>
        <FormGroup>
          <Label for="date">Today&rsquo;s Date</Label>
          <Input
            className={this.state.error ? "" : ""}
            style={{
              borderColor: borderColor && this.state.error ? borderColor : null,
            }}
            type="text"
            name="date"
            id="date"
            onChange={(e) => this.change(e)}
            value={this.state.date}
          />
          {errorNotification && this.state.error && (
            <span className="form-error">{errorNotification}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="candy">Favorite Candy</Label>
          <Input
            type="text"
            name="candy"
            id="candy"
            onChange={(e) => this.change(e)}
            value={this.state.candy}
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">Favorite City</Label>
          <Input
            type="text"
            name="city"
            id="city"
            onChange={(e) => this.change(e)}
            value={this.state.city}
          />
        </FormGroup>
        {this.state.show && <Alert color="danger">{this.state.alert}</Alert>}
        {successNotification && this.state.success && (
          <Alert color="success">{successNotification}</Alert>
        )}
        <Input
          type="submit"
          onClick={(e) => form_sub(e)}
          className="formButtonSubmit"
        />
        <Input
          type="button"
          disabled={!this.state.answered}
          value="Give Up"
          className={`formButtonHelp ${this.state.answered ? "" : " disabled"}`}
          style={{ marginLeft: "20px" }}
          onClick={(e) => this.handleSubmit(e)}
        />
      </Form>
    </main>
  );
};

FormComp.propTypes = {
  showNext: PropTypes.func.isRequired,
  successNotification: PropTypes.string,
  errorNotification: PropTypes.string,
  borderColor: PropTypes.string,
};

export default FormComp;
