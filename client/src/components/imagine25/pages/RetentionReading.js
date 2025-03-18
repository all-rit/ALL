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
          Thank you for participating! Bias is no bueno, and we&apos;re looking
          for bueno world :)
        </p>,
        () =>
          navigate("/Imagine2025/Quiz"),
        () => alert("Domain expansinon - no previous implemented"),
      )}
    </>
  );
};

export default RetentionReading;
