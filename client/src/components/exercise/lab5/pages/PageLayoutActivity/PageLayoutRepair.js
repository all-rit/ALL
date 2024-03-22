/* eslint-disable no-case-declarations */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import RepairService from "../../../../../services/lab5/RepairService";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";
import Popup from "../../../../all-components/Popup";
import { navigate } from "@reach/router";
import { minFont, maxFont } from "../../../../../constants/lab5";

class PageLayoutRepair extends Component {
  constructor(props) {
    super(props);

    this.state = {
      h1value: null,
      ulvalue: null,
      classvalue: null,
      fontvalue: null,
      fontfamilyvalue: null,
      h1error: null,
      ulerror: null,
      classerror: null,
      fonterror: null,
      fontfamilyerror: null,
      repairerror: true,
      componentName: "PageLayoutRepair",
    };
    // this.validateRepair = this.validateRepair.bind(this)
  }

  componentWillMount() {
    const { data } = this.props;
    this.setState({
      h1value: data.h1value,
      ulvalue: data.ulvalue,
      classvalue: data.classvalue,
      fontvalue: data.fontvalue,
      fontfamilyvalue: data.fontfamilyvalue,
    });
  }
  validateRepair(e) {
    let error = false;
    Object.keys(this.state).map((name) => {
      switch (name) {
        case "h1value":
          if (this.state[name] !== "h1") {
            error = true;
            this.setState({ h1error: "Must be 'h1'" });
          } else {
            this.setState({ h1error: null });
          }
          break;
        case "ulvalue":
          if (this.state[name] !== "ul") {
            error = true;
            this.setState({ ulerror: "Must be 'ul'" });
          } else {
            this.setState({ ulerror: null });
          }
          break;
        case "classvalue":
          if (this.state[name] !== '"body"') {
            error = true;
            this.setState({ classerror: 'Must enter "body"' });
          } else {
            this.setState({ classerror: null });
          }
          break;
        case "fontvalue":
          const fontsize = parseInt(this.state[name]);
          if (fontsize > maxFont || fontsize < minFont || isNaN(fontsize)) {
            error = true;
            this.setState({
              fonterror: `Must enter between ${minFont}px and ${maxFont}px`,
            });
          } else {
            this.setState({ fonterror: null });
          }
          break;
        case "fontfamilyvalue":
          if (this.state[name] !== "roboto" && this.state[name] !== "arial") {
            error = true;
            this.setState({ fontfamilyerror: "Must be 'arial' or 'roboto'" });
          } else {
            this.setState({ fontfamilyerror: null });
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
    const { h1value, ulvalue, classvalue, fontvalue, fontfamilyvalue } =
      this.state;

    event.preventDefault();
    if (!this.state.repairerror) {
      const repair = JSON.stringify({
        h1value,
        ulvalue,
        classvalue,
        fontvalue,
        fontfamilyvalue,
      });
      // Submit a repair entry in the database.
      RepairService.submitRepair(this.state.componentName, repair);
      handlers.updatePopup("The repairs have been made.");
    } else {
      handlers.updatePopup("Errors in Repair. Please fix");
    }
    // Update the state and close the repair.
    handlers.updateRepairPageLayout(
      h1value,
      ulvalue,
      classvalue,
      fontvalue,
      fontfamilyvalue
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
    navigate("/Lab5/Exercise/DementiaAccessible");
  }

  render() {
    const { visible, handlers, state, data, actions } = this.props;
    return (
      <div>
        <div className="cognitive_instructions margin-bottom-2">
          Let's optimize the page layout and font to allow for easier reading.
          Click 'Repair' to make the appropriate changes.
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
                  DementiaAccessible.js
                </div>
              </div>

              <div className="code_editor__code">
                <div className="code_editor__line">
                  <span className="code_editor__line--darkgreen">
                    &#47;&#47; This is where you can can add headings and lists
                    to allow easier reading
                  </span>
                </div>
                <div className="code_editor__line">
                  <span className="code_editor__line--purple">
                    import&nbsp;
                  </span>
                  <span className="code_editor__line--blue">React</span>
                  <span className="code_editor__line--gold">,&nbsp;</span>
                  <span className="code_editor__line--gold">&#123;</span>
                  <span className="code_editor__line--blue">
                    &nbsp;Component&nbsp;
                  </span>
                  <span className="code_editor__line--gold">&#125;&nbsp;</span>
                  <span className="code_editor__line--purple">from&nbsp;</span>
                  <span className="code_editor__line--orange">'react'</span>
                  <span className="code_editor__line--gold">;</span>
                </div>

                <div className="code_editor__line">&nbsp;</div>

                <div className="code_editor__line">
                  <span className="code_editor__line--blue">class&nbsp;</span>
                  <span className="code_editor__line--green">
                    DementiaAccessible&nbsp;
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
                  <span className="code_editor__line--darkgreen">
                    &#47;&#47;Enter 'h1' into the input below
                  </span>
                </div>

                <div className="code_editor__line code_editor__line-background--light">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span>
                    <input
                      name="h1value"
                      type="text"
                      className={`htmlinput ${
                        this.state.h1error ? "form-error-input" : ""
                      }`}
                      defaultValue={data.h1value}
                      onChange={this.changeHandler.bind(this)}
                      required
                      title="must enter h1"
                    />
                  </span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                  <span className="code_editor__line--white">
                    {" "}
                    3.0 Dementia{" "}
                  </span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--darkblue">
                    /{this.state.h1value}
                  </span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>
                {this.state.h1error && (
                  <div className="code_editor__line">
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span className="form-error">{this.state.h1error}</span>
                  </div>
                )}
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--darkblue">p</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                  <span className="code_editor__line--white">
                    {" "}
                    Some of the symptoms of dementia include:{" "}
                  </span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--darkblue">/p</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--darkblue">h2</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                  <span className="code_editor__line--white">
                    {" "}
                    3.0.1 Symptoms{" "}
                  </span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--darkblue">/h2</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkgreen">
                    &#47;&#47;Enter '"body"' into the input below
                  </span>
                </div>
                <div className="code_editor__line code_editor__line-background--light">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--darkblue">div</span>
                  <span className="code_editor__line--blue"> className</span>
                  <span className="code_editor__line--white"> = </span>
                  <span>
                    <input
                      name="classvalue"
                      type="text"
                      defaultValue={data.classvalue}
                      onChange={this.changeHandler.bind(this)}
                      title="must enter body"
                      className={
                        this.state.classerror ? "form-error-input" : ""
                      }
                    />
                  </span>
                  <span className="code_editor__line--darkblue">/&#62;</span>
                </div>
                {this.state.classerror && (
                  <div className="code_editor__line">
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span className="form-error">{this.state.classerror}</span>
                  </div>
                )}
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkgreen">
                    &#47;&#47;Enter 'ul' into the input below
                  </span>
                </div>
                <div className="code_editor__line code_editor__line-background--light">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span>
                    <input
                      name="ulvalue"
                      type="text"
                      className={`htmlinput ${
                        this.state.ulerror ? "form-error-input" : ""
                      }`}
                      defaultValue={data.ulvalue}
                      onChange={this.changeHandler.bind(this)}
                      title="must enter ul"
                    />
                  </span>
                  <span className="code_editor__line--darkblue">/&#62;</span>
                </div>
                {this.state.ulerror && (
                  <div className="code_editor__line">
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span className="form-error">{this.state.ulerror}</span>
                  </div>
                )}
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--darkblue">
                    &#60;li&#62;
                  </span>
                  <span className="code_editor__line--white">
                    {" "}
                    Difficulty remembering{" "}
                  </span>
                  <span className="code_editor__line--darkblue">
                    &#60;/li&#62;
                  </span>
                </div>
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--darkblue">
                    &#60;li&#62;
                  </span>
                  <span className="code_editor__line--white">
                    {" "}
                    Difficulty organizing thoughts{" "}
                  </span>
                  <span className="code_editor__line--darkblue">
                    &#60;/li&#62;
                  </span>
                </div>
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--darkblue">
                    &#60;li&#62;
                  </span>
                  <span className="code_editor__line--white">
                    {" "}
                    Difficulty working within time limits{" "}
                  </span>
                  <span className="code_editor__line--darkblue">
                    &#60;/li&#62;
                  </span>
                </div>
                <div className="code_editor__line">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="code_editor__line--darkblue">
                    &#60;li&#62;
                  </span>
                  <span className="code_editor__line--white">
                    {" "}
                    Visual processing difficulty{" "}
                  </span>
                  <span className="code_editor__line--darkblue">
                    &#60;/li&#62;
                  </span>
                </div>
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">
                    &#60;/{this.state.ulvalue}&#62;
                  </span>
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
                  <span className="code_editor__line--purple">&#125;</span>
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
                    DementiaAccessible
                  </span>
                  <span>;</span>
                </div>
              </div>
            </div>

            <div className="code_editor__content">
              <div className="code_editor__files">
                <div className="code_editor__file code_editor__file--active">
                  DementiaAccessible.css
                </div>
              </div>
              <div className="code_editor__code">
                <div className="code_editor__line">
                  <span className="code_editor__line--darkgreen">
                    &#47;&#47; This is where you can change the page format
                    styling.
                  </span>
                </div>
                <p className="code_editor__class">.body &#123;</p>
                <div className="code_editor__form">
                  <div className="code_editor__line">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="code_editor__line--darkgreen">
                      &#47;&#47; Change font-size to value between {minFont}px
                      and {maxFont}px.
                    </span>
                  </div>
                  <div className="code_editor__property code_editor__line-background--light">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>font-size:&nbsp;</span>
                    <span>
                      <input
                        name="fontvalue"
                        type="text"
                        defaultValue={data.fontvalue}
                        onChange={this.changeHandler.bind(this)}
                        title={`must enter between ${minFont}px and ${maxFont}px`}
                        className={
                          this.state.fonterror ? "form-error-input" : ""
                        }
                      />
                    </span>
                  </div>
                  {this.state.fonterror && (
                    <div className="code_editor__line">
                      <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span className="form-error">{this.state.fonterror}</span>
                    </div>
                  )}
                  <div className="code_editor__input"></div>
                  <div className="code_editor__line">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="code_editor__line--darkgreen">
                      &#47;&#47; Change font-family to roboto or arial.
                    </span>
                  </div>
                  <div className="code_editor__property code_editor__line-background--light">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>font-family:&nbsp;</span>
                    <span>
                      <input
                        name="fontfamilyvalue"
                        type="text"
                        defaultValue={data.fontfamilyvalue}
                        onChange={this.changeHandler.bind(this)}
                        title="must enter arial or roboto"
                        className={
                          this.state.fontfamilyerror ? "form-error-input" : ""
                        }
                      />
                    </span>
                  </div>
                  {this.state.fontfamilyerror && (
                    <div className="code_editor__line">
                      <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span className="form-error">
                        {this.state.fontfamilyerror}
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

export default PageLayoutRepair;
