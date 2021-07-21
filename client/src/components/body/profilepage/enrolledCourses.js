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
                    <div>
                        {/*todo change this to map every course*/}
                        {enrolledCourses.map((course, index) => (
                            <p>groupID: {course.courseID} Date enrolled: {course.enrolledDate.split("T")[0]}
                            </p>
                        ))}
                    </div>
            }
        </div>
    )
};

export default EnrolledCourses;