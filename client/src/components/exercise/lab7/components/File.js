import React, {Component} from 'react';
import { OPEN_FILE, LOCKED_FILE } from '../../../../constants/lab7';

class File extends Component {
    constructor(props){
        super(props);
        this.state = {
            fileName: "",
            content:[],
            accessStatus: OPEN_FILE,
            sensitivityLvl: 0
        };
    };

    // take data from dataset and create file
    setData(data){
        this.state.fileName = data.fileName;
        this.state.content = data.content;
        this.state.accessStatus = data.accessStatus;
        this.state.sensitivityLvl = data.sensitivityLvl;
    };

    changeAccess() {
        if (this.state.accessStatus === OPEN_FILE){
            this.state.accessStatus = LOCKED_FILE;
        } else {
            this.state.accessStatus = OPEN_FILE;
        }
    }

    render(){
        return(
            <p>
                FILE
            </p>
        );
    }

}

export default File;