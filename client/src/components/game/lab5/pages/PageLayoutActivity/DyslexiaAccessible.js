import React, { Component } from "react";
import { navigate } from "@reach/router";
import Timer from "../../components/Timer";
import PageServiceTimer from "../../components/PageServiceTimer";
import {time} from '../../../../../constants/lab5'
class DyslexiaAccessible extends Component {
    handleNav() {
        navigate("/Lab5/Game/DyslexiaAccessibleKnowledgeCheck");
    }
    render() {
        const {actions} = this.props;
        return (

                <div>
                    <div className= "cognitive_instructions">
                    Read the following information about Dyslexia from w3.org
                    </div>
                    <div className= "cognitive_information">
                        <div className ="heading">
                            1.0 Dyslexia
                        </div>
                    <div >
                    Dyslexia is a syndrome best known for its effect on the development of literacy and language-related skills. It does not imply low intelligence or poor educational potential.
                    </div>
                        <div className="subheading">
                            1.0.1 Symptoms
                        </div>
                        <div >Common symptoms are:</div>
                        <ul>
                            <li>
                                Slow and laborious reading
                            </li>
                            <li>
                                Concentration fluctuates
                            </li>
                            <li>
                                Difficulty remembering information
                            </li>
                            <li>
                                Difficulty working within time limits
                            </li>
                        </ul>
                        <div className="subheading">
                            1.0.2 Content optimized for this group
                        </div>
                        <div >Content made for people with dyslexia tends to have: </div>
                        <ul >
                            <li>
                                Icons to visually reinforce structure and what each section is
                            </li>
                            <li>
                                Short paragraphs, short sentences
                            </li>
                            <li>
                                Well-structured text with headings
                            </li>
                            <li>
                                Minimalistic-navigation system
                            </li>
                        </ul>
                    </div>
                    <div className='flex'>
                        <Timer seconds={time} link="/Lab5/Game/DyslexiaAccessibleKnowledgeCheck"/>
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

export default DyslexiaAccessible;
