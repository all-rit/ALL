import FauxPostman from '../../../all-components/FauxPostman';
import PropTypes from 'prop-types';

const RESTQueryMock = (props) => {
  const {
    incorrectRequestComplete,
    setIncorrectRequestComplete,
    correctRequestComplete,
    setCorrectRequestComplete,
  } = props;

  return (
    <div className={'tw-p-6'}>
      <div>
        <p className={'tw-text-left tw-body-text'}>
          Below we will now have the opportunity to test an newly minted API
          endpoint. In API request testers such as this, you can select you
          request type, enter a requestURL, as well as query params.
          Additionally, once the request is submitted, you will see the
          resulting response in the window beneath it that allow you to ensure
          that the request works as expected.
        </p>
        <ol className={'tw-text-left tw-ml-5 tw-py-3 tw-body-text'}>
          <li className={'tw-list-decimal'}>
            In the dropdown, choose a <strong>GET</strong> method.
          </li>
          <li className={'tw-list-decimal'}>
            Next, copy and paste the following API request URL:{' '}
            <strong>
              http://localhost:5005/search?query=coffee&location=rochester
            </strong>
          </li>
          <li className={'tw-list-decimal'}>
            Now, click the <strong>Send</strong> button and see what happens.
          </li>
        </ol>
      </div>
      <FauxPostman
        correctRequestComplete={correctRequestComplete}
        incorrectRequestComplete={incorrectRequestComplete}
        setCorrectRequestComplete={setCorrectRequestComplete}
        setIncorrectRequestComplete={setIncorrectRequestComplete}
      />
      <br />
      <div>
        <p className={'tw-body-text tw-pb-3'}>
          If you followed the previous instructions, you can see the response
          below shows that the request was incorrect. This is because when
          testing a request call with params, you must also enter the key-value
          pairs associated with them. As you can see, we have 2 key params along
          with their respective values.
        </p>
        <p className={'tw-body-text tw-pb-3'}>
          Enter each into their respective key-value inputs below and click the{' '}
          <strong>Send</strong> button one more time!
        </p>
      </div>
      <div>
        <p className={'tw-body-text tw-pb-3'}>
          Based on the response, we have completed a successful request! Click
          the <strong>NEXT</strong> button below to move on to the next section!
        </p>
      </div>
    </div>
  );
};

RESTQueryMock.propTypes = {
  correctRequestComplete: PropTypes.bool,
  setCorrectRequestComplete: PropTypes.func,
  incorrectRequestComplete: PropTypes.bool,
  setIncorrectRequestComplete: PropTypes.func,
};

export default RESTQueryMock;
