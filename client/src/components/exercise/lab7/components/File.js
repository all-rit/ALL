import React, { Component } from 'react';
import { OPEN_FILE, LOCKED_FILE } from '../../../../constants/lab7';
import unlocked from '../../../../assets/images/lab7/unlock.png';
import locked from '../../../../assets/images/lab7/lock.png';
import '../../../../assets/stylesheets//components/File.scss';


class File extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: "",
            content: [],
            accessStatus: OPEN_FILE,
            accessStatusIcon: unlocked,
            sensitivityLvl: 0
        };
    };

    // take data from dataset and create file
    setData(data) {
        this.state.fileName = data.fileName;
        this.state.content = data.content;
        this.state.accessStatus = data.accessStatus;
        this.state.sensitivityLvl = data.sensitivityLvl;
    };

    changeAccess() {
        if (this.state.accessStatus === OPEN_FILE) {
            this.state.accessStatus = LOCKED_FILE;
            this.state.accessStatusIcon = locked;
        } else {
            this.state.accessStatus = OPEN_FILE;
            this.state.accessStatusIcon = unlocked;
        }
    }

    getAccessStatusIcon() {
        return (this.state.accessStatusIcon);
    }

    render() {
        return (
            <div className='file'>
                <div className='fileInfo'>
                    <h5 className='fileName'> File Name</h5>
                    <img className='accessStatus' src={unlocked}></img>
                    <h6 className='sensitivityLevel'>Sensitivity Level</h6>
                    <p className='content'> blah blah</p>
                </div>
            </div>
        );
    }

}

export default File;