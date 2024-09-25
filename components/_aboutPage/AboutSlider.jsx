"use client";

import Image from "next/image";
import Button from "../_common/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import classNames from "classnames";

const images = [
  {
    id: 1,
    url: "/images/aboutSlide1.png",
    alt: "MeltingPot",
    title: "MeltingPot  2020",
    desc1:
      "MeltingPot 2020 is a unique platform which brings together the entire innovation ecosystem for collaboration, dialogue and knowledge sharing.",
    desc2:
      "It aims to bring together bleeding edge innovation and path breaking ideas from leading industries and start-ups under one roof.",
    buttonLabel: "Read More",
    buttonUrl: "#",
  },
  {
    id: 2,
    url: "/images/aboutSlide2.png",
    alt: "Axis SME Hub",
    title: "AXIS SME Hub",
    desc1:
      "Considering the huge potential of the SME sector, corporates look reaching out to the SMEs.",
    desc2:
      "SMEs on the other hand need assistance from domain experts to scale up their business operations. AXIS is a platform that enables a handshake between these two entities while enabling networking, knowledge sharing and collaboration.",
    buttonLabel: "Read More",
    buttonUrl: "#",
  },
  {
    id: 3,
    url: "/images/aboutSlide3.png",
    alt: "InQuizitive Minds",
    title: "InQuizitive Minds",
    desc1:
      "How much time will it take your brand to say “Hello” to over one million students in-person and to over 10 million students online?",
    desc2:
      "An association with InQuizitveMinds, a quiz contest for school & college students, gives you access to these many students instantly!",
    buttonLabel: "Read More",
    buttonUrl: "https://www.inquizitiveminds.com/",
  },
];
const AboutSlider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = index < images.length - 1 ? index + 1 : 0;
    setIndex(nextIndex);
  };

  const handlePrev = () => {
    const nextIndex = index > 0 ? index - 1 : images.length - 1;
    setIndex(nextIndex);
  };

  return (
    <section className="aboutSlider">
      <div className="Carousel">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {images.map(
              (
                { url, alt, title, desc1, desc2, buttonLabel, buttonUrl, id },
                imageIndex
              ) => (
                <div
                  className={classNames(
                    "carousel-item aboutSlideItem position-relative w-100 aboutSlideItem section-padding",
                    {
                      active: imageIndex === index,
                    }
                  )}
                  key={id}
                >
                  <Image
                    src={url}
                    alt={alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 1263px"
                  />
                  <div className="container h-100">
                    <div className="row h-100 align-items-center">
                      <div className="col-md-5 ">
                        <div className="textWithArrows ps-md-5">
                          <div className="captionBox">
                            <h5 className="aboutSlideTitle altFont w-90 text-white fs32 lh40 fw500">
                              {title}
                            </h5>
                            <p className="lightGray mb-25">{desc1}</p>
                            <p className="lightGray mb-25">{desc2}</p>

                            <Button
                              url={buttonUrl}
                              text={buttonLabel}
                              variant="light btn-small"
                              target="_blank"
                            />
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                            onClick={handlePrev}
                          >
                            <FaArrowLeft />
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                            onClick={handleNext}
                          >
                            <FaArrowRight />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSlider;
