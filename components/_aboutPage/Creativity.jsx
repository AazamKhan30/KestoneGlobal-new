import Link from "next/link";
import { FaArrowRightLong, FaQuoteLeft } from "react-icons/fa6";

const Creativity = () => {
  return (
    <section className="bg-light section-padding creativitySec">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-5">
            <div className="bgBlackLight storyBlock ">
              <span className="fs16 lh23 fw400 text-white mt-20 mb-25 d-inline-block">
                Honestly, we aren't talking anything new in this section. The
                story here, for this part of the page, is a bit weird.
              </span>
              <div className="mb-25">
                <p className="lightGray mb-25">
                  We added this section only because we felt it will improve the
                  overall aesthetics of this page! That’s how obsessed with
                  UI/UX we are!
                </p>
                <p className="lightGray">
                  If you too are sensitive towards designing and appreciate any
                  attempt made towards being creative, then you wouldn’t mind
                  this section, isn’t it?
                </p>
              </div>
              <div>
                <Link
                  href="#"
                  className=" altFont fw600 text-white fs12 lh20 text-uppercase"
                >
                  Time to Look at Our Work{" "}
                  <FaArrowRightLong className="siteColor fs16 lh23 ms-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-5 ms-md-5 ">
            <div className="quoteBlock ps-md-5 pt-5 pt-md-0 text-center text-md-start">
              <FaQuoteLeft className="aboutQuote mb-20 " />
              <h5 className="mb-20 darkGray fw600 altFont fs32 lh40 ">
                Creativity is intelligence having fun
              </h5>
              <div className="mb-25">
                <p className="mb-25">
                  Golden were those words from Albert Einstein. Over these years
                  we have realized how creativity has changed its definition.
                </p>
                <p className="mb-25">
                  Now, it includes the way programming codes are written, the
                  way project management is done, and the way campaigns are
                  configured. Isn’t all this morphing marketers into
                  techno-marketers?
                </p>
                <p>Thankfully, we have got a bunch of them. Use them.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creativity;
