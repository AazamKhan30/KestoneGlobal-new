import Image from "next/image";
import Button from "../_common/Button";

const JoinUs = () => {
  return (
    <section className="joinUsSec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="joinContent">
              <span className="subTitle fs13 lh20 siteColor mb-10 altFont fw500 text-uppercase d-block">
                We For
              </span>
              <h5 className="fs48 lh52 fw700 black">VICTORY</h5>
              <p className="mb-0">
                Living and thriving the spirit of victory
                <br /> since 27 years.
              </p>
              <Button
                text="Join The Madness"
                url="#"
                variant="dark"
                className=" mt-20"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="joinImg">
              <Image
                src="/images/joinUs.jpg"
                alt=""
                width={750}
                height={500}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
