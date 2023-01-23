/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import File from './File';
import '../../../../assets/stylesheets/components/Files.scss'

class Files extends Component {

    render() {
        const { files } = this.props;
        const fileList = Object.keys(files).map((key) => {
            return (
                <File
                    key={key}
                    data={files[key]}
                />
            );
        });
        return <div className="simulation_files">{fileList}</div>;
    }
}

export default Files;