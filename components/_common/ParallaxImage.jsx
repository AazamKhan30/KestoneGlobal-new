"use client";
import { Parallax } from "react-parallax";
const ParallaxImage = ({ ImgUrl, alt }) => {
  return (
    <Parallax
      bgImage={ImgUrl}
      bgImageAlt={alt}
      strength={200}
      className="vh-100"
    >
      {" "}
    </Parallax>
  );
};

export default ParallaxImage;
