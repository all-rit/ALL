import React, { Component } from "react";
import { navigate } from "@reach/router";
import Timer from "../../components/Timer";
import PageServiceTimer from "../../components/PageServiceTimer";
import {time} from '../../../../../constants/lab5'
class DementiaInaccessible extends Component {
    constructor(props){
        super(props);
        this.state={timerDone:false}
    }
    handleNav() {
        navigate("/Lab5/Game/DementiaInaccessibleKnowledgeCheck");

    }
    timerDone(){
        this.setState({timerDone:true});
    }
    render() {
        const {actions} = this.props;
        return (
                <div>
                    <div className= "cognitive_instructions">
                    Read the following information about Dementia from w3.org
                    </div>
                    <div className= "cognitive_information">
                    {!this.state.timerDone ?
                        <div>
                        <div className ="heading">
                            1.0 Dementia
                        </div>
                    <div className="inaccessible" >
                        Dementia is defined as a severe loss of cognitive abilities that disrupts daily life. Symptoms include difficulty remembering information, difficulty with organizing thoughts, difficulty working within time limits, and visual processing difficulties, which can affect the ability to recognize places. Content optimized for this group includes large, clear buttons with simple graphics and text, limited features, clear, step-by-step instructions, and rapid and direct feedback
                    </div>
                    </div>
                        :
                        <div className="center">
                            Time Has Expired! Click Next to Proceed
                        </div>
                        }
                    </div>
                    <div className='flex'>
                        <Timer seconds={time} timerDone={this.timerDone.bind(this)}/>
                        <button
                            className="btn btn-primary text-black btn-xl text-uppercase js-scroll-triggergreen"
                            onClick = {this.handleNav}
                            key="next"
                        >
                            Next
                        </button>
                    </div>
                    <PageServiceTimer actions={actions} name={this.constructor.name}/>
                </div>
        );
    }
}

export default DementiaInaccessible;
