/* eslint-disable no-undef */
/* eslint-disable no-tabs */
/* eslint-disable new-cap */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-deprecated */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import classNames from "classnames/bind";
import RepairService from "../../../../services/lab3/RepairService";

class Repair extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cowAltValue: null,
      carAltValue: null,
      burgerAltValue: null,
      catAltValue: null,
    };
  }

  componentWillMount() {
    const { data } = this.props;
    this.setState({
      cowAltValue: data.cowAltValue,
      carAltValue: data.carAltValue,
      burgerAltValue: data.burgerAltValue,
      catAltValue: data.catAltValue,
    });
  }

  handleSubmit(event) {
    const { handlers } = this.props;
    const { cowAltValue, carAltValue, burgerAltValue, catAltValue } =
      this.state;

    event.preventDefault();

    // Submit a repair entry in the database.
    RepairService.submitRepair(
      cowAltValue,
      carAltValue,
      burgerAltValue,
      catAltValue
    );

    // Update the state and close the repair.
    handlers.updateRepair(
      cowAltValue,
      carAltValue,
      burgerAltValue,
      catAltValue
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

  render() {
    // const paperStyle = {
    // 	marginLeft: "10px",
    // 	marginRight: "10px",
    // 	marginTop: "20px"
    // };
    const { visible, data, handlers } = this.props;
    const jsFileClasses = classNames({
      code_editor__file: true,
      "code_editor__file--active": data.currentTab === 1,
    });
    const jsFileCodeClasses = classNames({
      code_editor__code: true,
      code_editor__hide: data.currentTab === 2,
    });

    if (!visible) return null;

    return (
      <div className="code_editor">
        <div className="code_editor__content">
          <div className="code_editor__files">
            <div
              onClick={handlers.updateTab.bind(this, 1)}
              className={jsFileClasses}
            >
              AltTag.html
            </div>
          </div>

          <div className={jsFileCodeClasses}>
            <div className="code_editor__line">
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">div</span>
              <span className="code_editor__line--white">&#62;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">table</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">tabIndex</span>
              <span className="code_editor__line--white">="</span>
              <span className="code_editor__line--gold">0</span>
              <span className="code_editor__line--white">"</span>
              <span className="code_editor__line--white">&#62;</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">tbody</span>
              <span className="code_editor__line--white">&#62;</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">tr</span>
              <span className="code_editor__line--white">&#62;</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">td</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">tabIndex</span>
              <span className="code_editor__line--white">="</span>
              <span className="code_editor__line--gold">0</span>
              <span className="code_editor__line--white">"</span>
              <span className="code_editor__line--white">&#62;</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--darkgreen">
                &#47;&#47; Add a descriptive alt tag
              </span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">input</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">type</span>
              <span className="code_editor__line--white">="</span>
              <span className="code_editor__line--gold">image</span>
              <span className="code_editor__line--white">"</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">src</span>
              <span className="code_editor__line--white">="</span>
              <span className="code_editor__line--gold">cat.png</span>
              <span className="code_editor__line--white">"</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">onClick</span>
              <span className="code_editor__line--white">="</span>
              <span className="code_editor__line--gold">
                {() => CatClick()}
              </span>
              <span className="code_editor__line--white">"</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">alt</span>
              <span className="code_editor__line--white">=</span>
              <span>
                <input
                  name="catAltValue"
                  type="text"
                  defaultValue={data.catAltValue}
                  onChange={this.changeHandler.bind(this)}
                />
              </span>
              <span className="code_editor__line--white">&#62;</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">/td</span>
              <span className="code_editor__line--white">&#62;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">td</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">tabIndex</span>
              <span className="code_editor__line--white">="</span>
              <span className="code_editor__line--gold">0</span>
              <span className="code_editor__line--white">"</span>
              <span className="code_editor__line--white">&#62;</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">input</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">type</span>
              <span className="code_editor__line--white">="</span>
              <span className="code_editor__line--gold">image</span>
              <span className="code_editor__line--white">"</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">src</span>
              <span className="code_editor__line--white">="</span>
              <span className="code_editor__line--gold">car.png</span>
              <span className="code_editor__line--white">"</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">onClick</span>
              <span className="code_editor__line--white">="</span>
              <span className="code_editor__line--gold">
                {() => CarClick()}
              </span>
              <span className="code_editor__line--white">"</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">alt</span>
              <span className="code_editor__line--white">=</span>
              <span>
                <input
                  name="carAltValue"
                  type="text"
                  defaultValue={data.carAltValue}
                  onChange={this.changeHandler.bind(this)}
                />
              </span>
              <span className="code_editor__line--white">&#62;</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">/td</span>
              <span className="code_editor__line--white">&#62;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">/tr</span>
              <span className="code_editor__line--white">&#62;</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">tr</span>
              <span className="code_editor__line--white">&#62;</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">td</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">tabIndex</span>
              <span className="code_editor__line--white">="</span>
              <span className="code_editor__line--gold">0</span>
              <span className="code_editor__line--white">"</span>
              <span className="code_editor__line--white">&#62;</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">input</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">type</span>
              <span className="code_editor__line--white">="</span>
              <span className="code_editor__line--gold">image</span>
              <span className="code_editor__line--white">"</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">src</span>
              <span className="code_editor__line--white">="</span>
              <span className="code_editor__line--gold">burger.png</span>
              <span className="code_editor__line--white">"</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">onClick</span>
              <span className="code_editor__line--white">="</span>
              <span className="code_editor__line--gold">
                {() => BurgerClick()}
              </span>
              <span className="code_editor__line--white">"</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">alt</span>
              <span className="code_editor__line--white">=</span>
              <span>
                <input
                  name="burgerAltValue"
                  type="text"
                  defaultValue={data.burgerAltValue}
                  onChange={this.changeHandler.bind(this)}
                />
              </span>
              <span className="code_editor__line--white">&#62;</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">/td</span>
              <span className="code_editor__line--white">&#62;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">td</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">tabIndex</span>
              <span className="code_editor__line--white">="</span>
              <span className="code_editor__line--gold">0</span>
              <span className="code_editor__line--white">"</span>
              <span className="code_editor__line--white">&#62;</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">input</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">type</span>
              <span className="code_editor__line--white">="</span>
              <span className="code_editor__line--gold">image</span>
              <span className="code_editor__line--white">"</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">src</span>
              <span className="code_editor__line--white">="</span>
              <span className="code_editor__line--gold">cow.png</span>
              <span className="code_editor__line--white">"</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">onClick</span>
              <span className="code_editor__line--white">="</span>
              <span className="code_editor__line--gold">
                {() => CowClick()}
              </span>
              <span className="code_editor__line--white">"</span>
              <span>&nbsp;</span>
              <span className="code_editor__line--green">alt</span>
              <span className="code_editor__line--white">=</span>
              <span>
                <input
                  name="cowAltValue"
                  type="text"
                  defaultValue={data.cowAltValue}
                  onChange={this.changeHandler.bind(this)}
                />
              </span>
              <span className="code_editor__line--white">&#62;</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">/td</span>
              <span className="code_editor__line--white">&#62;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">/tr</span>
              <span className="code_editor__line--white">&#62;</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">/tbody</span>
              <span className="code_editor__line--white">&#62;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;</span>
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">/table</span>
              <span className="code_editor__line--white">&#62;</span>
            </div>

            <div className="code_editor__line">
              <span className="code_editor__line--white">&#60;</span>
              <span className="code_editor__line--pink">/div</span>
              <span className="code_editor__line--white">&#62;</span>
            </div>
          </div>

          <button
            onClick={this.handleSubmit.bind(this)}
            type="submit"
            className="button button--green button--block"
          >
            Update
          </button>
        </div>
      </div>
    );
  }
}

export default Repair;
