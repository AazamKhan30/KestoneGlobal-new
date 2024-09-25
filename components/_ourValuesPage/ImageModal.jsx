import Image from "next/image";
import React from "react";

import { IoMdClose } from "react-icons/io";
const ImageModal = ({
  clickedImg,
  handelRotationRight,
  setClickedImg,
  handelRotationLeft,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };
  return (
    <div className="imgOverlay dismiss" onClick={handleClick}>
      <div className="imageBox">
        <Image
          src={clickedImg}
          alt="bigger picture"
          fill
          sizes="(max-width: 767px) 100vw, 1200px"
        />
      </div>

      <IoMdClose className="dismiss" onClick={handleClick} />
      <div onClick={handelRotationLeft} className="imgOverlay-arrows-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
        </svg>
      </div>

      <div onClick={handelRotationRight} className="imgOverlay-arrows-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default ImageModal;
