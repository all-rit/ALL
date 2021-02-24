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
            <h3>What Is a Dexterity Impairment?</h3>
            <p></p>

            <h3>Examples of Dexterity Impairments</h3>
            <ul className="study__list">
                <li>Spinal cord injury</li>
                <li>Loss or damage of limb</li>
                <li>Cerebral palsy</li>
                <li>Muscular dystrophy</li>
                <li>Multiple sclerosis</li>
                <li>Spina bifida</li>
                <li>Amyotrophic lateral sclerosis (ALS)</li>
                <li>Arthritis</li>
                <li>Parkinson’s disease</li>
                <li>Essential tremor</li>
            </ul>

            <h3>Approximate Population with Dexterity Impairments in the US</h3>
            <div className="flex">
                <Pie data={data} height={100} />
            </div>
            <div id={"caption"}>
                16.3% of the US adult population is affected by a mobility impairment
            </div>

            <h3>Effects of Dexterity Impairments on Software Usage</h3>
            <p></p>

            <h3>Accessibility Standards for Dexterity Impairment</h3>
            <p></p>

            <h3>For more information, please visit the following websites:</h3>
            <div className="flex">
                <a href="https://www.cdc.gov/nchs/fastats/disability.htm" target="_blank" rel="noopener noreferrer">https://www.cdc.gov/nchs/fastats/disability.htm</a>

            </div>
        </div>
    );
};

export default Reading;
