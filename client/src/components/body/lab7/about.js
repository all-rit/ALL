import React, {useEffect} from "react";
import {LAB_ID} from '../../../constants/lab7';
import UserLabService from '../../../services/UserLabService';

const About = (props) => {
    const {user}=props;
    useEffect(() => {
        return () => {
            UserLabService.complete_about(LAB_ID);
            if(user?.firstname !== null && user!==null){
                UserLabService.user_complete_about(user.userid,LAB_ID);
            }
        }
    }, [user]);

    return (
        <div className="study">
            <p>
                In this lab, you will learn about why it is important to create machine learning software that is secure, ethical, and accurate.
                You will learn about using clear descriptive headings, handling time driven notifications, and creating informative form responses. Afterwards, you will view related media to reinforce the topic and take a quizto test your knowledge. Click "Next" to start!
            </p>
        </div>
    );
};

export default About;
