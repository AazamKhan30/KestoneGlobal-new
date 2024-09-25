import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceSimpleCard = ({ id, title, desc, linkText, url, color }) => {
  return (
    <div className="serviceBox" key={id}>
      <span
        className={`altFont fw600 text-uppercase fs12 lh20 mb-5 ${
          color ? "siteColor" : "darkGray"
        }`}
      >
        {title}
      </span>
      <div>
        <p className="mb-25">{desc}</p>
      </div>
      <div className="separator-line-horrizontal mb-4 bgExtraLightGray"></div>
      <Link
        href={url}
        className="serviceLinkSimple altFont fw600 darkGray fs11 lh14 text-uppercase"
      >
        {linkText} <FaArrowRightLong className="siteColor fs16 lh23" />
      </Link>
    </div>
  );
};

export default ServiceSimpleCard;
