import React, { Component } from 'react';
import RepairService from '../../../../../services/lab7/RepairService';
import PageServiceTimer from "../../../shared/PageServiceTimer";
import AISimulation from '../Simulation/AISimulation';
import { navigate } from "@reach/router";

class ImprovedAISimulation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div>
                Improved AI Simulation
            </div>
        )
    }

}

export default ImprovedAISimulation;