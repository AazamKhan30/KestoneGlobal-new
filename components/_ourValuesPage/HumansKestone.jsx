import Link from "next/link";
import humansBg from "@/public/images/humansKestoneBg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import HumansCarousel from "./HumansCarousel";
const HumansKestone = () => {
  return (
    <section className="humansKestone ">
      <div className="container">
        <div className="row justify-content-between ">
          <div className="col-md-5 ms-auto">
            <div className="humansContent">
              <span className="humansTitle fs24 lh23 fw500 text-white mt-20 mb-25 d-inline-block">
                Humans of Kestone
              </span>
              <div className="humansText ">
                <p className="mb-25 text-white">
                  Get to know the quirky, unique, and lovable individuals who
                  make Kestone the dynamic and successful company it is. From
                  their hobbies and passions, to their career aspirations and
                  achievements, we hope these stories give you a glimpse into
                  the hearts and minds of Kestonians.
                </p>
              </div>
              <Link
                href="#"
                className="linkBtn text-white btnSmall"
                target="_blank"
              >
                Check out more on social media <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="col-md-5">
            <HumansCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumansKestone;
