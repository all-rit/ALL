import React from 'react';
import '../../../../assets/stylesheets/components/Score.scss'

const Score = ({ totalScore, intrusions, protectedTP, incorrectFP }) => {
    return (
        <div className='scoreTally'>
            <div className="scoreDetails">
                <p className = "totalScore">Total Score: {totalScore}</p>

                <p className = "scoreItem">Intrusions: {intrusions}</p>
                <p className = "scoreItem">Protected (TP): {protectedTP}</p>
                <p className = "scoreItem">Incorrect (TP): {incorrectFP}</p>
            </div>
        </div>
    )
}
export default Score;