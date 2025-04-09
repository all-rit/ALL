import { Verified } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ViewCertificateButton = (props) => {
  const { openCertificate } = props;

  const [viewLabel, setViewLabel] = useState(false);
  useEffect(() => {
    console.warn(viewLabel);
  }, []);

  return (
    <button
      onClick={openCertificate}
      onMouseOver={() => setViewLabel(true)}
      onMouseOut={() => setViewLabel(false)}
      className={`tw-bg-primary-blue tw-gap-x-3 tw-items-center tw-rounded-full tw-p-5 tw-absolute tw-border-0 tw-m-3 tw-flex tw-right-20`}
      style={{
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      }}
    >
      {viewLabel && (
        <p className={"tw-font-bold tw-text-white tw-px-3"}>
          {" "}
          View Certificate{" "}
        </p>
      )}
      <Verified style={{ color: "white" }} fontSize={"large"} />
    </button>
  );
};

ViewCertificateButton.propTypes = {
  openCertificate: PropTypes.func,
};

export default ViewCertificateButton;
