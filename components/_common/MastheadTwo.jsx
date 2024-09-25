import Image from "next/image";
import Button from "./Button";

const MastheadTwo = ({ imgUrl, title, desc, buttonText, buttonUrl }) => {
  return (
    <section className="mastHead vh-100 w-100 position-relative">
      <Image
        src={imgUrl}
        fill
        alt="about Banner"
        sizes="(max-width: 767px) 100vw, 1920px"
        priority={true}
      />

      <div className="row g-0 h-100">
        <div className="ms-auto col-md-6 h-100">
          <div className="bg-deep-pink mastheadText h-100 ">
            <div className="textPart position-relative">
              <div className="box-separator-line bg-white"></div>
              <h1 className="fw600 altFont text-white fw600 altFont mb-25">
                {title}
              </h1>
              <p className="w-75 fs18 lh-26 text-white">{desc}</p>
              <Button
                text={buttonText}
                url={buttonUrl}
                variant="light"
                className="mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MastheadTwo;
