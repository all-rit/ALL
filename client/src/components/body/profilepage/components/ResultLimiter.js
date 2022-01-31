import React,{useState,useEffect} from "react";
import { Button } from "reactstrap";
import StudentProgress from "./StudentProgress";

const ResultLimiter = (props) =>{
    const {resultType,data,assignedLabs,lab} = props;
    const [index,setIndex] = useState(0);
    const [groupedData,setGroupedData] = useState([]);

    useEffect(()=>{
        setGroupedData(dataParser(data))
    },[index,data])

    const decreaseIndex = () =>{
        setIndex(index-1)
    }
    const increaseIndex = () =>{
        setIndex(index+1)
    }

    function dataParser(data){
        let parsedData =[];
        let data_set=[];
        for(let i in data){
            data_set.push(data[i]);
            if(data_set.length === 5){
                parsedData.push(data_set);
                data_set=[];
            } 
        }
        if(data_set.length!==0){
            parsedData.push(data_set);
        }
        return parsedData
    }


    switch(resultType){
        case 'studentLabs':
            if(groupedData.length!==0){
                return(
                    <>
                    <tbody>
                        {groupedData[index].map((student, index) => (
                            <tr key={index}>
                                <td >
                                    <>
                                        <p className="bold">{student.firstname} {student.lastinitial}.<br/></p>
                                        <p className="grey-text">{student.email1}<br/></p>
                                        <p className="grey-text">Enrolled on {student.enrolledDate.split("T")[0]}</p>
                                    </>
                                </td>
                                <td className="assigned-labs">
                                    {assignedLabs.map((lab, index) => (
                                        <div className="assigned-labs__lab-bubble" key={index}>
                                            {lab.labShortName}
                                        </div>
                                    ))
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="limiter__group">
                        {index!==0 ? 
                            <Button tabIndex="0" className="btn btn-second limiter__group__button" onClick={decreaseIndex}>Previous</Button>:<Button tabIndex="0" className="btn btn-second limiter__group__button" disabled={true} >Previous</Button>
                        }
                        <td className="limiter__page">Page {index+1} of {groupedData.length}</td>
                        {index!==(groupedData.length - 1) ? 
                            <Button tabIndex="0" className="btn btn-second limiter__group__button" onClick={increaseIndex}>Next</Button>:<Button tabIndex="0" className="btn btn-second limiter__group__button" disabled={true} >Next</Button>
                        } 
                    </tfoot>
                    </>
                )
            } else{
                return(<div>Loading Data...</div>)
            }
        case 'studentProgress':
            if(groupedData.length!==0){
                return(
                    <>
                    <tbody>
                            {
                                groupedData[index].map((student, index) => (
                                    <tr key={index}>
                                        <StudentProgress student={student} lab={lab} />
                                    </tr>
                                ))
                            }
                    </tbody>
                    <tfoot className="limiter__group">
                        {index!==0 ? 
                            <Button tabIndex="0" className="btn btn-second limiter__group__button" onClick={decreaseIndex}>Previous</Button>:<Button tabIndex="0" className="btn btn-second limiter__group__button" disabled={true} >Previous</Button>
                        }
                        {index!==(groupedData.length-1) ? 
                            <Button tabIndex="0" className="btn btn-second limiter__group__button" onClick={increaseIndex}>Next</Button>:<Button tabIndex="0" className="btn btn-second limiter__group__button" disabled={true} >Next</Button>
                        } 
                    </tfoot>
                    </>
                )
            } else{
                return(<div>No Data Available...</div>)
            }
        default:
            return(<div>Type Error Occurred: Contact Administrator.</div>)
    }
}

export default ResultLimiter;