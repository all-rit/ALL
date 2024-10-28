import React from "react";
import { images } from "src/constants/school_images.js";

const Carousel = () => {
  return (
    <>
      <div className="tw-m-auto tw-relative tw-flex tw-items-center tw-h-80 tw-w-3/4 tw-border-black tw-border-solid tw-overflow-hidden">
        <div className="tw-w-full tw-h-full tw-scroll-smooth tw-animate-infinte-scroll tw-whitespace-nowrap">
          {images.map((item, id) => (
            <img
              className="tw-max-w-sm tw-max-h-sm tw-m-5"
              key={id}
              src={require("../../assets/images/" + item.img + ".png")}
              alt={item.alt}
            />
          ))}

          {images.map((item, id) => (
            <img
              className="tw-max-w-sm tw-max-h-sm tw-m-5"
              key={id}
              src={require("../../assets/images/" + item.img + ".png")}
              alt={item.alt}
            />
          ))}
        </div>
      </div>

      <div className="tw-m-auto tw-relative tw-flex tw-items-center tw-h-80 tw-w-3/4 tw-border-black tw-border-solid tw-overflow-hidden">
        <div className="tw-w-full tw-h-full tw-scroll-smooth tw-animate-infinte-scroll-right tw-whitespace-nowrap tw-float-right tw-border-black tw-border-solid tw-justify-start">
          {images.map((item, id) => (
            <img
              className="tw-max-w-sm tw-max-h-sm tw-m-5"
              key={id}
              src={require("../../assets/images/" + item.img + ".png")}
              alt={item.alt}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
