import SectionHeader from "@/components/_common/SectionHeader";
import ServiceBanner from "@/components/_servicesPages/ServiceBanner";
import ParallaxImage from "@/components/_common/ParallaxImage";
import ServicesForm from "@/components/_servicesPages/ServicesForm";
import { digitalServiceData } from "@/components/_common/ServicesSimple/servicesSimpleData";
import ServicesSimple from "@/components/_common/ServicesSimple/ServicesSimple";
import ServiceCaseStudies from "@/components/_servicesPages/ServiceCaseStudies";

const page = () => {
  return (
    <div className="marginTop mt-70">
      <ServiceBanner
        title="Digital Marketing Agency"
        subtitle="Stop Living, Start Trending."
      />
      <section className="text-center section-padding pb-0 sectionHeader">
        <div className="container px-md-5">
          <div className="row">
            <div className="col-md-9 mx-auto text-center ">
              <SectionHeader
                subTitle="Award Winning Digital Marketing Agency"
                title="Lead Generation, Social Media Marketing, SEO or something else, what's on your mind?"
                description="Got a standalone project brief for a global brand or looking for full stack digital marketing services for your cozy little start-up, it pays off to work with a Digital Marketing agency which is a certified Google Partner."
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
      <div className="section-padding-sm">
        <ServicesSimple data={digitalServiceData} />
      </div>
      <ParallaxImage ImgUrl="/images/parallax3.png" alt="Digital Marketing" />
      <section className="text-center section-padding sectionHeader pb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center ">
              <SectionHeader
                subTitle="The Proof is in the Pudding"
                title="Our Best Foot Forward as a Creative Digital Marketing Agency"
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

      <ServiceCaseStudies category="Digital Marketing" />
      <ServicesForm
        subTitle="Get in touch"
        title="Let's Build Digital Concepts, Creatives and Campaigns"
        desc="Explore digital marketing solutions for your brand with an award winning Digital Marketing agency."
        imgUrl="/images/clients/google-partner.jpg"
        formId="369992b9-6faf-408c-b2f8-f557e2faa7ce"
      />
    </div>
  );
};

export default page;
