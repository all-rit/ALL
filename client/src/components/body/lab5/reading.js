import React, {useEffect} from "react";
import {LAB_ID} from '../../../constants/lab5';
import UserLabService from '../../../services/UserLabService';
import { Pie } from "react-chartjs-2";

const data = {
    labels: [
        "US Population (Millions)",
        "Cognitively Impaired (Millions)"
    ],
    datasets: [
        {
            label: "Cognitively Impaired in a Population of 328 People",
            borderColor: "black",
            backgroundColor: ["blue", "red"],
            data: [328, 16],
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
            <h3>What is a Cognitive Impairment?</h3>
            <p>
                Cognitive impairment refers to a broad range of disabilities, from people with intellectual disabilities, who may have the most-limited capabilities, to age-related issues regarding thinking and remembering. This range includes people with learning disabilities, such as dyslexia and attention deficit hyperactivity disorder (ADHD).
            </p>
            <h3>How Many People are Affected?</h3>
            <div className="flex">
                <Pie data={data} height={100} />
            </div>
            <p className="center">
                Currently, as high as 5% of all Americans face cognitive impairments.
            </p>
            <p className="center">
                An estimated 5.1 million
                Americans aged 65 years or older may currently
                have Alzheimer’s disease, the most well-known form
                of cognitive impairment.
            </p>
            <p>
                Understanding the degree of cognitive impairment and its causes is important in adequately allocating resources to various health areas of work.
            </p>
            <h3>Common Challenges</h3>
            <ul className="study__list">
                <li>Understanding content</li>
                <li>Remembering how to complete tasks</li>
                <li>Confusion caused by inconsistent or non-traditional web page layouts</li>
                <li>Keeping focus while completing a task</li>
                <li>Different processing speed, requiring additional time</li>
            </ul>

            <h3>How to Address These Problems?</h3>
            <p>WCAG, Web Content Accessibility Guidelines, includes several guidelines to improve cognitive accessibility. They define 17 specific guidelines, of which six are especially relevant for cognitive accessibility.

            <div className="non-bullet-list">
                <h5>
                    Adaptability
                </h5>
                <div>All information should be available in a form that can be perceived by all users. For example, the information could be spoken aloud via a narration tool. Thus you should ensure the content can be understood by the software.
                </div>
                <h5>
                    Time
                </h5>
                <div>It is important to allow users the time they require to complete tasks. Guideline 2.2 states "provide users enough time to read and use content."
                    People with cognitive disabilities may require more time to read content, or to perform functions such as filling out forms.
                </div>
                <h5>
                    Navigation
                </h5>
                <div>Guideline 2.4 states to include clear and descriptive headings so users can easily find information and understand relationships between different content sections.</div>
                <h5>
                    Readability
                </h5>
                <div>Guideline 3.1  states "make text content readable and understandable." Keep the writing style simple and easy to understand.
                </div>
                <h5>
                    Predictability
                </h5>
                <div>Guideline 3.2 states to "make web pages appear and operate in predictable ways. Use consistency with the page layout.
                </div>
                <h5>
                    Input Assistance
                </h5>
                <div>Guideline 3.3 states to "help users avoid and correct mistakes." If they do make a mistake, ensure the message allows them to easily fix the error.
                </div>
            </div>
            </p>

            <h3>Practical Application of Cognitive Accessibility</h3>
            <p>
                We all enjoy online shopping. However, a person’s ability to use websites effectively declines by 0.8% every year over the age of 25, according to Nielsen Norman Group. Optimally designing for memory limitations will be especially important as the population ages. These techniques include:
                <div className="non-bullet-list">
                <h5>
                    User Authentication
                </h5>
                <div>Offer at least one alternative method that does not rely on a user to memorize character strings.</div>
                <h5>
                    Don’t hide important/frequent controls
                </h5>
                <div>Show both the text and icon labels for controls making it easier for users to remember their purpose.</div>
                <h5>
                    Grouping Content
                </h5>
                <div>Group similar items semantically and visually with a suggested maximum group size of five. This makes decision the process easier when choosing between similar items.
                </div>
                <h5>
                    Path Markers
                </h5>
                <div>Remind site visitors where they are in a process.</div>
                </div>
            </p>



            <h4>For more information, please visit the following websites:</h4>
            <div className="flex">
                <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Cognitive_accessibility">Mozilla Cognitive Accessibility</a>
                <a href="https://www.w3.org/WAI/cognitive/">W3 Cognitive Accessibility</a>
                <a href="https://www.w3.org/TR/coga-usable/">Making Content Accessible</a>
            </div>
        </div>
    );
};

export default Reading;
