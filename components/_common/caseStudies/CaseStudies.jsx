"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { caseStudyData } from "./caseStudiesData";
import { useEffect, useState } from "react";
import Button from "../Button";

const categoryList = [
  {
    id: 1,
    name: "B2B Lead Generation",
  },
  {
    id: 2,
    name: "Digital Marketing",
  },
  {
    id: 3,
    name: "Experiential Marketing",
  },
];

const CaseStudies = ({ button }) => {
  const [cat, setCat] = useState("B2B Lead Generation");
  const [filtersCaseStudies, setFiltersCaseStudies] = useState(
    caseStudyData.filter((caseStudy) => {
      return caseStudy.cat === "B2B Lead Generation";
    })
  );
  useEffect(() => {
    setFiltersCaseStudies(
      caseStudyData.filter((caseStudy) => caseStudy.category === cat)
    );
  }, [cat]);
  return (
    <section className="caseStudies section-padding pt-5">
      <div className="container-fluid">
        <ul className="filterList mb-50">
          {categoryList &&
            categoryList.map((item) => (
              <CategoryButton
                key={item.id}
                name={item.name}
                catActive={cat === item.name ? true : false}
                handleSetCat={setCat}
              />
            ))}
        </ul>
        <div className="row">
          {filtersCaseStudies &&
            filtersCaseStudies
              // .sort((a, b) => (a.id > b.id ? 1 : -1))
              .slice(0)
              .reverse()
              .map((item, slug) => (
                <div className="col-md-4" key={item.id}>
                  <div className="caseBox">
                    <div className="caseImg bgSite ">
                      <Image
                        src={item.imgUrl}
                        fill
                        alt={item.alt}
                        sizes="(max-width: 767px) 100vw, 1024px"
                      />
                      <div className="caseStudy-icon text-center">
                        <Link
                          className="textDark"
                          href={
                            `/our-work/` +
                            item.title.toLowerCase().split(" ").join("-")
                          }
                        >
                          <FaLink />
                        </Link>
                      </div>
                    </div>
                    <div className="caseText text-center ">
                      <span className="display-block">
                        <Link
                          className="text-uppercase fw600 darkGray fs11 lh20 altFont"
                          href={
                            `/our-work/` +
                            item.title.toLowerCase().split(" ").join("-")
                          }
                        >
                          {item.title}
                        </Link>
                      </span>
                      <p className="text-uppercase fs11 lh14 mediumGray mb-0">
                        {item.subTitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        {button && (
          <div className="button d-flex justify-content-center mt-4">
            <Button text="Read All" variant="dark" url="/our-work" />
          </div>
        )}
      </div>
    </section>
  );
};
const CategoryButton = ({ name, handleSetCat, catActive }) => {
  return (
    <li>
      <Link
        href="#"
        scroll={false}
        className={`tag ${catActive ? "active" : null}`}
        onClick={() => handleSetCat(name)}
      >
        {name.toUpperCase()}
      </Link>
    </li>
  );
};
export default CaseStudies;
