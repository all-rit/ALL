import React from "react";

const Profile = (props) => {
    const{user} = props;
    console.log(user);

    return (
        <div className="profile">
            {user &&
                <p>
                    <br/>
                    This is the profile page! <br/>
                    User: {user.firstname} {user.lastinitial}.
                </p>
            }
        </div>
    );
};

export default Profile;