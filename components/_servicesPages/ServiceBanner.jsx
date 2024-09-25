import Image from "next/image";

const ServiceBanner = ({ title, subtitle, imgUrl }) => {
  return (
    <section className="serviceBanner section-padding-lg bgBlackLight text-center position-relative mt-70">
      {imgUrl && <Image src={imgUrl} alt="service Banner" fill />}
      <div className="container">
        <h1 className="pageTitle fs46 lh49 text-white altFont text-uppercase mb-10 opacity7">
          {title}
        </h1>
        <h2 className="pageSubTitle fs18 text-white altFont fw600 ls-minus-1 w-60 mx-auto">
          {subtitle}
        </h2>
      </div>
    </section>
  );
};

export default ServiceBanner;
