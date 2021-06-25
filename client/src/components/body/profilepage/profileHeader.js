import React from "react";
import ProgressBar from "./progressBar";

const ProfileHeader = (props) => {
    const{user} = props.user;
    console.log(user);

    return (
        <div >
            {user &&
                <ul className="profileHeader">
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
                        <li>
                            <ProgressBar
                                barData={[true,true,false,true,true]}
                                total={5}
                                completed={4}
                                percentage={false}
                            />
                        </li>
                </ul>
            }
        </div>
    );
}

export default ProfileHeader;