"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import Button from "../_common/Button";

export const sliderData = [
  {
    id: 1,
    image: require("/public/images/office-branding.png"),
    subtitle: "That's Who We Are",
    title: "B2B Marketing  Agency",
    buttonLabel: "Explore",
    buttonUrl: "#",
    button2Label: "Our Work",
    button2Url: "/our-work",
  },

  {
    id: 2,
    image: require("/public/images/experiential-marketing.png"),
    subtitle: "Think Events. Deliver Experiences.",
    title: "Experiential Marketing",
    buttonLabel: "Explore ",
    buttonUrl: "#",
    button2Label: "Our Work",
    button2Url: "/our-work",
  },

  {
    id: 3,
    image: require("/public/images/lead-generation.jpg"),
    subtitle: "Drive Sales. Grow Business.",
    title: "Lead Generation",
    buttonLabel: "Explore ",
    buttonUrl: "#",
    button2Label: "Our Work",
    button2Url: "/our-work",
  },

  {
    id: 4,
    image: require("/public/images/content-marketing.png"),
    subtitle: "Build Brand. Start Trending",
    title: "Content Marketing",
    buttonLabel: "Explore ",
    buttonUrl: "#",
    button2Label: "Our Work",
    button2Url: "/our-work",
  },
];
const HeroSlider = () => {
  return (
    <section className="homeSlider heroSliderMain">
      <Carousel className="heroSliderInner">
        {sliderData.map((item) => {
          return (
            <Carousel.Item
              className="position-relative w-100 vh-100 heroSlideItem"
              key={item.id}
            >
              <Image
                src={item.image}
                fill
                style={{ objectFit: "cover", width: "100%" }}
                alt={"slide " + item.id}
                sizes="(max-width: 767px) 100vw, 1263px"
              />
              <Carousel.Caption className="top-0 start-0 end-0 h-100 w-100 d-flex flex-column justify-content-center align-items-center bottom-0 p-0 heroSliderText">
                <h6 className="heroSubTitle">{item.subtitle}</h6>
                <div className="heroTitle">{item.title}</div>
                <div className="d-flex flex-column flex-md-row  gap-3 w-100 justify-content-center mt-4 heroButtons">
                  <Button
                    url={item.buttonUrl}
                    text={item.buttonLabel}
                    variant="light outlined btn-small"
                  />
                  <Button
                    url={item.button2Url}
                    text={item.button2Label}
                    variant="light outlined btn-small"
                  />
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default HeroSlider;
