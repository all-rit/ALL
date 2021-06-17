import React from "react";

const ProfileHeader = (props) => {
    const{user} = props.user;
    // const initial = user.firstname.charAt(0).toUpperCase();
    console.log(user);

    return (
        <div >
            {user &&
                <div className="profileHeader">
                    <div className="profileHeader__logo">
                        {user.firstname.charAt(0).toUpperCase()}
                    </div>
                    <h3>
                        {user.firstname} {user.lastinitial}.<br/>
                    </h3>
                </div>
            }
        </div>
    );
}

export default ProfileHeader;