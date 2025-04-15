import { Verified } from "@mui/icons-material";
import React from "react";
import PropTypes from "prop-types";

const ViewCertificateButton = (props) => {
  const { openCertificate } = props;

  return (
    <button
      onClick={openCertificate}
      className={`tw-bg-primary-blue tw-gap-x-3 tw-items-center tw-rounded-full tw-p-3 tw-border-0 tw-flex tw-shadow-lg hover:tw-shadow-xl hover:tw-bg-[#0144B0]`}
    >
      <p
        className={"tw-font-bold tw-text-white tw-px-3 xs:tw-hidden md:tw-flex"}
      >
        View Certificate
      </p>
      <Verified style={{ color: "white" }} fontSize={"large"} />
    </button>
  );
};

ViewCertificateButton.propTypes = {
  openCertificate: PropTypes.func,
};

export default ViewCertificateButton;
