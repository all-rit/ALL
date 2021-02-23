import React, {Component} from 'react';

class AppInstructions extends Component {

    render() {
        return <div><p className="app__instructions">{this.props.instructions}</p>
                <p className={this.props.class}>{this.props.instructions2}</p>
        </div>;
    }
}

export default AppInstructions;
