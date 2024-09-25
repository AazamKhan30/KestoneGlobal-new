"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const humanImages = [
  {
    id: 1,
    imgUrl: "/images/sliders/humansofKestone1.png",
    alt: "Humans of Kestone 1",
  },
  {
    id: 2,
    imgUrl: "/images/sliders/humansofKestone2.jpg",
    alt: "Humans of Kestone 2",
  },
  {
    id: 3,
    imgUrl: "/images/sliders/humansofKestone3.png",
    alt: "Humans of Kestone 3",
  },
  {
    id: 4,
    imgUrl: "/images/sliders/humansofKestone4.png",
    alt: "Humans of Kestone 4",
  },
  {
    id: 5,
    imgUrl: "/images/sliders/humansofKestone5.png",
    alt: "Humans of Kestone 5",
  },
  {
    id: 6,
    imgUrl: "/images/sliders/humansofKestone6.png",
    alt: "Humans of Kestone 6",
  },
  {
    id: 7,
    imgUrl: "/images/sliders/humansofKestone7.png",
    alt: "Humans of Kestone 7",
  },
  {
    id: 8,
    imgUrl: "/images/sliders/humansofKestone8.png",
    alt: "Humans of Kestone 8",
  },
  {
    id: 9,
    imgUrl: "/images/sliders/humansofKestone9.jpg",
    alt: "Humans of Kestone 9",
  },
  {
    id: 10,
    imgUrl: "/images/sliders/humansofKestone10.jpg",
    alt: "Humans of Kestone 10",
  },
  {
    id: 11,
    imgUrl: "/images/sliders/humansofKestone11.jpg",
    alt: "Humans of Kestone 11",
  },
  {
    id: 12,
    imgUrl: "/images/sliders/humansofKestone12.jpg",
    alt: "Humans of Kestone 12",
  },
  {
    id: 13,
    imgUrl: "/images/sliders/humansofKestone13.png",
    alt: "Humans of Kestone 13",
  },
  {
    id: 14,
    imgUrl: "/images/sliders/humansofKestone14.png",
    alt: "Humans of Kestone 14",
  },
  {
    id: 15,
    imgUrl: "/images/sliders/humansofKestone15.png",
    alt: "Humans of Kestone 15",
  },
  {
    id: 16,
    imgUrl: "/images/sliders/humansofKestone16.jpg",
    alt: "Humans of Kestone 16",
  },
  {
    id: 17,
    imgUrl: "/images/sliders/humansofKestone17.jpg",
    alt: "Humans of Kestone 17",
  },
  {
    id: 18,
    imgUrl: "/images/sliders/humansofKestone18.jpg",
    alt: "Humans of Kestone 18",
  },
  {
    id: 19,
    imgUrl: "/images/sliders/humansofKestone19.jpg",
    alt: "Humans of Kestone 19",
  },
];

const HumansCarousel = () => {
  var settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="humanSlider">
      <Slider {...settings}>
        {humanImages &&
          humanImages.map((item) => (
            <div className="humanSlide" key={item.id}>
              <Image
                src={item.imgUrl}
                alt={item.alt}
                fill
                sizes="(max-width: 767px) 100vw, 458px"
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default HumansCarousel;
