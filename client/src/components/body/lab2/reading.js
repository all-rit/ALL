import React, {useEffect} from "react";
import {LAB_ID} from '../../../constants/lab2';
import UserLabService from '../../../services/UserLabService';
import { Pie } from "react-chartjs-2";

const data = {
    labels: [
      "Males With A CVD",
      "Females With A CVD",
      "Males Without A CVD",
      "Females Without A CVD"
    ],
    datasets: [
      {
        label: "Color Visions Deficiencies in a Population of 10,000 People",
        borderColor: "black",
        backgroundColor: ["red", "orange", "blue", "purple"],
        data: [416.67, 25, 4583.33, 4975],
        borderWidth: "2"
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
        <h3 >Color Vision Deficiencies</h3>
        <div className="flex">
          <Pie data={data} height={100} />
        </div>
        <p className="center">
          Color Vision Deficiencies (or CVDs) affects 1 in 12 men (8%) and 1 in
          200 Women across the world.
        </p>
        <p className="center">
          The pie chart above shows this data in a population of 10,000 people.
        </p>
        <h3 className="center">
          There are four main types of color vision deficiencies.
        </h3>
        <ul className="study__list">
          <li><h3>Protanomaly (proht-n-om-uh-lee)</h3>
                  <p className="center">
                    There is a reduced sensitivity to red light. Most people with this
                    have issues distinguishing between reds, greens, browns, and oranges.
                    There can also be confusion when comparing blues and purples to one
                    another. This is one of the most common forms of a CDV.
                  </p>
          </li>
          <li><h3>Deuteranomaly (deu-ter-​anom-a-ly):</h3>
                  <p className="center">
                      There is a reduced sensitivity to green light. Most people with this
                      also have issues distinguishing between reds, greens, browns and
                      oranges along with can confuse blues and purples when copmpared to one
                      another. This is the other most common form of a CVD.
                  </p>
          </li>
          <li><h3>Tritanomaly (trī′tə-nŏm′ə-lē):</h3>
                  <p className="center">
                  There is a reduced sensitivity to blue light. Most people with this
                  have issues distinguishing between blue and yellow, violet and red,
                  and blue and green. Most of the colors someone with this would see are
                  pink, red, black, white, grey, and turquoise. This CVD is extremely
                  rare.
                  </p>
          </li>
          <li><h3>Monochromacy (mon-o-chro-ma-cy):</h3>
                  <p className="center">
                  Individuals with this deficiency can see no colors at all. Everything
                  is a shade of grey that ranges between white and black. This is
                  incredibly rare (approximately 1 in 33,000 people are diagnosed with
                  this condition). Due to the range of colors these individuals can see,
                  it can make some tasks in life difficult to preform.
                  </p>
          </li>
        </ul>
        
        <h3 className="center">
          Each form of CVD has varying levels of severity.
        </h3>
        <div>
          <h3 className="center">
            What, in the eye, is causing colors to be perceived in this way?
          </h3>
          <p className="center">
            For individuals with Protanomaly, Deuteranomaly, and Tritanomaly, they
            are considered dichromatic, meaning that they only have two types of
            cones in their eyes to perceived colors. People without these
            deficiencies have three cones and each cone is responsible for
            perceiving red, green, and blue. This is where the reduced sensitivity
            comes from, as the reduction in one cone causes a section of the color
            spectrum to not be viewable to the individual. This section happens to
            overlap for individuals with Protanomaly and Deuteranomaly, which is
            why some individuals may refer to their deficiency as 'red/green
            colorblindness', as these individuals may tend to see the world in
            very similar ways.
          </p>
        </div>
        <div>
          <h3 className="center">
            Causes of Color Vision Deficiencies:
          </h3>
          <p className="center">
            Color Vision Deficiencies are normally caused by genetic conditions
            and are usually inheritied from an individual's parents. Men are more
            often impacted than women because the gene is carried in the X
            chromosome. There can be some other cases that cause color vision
            deficiencies however their causes are still being researched to
            determine the exact cause.
          </p>
        </div>
        <h3 className="center">
          At this moment in time, there is no cure to these deficiencies.
        </h3>
        <h3 className="center">
          For more information, please visit the following websites:
        </h3>
        <ul>
          <li>
          <a href="http://www.colourblindawareness.org/" target="_blank" rel="noopener noreferrer" className="padding center">
            colourblindawareness.org
          </a>
          </li>
          <li>
          <a href="https://www.aoa.org/patients-and-public/eye-and-vision-problems/glossary-of-eye-and-vision-conditions/color-deficiency" target="_blank" rel="noopener noreferrer" className="padding center">
            aoa.org
          </a>
          </li>
          <li>
          <a href="https://www.color-blindness.com/" target="_blank" rel="noopener noreferrer" className="padding center">
          color-blindness.com
          </a>
          </li>
          <li>
              <br></br>
              <br></br>
              <p className="padding center">
                  The information for this page was gathered from            
                  <a href="http://www.colourblindawareness.org/" target="_blank" rel="noopener noreferrer" className="padding">   colourblindawareness.org</a>
              </p>
          </li>
        </ul>

      </div>
    );
};

export default Reading;
