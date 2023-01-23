/* eslint-disable react/prop-types */

import React, {Component} from "react";
import '../../../../assets/stylesheets/components/AutoSysAI.scss'
import {AI_CORRECT, AI_INCORRECT} from "../../../../constants/lab7";

class AutoSysAI extends Component {
    constructor(props) {
        super(props)
    }


    /*
        - if threat level >= sensitivity level, then shut off access to file
        - if threat level < sensitivity level, allow access
        - decision-making by system is based on utility (sensitivity / threat)
        - goal is obtain a high utility
            - if utility is
     */
    evaluateChoice(expectedUtility, actualUtility) {
        return actualUtility === expectedUtility ? <span className={"correctAnswer"}>{AI_CORRECT}</span> :
            <span className={"wrongAnswer"}>{AI_INCORRECT}</span>;
    }

    render() {
        const {files} = this.props;
        return (
            <div className="displays">
                {files.map(({fileName, expectedUtility, actualUtility}) => {
                    return (
                        <div key={fileName} className="fileDisplay">
                            <p>{this.evaluateChoice(expectedUtility, actualUtility)}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default AutoSysAI;