import React, { Component } from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../components/PageServiceTimer";
import Form from "../../components/Form"
import {AccessibleMessage} from '../../../../../constants/lab5'

class FormInaccessible extends Component {
    render() {
        const {actions} = this.props;
        return (

                <div>
                    <div className= "cognitive_instructions">
                        Complete the form below
                    </div>
                    <Form url={'/FormGuidance'}/>
                    <div className='flex float-right'>
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

export default FormInaccessible;
