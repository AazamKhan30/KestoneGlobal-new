import Image from "next/image";

const HelpSection = () => {
  return (
    <section className="bg-light section-padding helpSection">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="helpTextLeft">
              <h3 className="w-50 altFont fw600 numberTitle ">'97</h3>
              <h5 className="mainTitle fw-bold altFont mb-4 darkGray text-uppercase fs32 lh40 w-75">
                We Help You Sell More and Sell Better
              </h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="helpImage">
              <Image
                src="/images/helpImage.jpg"
                alt="Help Image"
                fill
                sizes="(max-width: 767px) 100vw, 700px"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="helpTextLeft">
              <span className="d-block fs18 lh26 mb-25 fw400 darkGray">
                With creativity, technology and everything in between, we love
                discovering new ways of building consumer connections.
              </span>
              <div>
                <p className="textDark">
                  We’ re committed to the cause of making a positive impact in
                  your business. From creating awareness about your products to
                  nurturing prospects and making them your brand advocates, we
                  leverage every tool in a marketer’s tool-kit to deliver
                  integrated sales & marketing campaigns.
                </p>
                <p className="textDark">
                  Since 1997, it’s been 27 years of living our dream, of being
                  the marketing custodians for some of the biggest global B2B
                  and B2C brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
