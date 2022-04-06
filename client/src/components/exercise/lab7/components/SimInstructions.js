import React from 'react';
import '../../../../assets/stylesheets/components/SimInstructions.scss';

const SimInstructions = (roundNumber) => {
    if (roundNumber === 0) {
        return (
            <div className='simInstr'>
                <h2>Click the Start button to begin the simulation</h2>
            </div>
        );
    } else {
        return (
            <div className='simInstr'>

                <h2>Click the Start button to begin the simulation</h2>
            </div>
            // <h2>_____ threat detected!</h2>
        );
    }
}
export default SimInstructions;