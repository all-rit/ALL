import React from 'react'
import Questions from './Questions.json'

function DisplayData() {
    const DisplayData=Questions.map(
        (info)=>{
            return(
                <tr>
                    <td>
                        {info.questions.question}
                    </td>
                </tr>
            )
        }
    )
}