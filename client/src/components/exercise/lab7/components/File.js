import React, { Component } from 'react';
import { OPEN_FILE, LOCKED_FILE } from '../../../../constants/lab7';
import OPEN from '../../../../assets/images/lab7/unlock.png';
import LOCKED from '../../../../assets/images/lab7/lock.png';
import { fileMockData } from './mockData/fileMockData';
import '../../../../assets/stylesheets//components/File.scss';


class File extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: "",
            content: [],
            accessStatus: OPEN_FILE,
            accessStatusIcon: OPEN,
            sensitivityLvl: 0
        };
        };

    // gets data and creates a file
    randomizeFile() {
        const num = Math.floor(Math.random() * fileMockData.length);
        // this.setData(fileMockData[num]);
        return fileMockData[num];
    }

    // sets data from dataset
    setData(data) {
        this.setState({
            fileName: data.fileName,
            content: data.content,
            accessStatus: data.accessStatus,
            sensitivityLvl: data.sensitivityLvl
        })
    };

    changeAccess() {
        if (this.state.accessStatus === OPEN_FILE) {
            this.setState({
                accessStatus: LOCKED_FILE,
                accessStatusIcon: LOCKED
            })
        } else {
            this.setState({
                accessStatus: OPEN_FILE,
                accessStatusIcon: OPEN
            })
        }
        console.log(this.state.accessStatus)
        return this.state.accessStatus;
    }

    getSensitivityLvl(){
        return this.state.sensitivityLvl;
    }

    getAccessStatusIcon(accessStatus) {
        if (accessStatus === LOCKED_FILE){
            return LOCKED;
        } else {
            return OPEN;
        }
    }

    render() {
        const data = this.randomizeFile();
        return (
            <div className='file'>
                <div className='fileInfo'>
                    <p className='fileName'>{data.fileName}</p>
                    <img className='accessStatus' src={this.getAccessStatusIcon(data.accessStatus)}></img>
                    <h6 className='sensitivityLevel'>{data.sensitivityLevel}</h6>
                    <p className='content'>{data.content} </p>
                </div>
            </div>
        );
    }

}

export default File;