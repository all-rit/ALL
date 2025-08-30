import React, { useContext } from "react";
import Lab0Context from "../../Lab0Context";
import LabButton from "../../../../all-components/LabButton";

const APIRequestReading = () => {
  const { handleNav } = useContext(Lab0Context);

  return (
    <div className={"tw-p-6"}>
      <p className={"tw-title tw-text-left"}> API Endpoints & Routing</p>
      <p className={"tw-py-6 tw-body-text"}>
        The backbone of almost all modern web applications today is the API, or
        the Application Programming Interface. This allows for a safe flow of
        requests and data between the Client/Frontend and the Server/Backend.
        When developing an API, it is imperative that the endpoints and logic
        coincide with proper API development protocols and parameters.
      </p>
      <p className={"tw-body-text"}>
        Its also important to note that rigorous testing of API endpoints and
        requests is required to ensure the overall stability of the application,
        as well as a positive user experience when using the application. An
        invaluable tool used to test backend API calls is{" "}
        <strong>Postman</strong>, an advanced, easy to use interface that allows
        users to input an endpoint, as well as the REST request type (GET, POST,
        PUT, DELETE) and test that the return value is correct.
      </p>
      <p className={"tw-body-text tw-py-6"}>
        Lets run a couple tests on some endpoints now using our own proprietary
        API tester, MostPan. Click the
        <strong> Next</strong> button to get started
      </p>
      <LabButton
        label={"Next"}
        onClick={() => handleNav("APIRequestExercise")}
      />
    </div>
  );
};

export default APIRequestReading;
