import React, { Component } from 'react';

class ProgressBar extends Component{
    render(){
        const {barData} = this.props;
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
                <ul class="progressBar">
                    {renderBars()}
                </ul>
        );
    }

}

export default ProgressBar;
