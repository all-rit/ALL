import React from "react";
import { images } from "src/constants/school_images.js";

function display_images() {
  return (
    <>
      {images.map((item, id) => (
        <img
          className="tw-max-w-40 lg:tw-max-w-sm tw-max-h-sm tw-m-5"
          key={id}
          src={require("../../assets/images/" + item.img + ".png")}
          alt={item.alt}
        />
      ))}
    </>
  );
}

function display_images_reverse() {
  return (
    <>
      {images.map((item, id) => (
        <img
          className="tw-max-w-40 lg:tw-max-w-sm tw-max-h-sm tw-m-5 tw-self-center"
          key={id}
          src={require("../../assets/images/" + item.img + ".png")}
          alt={item.alt}
        />
      ))}
    </>
  );
}

const Carousel = () => {
  return (
    <>
      <h1 className="tw-title-styling-name tw-mt-32 tw-mb-20">
        Participating Schools
      </h1>
      <div className="tw-m-auto tw-relative tw-items-center tw-h-1/6 lg:tw-h-1/4 tw-w-full lg:tw-w-3/4 tw-overflow-hidden">
        <div className="tw-w-full tw-h-full tw-scroll-smooth tw-animate-infinite-scroll tw-whitespace-nowrap">
          {display_images()}
          {display_images()}
        </div>
      </div>

      <div className="tw-m-auto tw-relative tw-items-center tw-h-1/6 lg:tw-h-1/4 tw-w-full lg:tw-w-3/4 tw-overflow-hidden">
        <div className="tw-w-full tw-h-full tw-flex tw-justify-end tw-scroll-smooth tw-animate-infinite-scroll-right tw-whitespace-nowrap ">
          {display_images_reverse()}
          {display_images_reverse()}
        </div>
      </div>
    </>
  );
};

export default Carousel;
