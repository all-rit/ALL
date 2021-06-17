import React from "react";
import ProfileHeader from "./profileHeader";

const Profile = (props) => {

    return (
        <div className="profile container">
            <h3>This is the profile page!</h3>
            <ProfileHeader user={props}/>
        </div>
    );
};

export default Profile;