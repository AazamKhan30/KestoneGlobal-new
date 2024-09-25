"use client";
import Image from "next/image";
import Link from "next/link";
import ImageModal from "./ImageModal";

import { useEffect, useState } from "react";

const galleryImages = [
  {
    id: 1,
    imgUrl: "/images/gallery/gpw1.jpg",
    alt: "great Place to Work 1",
    tag: "great place to work",
  },

  {
    id: 2,
    imgUrl: "/images/gallery/gpw2.jpg",
    alt: "great Place to Work 2",
    tag: "great place to work",
  },

  {
    id: 3,
    imgUrl: "/images/gallery/gpw3.jpg",
    alt: "great Place to Work 3",
    tag: "great place to work",
  },

  {
    id: 4,
    imgUrl: "/images/gallery/gpw4.jpg",
    alt: "great Place to Work 4",
    tag: "great place to work",
  },

  {
    id: 5,
    imgUrl: "/images/gallery/gpw5.jpg",
    alt: "great Place to Work 5",
    tag: "great place to work",
  },
  {
    id: 6,
    imgUrl: "/images/gallery/gpw6.jpg",
    alt: "great Place to Work 6",
    tag: "great place to work",
  },
  {
    id: 7,
    imgUrl: "/images/gallery/gpw7.jpg",
    alt: "great Place to Work 7",
    tag: "great place to work",
  },

  {
    id: 8,
    imgUrl: "/images/gallery/gpw8.jpg",
    alt: "great Place to Work 8",
    tag: "great place to work",
  },

  {
    id: 9,
    imgUrl: "/images/gallery/gpw9.jpg",
    alt: "great Place to Work 9",
    tag: "great place to work",
  },

  {
    id: 10,
    imgUrl: "/images/gallery/lol1.jpg",
    alt: "League of The Legends 1",
    tag: "league of the legends",
  },
  {
    id: 11,
    imgUrl: "/images/gallery/lol2.jpeg",
    alt: "League of The Legends 2",
    tag: "league of the legends",
  },
  {
    id: 12,
    imgUrl: "/images/gallery/lol3.jpg",
    alt: "League of The Legends 3",
    tag: "league of the legends",
  },
  {
    id: 13,
    imgUrl: "/images/gallery/lol4.jpeg",
    alt: "League of The Legends 4",
    tag: "league of the legends",
  },
  {
    id: 14,
    imgUrl: "/images/gallery/lol5.jpeg",
    alt: "League of The Legends 5",
    tag: "league of the legends",
  },
  {
    id: 15,
    imgUrl: "/images/gallery/lol6.jpg",
    alt: "League of The Legends 6",
    tag: "league of the legends",
  },
  {
    id: 16,
    imgUrl: "/images/gallery/lol7.jpg",
    alt: "League of The Legends 7",
    tag: "league of the legends",
  },
  {
    id: 17,
    imgUrl: "/images/gallery/lol8.jpg",
    alt: "League of The Legends 8",
    tag: "league of the legends",
  },
  {
    id: 18,
    imgUrl: "/images/gallery/lol9.jpg",
    alt: "League of The Legends 9",
    tag: "league of the legends",
  },

  {
    id: 19,
    imgUrl: "/images/gallery/ahm22-1.jpg",
    alt: "All Hands meet 2022 1",
    tag: "all hands meet 2022",
  },
  {
    id: 20,
    imgUrl: "/images/gallery/ahm22-2.jpg",
    alt: "All Hands meet 2022 2",
    tag: "all hands meet 2022",
  },

  {
    id: 21,
    imgUrl: "/images/gallery/ahm22-3.jpg",
    alt: "All Hands meet 2022 3",
    tag: "all hands meet 2022",
  },

  {
    id: 22,
    imgUrl: "/images/gallery/ahm22-4.jpg",
    alt: "All Hands meet 2022 4",
    tag: "all hands meet 2022",
  },

  {
    id: 23,
    imgUrl: "/images/gallery/ahm22-5.jpg",
    alt: "All Hands meet 2022 5",
    tag: "all hands meet 2022",
  },
  {
    id: 24,
    imgUrl: "/images/gallery/ahm22-6.jpg",
    alt: "All Hands meet 2022 6",
    tag: "all hands meet 2022",
  },

  {
    id: 25,
    imgUrl: "/images/gallery/ahm22-7.jpg",
    alt: "All Hands meet 2022 7",
    tag: "all hands meet 2022",
  },
  {
    id: 26,
    imgUrl: "/images/gallery/ahm22-8.jpg",
    alt: "All Hands meet 2022 8",
    tag: "all hands meet 2022",
  },
  {
    id: 27,
    imgUrl: "/images/gallery/ahm22-9.jpg",
    alt: "All Hands meet 2022 9",
    tag: "all hands meet 2022",
  },
  {
    id: 28,
    imgUrl: "/images/gallery/ahm23-1.jpg",
    alt: "All Hands meet 2023 1",
    tag: "all hands meet 2023",
  },
  {
    id: 29,
    imgUrl: "/images/gallery/ahm23-2.jpg",
    alt: "All Hands meet 2023 2",
    tag: "all hands meet 2023",
  },
  {
    id: 30,
    imgUrl: "/images/gallery/ahm23-3.jpg",
    alt: "All Hands meet 2023 3",
    tag: "all hands meet 2023",
  },
  {
    id: 31,
    imgUrl: "/images/gallery/ahm23-4.jpg",
    alt: "All Hands meet 2023 4",
    tag: "all hands meet 2023",
  },

  {
    id: 32,
    imgUrl: "/images/gallery/ahm23-5.jpg",
    alt: "All Hands meet 2023 5",
    tag: "all hands meet 2023",
  },

  {
    id: 33,
    imgUrl: "/images/gallery/ahm23-6.jpg",
    alt: "All Hands meet 2023 6",
    tag: "all hands meet 2023",
  },

  {
    id: 34,
    imgUrl: "/images/gallery/ahm23-7.jpg",
    alt: "All Hands meet 2023 7",
    tag: "all hands meet 2023",
  },

  {
    id: 35,
    imgUrl: "/images/gallery/ahm23-8.jpg",
    alt: "All Hands meet 2023 8",
    tag: "all hands meet 2023",
  },

  {
    id: 36,
    imgUrl: "/images/gallery/ahm23-9.jpg",
    alt: "All Hands meet 2023 9",
    tag: "all hands meet 2023",
  },

  {
    id: 37,
    imgUrl: "/images/gallery/ahm24-1.jpg",
    alt: "All Hands meet 2024 1",
    tag: "all hands meet 2024",
  },

  {
    id: 38,
    imgUrl: "/images/gallery/ahm24-2.jpg",
    alt: "All Hands meet 2024 2",
    tag: "all hands meet 2024",
  },
  {
    id: 39,
    imgUrl: "/images/gallery/ahm24-3.jpg",
    alt: "All Hands meet 2024 3",
    tag: "all hands meet 2024",
  },

  {
    id: 40,
    imgUrl: "/images/gallery/ahm24-4.jpg",
    alt: "All Hands meet 2024 4",
    tag: "all hands meet 2024",
  },

  {
    id: 41,
    imgUrl: "/images/gallery/ahm24-5.jpg",
    alt: "All Hands meet 2024 5",
    tag: "all hands meet 2024",
  },

  {
    id: 42,
    imgUrl: "/images/gallery/ahm24-6.jpg",
    alt: "All Hands meet 2024 6",
    tag: "all hands meet 2024",
  },

  {
    id: 43,
    imgUrl: "/images/gallery/ahm24-7.jpg",
    alt: "All Hands meet 2024 7",
    tag: "all hands meet 2024",
  },
  {
    id: 44,
    imgUrl: "/images/gallery/ahm24-8.jpg",
    alt: "All Hands meet 2024 8",
    tag: "all hands meet 2024",
  },

  {
    id: 45,
    imgUrl: "/images/gallery/ahm24-9.jpg",
    alt: "All Hands meet 2024 9",
    tag: "all hands meet 2024",
  },

  {
    id: 46,
    imgUrl: "/images/gallery/ahm24-10.jpg",
    alt: "All Hands meet 2024 10",
    tag: "all hands meet 2024",
  },

  {
    id: 47,
    imgUrl: "/images/gallery/ahm24-11.jpg",
    alt: "All Hands meet 2024 11",
    tag: "all hands meet 2024",
  },
  {
    id: 48,
    imgUrl: "/images/gallery/ahm24-12.jpg",
    alt: "All Hands meet 2024 12",
    tag: "all hands meet 2024",
  },
];

