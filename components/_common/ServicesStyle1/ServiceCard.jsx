import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({ id, imgUrl, imgAlt, title, desc, linkText, url }) => {
  return (
    <div className="featureBox" key={id}>
      <div className="featureBoxImg position-relative mb-30">
        <Image src={imgUrl} alt={imgAlt} fill />
      </div>
      <span className="altFont mb-1 d-block darkGray fw600 text-uppercase fs12 lh20">
        {title}
      </span>
      <div>
        <p className="mb-25">{desc}</p>
      </div>
      <div className="separator-line-horrizontal mb-4 bgExtraLightGray"></div>
      <Link
        href={url}
        target="_blank"
        className="serviceLinkSimple altFont fw600 darkGray fs11 lh14 text-uppercase"
      >
        {linkText} <FaArrowRightLong className="siteColor fs16 lh23" />
      </Link>
    </div>
  );
};

export default ServiceCard;
