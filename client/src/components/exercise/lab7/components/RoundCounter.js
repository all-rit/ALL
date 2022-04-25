import React from 'react';
import { Component } from 'react';
import '../../../../assets/stylesheets/components/RoundCounter.scss';

class RoundCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            roundNumber: props.roundNumber
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ roundNumber: this.props.roundNumber }), 100);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render(){
        return (
            <div className='roundCounter'>
                <h4 className='roundText'>Round {this.state.roundNumber} of 10</h4>
            </div>
        )
    }
}
export default RoundCounter;