import React, { useEffect,useState } from "react";
import UserLabService from "../../services/UserLabService";
import LabService from "../../services/LabService";
import { Pie } from "react-chartjs-2";
import useScroll from "../../use-hooks/useScroll";

const Reading = (props) => {
    const {user,labID}=props;
    const [readingData,setReadingData] = useState('');

    useScroll();
    useEffect(() => {
        UserLabService.complete_reading(labID);
        if(user?.firstname !== null && user!==null){
            UserLabService.user_complete_reading(user.userid,labID);
        }   
        LabService.getLabReading(labID).then((data)=>{
            setReadingData(data[0].reading)
            console.log(data[0].reading)
        })
    }, [user,labID]);

    return (
        <div className="study">
            {!readingData ? <div>Loading....</div>:
                <>
                    <h3>{readingData?.piechart.header}</h3>
                    <div className="flex">
                        <Pie data={readingData?.piechart.data} height={100} />
                    </div>
                    {readingData?.piechart.caption !== "" ?
                        readingData?.piechart.caption.map((data)=>{
                            return(
                            <div id={"caption"}>
                                {data}
                            </div> 
                            )
                        }) :<></>               
                    }
                </> 
            }
        </div>
  );
};

export default Reading;
