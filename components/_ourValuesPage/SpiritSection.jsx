import Image from "next/image";
import micImage from "@/public/images/we-are-kestone.png";

const SpiritSection = () => {
  return (
    <section className="bg-light section-padding-lg spiritSection">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="helpTextLeft">
              <h3 className="w-50 altFont fw600 numberTitle ">'27</h3>
              <h5 className="mainTitle fw-bold altFont mb-4 darkGray text-uppercase fs32 lh40 w-75">
                The Spirit
                <br /> of Being Kestone
              </h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="helpImage">
              <Image
                src={micImage}
                alt="Help Image"
                fill
                sizes="(max-width: 767px) 100vw, 700px"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="helpTextLeft">
              <span className="d-block fs18 lh26 mb-25 fw400 darkGray">
                A bunch of easygoing, energetic and hard-working individuals,
                living & thriving in the spirit of Victory for 27 years.
              </span>
              <div>
                <p className="textDark">
                  At Kestone, we value people for who they are and feel that
                  each individual is special in their own way. We’re a fun and
                  dynamic group of go-getters who are always looking for new
                  ways to innovate and make a positive impact. We leverage every
                  tool in a marketers tool-kit to deliver integrated sales &
                  marketing campaigns.
                </p>
                <p className="textDark">
                  Creating Value, working with Integrity, pursuing Customer
                  delight, Teamwork in brainstorming new ideas, Owning every
                  aspect of the project, being Resilient and never giving up the
                  Yearning for VICTORY, are more than just words for us as it’s
                  a way of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritSection;
