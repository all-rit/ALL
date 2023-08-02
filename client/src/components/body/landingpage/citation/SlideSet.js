/* eslint-disable react/jsx-key */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable guard-for-in */
import React, { useEffect, useState } from "react";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

const SlideSet = (props) => {
  const { teamInformation, renderProfileData } = props;
  const [exit, setExit] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideSet, setSlideSet] = useState(null);
  const [numSlides, setNumSlides] = useState(0);

  const renderSlideset = (information) => {
    const profiles = renderProfileData(information);
    const rows = [];
    let profile_row = [];
    for (const i in profiles) {
      profile_row.push(profiles[i]);
      if (profile_row.length === 3) {
        rows.push(profile_row);
        profile_row = [];
      }
    }
    if (profile_row.length !== 0) {
      rows.push(profile_row);
    }
    setNumSlides(rows.length);
    return rows.map((rows, index) => {
      return (
        <div key={index} alt="students" className="landingpage__row">
          {rows}
        </div>
      );
    });
  };

  const onExiting = () => {
    setExit(true);
  };
  const onExited = () => {
    setExit(false);
  };

  const next = () => {
    if (exit) return;
    const nextIndex = activeIndex === numSlides - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (exit) return;
    const nextIndex = activeIndex === 0 ? numSlides - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    setSlideSet(
      renderSlideset(teamInformation).map((item, index) => {
        return (
          <CarouselItem onExiting={onExiting} onExited={onExited}>
            <div key={index}> {item} </div>
          </CarouselItem>
        );
      })
    );
    // eslint-disable-next-line
  }, [teamInformation]);

  return (
    <>
      {slideSet ? (
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          ride="carousel"
        >
          {slideSet}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      ) : (
        <></>
      )}
    </>
  );
};

export default SlideSet;
