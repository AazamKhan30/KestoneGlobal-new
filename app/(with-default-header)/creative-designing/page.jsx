import SectionHeader from "@/components/_common/SectionHeader";
import Services from "@/components/_common/ServicesStyle1/Services";
import ServiceBanner from "@/components/_servicesPages/ServiceBanner";
import { creativeData } from "@/components/_common/ServicesStyle1/servicesData";
import ParallaxImage from "@/components/_common/ParallaxImage";
import ServicesForm from "@/components/_servicesPages/ServicesForm";
import ServiceCaseStudies from "@/components/_servicesPages/ServiceCaseStudies";

const page = () => {
  return (
    <div className="marginTop mt-70">
      <ServiceBanner
        title="Creative Design Agency"
        subtitle="Stand Out. Stay Ahead."
      />
      <section className="text-center section-padding-lg pb-0 sectionHeader">
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto text-center">
              <SectionHeader
                subTitle="Award Winning Creative Design Agency"
                title="Motion Graphics, Office Branding, Content Writing or anything else, bring it on!"
                description="Who would you trust to manage your brand’s persona? Would the decision making be simpler if you reached the webpage of a creative design agency which had managed marcom for Fortune 500 companies? This is that page. Read on."
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
      <Services data={creativeData} />
      <ParallaxImage ImgUrl="/images/parallax2.png" alt="Creative Designing" />
      <section className="text-center section-padding sectionHeader pb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center ">
              <SectionHeader
                subTitle="The Proof is in the Pudding"
                title="Our Best Foot Forward "
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
        title="Let's Design Something Good and Make'em 'Follow' You"
        desc="Explore creative designing solutions for your brand with an award winning creative design agency."
        imgUrl="/images/clients/google-partner.jpg"
        formId="2fa5e110-09c3-413b-b45b-95ac4735e374"
      />
    </div>
  );
};

export default page;
