import React, { Component } from "react";
import File from "./File";
import '../../../../assets/stylesheets/components/AutoSysAI.scss'
import { AI_CORRECT, AI_INCORRECT } from "../../../../constants/lab7";

class AutoSysAI extends Component {
    constructor(props) {
        super(props)
    }

    makeDecision(file, threatLvl) {
        switch (threatLvl) {
            case 3:
                if (file.getSensitivityLvl >= 4) {
                    return file.changeAccess();
                }
            case 2:
                if (file.getSensitivityLvl >= 2) {
                    return file.changeAccess();
                }
            case 1:
                if (file.getSensitivityLvl == 1) {
                    return file.changeAccess();
                }
            default:
                return null;
        }
    }

    evaluateChoice(expected, actual){
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
                    <p> {this.evaluateChoice()}</p>
                </div>
                <div className="fileDisplay">
                    <p> {this.evaluateChoice()}</p>

                </div>
                <div className="fileDisplay">
                    <p> {this.evaluateChoice()}</p>

                </div>
                <div className="fileDisplay">
                    <p> {this.evaluateChoice()}</p>

                </div>
                <div className="fileDisplay">
                    <p> {this.evaluateChoice()}</p>

                </div>
            </div>
        )
    }
}
export default AutoSysAI;