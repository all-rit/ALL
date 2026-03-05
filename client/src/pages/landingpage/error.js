import React from "react";
import { navigate } from "@reach/router";
import ALLButton from "src/components/all-components/ALLButton";
import useScroll from "src/use-hooks/useScroll";

const Error = () => {
  useScroll();

  return (
    <div className="tw-w-screen tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-10 tw-mt-[5rem]">
      <h1 className="tw-title">Invalid Page</h1>
      <p className="tw-subtitle">Please click the button to navigate home.</p>
      <ALLButton label="Return Home" onClick={() => navigate("/")} />
    </div>
  );
};

export default Error;
