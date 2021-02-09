import React, {useEffect} from "react";
import {LAB_ID} from '../../../constants/lab4';
import UserLabService from '../../../services/UserLabService';

const Reading = () => {
    useEffect(() => {
        return () => {
            UserLabService.complete_reading(LAB_ID);
        }
    });
    return (
        <div className="study">
            Reading that discusses the topic, how it affects people, how often it
            occurs, etc.
        </div>
    );
};

export default Reading;
