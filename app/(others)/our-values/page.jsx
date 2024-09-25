import Button from "@/components/_common/Button";
import MastheadTwo from "@/components/_common/MastheadTwo";
import SectionHeader from "@/components/_common/SectionHeader";
import GallerySection from "@/components/_ourValuesPage/GallerySection";
import HumansKestone from "@/components/_ourValuesPage/HumansKestone";
import SpiritSection from "@/components/_ourValuesPage/SpiritSection";
import VictorySection from "@/components/_ourValuesPage/VictorySection";

export const metadata = {
  title: "Our Values",
  description:
    "A bunch of storytellers, technologists, and relentlessly curious minds, living and thriving in the spirit of VICTORY for the past 25 years.",
};

const page = () => {
  return (
    <>
      <MastheadTwo
        title=" We For Victory."
        desc="A bunch of storytellers, technologists, and relentlessly curious minds, living and thriving in the spirit of Victory for the past 27 years."
        buttonText="Our Values"
        buttonUrl="#"
        imgUrl="/images/valueBanner.png"
      />
      <section className="text-center section-padding-lg sectionHeader">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <SectionHeader
                subTitle="Culture At Kestone"
                title="We Dig. We Discuss. We Develop. We Deliver."
                description="Whether it’s brainstorming new ideas, debating different approaches, or working on a project from start to finish, we are a team that loves to dig deep and get things done."
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
      <SpiritSection />
      <VictorySection />
      <HumansKestone />
      <section className="text-center section-padding-lg sectionHeader">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <SectionHeader
                subTitle="The Kestonian Factor"
                title="We Strive for Success in All Aspects of Our Lives, Including How to Have Fun."
                subTitleColor="siteColor"
                titleColor="darkGray"
                fontFamily="altFont"
                subTitleFontSize="fs12"
                titleFontSize="fs32"
                textTransform="text-uppercase"
              />
            </div>
          </div>
        </div>
      </section>
      <GallerySection />
      <section className="text-center py-5 ctaSec sectionHeader">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto text-center">
              <SectionHeader
                title="Life is short. Work at the awesomest place on Earth. Join the Madness!"
                titleColor="darkGray"
                fontFamily="altFont"
                titleFontSize="fs32"
                textTransform="text-uppercase"
                fontWeightBold=""
              />
              <Button text="Work With Us" url="#" variant="dark outline mt-4" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
