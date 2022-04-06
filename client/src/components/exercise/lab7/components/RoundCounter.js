import React from 'react';
import '../../../../assets/stylesheets/components/RoundCounter.scss';

const RoundCounter = (roundNumber) => {
    return (
        <div className='roundCounter'>
            <h4 className='roundText'>Round 0 of 10</h4>
        </div>
    )
}
export default RoundCounter;