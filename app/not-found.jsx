import Button from "@/components/_common/Button";
import Image from "next/image";

const notFound = () => {
  return (
    <div className="notFound vh-100 d-flex align-items-center justify-content-center text-center bgBlack flex-column">
      <div className="logo">
        <Image
          src="/images/kestone-logo-white.png"
          width={125}
          height={26}
          alt="kestone Logo"
        />
      </div>
      <h6 className="notFoundTitle text-uppercase altFont mt-4 fw700 siteColor">
        Oops!
      </h6>
      <h6 className="altFont fs18 lh26 lightGray fw500">
        Look's like you got lost...
      </h6>

      <Button
        text="Go Back to Home"
        url="/"
        variant="darkGray"
        className="mt-4 text-uppercase altFont fs14"
      />
    </div>
  );
};

export default notFound;
