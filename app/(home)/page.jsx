import Image from "next/image";

import HeroSlider from "@/components/_homePage/HeroSlider";
import AboutCompany from "@/components/_homePage/AboutCompany";
import OurIPs from "@/components/_homePage/OurIPs";
import AwardRecognitions from "@/components/_homePage/AwardRecognitions";
import B2bMarketing from "@/components/_homePage/B2bMarketing";
import ClientLogos from "@/components/_common/ClientLogos";
import OurClientele from "@/components/_homePage/OurClientele";
import CaseStudies from "@/components/_common/caseStudies/CaseStudies";
import SectionHeader from "@/components/_common/SectionHeader";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutCompany />
      <ClientLogos variant="grayscale" border="true" />
      <section className="text-center section-padding pb-0" id="joinUs">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <SectionHeader
                title="27 Years into Delivering Integrated Sales & Marketing Campaigns"
                description="With creativity backed by technology, as a B2B marketing agency, we love discovering new ways of building consumer connections and helping you sell more. Here’re some inspirations for you."
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
      <CaseStudies button="true" />
      <OurClientele />
      <OurIPs />
      <AwardRecognitions bgImage={true} />
      <B2bMarketing />
    </>
  );
}
