"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { caseStudyData } from "../_common/caseStudies/caseStudiesData";
import { useState } from "react";

const ServiceCaseStudies = ({ category }) => {
  const [filtersCaseStudies, setFiltersCaseStudies] = useState(
    caseStudyData.filter((caseStudy) => {
      return caseStudy.category === category;
    })
  );
  return (
    <section className="caseStudies section-padding-sm">
      <div className="container">
        <div className="row">
          {filtersCaseStudies &&
            filtersCaseStudies
              .slice(-4)
              .reverse()

              .map((item, index) => (
                <div className="col-md-3" key={index}>
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
                      <span className="display-block ">
                        <Link
                          className="text-uppercase fw600 darkGray fs11 altFont lh-1"
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
      </div>
    </section>
  );
};

export default ServiceCaseStudies;
