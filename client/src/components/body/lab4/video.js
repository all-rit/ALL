import React, {useEffect} from "react";

import {LAB_ID} from '../../../constants/lab4';
import UserLabService from '../../../services/UserLabService';
const Video = () => {
    useEffect(() => {
        return () => {
            UserLabService.complete_video(LAB_ID);
        }
    });
    return (
        <div>
            <div className="row">
                Videos to help aid in the comprehension of the material.
            </div>
        </div>
    );
};

export default Video;
