import React,{Component} from 'react';
import ProgressBarBar from "./progressBarBar";
class ProgressBar extends Component{
    
    render(){
        const {barData,completed,total,percentage} = this.props;
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

export default ProgressBar;
