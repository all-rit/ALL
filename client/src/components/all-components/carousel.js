import React from "react";
import { images } from "src/constants/school_images.js";

const Carousel = () => {
  return (
    <div>
      <h1>HELLO</h1>
      <p>Carousel here please</p>

      {images.map((item, id) => (
        <img
          key={id}
          src={require("../../assets/images/" + item.img + ".png")}
          alt={item.alt}
        />
      ))}
    </div>
  );
};

export default Carousel;
