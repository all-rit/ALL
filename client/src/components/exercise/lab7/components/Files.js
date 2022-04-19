import React, { Component } from 'react';
import File from './File';
import '../../../../assets/stylesheets/components/Files.scss'
import { fileMockData } from './mockData/fileMockData';

class Files extends Component {

    randomizeFile() {
        const num = Math.floor(Math.random() * fileMockData.length);
        return fileMockData[num];
    }

    render() {
        // const { visible, elements } = this.props;
        // const fileElements = Object.keys(elements).map((file) => {
        //     return (
        //         <File
        //             key={file}
        //             number={file}
        //             state={elements[file]}
        //         />
        //     );
        // });
        // if (!visible) return null;

        // return <div className="simulation_files">{fileElements}</div>;

        return (
            <div className="files">
                <File/>
                <File/>
                <File/>
                <File/>
                <File/>
            </div>
        )
    }
}

export default Files;