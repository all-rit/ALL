import React, {useEffect} from "react";
import {LAB_ID} from '../../../constants/lab3';
import UserLabService from '../../../services/UserLabService';

const About = (props) => {
    const {user}=props;
    useEffect(() => {
        return () => {
            UserLabService.complete_about(LAB_ID);
            if(user.firstname !== null){
                UserLabService.user_complete_about(user.userid,LAB_ID);
            }
        }
    }, [user]);

    return (
        <div className="study">
            <p>
                In this lab, you will learn about why it is important to create software
                that is accessible to users who utilize screenreaders.
                You will learn about using alt tags,
                increase your understanding through an interactive module about
                screenreaders and alt tags, view related media to reinforce the topic, and take a quiz
                to test your knowledge. Click "Next" to start!
            </p>
        </div>
    );
};

export default About;
