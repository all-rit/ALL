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
            UserLabService.user_complete_reading(4,LAB_ID);
        }
    });
    return (
        <div className="study">
            <h3>What is a Screen Reader?</h3>
            <p>
                A screen reader is an essential software program that aids visually impaired or blind users in reading text displayed on a computer screen. This is achieved through the use of a speech synthesizer or braille display. In simple terms, screen readers turn text that is displayed on a screen into a tactile or auditory form, or both.
            </p>

            <h3>Approximate Visually Impaired Population in the World</h3>
            <div className="flex">
                <Pie data={data} height={100} />
            </div>
            <p className="center">
                Currently, as high as 80% of all visual impairments are preventable or curable.
            </p>
            <p className="center">
                Globally the number of people of all ages visually impaired is estimated to be 285 million, of whom 39 million are blind.
            </p>
            <p className="center">
                People of age 50 and over account for 82% of the blind.
            </p>
            <p>
                Understanding the degree of visual impairment and its causes are important in adequately allocating resources to various health areas of work.
            </p>

            <h3>What are some examples of visual impairment?</h3>
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
            
            <h3>Effect that impaired vision has on the computing world</h3>
            <p>
                By acknowledging that visual impairment is a major global health issue, the computing world made necessary advances in screen readers. Screen readers have increased in both availability and popularity. One example of such screen readers is JAWS (Job Access With Speech) which is the world’s most popular screen reader. Screen readers now include many more features that allow the visually impaired to get through life much more easily.
            </p>

            <h3>Usability tips for screen reader friendly interfaces:</h3>
            <ul className="study__list">
                <li>Use many headings and subheadings</li>
                <li>Code headings correctly with proper size</li>
                <li>Keep big blocks of text short</li>
                <li>Increase button size</li>
                <li>Include “Skip” links</li>
                <li>Decrease the number of links</li>
                <li>Limit the use of popups</li>
            </ul>

            <h4>For more information, please visit the following websites:</h4>
            <div className="flex">
                <a href="https://www.afb.org/" target="_blank" rel="noopener noreferrer">https://www.afb.org/</a>
                <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer">https://www.who.int/</a>
                <a href="https://www.brailleinstitute.org/" target="_blank" rel="noopener noreferrer">https://www.brailleinstitute.org/</a>
            </div>
        </div>
    );
};

export default Reading;
