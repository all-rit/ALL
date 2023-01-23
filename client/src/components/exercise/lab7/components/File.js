/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import {LOCKED_FILE, OPEN_FILE} from '../../../../constants/lab7';
import OPEN from '../../../../assets/images/lab7/unlock.png';
import LOCKED from '../../../../assets/images/lab7/lock.png';
import '../../../../assets/stylesheets//components/File.scss';


class File extends Component {
    constructor(props) {
        super(props);
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
        return this.state.accessStatus;
    }

    getAccessStatusIcon(accessStatus) {
        if (accessStatus === LOCKED_FILE) {
            return LOCKED;
        } else {
            return OPEN;
        }
    }

    render() {
        const {data} = this.props;
        return (
            <div className='file'>
                <div className='fileInfo'>
                    <p className='fileName'>{data.fileName}</p>
                    <img className='accessStatus' src={this.getAccessStatusIcon(data.accessStatus)}></img>
                    <h6 className='sensitivityLevel'>Security Level {data.sensitivityLevel}</h6>
                    <p className='content'>{data.content} </p>
                </div>
            </div>
        );
    }

}

export default File;