import {Component} from 'react';

class Conditional extends Component {
    render() {
        return !!this.props.if && this.props.children;
    }
}

export default Conditional;
