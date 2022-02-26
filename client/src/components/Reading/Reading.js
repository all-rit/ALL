import React, { useEffect,useState } from "react";
import UserLabService from "../../services/UserLabService";
import LabService from "../../services/LabService";
import { Pie } from "react-chartjs-2";
import useScroll from "../../use-hooks/useScroll";
import StudyList from "./studylist";

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
                    {readingData?.description !==''? 
                        <>
                        <h3>{readingData?.description.header}</h3>
                        <p>{readingData?.description.content}</p>
                        </>
                    :<></>    
                    }
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
                        }) 
                        :<></>               
                    }

                    {readingData?.body !== "" ? 
                        readingData?.body.map((data)=>{
                            return(
                                <>
                                    {data.header !==""? <h3>{data.header}</h3>: <></>}
                                    {data.type ===""? 
                                        <>
                                            {data.content.map((content)=>{
                                                return(
                                                    <p>{content}</p>
                                                )
                                            })
                                            }
                                        </>
                                    :<></>
                                    }
                                    {data.type ==="study__list"?
                                        <StudyList data={...data.content}/>
                                    :<></>
                                    }
                                    {data.type ==="non-bullet-list"?
                                        <NonBulletList data={...data.content}/>
                                    :<></>
                                    }
                                </>
                            )
                        })    
                    :<></>
                    }
                    <h4>For more information, please visit the following websites:</h4>
                    <div className="flex">
                        {readingData?.footer !==''?
                            readingData?.footer.links.map((data)=>{
                                return(
                                    <a
                                        href={data.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {data.name}
                                    </a>
                                )
                            }):<></>
                        }
                    </div>
                </> 
            }
        </div>
  );
};

export default Reading;
