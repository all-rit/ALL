import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { Panel as ColorPickerPanel } from "rc-color-picker";
import RepairService from "../../../../services/lab1/RepairService";
import { useLab1StateContext } from "src/reducers/lab1/Lab1Context";
import PropTypes from "prop-types";

/**
 * Represents the Repair component.
 * @param {Object} props - The component props.
 * @param {boolean} props.visible - Determines if the component is visible or not.
 * @returns {JSX.Element|null} The rendered Repair component.
 */
const Repair = ({ visible }) => {
  const { state: lab1State, actions: lab1Actions } = useLab1StateContext();
  const [availableMessage, setAvailableMessage] = useState(null);
  const [unavailableMessage, setUnavailableMessage] = useState(null);
  const [availableBackgroundColor, setAvailableBackgroundColor] =
    useState(null);
  const [unavailableBackgroundColor, setUnavailableBackgroundColor] =
    useState(null);
  const [availableBackgroundColorPopup, setAvailableBackgroundColorPopup] =
    useState(false);
  const [unavailableBackgroundColorPopup, setUnavailableBackgroundColorPopup] =
    useState(false);

  useEffect(() => {
    setAvailableMessage(lab1State.availableMessage);
    setUnavailableMessage(lab1State.unavailableMessage);
    setAvailableBackgroundColor(lab1State.availableBackgroundColor);
    setUnavailableBackgroundColor(lab1State.unavailableBackgroundColor);

    const handleClick = (e) => {
      if (availableBackgroundColorPopup) {
        if (e.target.tagName === "HTML") {
          setAvailableBackgroundColorPopup(false);
        } else if (e.target.parentNode.className) {
          if (
            !e.target.parentNode.className.includes("rc-color-picker") &&
            e.target.id !== "changeAvailableColor"
          ) {
            setAvailableBackgroundColorPopup(false);
          }
        }
      }
      if (unavailableBackgroundColorPopup) {
        if (e.target.tagName === "HTML") {
          setUnavailableBackgroundColorPopup(false);
        } else if (e.target.parentNode.className) {
          if (
            !e.target.parentNode.className.includes("rc-color-picker") &&
            e.target.id !== "changeUnavailableColor"
          ) {
            setUnavailableBackgroundColorPopup(false);
          }
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [lab1State]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit a repair entry in the database.
    RepairService.submitRepair(
      availableMessage,
      unavailableMessage,
      availableBackgroundColor,
      unavailableBackgroundColor
    );

    // Update the state and close the repair.
    lab1Actions.updateRepair(
      availableMessage,
      unavailableMessage,
      availableBackgroundColor,
      unavailableBackgroundColor
    );
    lab1Actions.closeRepair();
    lab1Actions.updatePopup("The repairs have been made.");

    setTimeout(() => {
      lab1Actions.updatePopup("");
    }, 5000);
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "availableMessage") {
      setAvailableMessage(value);
    } else if (name === "unavailableMessage") {
      setUnavailableMessage(value);
    }
  };

  const changeAvailableBackgroundColorHandler = (obj) => {
    setAvailableBackgroundColor(obj.color);
  };

  const changeUnavailableBackgroundColorHandler = (obj) => {
    setUnavailableBackgroundColor(obj.color);
  };

  const toggleAvailableBackgroundColorPopup = () => {
    setAvailableBackgroundColorPopup(!availableBackgroundColorPopup);
  };

  const toggleUnavailableBackgroundColorPopup = () => {
    setUnavailableBackgroundColorPopup(!unavailableBackgroundColorPopup);
  };

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
            onClick={() => lab1Actions.updateTab(1)}
            className="code_editor__file--active"
          >
            HintBox.js
          </div>
        </div>

        <div className={jsFileCodeClasses}>
          <div className="code_editor__line">
            <span className="code_editor__line--darkgreen">
              &#47;&#47; This is where you can change the hint box&apos;s
              default messages.
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
            <span className="code_editor__line--orange">&apos;react&apos;</span>
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
            <span className="code_editor__line--blue">&nbsp;&#123;&nbsp;</span>
            <span className="code_editor__line--blue">hint</span>
            <span>,&nbsp;</span>
            <span className="code_editor__line--blue">isExtended</span>
            <span className="code_editor__line--blue">&nbsp;&#125;&nbsp;</span>
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
            <span className="code_editor__line--orange">&quot;&quot;</span>
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
            <span className="code_editor__line--orange">&quot;&quot;</span>
            <span className="code_editor__line--blue">)&nbsp;</span>
            <span className="code_editor__line--purple">&#123;</span>
          </div>

          <div className="code_editor__line">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="code_editor__line--darkgreen">
              &#47;&#47; Update the variable &apos;content&apos; to
              &quot;Available hint here!&quot;
            </span>
          </div>

          <div className="code_editor__line code_editor__line-background--light">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="code_editor__line--blue">content</span>
            <span>&nbsp;=&nbsp;</span>
            <span className="code_editor__line--orange">&apos;</span>
            <span>
              <input
                name="availableMessage"
                type="text"
                defaultValue={lab1State.availableMessage}
                onChange={changeHandler}
              />
            </span>
            <span className="code_editor__line--orange">&apos;</span>
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
              &#47;&#47; Otherwise, update the variable &apos;content&apos; to
              &quot;No available hint yet...&quot;
            </span>
          </div>

          <div className="code_editor__line code_editor__line-background--light">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="code_editor__line--blue">content</span>
            <span>&nbsp;=&nbsp;</span>
            <span className="code_editor__line--orange">&apos;</span>
            <span>
              <input
                name="unavailableMessage"
                type="text"
                defaultValue={lab1State.unavailableMessage}
                onChange={changeHandler}
              />
            </span>
            <span className="code_editor__line--orange">&apos;</span>
            <span>;</span>
          </div>

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
            <span className="code_editor__line--orange">
              &quot;No hint&qout;
            </span>
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
            onClick={() => lab1Actions.updateTab(2)}
            className="code_editor__file--active"
          >
            HintBox.css
          </div>
        </div>
        <div className={cssFileCodeClasses}>
          <div className="code_editor__line">
            <span className="code_editor__line--darkgreen">
              &#47;&#47; This is where you can change the hint box&apos;s
              styling.
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
                onClick={toggleAvailableBackgroundColorPopup}
                style={{ backgroundColor: availableBackgroundColor }}
              />
              {availableBackgroundColorPopup ? (
                <div className="code_editor__color_selector">
                  <ColorPickerPanel
                    enableAlpha={false}
                    color={availableBackgroundColor}
                    onChange={changeAvailableBackgroundColorHandler}
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
                &#47;&#47; Changes the background of the box with an unavailable
                hint.
              </span>
            </div>
            <div className="code_editor__property code_editor__line-background--light">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>background-color:&nbsp;</span>
            </div>
            <div className="code_editor__input">
              <button
                id={"changeUnavailableColor"}
                onClick={toggleUnavailableBackgroundColorPopup}
                style={{ backgroundColor: unavailableBackgroundColor }}
              />
              {unavailableBackgroundColorPopup ? (
                <div className="code_editor__color_selector">
                  <ColorPickerPanel
                    enableAlpha={false}
                    color={unavailableBackgroundColor}
                    onChange={changeUnavailableBackgroundColorHandler}
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
        onClick={handleSubmit}
        type="submit"
        className="button button--green button--block code_editor_button"
      >
        Update
      </button>
    </div>
  );
};

Repair.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Repair;
