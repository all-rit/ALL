import React, { Component } from "react";
import File from "./File";
import '../../../../assets/stylesheets/components/AutoSysAI.scss'
import { AI_CORRECT, AI_INCORRECT } from "../../../../constants/lab7";

class AutoSysAI extends Component {
    constructor(props) {
        super(props)
    }

    makeCorrectDecision(file, threatLvl){
        const sensitivityLvl = file.getSensitivityLvl;
        console.log((sensitivityLvl / threatLvl))
        return (sensitivityLvl / threatLvl);
    }

    makeDecision(file, threatLvl) {
        file.changeAccess();
        return (file.getSensitivityLvl() / threatLvl);
        // switch (threatLvl) {
        //     case 3:
        //         if (sensitivityLvl >= 4) {
        //             return file.changeAccess();
        //         }
        //     case 2:
        //         if (sensitivityLvl >= 2) {
        //             return file.changeAccess();
        //         }
        //     case 1:
        //         if (sensitivityLvl == 1) {
        //             return file.changeAccess();
        //         }
        //     default:
        //         return null;
        // }
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
                    <p> {this.evaluateChoice(files[0], threatLvl)}</p>
                </div>
                <div className="fileDisplay">
                    <p> {this.evaluateChoice(files[1], threatLvl)}</p>

                </div>
                <div className="fileDisplay">
                    <p> {this.evaluateChoice(files[2], threatLvl)}</p>

                </div>
                <div className="fileDisplay">
                    <p> {this.evaluateChoice(files[3], threatLvl)}</p>

                </div>
                <div className="fileDisplay">
                    <p> {this.evaluateChoice(files[4], threatLvl)}</p>

                </div>
            </div>
        )
    }
}
export default AutoSysAI;