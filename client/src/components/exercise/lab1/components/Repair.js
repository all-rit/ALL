/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import classNames from "classnames/bind";
import { Panel as ColorPickerPanel } from "rc-color-picker";
import RepairService from "../../../../services/lab1/RepairService";
import Popup from "../../shared/Popup";

class Repair extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availableMessage: null,
      unavailableMessage: null,
      availableBackgroundColor: null,
      unavailableBackgroundColor: null,
      availableBackgroundColorPopup: false,
      unavailableBackgroundColorPopup: false,
      repairError: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  UNSAFE_componentWillMount() {
    const { data } = this.props;

    this.setState({
      availableMessage: data.availableMessage,
      unavailableMessage: data.unavailableMessage,
      availableBackgroundColor: data.availableBackgroundColor,
      unavailableBackgroundColor: data.unavailableBackgroundColor,
    });
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
  }

  handleClick(e) {
    if (this.state.availableBackgroundColorPopup) {
      if (e.target.tagName === "HTML") {
        this.setState({
          availableBackgroundColorPopup: false,
        });
      } else if (e.target.parentNode.className) {
        if (
          !e.target.parentNode.className.includes("rc-color-picker") &&
          e.target.id !== "changeAvailableColor"
        ) {
          this.setState({
            availableBackgroundColorPopup: false,
          });
        }
      }
    }
    if (this.state.unavailableBackgroundColorPopup) {
      if (e.target.tagName === "HTML") {
        this.setState({
          unavailableBackgroundColorPopup: false,
        });
      } else if (e.target.parentNode.className) {
        if (
          !e.target.parentNode.className.includes("rc-color-picker") &&
          e.target.id !== "changeUnavailableColor"
        ) {
          this.setState({
            unavailableBackgroundColorPopup: false,
          });
        }
      }
    }
  }

  handleSubmit(event) {
    const { handlers } = this.props;
    const {
      availableMessage,
      unavailableMessage,
      availableBackgroundColor,
      unavailableBackgroundColor,
    } = this.state;

    event.preventDefault();

    // Submit a repair entry in the database.
    RepairService.submitRepair(
      availableMessage,
      unavailableMessage,
      availableBackgroundColor,
      unavailableBackgroundColor
    );

    // Update the state and close the repair.
    if (availableMessage !== "Available hint here!") {
      handlers.updateRepair(false);
      handlers.updateRepairError(true);
      handlers.updatePopup("Error in repair submission. Please fix.");
      return;
    }
    if (unavailableMessage !== "No available hint yet...") {
      handlers.updateRepair(false);
      handlers.updateRepairError(true);
      handlers.updatePopup("Error in repair submission. Please fix.");
      return;
    }

    handlers.updateRepairError(false);

    handlers.updateRepair(
      availableMessage,
      unavailableMessage,
      availableBackgroundColor,
      unavailableBackgroundColor
    );
    handlers.closeRepair();
    handlers.updatePopup("The repairs have been made.");

    setTimeout(() => {
      handlers.updatePopup("");
    }, 5000);
  }

  changeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  changeAvailableBackgroundColorHandler(obj) {
    this.setState({
      availableBackgroundColor: obj.color,
    });
  }

  changeUnavailableBackgroundColorHandler(obj) {
    this.setState({
      unavailableBackgroundColor: obj.color,
    });
  }

  toggleAvailableBackgroundColorPopup() {
    this.setState({
      availableBackgroundColorPopup: !this.state.availableBackgroundColorPopup,
    });
  }

  toggleUnavailableBackgroundColorPopup() {
    this.setState({
      unavailableBackgroundColorPopup:
        !this.state.unavailableBackgroundColorPopup,
    });
  }

  render() {
    const { visible, data, handlers } = this.props;
    const {
      availableBackgroundColor,
      unavailableBackgroundColor,
      availableBackgroundColorPopup,
      unavailableBackgroundColorPopup,
    } = this.state;
    const jsFileClasses = classNames({
      code_editor__file: true,
      "code_editor__file--active": true,
    });
    const cssFileClasses = classNames({
      code_editor__file: true,
      "code_editor__file--active": true,
    });
    const jsFileCodeClasses = classNames({
      code_editor__code: true,
      code_editor__hide: false,
    });
    const cssFileCodeClasses = classNames({
      code_editor__code: true,
      code_editor__hide: false,
    });

    if (!visible) return null;

    return (
      <div className="code_editor">
        <div className="code_editor__content">
          <div className={jsFileClasses}>
            <div
              onClick={handlers.updateTab.bind(this, 1)}
              className="code_editor__file--active"
            >
              HintBox.js
            </div>
          </div>

          <div className={jsFileCodeClasses}>
            <div className="code_editor__line">
              <span className="code_editor__line--darkgreen">
                &#47;&#47; This is where you can change the hint box's default
                messages.
              </span>
            </div>
            <div className="code_editor__line">
              <span className="code_editor__line--purple">import&nbsp;</span>
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
              <span className="code_editor__line--green">HintBox&nbsp;</span>
              <span className="code_editor__line--blue">extends&nbsp;</span>
              <span className="code_editor__line--green">Component&nbsp;</span>
              <span className="code_editor__line--gold">&#123;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;</span>
              <span className="code_editor__line--yellow">render</span>
              <span className="code_editor__line--purple">() &#123;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--darkblue">let</span>
              <span className="code_editor__line--blue">
                &nbsp;&#123;&nbsp;
              </span>
              <span className="code_editor__line--blue">hint</span>
              <span>,&nbsp;</span>
              <span className="code_editor__line--blue">isExtended</span>
              <span className="code_editor__line--blue">
                &nbsp;&#125;&nbsp;
              </span>
              <span>=&nbsp;</span>
              <span className="code_editor__line--darkblue">this</span>
              <span className="code_editor__line--blue">.props</span>
              <span>;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--darkblue">let&nbsp;</span>
              <span className="code_editor__line--blue">content</span>
              <span>&nbsp;=&nbsp;</span>
              <span className="code_editor__line--orange">""</span>
              <span>;</span>
            </div>

            <div className="code_editor__line">&nbsp;</div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--darkgreen">
                &#47;&#47; Check if hint is empty
              </span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--purple">if&nbsp;</span>
              <span className="code_editor__line--blue">(</span>
              <span className="code_editor__line--blue">hint</span>
              <span>&nbsp;!=&nbsp;</span>
              <span className="code_editor__line--orange">""</span>
              <span className="code_editor__line--blue">)&nbsp;</span>
              <span className="code_editor__line--purple">&#123;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--darkgreen">
                &#47;&#47; Update the variable 'content' to "Available hint
                here!"
              </span>
            </div>

            <div className="code_editor__line code_editor__line-background--light">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--blue">content</span>
              <span>&nbsp;=&nbsp;</span>
              <span className="code_editor__line--orange">'</span>
              <span>
                <input
                  name="availableMessage"
                  type="text"
                  defaultValue={data.availableMessage}
                  onChange={this.changeHandler.bind(this)}
                />
              </span>
              <span className="code_editor__line--orange">'</span>
              <span>;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--purple">&#125;&nbsp;</span>
              <span className="code_editor__line--blue">else</span>
              <span className="code_editor__line--purple">&nbsp;&#123;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--darkgreen">
                &#47;&#47; Otherwise, update the variable 'content' to "No
                available hint yet..."
              </span>
            </div>

            <div className="code_editor__line code_editor__line-background--light">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--blue">content</span>
              <span>&nbsp;=&nbsp;</span>
              <span className="code_editor__line--orange">'</span>
              <span>
                <input
                  name="unavailableMessage"
                  type="text"
                  defaultValue={data.unavailableMessage}
                  onChange={this.changeHandler.bind(this)}
                />
              </span>
              <span className="code_editor__line--orange">'</span>
              <span>;</span>
            </div>
            {this.state.repairError && (
              <Popup
                message={"There has been an incorrect input. Please try again"}
                handler={handlers.updatePopup}
              />
            )}
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--purple">&#125;&nbsp;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;</span>
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
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&#123;&nbsp;</span>
              <span className="code_editor__line--blue">isExtended</span>
              <span>&nbsp;?&nbsp;</span>
              <span>(</span>
              <span className="code_editor__line--blue">hint</span>
              <span>&nbsp;?&nbsp;</span>
              <span className="code_editor__line--blue">hint</span>
              <span>&nbsp;:&nbsp;</span>
              <span className="code_editor__line--orange">"No hint"</span>
              <span>)</span>
              <span>&nbsp;:&nbsp;</span>
              <span className="code_editor__line--blue">content</span>
              <span>&nbsp;&#125;</span>
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
              <span className="code_editor__line--purple">export&nbsp;</span>
              <span className="code_editor__line--purple">default&nbsp;</span>
              <span className="code_editor__line--blue">HintBox</span>
              <span>;</span>
            </div>
          </div>
        </div>

        <div className="code_editor__content">
          <div className={cssFileClasses}>
            <div
              onClick={handlers.updateTab.bind(this, 2)}
              className="code_editor__file--active"
            >
              HintBox.css
            </div>
          </div>
          <div className={cssFileCodeClasses}>
            <div className="code_editor__line">
              <span className="code_editor__line--darkgreen">
                &#47;&#47; This is where you can change the hint box's styling.
              </span>
            </div>
            <p className="code_editor__class">.available_hint &#123;</p>
            <div className="code_editor__form">
              <div className="code_editor__line">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="code_editor__line--darkgreen">
                  &#47;&#47; Changes the background of the box with an available
                  hint.
                </span>
              </div>
              <div className="code_editor__property code_editor__line-background--light">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>background-color:&nbsp;</span>
              </div>
              <div className="code_editor__input">
                <button
                  id={"changeAvailableColor"}
                  onClick={this.toggleAvailableBackgroundColorPopup.bind(this)}
                  style={{ backgroundColor: availableBackgroundColor }}
                />
                {availableBackgroundColorPopup ? (
                  <div className="code_editor__color_selector">
                    <ColorPickerPanel
                      enableAlpha={false}
                      color={this.state.availableBackgroundColor}
                      onChange={this.changeAvailableBackgroundColorHandler.bind(
                        this
                      )}
                    />
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </div>
            <p className="code_editor__class">&#125;</p>

            <p className="code_editor__class">.unavailable_hint&#123;</p>
            <div className="code_editor__form">
              <div className="code_editor__line">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="code_editor__line--darkgreen">
                  &#47;&#47; Changes the background of the box with an
                  unavailable hint.
                </span>
              </div>
              <div className="code_editor__property code_editor__line-background--light">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>background-color:&nbsp;</span>
              </div>
              <div className="code_editor__input">
                <button
                  id={"changeUnavailableColor"}
                  onClick={this.toggleUnavailableBackgroundColorPopup.bind(
                    this
                  )}
                  style={{ backgroundColor: unavailableBackgroundColor }}
                />
                {unavailableBackgroundColorPopup ? (
                  <div className="code_editor__color_selector">
                    <ColorPickerPanel
                      enableAlpha={false}
                      color={this.state.unavailableBackgroundColor}
                      onChange={this.changeUnavailableBackgroundColorHandler.bind(
                        this
                      )}
                    />
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </div>
            <p className="code_editor__class">&#125;</p>
          </div>
        </div>
        <button
          onClick={this.handleSubmit.bind(this)}
          type="submit"
          className="button button--green button--block code_editor_button"
        >
          Update
        </button>
      </div>
    );
  }
}

export default Repair;
