import React, { Component } from 'react';

class ProgressBar extends Component{
    render(){
        const {barData,completed,total,percentage} = this.props;
        function renderBars(){
            return barData.map((data,index)=>{
                if(data===true){
                    return(
                        <li key={index} class="progressBar__bar progressBar__completed">
                        </li> 
                    )
                } else{
                    return(
                        <li key={index} class="progressBar__bar progressBar__notCompleted">
                        </li>
                    )
                }})
          }
        return(
                <ul>
                    <ul class="progressBar">
                        {renderBars()}
                    </ul>
                        {percentage === true
                            ? <li class="progressBar__info">{((completed/total)*100).toFixed(0)}% completed.</li>
                            : <li class="progressBar__info"> {completed} out of {total} modules completed.</li>
                        }
                </ul>

        );
    }

}

export default ProgressBar;
