import Button from "@/components/_common/Button";
import CaseStudies from "@/components/_common/caseStudies/CaseStudies";
import MastheadTwo from "@/components/_common/MastheadTwo";
import SectionHeader from "@/components/_common/SectionHeader";

const Work = () => {
  return (
    <>
      <MastheadTwo
        title=" Here's Showcasing The Best of Kestone"
        desc="Some projects which keep us inspired. They might as well trigger some inspirations for you."
        buttonText="Take a Look"
        buttonUrl="#"
        imgUrl="/images/workBanner.png"
      />

      <section className="text-center section-padding-lg pb-5 sectionHeader">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <SectionHeader
                subTitle="Award Winning Marketing Agency"
                title="Our Work in Integrated Sales & Marketing"
                description="Browse through some of our exceptional projects and let us know if we can do something similar for you."
                subTitleColor="siteColor"
                titleColor="darkGray"
                fontFamily="altFont"
                subTitleFontSize="fs12"
                titleFontSize="fs32"
                textTransform="text-uppercase"
                fontWeightBold=""
              />
              <Button
                text="Lets Get in Touch"
                url="/contact-us"
                variant="dark"
                className="mt-3"
              />
            </div>
          </div>
        </div>
      </section>
      <CaseStudies />
    </>
  );
};

export default Work;
