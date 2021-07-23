import React, { useEffect, useState }from "react";
import UserService from "../../../services/UserService";

const EnrolledGroups = (props) => {
    const {user} = props;
    const [ enrolledGroups, setEnrolledGroups] = useState([]);

    useEffect(() => {
        if (user) {
            async function fetchGroups() {
                return UserService.getUserEnrolledGroups(user.userid);
            }
            fetchGroups().then((data) => {
                setEnrolledGroups(data);
            });
        }
    }, [user]);

    return (
        <div className="enrolled-classes">
            {
                enrolledGroups.length === 0 ?
                    <p> You are currently not enrolled in any groups</p> :
                    <>
                        {enrolledGroups.map((group, index) => (
                            <p key={index}>
                                groupID: {group.groupID} Date enrolled: {group.enrolledDate.split("T")[0]}
                            </p>
                        ))}
                    </>
            }
        </div>
    )
};

export default EnrolledGroups;