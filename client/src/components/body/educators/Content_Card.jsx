import * as React from "react";

Content_Card.propTypes = {
  Card: {
    image: "",
    labName: "",
    labBody: "",
    lectureSlides: "",
    videoLink: "",
  },
};
export function Content_Card(props) {
  return (
    <div className={"educator-card--main"}>
      <img className={"educator-card--image"} src={props.Card.image} />
      <div className={"educator-card--body"}>
        <h2 className={"educator-lab-name"}>
          {" "}
          {props.Card.labName.toUpperCase()}
        </h2>
        <p className={"tw-mb-3"}> {props.Card.labBody}</p>
        <a className={"tw-mb-3"} href={props.Card.lectureSlides}>
          {" "}
          Download Lecture Slides{" "}
        </a>
        <a href={props.Card.videoLink}> View Walkthrough Video </a>
      </div>
    </div>
  );
}
