import Image from "next/image";
import HubSpotForm from "../_common/HubSpotForm";

const ServicesForm = ({ subTitle, title, desc, imgUrl, formId }) => {
  return (
    <section className="section-padding-lg position-relative servicesForm bg-light ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="formText pe-md-5">
              <div className="fs12 lh20 mb-10 altFont fw500 text-uppercase mediumGray">
                {subTitle}
              </div>
              <h5 className="fw600 d-inline-block altFont darkGray text-capitalize fs32 lh40">
                {title}
              </h5>
              {desc && <p className="py-3">{desc}</p>}
            </div>
            {imgUrl && (
              <div className="partnerImg">
                <Image
                  src={imgUrl}
                  alt="Google Partner"
                  width={150}
                  height={150}
                />
              </div>
            )}
          </div>
          <div className="col-md-6 ms-auto">
            <HubSpotForm portalId="5118950" formId={formId} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesForm;
