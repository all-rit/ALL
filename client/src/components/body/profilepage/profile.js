import React from "react";
import ProfileHeader from "./profileHeader";

const Profile = (props) => {

    return (
        <div className="profile container">
            {props.user?.firstname !== null
                ? <ProfileHeader user={props}/>
                : <p>You are currently not logged in.</p>

            }

        </div>
    );
};

export default Profile;