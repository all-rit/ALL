import React, {useEffect} from "react";
import {LAB_ID} from '../../../constants/lab5';
import UserLabService from '../../../services/UserLabService';

const About = (lab) => {
    useEffect(() => {
        return () => {
            UserLabService.complete_about(LAB_ID);
        }
    });

    return (
        <div className="study">
            <p>
                In this lab, you will learn about why it is important to create software
                that is accessible to users who utilize screenreaders.
                You will learn about using alt tags,
                increase your understanding through an interactive module about
                screenreaders and alt tags, watch related videos, and take a quiz
                to test your knowledge. Click "Next" to start!
            </p>
        </div>
    );
};

export default About;
