import React, { useEffect } from "react";
import { LAB_ID } from "../../../constants/lab7";
import UserLabService from "../../../services/UserLabService";
import useScroll from "../../../use-hooks/useScroll";

const Reading = (props) => {
    const {user}=props;
    useScroll();
    useEffect(() => {
        return () => {
            UserLabService.complete_reading(LAB_ID);
            if(user?.firstname !== null && user!==null){
                UserLabService.user_complete_reading(user.userid,LAB_ID);
            }
        }
    }, [user]);

    return (
        <div>
            put reading material
        </div>
    )
};