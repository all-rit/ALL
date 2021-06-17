import React from "react";

const ProfileHeader = (props) => {
    const{user} = props.user;
    // const initial = user.firstname.charAt(0).toUpperCase();
    console.log(user);

    return (
        <div className="profileHeader">
            {user &&
                <div>
                    <div className="profileHeader__logo">
                        {user.firstname.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        User: {user.firstname} {user.lastinitial}.<br/>
                        Email: {user.email1}
                    </div>
                </div>

            }
        </div>
    );
}

export default ProfileHeader;