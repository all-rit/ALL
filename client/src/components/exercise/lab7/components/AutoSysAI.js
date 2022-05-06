import React, { Component } from "react";
import '../../../../assets/stylesheets/components/AutoSysAI.scss'
import { AI_CORRECT, AI_INCORRECT } from "../../../../constants/lab7";

class AutoSysAI extends Component {
    constructor(props) {
        super(props)
    }

    makeCorrectDecision(fileSensitivityLvl, threatLvl){
        return (fileSensitivityLvl / threatLvl);
    }

    makeDecision(fileSensitivityLvl, threatLvl) {
        return (fileSensitivityLvl * 2 / threatLvl);
    }

    evaluateChoice(fileSensitivityLvl, threatLvl){
        const expected = this.makeCorrectDecision(fileSensitivityLvl, threatLvl);
        const actual = this.makeDecision(fileSensitivityLvl, threatLvl);
        if (actual === expected) {
            return AI_CORRECT
        } else {
            return AI_INCORRECT
        }
    }

    render() {
        const { files, threatLvl } = this.props;
        return (
            <div className="displays">
                <div className="fileDisplay">
                    <p> {this.evaluateChoice(files[1].sensitivityLevel, threatLvl)}</p>
                </div>
                <div className="fileDisplay">
                    <p> {this.evaluateChoice(files[2].sensitivityLevel, threatLvl)}</p>

                </div>
                <div className="fileDisplay">
                    <p> {this.evaluateChoice(files[3].sensitivityLevel, threatLvl)}</p>

                </div>
                <div className="fileDisplay">
                    <p> {this.evaluateChoice(files[4].sensitivityLevel, threatLvl)}</p>

                </div>
                <div className="fileDisplay">
                    <p> {this.evaluateChoice(files[5].sensitivityLevel, threatLvl)}</p>

                </div>
            </div>
        )
    }
}
export default AutoSysAI;