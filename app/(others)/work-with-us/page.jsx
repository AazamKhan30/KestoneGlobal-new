import MastheadTwo from "@/components/_common/MastheadTwo";
import SectionHeader from "@/components/_common/SectionHeader";
import JobListing from "@/components/_workWithUsPage/JobListing";
import JoinUs from "@/components/_workWithUsPage/JoinUs";
import JoinUsForm from "@/components/_workWithUsPage/JoinUsForm";
import React from "react";

export const metadata = {
  title: "Work With Us",
  description:
    "Join us to find fulfilment in sharing your knowledge and skills, and to contribute to our vision of achieving a prosperous, inclusive, resilient, and long-term presence in the global market.",
};
const page = () => {
  return (
    <>
      <MastheadTwo
        title="The Awesomest Place On Earth"
        desc="Whether it’s brainstorming new ideas, debating different approaches, or working on a project from start to finish, we are a team that loves to dig deep and get things done."
        buttonText="Join Us"
        buttonUrl="#joinUs"
        imgUrl="/images/careerBanner.png"
      />

      <section className="text-center pt-60 pb-60" id="joinUs">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <SectionHeader
                title="#BeingKestone"
                description="At Kestone, we strive to keep things ASAP as simple as possible, and we feel that this can only be accomplished by challenging convention and developing a revolutionary approach to things. We value people for who they are and feel that each individual is special in their own way. We assist in bringing out the best in employees by providing them with the best challenges and opportunities for growth."
                titleColor="darkGray"
                fontFamily="altFont"
                titleFontSize="fs32"
                textTransform="text-uppercase"
                fontWeightBold=""
              />
            </div>
          </div>
        </div>
      </section>
      <JoinUs />
      <section className="text-center pt-60 ">
        <div className="container">
          <div className="row">
            <div className="sectionHeader mb-5">
              <h5 className="darkGray altFont d-inline-block fw600 mb-10 fs32 lh-40">
                Find Your Match!
              </h5>
              <p>Browse jobs by location and see where you fit in</p>
            </div>
          </div>
        </div>
      </section>
      <JobListing />
      <JoinUsForm bgImage="true" />
    </>
  );
};

export default page;
