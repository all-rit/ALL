/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-deprecated */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import RepairService from "../../../../../services/lab5/RepairService";
import PageServiceTimer from "../../../shared/PageServiceTimer";
import Popup from "../../../shared/Popup";
import { navigate } from "@reach/router";

class FormRepair extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorNotification: null,
      successNotification: null,
      borderColor: null,
      errorNotificationerror: null,
      successNotificationerror: null,
      borderColorerror: null,
      repairerror: true,
      componentName: "FormRepair",
    };
  }

  componentWillMount() {
    const { data } = this.props;
    this.setState({
      errorNotification: data.errorNotification,
      successNotification: data.successNotification,
      borderColor: data.borderColor,
    });
  }
  validateRepair(e) {
    let error = false;
    Object.keys(this.state).map((name) => {
      switch (name) {
        case "errorNotification":
          if (this.state[name] !== '"Please enter in format: YYYY-MM-DD"') {
            error = true;
            this.setState({
              errorNotificationerror:
                'Must enter "Please enter in format: YYYY-MM-DD"',
            });
          } else {
            this.setState({ errorNotificationerror: null });
          }
          break;
        case "successNotification":
          if (this.state[name] === null) {
            error = true;
            this.setState({ successNotificationerror: "Must not be empty" });
          } else if (this.state[name].trim() === "") {
            error = true;
            this.setState({ successNotificationerror: "Must not be empty" });
          } else {
            this.setState({ successNotificationerror: null });
          }
          break;
        case "borderColor":
          if (this.state[name] !== "red") {
            error = true;
            this.setState({ borderColorerror: "Must enter 'red'" });
          } else {
            this.setState({ borderColorerror: null });
          }
          break;
        default:
          break;
      }
      return [];
    });
    this.setState({ repairerror: error }, () => this.handleSubmit(e));
  }

  handleSubmit(event) {
    const { handlers } = this.props;
    const { errorNotification, successNotification, borderColor } = this.state;

    event.preventDefault();
    if (!this.state.repairerror) {
      const repair = JSON.stringify({
        errorNotification,
        successNotification,
        borderColor,
      });
      // Submit a repair entry in the database.
      RepairService.submitRepair(this.state.componentName, repair);
      handlers.updatePopup("The repairs have been made.");
    } else {
      handlers.updatePopup("Errors in Repair. Please fix");
    }

    // Update the state and close the repair.
    handlers.updateRepairForm(
      errorNotification,
      successNotification,
      borderColor
    );
    handlers.closeRepair();

    setTimeout(() => {
      handlers.updatePopup("");
    }, 6000);
  }

  changeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleNav() {
    navigate("/Lab5/Exercise/FormAccessible");
  }

  render() {
    const { visible, handlers, state, data, actions } = this.props;
    return (
      <div>
        <div className="cognitive_instructions margin-bottom-2">
          Let's improve the form feedback. We will be adding an error
          notification under the 'Today's Date' question along with a success
          message. Click 'Repair' to make the appropriate changes.
        </div>
        <Popup
          message={state.app5.popupMessage}
          handler={actions.updatePopup}
          error={this.state.repairerror}
        />

        <button
          className="btn btn-second btn-xl text-uppercase  leftButton"
          onClick={handlers.openRepair}
          key="repair"
        >
          Repair
        </button>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={this.handleNav}
          key="Next"
          disabled={this.state.repairerror}
        >
          Next
        </button>
        {visible && (
          <div className="code_editor">
            <div className="code_editor__content">
              <div className="code_editor__files">
                <div className="code_editor__file code_editor__file--active">
                  FormAccessible.js
                </div>
              </div>

              <div className="code_editor__code">
                <div className="code_editor__line">
                  <span className="code_editor__line--darkgreen">
                    &#47;&#47; This is where you can can add improvements to the
                    form.
                  </span>
                </div>
                <div className="code_editor__line">
                  <span className="code_editor__line--purple">
                    import&nbsp;
                  </span>
                  <span className="code_editor__line--blue">React</span>
                  <span className="code_editor__line--white">,&nbsp;</span>
                  <span className="code_editor__line--white">&#123;</span>
                  <span className="code_editor__line--blue">
                    &nbsp;Component&nbsp;
                  </span>
                  <span className="code_editor__line--white">&#125;&nbsp;</span>
                  <span className="code_editor__line--purple">from&nbsp;</span>
                  <span className="code_editor__line--orange">'react'</span>
                  <span className="code_editor__line--white">;</span>
                </div>
                <div className="code_editor__line">
                  <span className="code_editor__line--purple">
                    import&nbsp;
                  </span>
                  <span className="code_editor__line--white">&#123;</span>
                  <span className="code_editor__line--gold">&nbsp;Form</span>
                  <span className="code_editor__line--white">,</span>
                  <span className="code_editor__line--gold">
                    &nbsp;FormGroup
                  </span>
                  <span className="code_editor__line--white">,</span>
                  <span className="code_editor__line--gold">&nbsp;Label</span>
                  <span className="code_editor__line--white">,</span>
                  <span className="code_editor__line--gold">&nbsp;Input</span>
                  <span className="code_editor__line--white">,</span>
                  <span className="code_editor__line--gold">
                    &nbsp;Alert&nbsp;
                  </span>
                  <span className="code_editor__line--white">&#125;</span>
                  <span className="code_editor__line--purple">
                    &nbsp;from&nbsp;
                  </span>
                  <span className="code_editor__line--orange">
                    'reactstrap'
                  </span>
                  <span className="code_editor__line--white">;</span>
                </div>

                <div className="code_editor__line">&nbsp;</div>

                <div className="code_editor__line">
                  <span className="code_editor__line--blue">class&nbsp;</span>
                  <span className="code_editor__line--green">
                    FormAccessible&nbsp;
                  </span>
                  <span className="code_editor__line--blue">extends&nbsp;</span>
                  <span className="code_editor__line--green">
                    Component&nbsp;
                  </span>
                  <span className="code_editor__line--gold">&#123;</span>
                </div>

                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;</span>
                  <span className="code_editor__line--yellow">render</span>
                  <span className="code_editor__line--purple">() &#123;</span>
                </div>

                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--purple">return</span>
                  <span className="code_editor__line--blue">&nbsp;(</span>
                </div>

                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--darkblue">div</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--gold">Form</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--gold">FormGroup...</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--gold">FormGroup</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--gold">Label</span>
                  <span className="code_editor__line--blue">&nbsp;for</span>
                  <span className="code_editor__line--white">
                    &nbsp;=&nbsp;
                  </span>
                  <span className="code_editor__line--white">"</span>
                  <span className="code_editor__line--orange">date</span>
                  <span className="code_editor__line--white">"&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--white">
                    Today's Date?
                  </span>
                </div>
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--gold">/Label</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--gold">Input</span>
                </div>
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--blue">className</span>
                  <span className="code_editor__line--white">
                    &nbsp;=&nbsp;&#123;
                  </span>
                  <span className="code_editor__line--orange">
                    this.state.error
                  </span>
                  <span className="code_editor__line--white">
                    &nbsp;?&nbsp;
                  </span>
                  <span className="code_editor__line--white">"</span>
                  <span className="code_editor__line--orange">
                    form-input-error
                  </span>
                  <span className="code_editor__line--white">
                    ":""&nbsp;&#125;
                  </span>
                </div>
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--blue">type</span>
                  <span className="code_editor__line--white">
                    &nbsp;=&nbsp;
                  </span>
                  <span className="code_editor__line--white">"</span>
                  <span className="code_editor__line--orange">text</span>
                  <span className="code_editor__line--white">"&nbsp;</span>
                </div>
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--blue">name</span>
                  <span className="code_editor__line--white">
                    &nbsp;=&nbsp;
                  </span>
                  <span className="code_editor__line--white">"</span>
                  <span className="code_editor__line--orange">date</span>
                  <span className="code_editor__line--white">"&nbsp;</span>
                </div>
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--blue">id</span>
                  <span className="code_editor__line--white">
                    &nbsp;=&nbsp;
                  </span>
                  <span className="code_editor__line--white">"</span>
                  <span className="code_editor__line--orange">date</span>
                  <span className="code_editor__line--white">"&nbsp;</span>
                </div>
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--blue">onChange</span>
                  <span className="code_editor__line--white">
                    &nbsp;=&nbsp;&#123;e&nbsp;=&gt;&nbsp;
                  </span>
                  <span className="code_editor__line--orange">
                    this.testInputValidity
                  </span>
                  <span className="code_editor__line--white">
                    (e)&nbsp;&#125;
                  </span>
                </div>
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--blue">value</span>
                  <span className="code_editor__line--white">
                    &nbsp;=&nbsp;&#123;&nbsp;
                  </span>
                  <span className="code_editor__line--orange">
                    this.state.date
                  </span>
                  <span className="code_editor__line--white">&#125;&nbsp;</span>
                </div>
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--gold">/</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--white">&#123;</span>
                  <span className="code_editor__line--orange">
                    &nbsp;this.state.dateError&nbsp;
                  </span>
                  <span className="code_editor__line--white">&&&nbsp;</span>
                </div>
                <span className="code_editor__line--darkgreen">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  &#47;&#47; Add the following error message below: "Please
                  enter in format: YYYY-MM-DD"
                </span>
                <div className="code_editor__line code_editor__line-background--light">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--darkblue">span</span>
                  <span className="code_editor__line--blue">
                    &nbsp;className
                  </span>
                  <span className="code_editor__line--white">
                    &nbsp;=&nbsp;
                  </span>
                  <span className="code_editor__line--white">"</span>
                  <span className="code_editor__line--orange">form-error</span>
                  <span className="code_editor__line--white">"&nbsp;</span>
                  <span className="code_editor__line--darkblue">
                    &#62;&nbsp;
                  </span>
                  <span className="code_editor__line--white">&#123;&nbsp;</span>
                  <span>
                    <input
                      name="errorNotification"
                      type="text"
                      defaultValue={data.errorNotification}
                      onChange={this.changeHandler.bind(this)}
                      required
                      title="Enter: 1 for Yes and 0 for No"
                      className={
                        this.state.errorNotificationerror
                          ? "form-error-input"
                          : ""
                      }
                    />
                  </span>
                  <span className="code_editor__line--white">
                    &nbsp;&#125;&nbsp;
                  </span>
                  <span className="code_editor__line--darkblue">
                    &#60;/span&#62;
                  </span>
                </div>
                {this.state.errorNotificationerror && (
                  <div className="code_editor__line">
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span className="form-error">
                      {this.state.errorNotificationerror}
                    </span>
                  </div>
                )}
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--white">&#125;</span>
                </div>
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--gold">/FormGroup</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--gold">FormGroup...</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--gold">FormGroup...</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--white">&#123;</span>
                  <span className="code_editor__line--orange">
                    &nbsp;this.state.success&nbsp;
                  </span>
                  <span className="code_editor__line--white">&&&nbsp;</span>
                </div>
                <span className="code_editor__line--darkgreen">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  &#47;&#47; Add a success message below: ie "Successful
                  Submission"
                </span>
                <div className="code_editor__line code_editor__line-background--light">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--gold">Alert</span>
                  <span className="code_editor__line--blue">&nbsp;color</span>
                  <span className="code_editor__line--white">
                    &nbsp;=&nbsp;
                  </span>
                  <span className="code_editor__line--white">"</span>
                  <span className="code_editor__line--orange">success</span>
                  <span className="code_editor__line--white">"&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                  <span className="code_editor__line--white">&#123;&nbsp;</span>
                  <span>
                    <input
                      name="successNotification"
                      type="text"
                      defaultValue={data.successNotification}
                      onChange={this.changeHandler.bind(this)}
                      required
                      title="Enter: Successful Submission"
                      className={
                        this.state.successNotificationerror
                          ? "form-error-input"
                          : ""
                      }
                    />
                  </span>
                  <span className="code_editor__line--white">
                    &nbsp;&#125;&nbsp;
                  </span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--gold">/Alert</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>
                {this.state.successNotificationerror && (
                  <div className="code_editor__line">
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span className="form-error">
                      {this.state.successNotificationerror}
                    </span>
                  </div>
                )}
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--white">&#125;</span>
                </div>
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--gold">Input</span>
                  <span className="code_editor__line--blue">&nbsp;type</span>
                  <span className="code_editor__line--white">
                    &nbsp;=&nbsp;
                  </span>
                  <span className="code_editor__line--white">"</span>
                  <span className="code_editor__line--orange">submit</span>
                  <span className="code_editor__line--white">"&nbsp;</span>
                  <span className="code_editor__line--blue">onChange</span>
                  <span className="code_editor__line--white">
                    &nbsp;=&nbsp;&#123;e&nbsp;&gt;&nbsp;
                  </span>
                  <span className="code_editor__line--orange">
                    this.formSubmit
                  </span>
                  <span className="code_editor__line--white">
                    (e)&#125;&nbsp;
                  </span>
                  <span className="code_editor__line--gold">/</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--gold">/Form</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--darkblue">/div</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>

                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--blue">)</span>
                  <span>;</span>
                </div>

                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;</span>
                  <span className="code_editor__line--purple">&#125;</span>
                </div>

                <div className="code_editor__line">
                  <span className="code_editor__line--gold">&#125;</span>
                </div>

                <div className="code_editor__line">&nbsp;</div>

                <div className="code_editor__line">
                  <span className="code_editor__line--purple">
                    export&nbsp;
                  </span>
                  <span className="code_editor__line--purple">
                    default&nbsp;
                  </span>
                  <span className="code_editor__line--blue">
                    FormAccessible
                  </span>
                  <span>;</span>
                </div>
              </div>
            </div>

            <div className="code_editor__content">
              <div className="code_editor__files">
                <div className="code_editor__file code_editor__file--active">
                  Form.css
                </div>
              </div>
              <div className="code_editor__code">
                <div className="code_editor__line">
                  <span className="code_editor__line--darkgreen">
                    &#47;&#47; This is where you can change the form styling.
                  </span>
                </div>
                <p className="code_editor__class">.form-input-error &#123;</p>
                <div className="code_editor__form">
                  <div className="code_editor__line">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="code_editor__line--darkgreen">
                      &#47;&#47; Make the border color 'red' to highlight the
                      error input.
                    </span>
                  </div>
                  <div className="code_editor__property code_editor__line-background--light">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>border-color:&nbsp;</span>
                    <span>
                      <input
                        name="borderColor"
                        type="text"
                        defaultValue={data.borderColor}
                        onChange={this.changeHandler.bind(this)}
                        title={`must enter red`}
                        className={
                          this.state.borderColorerror ? "form-error-input" : ""
                        }
                      />
                    </span>
                  </div>
                  {this.state.borderColorerror && (
                    <div className="code_editor__line">
                      <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span className="form-error">
                        {this.state.borderColorerror}
                      </span>
                    </div>
                  )}
                </div>
                <p className="code_editor__class">&#125;</p>
              </div>
            </div>
            <button
              onClick={this.validateRepair.bind(this)}
              type="submit"
              className="button button--green button--block"
            >
              Update
            </button>
          </div>
        )}
        <PageServiceTimer actions={handlers} name={this.state.componentName} />
      </div>
    );
  }
}

export default FormRepair;
