import React from "react";
import ProgressBar from "./components/progressBar";

const ProfileHeader = (props) => {
    const {user,labRecords} = props;
    let parsedRecords=[];

    if(labRecords){
        labRecords.forEach((lab)=>{
            parsedRecords.push([lab.labName,lab.labcompletiontime])
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
                        Currently, there are no labs assigned to you.
                    </li>

                }
                           
            </ul>
        </>
    );
}

export default ProfileHeader;