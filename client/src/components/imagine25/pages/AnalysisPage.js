import React from "react";
import ImagineHeader from "../components/ImagineHeader";
import { Frame } from "../components/Frame";
// import ImagineService from 'src/services/ImagineService';

const AnalysisPage = () => {
  // const user = ImagineService.getUserByID(sessionStorage.getItem("userID"));

  // const group = user.section;
  return (
    <>
      <ImagineHeader title="Game Analysis" />
      {Frame(<>Whatup</>, () => alert("no next page yet :("), null)}
    </>
  );
};

export default AnalysisPage;
