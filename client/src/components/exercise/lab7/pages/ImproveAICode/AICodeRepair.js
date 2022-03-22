import React, { Component } from 'react';
import RepairService from '../../../../../services/lab7/RepairService';
import PageServiceTimer from "../../../shared/PageServiceTimer";
import Popup from "../../../shared/Popup";
import { navigate } from "@reach/router";

class AICodeRepair extends Component {
    constructor(props) {
        super(props);
    }

    handleNav() {
        navigate("/Lab7/Exercise/ImprovedAISimulation")
    }

    render() {
        const { visible, handlers, state, data, actions } = this.props;
        return (
            <div>
                <p className="playthrough__sentence">AI Code Repair</p>
                <button className="btn btn-second btn-xl text-uppercase  leftButton"  key="repair">
                    Repair
                </button>
                <button
                    className="btn btn-primary text-black btn-xl text-uppercase "
                    onClick={this.handleNav}
                    key="Next"
                
                >
                    Next
                </button>
            </div>
        );
    }
}

// class AICodeRepair extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             rewardValue: null,
//             costValue: null,
//             rewardError: null,
//             costError: null,
//             repairError: true,
//             componentName: "AICodeRepair"
//         }
//     }

//     componentDidMount() {
//         const { data } = this.props;
//         this.state({
//             rewardValue: data.rewardValue,
//             costValue: data.costValue
//         });
//     }

//     validateRepair(input) {
//         let error = false;
//         Object.keys(this.state).map(name => {
//             switch (name) {
//                 case "rewardValue":
//                     if (this.state[name] !== "File sensitivity level") {
//                         error = true;
//                         this.setState({ rewardError: "Must be 'file sensitivity level'" });
//                     }
//                     else {
//                         this.setState({ rewardError: null });
//                     }
//                     break;
//                 case "costValue":
//                     if (this.state[name] !== "Threat level") {
//                         error = true;
//                         this.setState({ costError: "Must be 'threat level'" });
//                     }
//                     else {
//                         this.setState({ costError: null });
//                     }
//                     break;
//                 default:
//                     break;
//             }
//             return [];
//         })
//         this.setState({ repairError: error }, () => this.handlesubmit(input));
//     }

//     handleSubmit(event) {
//         const { handlers } = this.props;
//         const {
//             rewardValue,
//             costValue
//         } = this.state;

//         event.preventDefault();
//         if (!this.state.repairerror) {
//             const repair = JSON.stringify({
//                 rewardValue,
//                 costValue
//             });
//             RepairService.submitRepair(
//                 this.state.componentName, repair
//             );
//             handlers.updatePopup('The repairs have been made.');
//         } else {
//             handlers.updatePopup('Errors in Repair. Please fix');
//         }
//         handlers.updateRepairPageLayout(
//             rewardValue,
//             costValue
//         );
//         handlers.closeRepair();
//         setTimeout(() => {
//             handlers.updatePopup('');
//         }, 6000);
//     }

//     changeHandler(event) {
//         const name = event.target.name;
//         const value = event.target.value;
//         this.setState({
//             [name]: value
//         });
//     }

//     handleNav() {
//         navigate("/Lab7/Exercise/ImprovedAISimulation")
//     }

//     render() {
//         const { visible, handlers, state, data, actions } = this.props;
//         return (
//             <div>
//                 AI Code Repair
//                 <Popup message={state.app5.popupMessage} handler={actions.updatePopup} error={this.state.repairerror} />

//                 <button className="btn btn-second btn-xl text-uppercase  leftButton" onClick={handlers.openRepair} key="repair">
//                     Repair
//                 </button>
//                 <button
//                     className="btn btn-primary text-black btn-xl text-uppercase "
//                     onClick={this.handleNav}
//                     key="Next"
//                     disabled={this.state.repairError}
//                 >
//                     Next
//                 </button>
//             </div>
//         );
//     }

// }

export default AICodeRepair;