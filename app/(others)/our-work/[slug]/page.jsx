import Button from "@/components/_common/Button";
import CaseStudyBanner from "@/components/_common/caseStudyDetail/CaseStudyBanner";
import CaseStudyInfo from "@/components/_common/caseStudyDetail/CaseStudyInfo";
import ParallaxImage from "@/components/_common/ParallaxImage";
import SectionHeader from "@/components/_common/SectionHeader";
import ServiceCaseStudies from "@/components/_servicesPages/ServiceCaseStudies";
import React from "react";

const page = ({ params }) => {
  return (
    <>
      <CaseStudyBanner />
      <ParallaxImage
        ImgUrl="/images/caseStudies/detailImg1.png"
        alt="detail Image 1"
      />
      <section className="mainContent section-padding-lg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <h5 className="caseStudyTitle mb-25 altFont fw600 darkGray fs32 lh40">
                Logitech VC Solutions
              </h5>
              <p className="mb-25">
                The Logitech – VC Solutions lead generation activity was
                designed to demonstrate how Logitech’s premium video and audio
                solutions can benefit companies of all sizes. Kestone aimed to
                enhance awareness and drive demand for Logitech’s B2B offerings,
                particularly their Video Conferencing solutions, within the
                Mid-Market and Enterprise segments, delivering measurable
                results. The primary objective is to position Logitech as the
                preferred choice for video conferencing solutions in India’s
                Mid-Market and Enterprise sectors.
              </p>
              <p className="mb-25">
                W launched an integrated campaign to boost brand awareness,
                spark product interest, and ultimately generate Marketing
                Qualified Leads (MQLs) and business opportunities. Our focus
                includes generating leads for Video Conferencing Solutions,
                Speakers, Mice, Keyboards, Headsets, and Apple accessories.
              </p>
              <Button text="Explore B2B Marketing" url="#" variant="dark" />
            </div>
            <div className="col-md-4 ms-auto">
              <CaseStudyInfo />
            </div>
          </div>
        </div>
      </section>
      <ParallaxImage
        ImgUrl="/images/caseStudies/detailImg2.png"
        alt="detail Image 2"
      />
      <section className="text-center section-padding sectionHeader pb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-7 mx-auto text-center ">
              <SectionHeader
                subTitle="More from B2B Lead Generation"
                title="Similar Projects You May Find Interesting"
                subTitleColor="mediumGray"
                titleColor="darkGray"
                fontFamily="altFont"
                subTitleFontSize="fs12"
                titleFontSize="fs32"
                textTransform="text-uppercase"
                fontWeightBold=""
              />
            </div>
          </div>
        </div>
      </section>
      <ServiceCaseStudies category="B2B Lead Generation" />
    </>
  );
};

export default page;
