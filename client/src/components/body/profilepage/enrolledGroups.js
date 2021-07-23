import React, { useEffect, useState }from "react";
import UserService from "../../../services/UserService";

const EnrolledGroups = (user_props) => {
    console.log(user_props);
    const {user} = user_props;


    const [ enrolledGroups, setEnrolledGroups] = useState([]);

    // console.log(user.userid);
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

    console.log(enrolledGroups);

    return (
        <div className="enrolled-classes">
            {
                enrolledGroups.length === 0 ?
                    <p> You are currently not enrolled in any groups</p> :
                    <div>
                        {/*todo change this to map every group*/}
                        {enrolledGroups.map((group, index) => (
                            <p>groupID: {group.groupID} Date enrolled: {group.enrolledDate.split("T")[0]}
                            </p>
                        ))}
                    </div>
            }
        </div>
    )
};

export default EnrolledGroups;