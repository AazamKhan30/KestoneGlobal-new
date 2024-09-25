import formBg from "@/public/images/mapBg.png";
import Image from "next/image";
import HubSpotForm from "../_common/HubSpotForm";
const JoinUsForm = ({ subTitle, title, bgImage }) => {
  return (
    <section className="pt-60 pb-60 position-relative joinUsForm">
      {bgImage && (
        <Image
          src={formBg}
          fill="true"
          className="formBgImg"
          alt="kestone Awards"
          priority
        />
      )}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="formText">
              <div className="fs12 lh20 mb-10 altFont fw500 text-uppercase">
                Life is short, work at the <br /> awesomest place on Earth
              </div>
              <h5 className="fw600 d-inline-block altFont darkGray text-capitalize fs32 lh40">
                Join The Madness!
              </h5>
            </div>
          </div>
          <div className="col-md-6 ms-auto">
            <HubSpotForm formId="f593ad58-4005-46fb-8a17-a5c4bc43828e" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsForm;
