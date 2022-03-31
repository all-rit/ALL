import React, { Component } from 'react';
import RepairService from '../../../../../services/lab7/RepairService';
import PageServiceTimer from "../../../shared/PageServiceTimer";
import Popup from "../../../shared/Popup";
import { navigate } from "@reach/router";

class AICodeRepair extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rewardvalue: null,
            costvalue: null,
            rewarderror: null,
            costerror: null,
            repairerror: true,
            componentName: "AICodeRepair"
        };
    }

	componentWillMount() {
		const { data } = this.props;
		// this.setState({
		// 	rewardvalue: data.rewardvalue,
		// 	costvalue: data.costvalue,
		// });
	}

    validateRepair(input) {
        let error = false;
        Object.keys(this.state).map(name => {
            switch (name) {
                case "rewardvalue":
                    if (this.state[name] !== "File sensitivity level") {
                        error = true;
                        this.setState({ rewarderror: "Must be 'file sensitivity level'" });
                    }
                    else {
                        this.setState({ rewarderror: null });
                    }
                    break;
                case "costvalue":
                    if (this.state[name] !== "Threat level") {
                        error = true;
                        this.setState({ costerror: "Must be 'threat level'" });
                    }
                    else {
                        this.setState({ costerror: null });
                    }
                    break;
                default:
                    break;
            }
            return [];
        })
        this.setState({ repairerror: error }, () => this.handlesubmit(input));
    }

    handleSubmit(event) {
        const { handlers } = this.props;
        const {
            rewardvalue,
            costvalue
        } = this.state;

        event.preventDefault();
        if (!this.state.repairerror) {
            const repair = JSON.stringify({
                rewardvalue,
                costvalue
            });
            RepairService.submitRepair(
                this.state.componentName, repair
            );
            handlers.updatePopup('The repairs have been made.');
        } else {
            handlers.updatePopup('Errors in Repair. Please fix');
        }
        handlers.updateRepairPageLayout(
            rewardvalue,
            costvalue
        );
        handlers.closeRepair();
        setTimeout(() => {
            handlers.updatePopup('');
        }, 6000);
    }

    handleNav() {
        navigate("/Lab7/Exercise/ImprovedAISimulation")
    }

    changeHandler(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        const { visible, handlers, state, data, actions } = this.props;
        return (
            <div>
                <p>AI Code Repair</p>
                {/* <Popup message={state.app7.popupMessage} handler={actions.updatePopup} error={this.state.repairerror} /> */}

                <button className="btn btn-second btn-xl text-uppercase leftButton" onClick={handlers.openRepair} key="repair">
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

                {visible &&
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
								&#47;&#47; This is where you can can add headings and lists to allow easier reading
							</span>
							</div>
							<div className="code_editor__line">
								<span className="code_editor__line--purple">import&nbsp;</span>
								<span className="code_editor__line--blue">React</span>
								<span className="code_editor__line--gold">,&nbsp;</span>
								<span className="code_editor__line--gold">&#123;</span>
								<span className="code_editor__line--blue">&nbsp;Component&nbsp;</span>
								<span className="code_editor__line--gold">&#125;&nbsp;</span>
								<span className="code_editor__line--purple">from&nbsp;</span>
								<span className="code_editor__line--orange">'react'</span>
								<span className="code_editor__line--gold">;</span>
							</div>

							<div className="code_editor__line">&nbsp;</div>

							<div className="code_editor__line">
								<span className="code_editor__line--blue">class&nbsp;</span>
								<span className="code_editor__line--green">DementiaAccessible&nbsp;</span>
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
								<span className="code_editor__line--darkgreen">&#47;&#47;Enter 'h1' into the input below</span>
							</div>

							<div className="code_editor__line code_editor__line-background--light">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;</span>
								<span>
								<input
									name="h1value"
									type="text"
									className={`htmlinput ${this.state.h1error? "form-error-input": ""}`}
									defaultValue={data.h1value}
									onChange={this.changeHandler.bind(this)}
									required
									title="must enter h1"
								/>
							</span>
								<span className="code_editor__line--darkblue">&#62;</span>
								<span className="code_editor__line--white"> 3.0 Dementia </span>
								<span className="code_editor__line--darkblue">&#60;</span>
								<span className="code_editor__line--darkblue">/{this.state.h1value}</span>
								<span className="code_editor__line--darkblue">&#62;</span>
							</div>
							{ this.state.h1error &&
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className='form-error'>{this.state.h1error}</span>
							</div>
							}
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;</span>
								<span className="code_editor__line--darkblue">p</span>
								<span className="code_editor__line--darkblue">&#62;</span>
								<span className="code_editor__line--white"> Some of the symptoms of dementia include: </span>
								<span className="code_editor__line--darkblue">&#60;</span>
								<span className="code_editor__line--darkblue">/p</span>
								<span className="code_editor__line--darkblue">&#62;</span>
							</div>
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;</span>
								<span className="code_editor__line--darkblue">h2</span>
								<span className="code_editor__line--darkblue">&#62;</span>
								<span className="code_editor__line--white"> 3.0.1 Symptoms </span>
								<span className="code_editor__line--darkblue">&#60;</span>
								<span className="code_editor__line--darkblue">/h2</span>
								<span className="code_editor__line--darkblue">&#62;</span>
							</div>
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkgreen">&#47;&#47;Enter 'body' into the input below</span>
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
										className={this.state.classerror? "form-error-input": ""}

									/>
								</span>
								<span className="code_editor__line--darkblue">/&#62;</span>
							</div>
							{ this.state.classerror &&
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className='form-error'>{this.state.classerror}</span>
							</div>
							}
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkgreen">&#47;&#47;Enter 'ul' into the input below</span>
							</div>
							<div className="code_editor__line code_editor__line-background--light">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;</span>
								<span>
									<input
										name="ulvalue"
										type="text"
										className={`htmlinput ${this.state.ulerror? "form-error-input": ""}`}
										defaultValue={data.ulvalue}
										onChange={this.changeHandler.bind(this)}
										title="must enter ul"
									/>
								</span>
								<span className="code_editor__line--darkblue">/&#62;</span>
							</div>
							{ this.state.ulerror &&
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className='form-error'>{this.state.ulerror}</span>
							</div>
							}
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;li&#62;</span>
								<span className="code_editor__line--white"> Difficulty remembering </span>
								<span className="code_editor__line--darkblue">&#60;/li&#62;</span>
							</div>
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;li&#62;</span>
								<span className="code_editor__line--white"> Difficulty organizing thoughts </span>
								<span className="code_editor__line--darkblue">&#60;/li&#62;</span>
							</div>
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;li&#62;</span>
								<span className="code_editor__line--white"> Difficulty working within time limits </span>
								<span className="code_editor__line--darkblue">&#60;/li&#62;</span>
							</div>
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;li&#62;</span>
								<span className="code_editor__line--white"> Visual processing difficulty </span>
								<span className="code_editor__line--darkblue">&#60;/li&#62;</span>
							</div>
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkblue">&#60;/{this.state.ulvalue}&#62;</span>
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
								<span className="code_editor__line--blue">DementiaAccessible</span>
								<span>;</span>
							</div>
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
				}


            </div>
        );
    }
}



export default AICodeRepair;