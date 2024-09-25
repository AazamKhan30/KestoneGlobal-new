import Image from "next/image";
import Button from "../_common/Button";
import quoteImg from "@/public/images/quoteImg.png";
import { FaQuoteLeft } from "react-icons/fa6";

const OurClientele = () => {
  return (
    <section className="ourClientele bgBlackLight">
      <div className="row">
        <div className="col-md-6">
          <div className="imagePart position-relative">
            <Image
              src={quoteImg}
              fill
              alt="Our Project delivery"
              sizes="(max-width: 767px) 100vw, 640px"
            />
            <div
              className="bg-overlay bgBlackLight"
              style={{ opacity: 0.5 }}
            ></div>
            <div className="quoteBox position-absolute top-50 start-50 translate-middle bgSite text-center">
              <FaQuoteLeft className="quoteIcon" />

              <h6 className="fs25 lh30 fw300 text-white">
                Awesome B2B Marketing Agency. Flawless Project Delivery.
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="textPart">
            <span className="d-block fs16 fw500 lightGray altFont mb-10">
              Our Clientele
            </span>
            <h2 className="fw600 altFont mb-25">
              Testimony to Our Business Excellence
            </h2>
            <h6 className="mb-25 w-90 fs20 lh26 fw600 lightGray">
              We are humbled when some of the biggest global brands trust us
              with their marketing campaigns
            </h6>
            <div className="textBox mb-5">
              <p className="lightGray w-90 ">
                Mobile app marketing for an EdTech brand, Virtual Event for a
                pharma company, Audience Generation for a consumer durable
                brand, Inside Sales Program for an OEM, brand re-launch for an
                FMCG company; there have been numerous such stories built over
                27 years, across geographies, which keep us inspired.
              </p>
            </div>
            <Button text="Look at Our Clients" url="#" variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClientele;
