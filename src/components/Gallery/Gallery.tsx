import * as React from "react";
import * as style from "./Gallery.module.scss";
import { Slide } from "react-slideshow-image";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  autoplay: false,
  infinite: false,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

export const Gallery = () => {
  return (
    <Slide {...properties}>
      <img
        src={require("../../assets/gallery_1.jpg")}
        className={style.eachSlide}
      />
      <img
        src={require("../../assets/gallery_2.jpg")}
        className={style.eachSlide}
      />
      <img
        src={require("../../assets/gallery_3.jpg")}
        className={style.eachSlide}
      />
    </Slide>
  );
};
