import React, { Component } from "react";
import PageServiceTimer from "../../components/PageServiceTimer";
import Form from "../../components/Form"
import {navigate} from "@reach/router";

class FormAccessible extends Component {
    constructor(props) {
        super(props);
        this.state={
            showNext: false,
            componentName:"FormAccessible"
        }
    }
    showNext = () => {
        this.setState({ showNext: true});
    };
    handleNav(){
        navigate("/Lab5/Game/GameEnd");
    }
    render() {
        const {actions, state} = this.props;
        return (

                <div>
                    <div className= "cognitive_instructions">
                        Complete the form below
                    </div>
                    <Form url={'/FormGuidance'} showNext={this.showNext} errorNotification={state.repair5.errorNotification} successNotification={state.repair5.successNotification} borderColor={state.repair5.borderColor}/>
                    {this.state.showNext &&
                        <div className='flex float-right'>
                            <button
                                className="btn btn-primary text-black btn-xl text-uppercase js-scroll-triggergreen"
                                onClick={this.handleNav}
                                key="next"
                            >
                                Next
                            </button>
                        </div>
                    }
                    <PageServiceTimer actions={actions} name={this.state.componentName}/>
                </div>
        );
    }
}

export default FormAccessible;
