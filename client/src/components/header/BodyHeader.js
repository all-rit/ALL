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
    <section className="page-section">
      <div className="container">
        <div className="row">
          {labShortName ? (
            <div className="col-lg-12 text-center">
              <br />
              <br />
              <h2 className="section-heading text-uppercase">
                {labShortName}: {body}
              </h2>
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
