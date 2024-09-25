import AboutSlider from "@/components/_aboutPage/AboutSlider";
import Creativity from "@/components/_aboutPage/Creativity";
import HelpSection from "@/components/_aboutPage/HelpSection";
import ServicesSimple from "@/components/_common/ServicesSimple/ServicesSimple";
import ClientLogos from "@/components/_common/ClientLogos";
import MastheadTwo from "@/components/_common/MastheadTwo";
import SectionHeader from "@/components/_common/SectionHeader";
import AwardRecognitions from "@/components/_homePage/AwardRecognitions";
import aboutBanner from "@/public/images/aboutBg.png";
import { aboutServiceData } from "@/components/_common/ServicesSimple/servicesSimpleData";
export const metadata = {
  title: "About Us",
};

const About = () => {
  return (
    <>
      <MastheadTwo
        title=" Creative. Innovative. Imaginative. Period."
        desc="27 years into sales &amp; marketing, a lifetime into building
                campaigns. That’s pretty much in brief ‘about us’."
        buttonText="More About Us"
        buttonUrl="#"
        imgUrl={aboutBanner}
      />
      <section className="text-center section-padding sectionHeader">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <SectionHeader
                subTitle="Integrated Sales and Marketing Agency"
                title="We are Good at Marketing and Better at Integrated Marketing"
                description="We are a bunch of storytellers, technologists, and relentlessly curious minds. We are creative designers, techno-marketers and almost religious about inbound marketing and inside sales programs."
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
      <HelpSection />
      <section className="text-center section-padding-sm sectionHeader">
        <div className="container px-md-5">
          <div className="row">
            <div className="col-md-8 mx-auto text-center ">
              <SectionHeader
                subTitle="The Kestone Elevator Pitch"
                title="Give us a marketing brief and you won't get a more integrated pitch."
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
      <ServicesSimple data={aboutServiceData} color="siteColor" />
      <ClientLogos />

      <section className="text-center section-padding sectionHeader">
        <div className="container ">
          <div className="row">
            <div className="col-md-8 mx-auto text-center ">
              <SectionHeader
                subTitle="Properties We Are Proud Of"
                title="Do you have any specific communities to target? Say, Students, Start-Ups or SMEs?"
                description="We aim to help you expand your marketing universe, reach targeted communities, and build a positive brand disposition by curating these Intellectual Properties (IPs) which your brand can instantly ride upon."
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
      <AboutSlider />
      <Creativity />
      <AwardRecognitions />
    </>
  );
};

export default About;
