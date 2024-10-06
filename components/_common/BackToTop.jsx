"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <span
        className="scrollTop "
        onClick={scrollTop}
        style={{
          display: showScroll ? "block" : "none",
        }}
      >
        <FaArrowUp />
      </span>
    </>
  );
};

export default BackToTop;
