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
            <p>
                Many types of dexterity impairments exist, but all limit the functionality of one or more limbs and cause the loss of fine control of movement.
                They can be caused by an injury, a genetic disorder, or a disease.
                For example, Muscular dystrophy is a genetic disorder that causes progressive weakness in the muscles.
            </p>

            <h3>Examples of Dexterity Impairments</h3>
            <p>
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
            </p>
            <h3>Approximate Population with Dexterity Impairments in the US</h3>
            <div className="flex">
                <Pie data={data} height={100} />
            </div>
            <div id={"caption"}>
                16.3% of the US adult population is affected by a mobility impairment
            </div>

            <h3>Effects of Dexterity Impairments on Software Usage</h3>
            <p>
                Dexterity impairments can make it difficult to use traditional technologies such as a keyboard or mouse.
                To combat these challenges, people with dexterity impairments can use various assistive technologies.
                For example, voice-activated technologies can be used to browse the web with only voice commands.
                Other technologies include keyboard-only navigation, alternative keyboards, switch devices, and on-screen keyboard programs.
                It is important to be aware that some users may become fatigued from using assistive technologies.
            </p>

            <h3>Accessibility Standards for Dexterity Impairment</h3>
            <p>
                The W3C organization makes several suggestions for making software accessible to users with dexterity impairments.
                One guideline is to ensure that all features can be accessed via a keyboard.
                In addition, another guideline is to make all touch targets (for example, a button) at least 9mm high by 9mm wide.
            </p>

            <h3>For more information, please visit the following websites:</h3>
            <div className="flex">
                <a href="https://webaim.org/articles/motor/assistive" target="_blank" rel="noopener noreferrer">https://webaim.org/articles/motor/assistive</a>
                <a href="https://www.w3.org/TR/mobile-accessibility-mapping/" target="_blank" rel="noopener noreferrer">https://www.w3.org/TR/mobile-accessibility-mapping/</a>
                <a href="https://www.w3.org/WAI/people-use-web/abilities-barriers/#physical" target="_blank" rel="noopener noreferrer">https://www.w3.org/WAI/people-use-web/abilities-barriers/#physical</a>
            </div>
        </div>
    );
};

export default Reading;
