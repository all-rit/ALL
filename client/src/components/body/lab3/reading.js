import React, {useEffect} from "react";
import {LAB_ID} from '../../../constants/lab3';
import UserLabService from '../../../services/UserLabService';
import { Pie } from "react-chartjs-2";

const data = {
    labels: [
        "World Population (Millions)",
        "Visually Impaired (Millions)"
    ],
    datasets: [
        {
            label: "Visually Impaired in a Population of 6,697 People",
            borderColor: "black",
            backgroundColor: ["blue", "red"],
            data: [6697, 285],
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
            <h1>What is a Screen Reader?</h1>
            <p>
                A screen reader is an essential software program that aids the visually impaired or blind users in reading text displayed on a computer screen. This is achieved through the use of a speech synthesizer or braille display. In simple terms, screen readers turn text that is displayed on a screen into a tactile or auditory form, or both.
            </p>

            <h1>How many people are affected?</h1>
            <div className="flex">
                <Pie data={data} height={100} />
            </div>
            <p className="center">
                Currently, as high as 80% of all visual impairment is preventable or curable
            </p>
            <p className="center">
                Globally the number of people of all ages visually impaired is estimated to be 285 million, of whom 39 million are blind.
            </p>
            <p className="center">
                People of age 50 and over account for 82% of the blind.
            </p>
            <p>
                Understanding the degree of visual impairment and its causes is important in adequately allocating resources to various health areas of work.
            </p>

            <h1>What are some examples of visual impairment?</h1>
            <ul className="study__list">
                <li>Diabetic retinopathy</li>
                <li>Childhood blindness</li>
                <li>Age-related macular degeneration (AMD)</li>
                <li>Corneal opacities</li>
                <li>Glaucoma</li>
                <li>Trachoma</li>
                <li>Cataracts</li>
                <li>Uncorrected refractive errors</li>
            </ul>

            <h1>Affect that impaired vision has on the computing world</h1>
            <p>
                By acknowledging that visual impairment is a major global health issue, the computing world made necessary advances in screen readers. Screen readers have increased in both availability and popularity. One example of such screen readers is JAWS (Job Access With Speech) which is the world’s most popular screen reader. Screen readers now include many more features that allow the visually impaired to get through life much more easily.
            </p>

            <h1>Some usability tips for screen reader friendly interfaces:</h1>
            <ul className="study__list">
                <li>Use many headings and subheadings</li>
                <li>Code headings correctly with proper size</li>
                <li>Keep big blocks of text short</li>
                <li>Increase button size</li>
                <li>Include “Skip” links</li>
                <li>Decrease the number of links</li>
                <li>Limit the use of popups</li>
            </ul>

            <h3>For more information, please visit the following websites:</h3>
            <div className="flex">
                <a href="https://www.afb.org/">https://www.afb.org/</a>
                <a href="https://www.who.int/">https://www.who.int/</a>
                <a href="https://www.brailleinstitute.org/">https://www.brailleinstitute.org/</a>
            </div>
        </div>
    );
};

export default Reading;
