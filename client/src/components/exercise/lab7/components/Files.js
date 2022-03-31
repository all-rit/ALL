import React, {Component} from 'react';
import File from './File';

class Files extends Component {
    render() {
        const { visible, elements } = this.props;
        const fileElements = Object.keys(elements).map((file) => {
            return (
                <File
                    key={file}
                    number={file}
                    state={elements[file]}
                />
            );
        });
        if (!visible) return null;

        return <div className="simulation_files">{fileElements}</div>;
    }
}

export default Files;