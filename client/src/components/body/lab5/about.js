import React, {useEffect} from "react";
import {LAB_ID} from '../../../constants/lab5';
import UserLabService from '../../../services/UserLabService';

const About = (props) => {
    const {user}=props;
    useEffect(() => {
        return () => {
            UserLabService.complete_about(LAB_ID);
            if(user!==null){
                UserLabService.user_complete_about(user.userid,LAB_ID);
            }
        }
    });

    return (
        <div className="study">
            <p>
                In this lab, you will learn about why it is important to create software
                that is accessible to users who face cognitive impairments.
                You will learn about using clear descriptive headings, handling time driven notifications, and
                creating informative form responses. Afterwards, you will view related media to reinforce the topic and take a quiz
                to test your knowledge. Click "Next" to start!
            </p>
        </div>
    );
};

export default About;
