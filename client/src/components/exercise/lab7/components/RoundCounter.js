import React from 'react';
import { Component } from 'react';
import '../../../../assets/stylesheets/components/RoundCounter.scss';

class RoundCounter extends Component {
    constructor(props){
        super(props);
        this.roundNumber = props.roundNumber;
    }

    render(){
        
        return (
            <div className='roundCounter'>
                <h4 className='roundText'>Round {this.roundNumber} of 10</h4>
            </div>
        )
    }
}
export default RoundCounter;