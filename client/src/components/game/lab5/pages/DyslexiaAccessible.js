import React, { Component } from "react";
import { navigate } from "@reach/router";
import Timer from "../components/Timer";

class DyslexiaAccessible extends Component {
    handleStart() {
        navigate("/Lab5/Game/DyslexiaAccessible");
    }

    render() {
        // const {actions, state} = this.props;
        return (

                <div>
                    <div class= "cognitive_instructions">
                    Read the following information about Dyslexia from w3.org
                    </div>
                    <div class= "cognitive_information">
                        <div class ="heading">
                            1.0 Dyslexia
                        </div>
                    <div class="information">
                    Dyslexia is a syndrome best known for its effect on the development of literacy and language-related skills. It does not imply low intelligence or poor educational potential.
                    </div>
                        <div class="subheading">
                            1.0.1 Symptoms
                        </div>
                        <div className="information">Common symptoms are:</div>
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
                        <div class="information">Content made for people with dyslexia tends to have: </div>
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
                    <Timer seconds={25}/>
                </div>
        );
    }
}

export default DyslexiaAccessible;
