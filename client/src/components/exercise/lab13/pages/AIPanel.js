import { React } from 'react';
import { startExercise } from 'src/reducers/lab2/actions';
import { navigate } from '@reach/router';
import AIChatBot from '../components/AIChatBot';
import { Tabs } from '../components/Tab/Tabs';
import { Tab } from '../components/Tab/Tab';
import dyslexiaImage from '../components/dyslexia.jpg';

const AIPanel = () => {
  const handleContinue = () => {
    startExercise();
    navigate('/Lab13/Exercise/HaloExplination');
  };

  const questions = [
    {
      id: 1,
      text: 'Is dyslexia a vision problem?',
    },
    {
      id: 2,
      text: 'Do people who have dyslexia see words and letters backward?',
    },
    {
      id: 3,
      text: 'Can dyslexia be cured?',
    },
  ];

  const answers = [
    {
      id: 1,
      text: 'Lorem ipsum dolor.',
    },
    {
      id: 2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      text: "Loreum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  return (
    <div>
      <Tabs>
        <Tab label="AIChatBot">
          <div className="tw-h-[50%]">
            <AIChatBot userQuestions={questions} fixedAIResponse={answers} />
          </div>
        </Tab>
        <Tab label="ALLpedia">
          <div className="tw-h-[98%]">
            <h2 className="tw-text-start">Dyslexia</h2>
            <hr></hr>

            <div className="tw-flex tw-justify-between tw-w-full tw-h-56">
              <div className="tw-w-[48%] tw-h-full">
                <p className="tw-text-left">
                  Dyslexia is a neurological learning disability that primarily
                  affects reading and language processing. It is not a vision
                  problem and does not affect intelligence. People with dyslexia
                  may have difficulty connecting written letters to spoken
                  sounds, not how letters visually appear.
                </p>
                <br></br>
                <p className="tw-text-left">
                  Dyslexia cannot be cured, but it can be effectively supported
                  through early intervention, structured reading instruction,
                  and classroom accommodations.
                </p>
              </div>
              <div
                className="tw-bg-labYellow tw-w-[48%]"
                style={{
                  backgroundImage: `url(${dyslexiaImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </div>
          </div>
        </Tab>
      </Tabs>
      <div className="tw-flex tw-justify-end tw-mt-3 tw-pr-8">
        <button
          onClick={handleContinue}
          className="
            tw-group tw-relative tw-flex tw-items-center tw-gap-3 tw-px-8 tw-py-2 tw-bg-primary-blue tw-text-white tw-text-sm tw-font-semibold 
            tw-rounded-full tw-border-4 tw-border-labBlue tw-shadow-lg hover:tw-bg-lightBlue hover:tw-border-lightBlue tw-transition-all tw-duration-200
            focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-mediumBlue focus:tw-ring-offset-2
          "
        >
          <span className="tw-leading-none">Next</span>
        </button>
      </div>
    </div>
  );
};

export default AIPanel;
