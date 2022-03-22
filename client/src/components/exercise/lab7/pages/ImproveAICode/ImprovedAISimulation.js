import React, { Component } from 'react';
import RepairService from '../../../../../services/lab7/RepairService';
import PageServiceTimer from "../../../shared/PageServiceTimer";
import AISimulation from '../Simulation/AISimulation';
import { navigate } from "@reach/router";

class ImprovedAISimulation extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(){
        navigate("/Lab7/Exercise/AlterationStart");
    }

    render() {
        
        return (
            <div>
                <p className="playthrough__sentence">Improved AI Simulation</p>
                <button
                    className="btn btn-primary text-black btn-xl text-uppercase"
                    onClick={this.handleSubmit}
                    key="continue"
                >
                    Continue
                </button>
            </div>
        )
    }

}

export default ImprovedAISimulation;