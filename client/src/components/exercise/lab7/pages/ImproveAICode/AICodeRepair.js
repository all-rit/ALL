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

    // componentWillMount() {
    //     const { data } = this.props;
    //     this.state({
    //         rewardvalue: data.rewardvalue,
    //         costvalue: data.costvalue
    //     });
    // }

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

                <button className="btn btn-second btn-xl text-uppercase  leftButton"  key="repair">
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



            </div>
        );
    }
}



export default AICodeRepair;