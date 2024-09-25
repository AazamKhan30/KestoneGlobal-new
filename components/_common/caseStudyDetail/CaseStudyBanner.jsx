import { FaArrowDown } from "react-icons/fa";

const CaseStudyBanner = () => {
  return (
    <section className="caseStudyBanner vh-100 position-relative d-flex align-items-center justify-content-center text-center">
      <div className="bgOverlay position-absolute top-0 start-0 w-100 h-100 bgBlack opacity8 zIndex-1"></div>
      <div className="container ">
        <div className="bannerContent ">
          <div className="sep">
            <span className="d-block mb-25 text-bottom-line "></span>
          </div>
          <div className="categoryTitle altFont text-white fs11 lh14">
            Lead Generation
          </div>
          <h1 className="mainTitle fw700 text-white altFont d-inline-block mb-20 fs70 lh70">
            Logitech VC Solutions
          </h1>
          <span className="d-inline-block w-60 mb-25 fs20 lh26 textVeryLight">
            How We Executed a Strategic Lead Generation Strategy To Generate
            Marketing Qualified Leads and Business Opportunities for Logitech.
          </span>
          <div className="downSec">
            <a href="" className="downSecLink bgSite p-3 rounded-circle ">
              <FaArrowDown className="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyBanner;