const GallerySection = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.imgUrl);
  };
  const handelRotationRight = () => {
    const totalLength = filteredImages.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = filteredImages[0].imgUrl;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = filteredImages.filter((item) => {
      return filteredImages.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].imgUrl;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = filteredImages.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = filteredImages[totalLength - 1].imgUrl;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = filteredImages.filter((item) => {
      return filteredImages.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].imgUrl;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  const [tag, setTag] = useState("great place to work");
  const [filteredImages, setFilteredImages] = useState(
    galleryImages.filter((image) => {
      return image.tag === "great place to work";
    })
  );

  useEffect(() => {
    setFilteredImages(galleryImages.filter((image) => image.tag === tag));
  }, [tag]);
  return (
    <section className="gallerySec py-5">
      <div className="container">
        <ul className="filterList mb-50">
          <TagButton
            name="great place to work"
            tagActive={tag === "great place to work" ? true : false}
            handleSetTag={setTag}
          />{" "}
          <TagButton
            name="league of the legends"
            tagActive={tag === "league of the legends" ? true : false}
            handleSetTag={setTag}
          />{" "}
          <TagButton
            name="all hands meet 2022"
            tagActive={tag === "all hands meet 2022" ? true : false}
            handleSetTag={setTag}
          />{" "}
          <TagButton
            name="all hands meet 2023"
            tagActive={tag === "all hands meet 2023" ? true : false}
            handleSetTag={setTag}
          />
          <TagButton
            name="all hands meet 2024"
            tagActive={tag === "all hands meet 2024" ? true : false}
            handleSetTag={setTag}
          />
        </ul>

        <div className="row g-2">
          {filteredImages &&
            filteredImages.map((item, index) => (
              <div className="col-md-4" key={item.id}>
                <div className="galleryBox">
                  <Image
                    src={item.imgUrl}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 800px"
                    onClick={() => handleClick(item, index)}
                    priority={true}
                  />
                </div>
              </div>
            ))}
          {clickedImg && (
            <ImageModal
              clickedImg={clickedImg}
              handelRotationRight={handelRotationRight}
              setClickedImg={setClickedImg}
              handelRotationLeft={handelRotationLeft}
            />
          )}
        </div>
      </div>
    </section>
  );
};
const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <li>
      <Link
        href="#"
        scroll={false}
        className={`tag ${tagActive ? "active" : null}`}
        onClick={() => handleSetTag(name)}
      >
        {name.toUpperCase()}
      </Link>
    </li>
  );
};
export default GallerySection;
