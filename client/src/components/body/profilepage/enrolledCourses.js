import React, { useEffect, useState }from "react";
import UserService from "../../../services/UserService";

const EnrolledCourses = (user_props) => {
    console.log(user_props);
    const {user} = user_props;


    const [ enrolledCourses, setEnrolledCourses] = useState([]);

    // console.log(user.userid);
    useEffect(() => {

        if (user) {
            async function fetchCourses() {
                return UserService.getUserEnrolledCourses(2);  //change this to user.userid
            }
            fetchCourses().then((data) => {
                setEnrolledCourses(data);
            });
        }
    }, [user]);

    console.log(enrolledCourses);

    return (
        <div className="enrolled-classes">
            {
                enrolledCourses.length === 0 ?
                    <p> You are currently not enrolled in any courses</p> :
                        <p> Classes the user is enrolled in: <br/>
                            {/*todo change this to map every course*/}
                            courseID: {enrolledCourses[0].courseID} <br/>
                            Date enrolled: {enrolledCourses[0].enrolledDate.split("T")[0]}
                        </p>
            }

        </div>
    )
};

export default EnrolledCourses;