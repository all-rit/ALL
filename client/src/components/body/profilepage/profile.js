import React from "react";
import ProfileHeader from "./profileHeader";
import ProgressBar from "./progressBar";
const Profile = (props) => {

    return (
        <div className="profile container">
            {props.user?.firstname !== null
                ? <ProfileHeader user={props}/>
                : <p>You are currently not logged in.</p>

            }
            <h1>TEST</h1>
            <ProgressBar
                barData={[true,true,false,true]}
            />
        </div>
        
    );
};

export default Profile;