import React, {useEffect} from "react";
import {LAB_ID} from '../../../constants/lab4';
import UserLabService from '../../../services/UserLabService';
import {Pie} from "react-chartjs-2";

const data = {
    labels: [
        "US Population (Millions)",
        "Population with Dexterity Impairments (Millions)"
    ],
    datasets: [
        {
            label: "Dexterity Impaired in a Population of 328 Million People",
            borderColor: "black",
            backgroundColor: ["blue", "red"],
            data: [328, 40.7],
            borderWidth: "1"
        }
    ]
};

const Reading = () => {
    useEffect(() => {
        return () => {
            UserLabService.complete_reading(LAB_ID);
        }
    });
    return (
        <div className="study">
            <p>
                Reading that discusses the topic, how it affects people, how often it
                occurs, etc.
            </p>

            <h3>Approximate Population with Dexterity Impairments in the US</h3>
            <div className="flex">
                <Pie data={data} height={100} />
            </div>

            <h3>For more information, please visit the following websites:</h3>
            <div className="flex">
                <a href="https://www.cdc.gov/nchs/fastats/disability.htm" target="_blank">https://www.cdc.gov/nchs/fastats/disability.htm</a>

            </div>
        </div>
    );
};

export default Reading;
