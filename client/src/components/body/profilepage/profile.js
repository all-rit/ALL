import React from "react";
import ProfileHeader from "./profileHeader";
//import ProgressBar from "./progressBar";
import labInformation from "../landingpage/lab/labInformation";
import Lab from "../landingpage/lab/lab";
import {actions} from "../../../reducers/MainReducer";

function renderLabData() {
    return labInformation.map((labInfo, index) => {
        const { alt,lab, name, bio , image} = labInfo //destructuring
        return (
            <Lab
                key={index}
                alt= {alt}
                lab={lab}
                name= {name}
                bio={bio}
                image= {image}
                actions={actions}
            />
        );
    })
}
const Profile = (props) => {

    return (
        <div className="profile container">
            {props.user?.firstname !== null
                ? <ProfileHeader user={props}/>
                : <p>You are currently not logged in.</p>

            }
            <h4>My Enrolled Classes</h4>
            <div className="enrolled-classes">
                <p>Classes the user is enrolled in</p>
            </div>

            <h4>In Progress Modules</h4>
            <br/>
            <div className="landingpage__row">
                {renderLabData()}
            </div>

            <h4>To-do Modules</h4>
            <br/>
            <div className="landingpage__row">
                {renderLabData()}
            </div>

            <h4>Completed Modules</h4>
            <br/>
            <div className="landingpage__row">
                {renderLabData()}
            </div>

        </div>
        
    );
};

export default Profile;