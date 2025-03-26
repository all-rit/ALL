import React from "react";
import { Frame } from "../components/Frame";
import ImagineHeader from "../components/ImagineHeader";
import { navigate } from "@reach/router";

const RetentionReading = () => {
  return (
    <>
      <ImagineHeader title="Retention Reading" />
      {Frame(
        <p className="tw-body-text tw-w-[20vw]">
          Some text that will be so intriguing, so utterly inspirnig that ALL
          (get it) bias will be eliminated at the first glimpse. We can only
          IMAGINE (get it) the world that shall come forth from such syntactical
          genius.
        </p>,
        () => navigate("/Imagine2025/Quiz"),
        null,
      )}
    </>
  );
};

export default RetentionReading;
