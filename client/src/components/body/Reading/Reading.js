/* eslint-disable react/prop-types */
import React, { Fragment, useEffect, useState } from "react";
import UserLabService from "../../../services/UserLabService";
import LabService from "../../../services/LabService";
import { Pie } from "react-chartjs-2";
import useScroll from "../../../use-hooks/useScroll";
import StudyList from "./studylist";
import NonBulletList from "./NonBulletList";
import Image from "./Image";
import Spinner from "../../../common/Spinner/Spinner";
import LinkFooter from "./LinkFooter";
import Links from "./Links";

const Reading = (props) => {
  const { user, labID } = props;
  const [readingData, setReadingData] = useState("");

  useScroll();
  useEffect(() => {
    UserLabService.complete_reading(labID);
    if (user?.firstname !== null && user !== null) {
      UserLabService.user_complete_reading(user.userid, labID);
    }
    LabService.getLabReading(labID).then((data) => {
      setReadingData(data[0].reading);
    });
  }, [user, labID]);

  if (!readingData) {
    return (
      <div className="landingpage__row">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="study">
      {readingData?.description !== "" ? (
        <>
          <h3>{readingData?.description.header}</h3>
          <p>{readingData?.description.content}</p>
        </>
      ) : (
        <></>
      )}
      {readingData?.piechart?.header && (
        <>
          <h3>{readingData?.piechart.header}</h3>
          <div className="flex">
            <Pie data={readingData?.piechart.data} height={100} />
          </div>
        </>
      )}
      {readingData?.piechart.caption !== "" ? (
        readingData?.piechart.caption.map((data, index) => {
          return (
            <div key={index} id={"caption"}>
              {data}
            </div>
          );
        })
      ) : (
        <></>
      )}

      {readingData?.body !== "" ? (
        readingData?.body.map((data, index) => {
          return (
            <Fragment key={index}>
              {data.header !== "" ? <h3>{data.header}</h3> : <></>}
              {data.type === "" ? (
                <>
                  {data.content.map((content, index) => {
                    return <p key={index}>{content}</p>;
                  })}
                </>
              ) : (
                <></>
              )}
              {data.type === "study__list" ? (
                <StudyList data={data.content} />
              ) : (
                <></>
              )}
              {data.type === "non-bullet-list" ? (
                <NonBulletList data={data.content} />
              ) : (
                <></>
              )}
              {data.type === "image" ? <Image data={data.content} /> : <></>}
              {data.type === "links" ? <Links data={data.content} /> : <></>}
            </Fragment>
          );
        })
      ) : (
        <></>
      )}
      {readingData?.footer !== "" ? (
        <LinkFooter data={readingData?.footer.links} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Reading;
