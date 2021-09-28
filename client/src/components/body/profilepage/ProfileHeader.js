import React from "react";
import ProgressBar from "./components/ProgressBar";

const ProfileHeader = (props) => {
    const {user,labRecords,toDoLabs} = props;
    let parsedRecords=[];

    if(labRecords){
        labRecords.forEach((lab)=>{
            parsedRecords.push([lab.labName,lab.labcompletiontime])
        })
    }
    if(toDoLabs){
        toDoLabs.forEach((lab)=>{
            parsedRecords.push([lab.labName,null])
        })
    }

   

    return (
        <>
            <ul className="profileHeader">
                {user &&

                            <ul className="profileHeader__userInfo">
                                <li className="profileHeader__logo">
                                    {user.firstname.charAt(0).toUpperCase()}
                                </li>
                                <li>
                                    <h3>
                                        {user.firstname} {user.lastinitial}.<br/>
                                    </h3>
                                </li>
                            </ul>
                }
                {(user && labRecords) ?  
                    <li>
                        <ProgressBar
                            barData={parsedRecords}
                            percentage={false}
                        />
                    </li> 
                    : 
                    <li>  
                    </li>

                }
                           
            </ul>
        </>
    );
}

export default ProfileHeader;