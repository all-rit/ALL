import React, { useEffect } from "react";
import { Router } from "@reach/router";
import UpdateId from "./UpdateId";
import Survey from "../all-components/imagine-components/SurveyHandlerComp";
import ImagineGame from "./ImagineGame";
import useMainStateContext from "../../reducers/MainContext";

const Main = () => {
  const { actions } = useMainStateContext();
  const startImagine = () => actions.setIsImagine(true);
  useEffect(() => {
    startImagine();
  }, []);

  const year = 25;
  return (
    <>
      <div className={"tw-flex tw-h-full tw-w-full tw-mt-[10%]"}>
        <div
          className={
            "tw-grid tw-grid-cols-8 tw-grid-rows-9 tw-w-full tw-h-[40rem] tw-gap-y-6 tw-pl-6"
          }
        >
          <div
            className={
              "tw-row-span-3 tw-col-span-8 tw-bg-primary-yellow tw-rounded-bl-lg tw-flex shadow"
            }
          />
          <div
            className={
              "tw-row-span-5 tw-col-span-8 tw-bg-primary-blue tw-rounded-bl-lg tw-flex shadow"
            }
          />
        </div>
        <div
          className={
            "tw-absolute tw-top-[15%] tw-left-[15%] tw-bg-white tw-w-3/4 tw-h-[90%] shadow tw-rounded-xl tw-p-6"
          }
        >
          <Router className="app tw-h-full tw-overflow-x-hidden tw-flex tw-justify-center tw-items-center">
            <UpdateId default path={"/"} />
            <Survey
              path={`/PreSurvey`}
              type={"pre"}
              year={year}
              userID={"1038"} //placeholder
            />
            <ImagineGame path={"/Game"} />
          </Router>
        </div>
      </div>
    </>
  );
};

export default Main;
