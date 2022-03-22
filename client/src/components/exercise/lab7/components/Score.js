import React from 'react';
import './exerciseStyle.css';

const Score = ({ totalScore, intrusions, protectedTP, incorrectFP }) => {
    return (
        <div className='scoreLine'>
            <p className='scoreElement'>Total Score: {totalScore}</p>
            <p className='scoreElement'>Intrusions: {intrusions}</p>
            <p className='scoreElement'>Protected (TP): {protectedTP}</p>
            <p className='scoreElement'>Incorrect (TP): {incorrectFP}</p>
        </div>
    )
}
export default Score;