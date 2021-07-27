import React, { useEffect, useState }from "react";
import UserService from "../../../services/UserService";

const EnrolledGroups = (props) => {
    const {user} = props;
    const [ enrolledGroups, setEnrolledGroups] = useState([]);

    function grabUser(userid){
        async function fetchUser() {
            return UserService.getUser(userid);
        }
        fetchUser().then((data) => {
            console.log(data)
            return data;
        });
    }

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
                    <>
                        {enrolledGroups.map((group, index) => (
                            <ul class="groups" key={index}>
                                <ul class="groups__group">
                                    {console.log(UserService.getUser(group.instructorUserID))}
                                    {console.log(grabUser(group.instructorUserID))}
                                    <li class="groups__instructorName">{UserService.getUser(group.instructorUserID).firstname+" "+UserService.getUser(group.instructorUserID).lastname}</li>
                                    <li class="groups__groupName">{group.groupName}</li>
                                </ul>
                                <ul class="groups__group">
                                    <li class="groups__date">Enrolled on {group.enrolledDate}</li>
                                    <li><button class="groups__button button Button btn btn-second">Unenroll</button></li>
                                </ul>
                            </ul>
                        ))}
                    </>
            }
        </div>
    )
};

export default EnrolledGroups;