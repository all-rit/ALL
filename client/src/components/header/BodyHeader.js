/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import LabService from "../../services/LabService";
import Spinner from "../../common/Spinner/Spinner";
const Header = (props) => {
  const { labID, body } = props;
  const [labShortName, setLabShortname] = useState(null);
  useEffect(() => {
    LabService.getLabShortName(labID).then((data) => {
      setLabShortname(data[0].labShortName);
    });
  }, [labID]);

  return (
    <section className="page-section mt-3 mb-5">
      {labShortName ? (
        <div className="w-100">
          <div className="tw-relative w-100">
            <span className="tw-absolute tw-top-20 yellowHeaderLine tw-bg-labYellow"></span>
            <span className="tw-absolute tw-top-16 blueHeaderLine tw-bg-labBlue"></span>
          </div>
          <div className="tw-bg-labLightGray tw-rounded-3xl d-flex flex-column align-items-center m-3 p-2 tw-w-8/12 bodyHeader shadow">
            <h2 className="section-heading mt-2">
              {labShortName}: {body}
            </h2>
            <h5 className="mt-1 mb-3"> Accessible Learning Labs</h5>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </section>
  );
};

export default Header;
