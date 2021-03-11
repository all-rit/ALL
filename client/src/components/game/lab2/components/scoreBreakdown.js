import React from 'react';
import './gameStyle.css';

/*
Component for displaying a score breakdown table to the user on the replay page
*/
const ScoreBreakdown = () => {
  return(
    <div>
      <p style={{marginBottom: '0px', marginTop: '0px', fontSize: '25px'}}>
        Score Breakdown
      </p>
      <div>
        <table>
          <tbody>
            <tr>
              <th rowSpan="2" colSpan="2">Type of Click</th>
              <th colSpan="8">Time in Seconds</th>
            </tr>
            <tr>
              <td>.01-.10</td>
              <td>.11-.20</td>
              <td>.21-.30</td>
              <td>.31-.40</td>
              <td>.41-.50</td>
              <td>.51-.60</td>
              <td>.61-.70</td>
              <td>.71-1.0</td>
            </tr>
            <tr>
              <td colSpan="2">Correct Click</td>
              <td>100 pts</td>
              <td>75 pts</td>
              <td>50 pts</td>
              <td>35 pts</td>
              <td>25 pts</td>
              <td>15 pts</td>
              <td>10 pts</td>
              <td>5 pts</td>
            </tr>
            <tr>
              <td colSpan="2">Incorrect Click</td>
              <td colSpan="8">-50 pts</td>
            </tr>
            <tr>
              <td colSpan="2">No Click on Correct Circle</td>
              <td colSpan="8">-100 pts</td>
            </tr>
            <tr>
              <td colSpan="2">No Click on Incorrect Circle</td>
              <td colSpan="8">25 pts</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ScoreBreakdown;
