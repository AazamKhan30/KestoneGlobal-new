import SectionHeader from "@/components/_common/SectionHeader";
import InvestorServices from "@/components/_common/ServicesSimple/InvestorServices";
import ServiceBanner from "@/components/_servicesPages/ServiceBanner";

const page = () => {
  return (
    <>
      <ServiceBanner
        title="Investor Services"
        imgUrl="/images/investor-banner.jpg"
      />
      <section className="text-center section-padding pb-0 sectionHeader">
        <div className="container px-md-5">
          <div className="row">
            <div className="col-md-9 mx-auto text-center ">
              <SectionHeader
                subTitle="Integrated Sales & Marketing Agency"
                title="We are big enough to manage scale & small enough to understand the care you need"
                subTitleColor="siteColor"
                titleColor="darkGray"
                fontFamily="altFont"
                subTitleFontSize="fs12"
                titleFontSize="fs25"
                textTransform="text-uppercase"
                fontWeightLight="true"
              />
            </div>
          </div>
        </div>
      </section>
      <InvestorServices />
    </>
  );
};

export default page;
