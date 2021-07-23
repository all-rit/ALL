import React,{Component} from 'react';
import ProgressBarBar from "./progressBarBar";
class ProgressBar extends Component{
    
    render(){
        const {barData,completed,percentage} = this.props;
        const total = barData.length;
        function renderBars(){
            return barData.map((data,index)=>{
                return(
                    <ProgressBarBar key={index}
                        data={data}
                        index={index}
                    />
                )
            })
        }
        if(total===0){
            return(
                <ul class="progressBarContainer">
                    <li><h3> No Labs Assigned </h3></li>
                </ul>
            )
        } else{
            return(
                <ul class="progressBarContainer">
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

}

export default ProgressBar;
