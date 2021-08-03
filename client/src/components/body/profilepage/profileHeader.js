import React from "react";
import ProgressBar from "./progressBar";

const ProfileHeader = (props) => {
    const {user} = props;
    return (
        <>
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
                                barData={[["Lab 1",true],
                                        ["Lab 2",true],
                                        ["Lab 3",true],
                                        ["Lab 4",true],
                                        ["Lab 5",null]]}
                                percentage={false}
                            />
                        </li>
                </ul>
            }
        </>
    );
}

export default ProfileHeader;