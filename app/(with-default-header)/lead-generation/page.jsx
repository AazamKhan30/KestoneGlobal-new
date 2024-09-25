import SectionHeader from "@/components/_common/SectionHeader";
import Services from "@/components/_common/ServicesStyle1/Services";
import ServiceBanner from "@/components/_servicesPages/ServiceBanner";
import { leadGenData } from "@/components/_common/ServicesStyle1/servicesData";
import ParallaxImage from "@/components/_common/ParallaxImage";
import ServicesForm from "@/components/_servicesPages/ServicesForm";
import ServiceCaseStudies from "@/components/_servicesPages/ServiceCaseStudies";

const page = () => {
  return (
    <div className="marginTop mt-70">
      <ServiceBanner
        title="B2b Lead Generation agency"
        subtitle="Get Sales Qualified Leads."
      />
      <section className="text-center section-padding-lg pb-0 sectionHeader">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <SectionHeader
                subTitle="B2B Lead Generation Agency"
                title="Account Based Marketing, Appointment Setting, Audience Generation or something else, what's on your mind?"
                description="Whether you want to nurture a focused account list or are looking to expand your markets by building databases in new territories, it pays off to work with a seasoned B2B lead generation agency."
                subTitleColor="siteColor"
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
      <Services data={leadGenData} />
      <ParallaxImage ImgUrl="/images/parallax1.png" alt="B2b Lead Generation" />

      <section className="text-center section-padding sectionHeader pb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center ">
              <SectionHeader
                subTitle="The Proof is in the Pudding"
                title="Our Best Foot Forward as a B2B Lead Generation Agency"
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
      <ServicesForm
        subTitle="Get in touch"
        title="Let's Build Engaging Lead Generation Campaigns"
        desc="Explore B2B lead generation solutions for your brand with an award winning marketing agency."
        imgUrl="/images/clients/google-partner.jpg"
        formId="eb700ad7-e26f-42db-a7cb-0c01c14c10a2"
      />
    </div>
  );
};

export default page;
