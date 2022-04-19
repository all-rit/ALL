import React, { Component } from "react";
import File from "./File";
import '../../../../assets/stylesheets/components/AutoSysAI.scss'
import { AI_CORRECT } from "../../../../constants/lab7";

class AutoSysAI extends Component {
    constructor(props) {
        super(props)
    }

    makeDecision(file, threatLvl) {
        switch (threatLvl) {
            case 3:
                if (file.getSensitivityLvl >= 4) {
                    file.changeAccess();
                }
            case 2:
                if (file.getSensitivityLvl >= 2) {
                    file.changeAccess();
                }
            case 1:
                if (file.getSensitivityLvl == 1) {
                    file.changeAccess();
                }
        }
        return AI_CORRECT;
    }

    render() {
        const {files, threatLvl} = this.props;
        return (
            <div className="displays">
                <div className="fileDisplay">
                    <p> {this.makeDecision(files[0], threatLvl)}</p>
                </div>
                <div className="fileDisplay">
                    <p> {this.makeDecision(files[1], threatLvl)}</p>

                </div>
                <div className="fileDisplay">
                    <p> {this.makeDecision(files[2], threatLvl)}</p>

                </div>
                <div className="fileDisplay">
                    <p> {this.makeDecision(files[3], threatLvl)}</p>

                </div>
                <div className="fileDisplay">
                    <p> {this.makeDecision(files[4], threatLvl)}</p>

                </div>
            </div>
        )
    }
}
export default AutoSysAI;