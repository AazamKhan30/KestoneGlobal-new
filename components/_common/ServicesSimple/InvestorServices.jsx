import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
export const investorServiceData = [
  {
    id: 1,
    title: "Annual Return 2020-21",
    desc: "Annual Return FY 2020-21",
    linkText: "View Here",
    url: "https://kestoneglobal.com/wp-content/uploads/2021/09/Kestone-Annual-Return-FY-2020-21.pdf",
  },

  {
    id: 2,
    title: "CSR Projects",
    desc: "Status of Existing/proposed CSR Projects",
    linkText: "View Here",
    url: "https://kestoneglobal.com/wp-content/uploads/2022/02/Kestone-CSR-Projects.pdf",
  },
  {
    id: 3,
    title: "CSR Policy",
    desc: "Corporate Social Responsibility Policy",
    linkText: "View Here",
    url: "https://kestoneglobal.com/wp-content/uploads/2022/02/Kestone_CSR-Policy.pdf",
  },

  {
    id: 4,
    title: "Draft Scheme of Arrangement",
    desc: "Scheme of Arrangement Draft",
    linkText: "View here",
    url: "https://kestoneglobal.com/wp-content/uploads/2022/03/1.-Draft-Scheme-of-Arrangement.pdf",
  },
  {
    id: 5,
    title: "Kestone Notice to Unsecured Creditors",
    desc: "Notice to Unsecured Creditors",
    linkText: "View here",
    url: "https://blog.kestoneglobal.com/",
  },
  {
    id: 6,
    title: "Newspaper Advertisement",
    desc: "NCLT Meeting Notice_Kestone",
    linkText: "View here",
    url: "https://kestoneglobal.com/wp-content/uploads/2022/03/3.-Newspaper-Advertisement-of-NCLT-Meeting-Notice_Kestone.pdf",
  },
  {
    id: 7,
    title: "Scrutinizer Report_Creditors Meeting",
    desc: "Report of Scrutinizer",
    linkText: "View here",
    url: "https://kestoneglobal.com/wp-content/uploads/2022/03/4.-Scrutinizer-Report_Creditors-Meeting.pdf",
  },
  {
    id: 8,
    title: "NCLT Order of Amalgamation",
    desc: "Order of Amalgamation",
    linkText: "View Here",
    url: "https://kestoneglobal.com/wp-content/uploads/2022/03/5.-NCLT-Order-of-Amalgamation.pdf",
  },
];

const InvestorServices = () => {
  return (
    <section className="investorServices section-padding-sm">
      <div className="container">
        <div className="row gy-5">
          {investorServiceData &&
            investorServiceData.map((service) => (
              <div className="col-md-3">
                <div className="serviceBox ">
                  <span className="altFont fw600 fs12 lh20 mb-5 darkGray">
                    {service.title}
                  </span>
                  <div>
                    <p className="mb-25">{service.desc}</p>
                  </div>
                  <div className="separator-line-horrizontal mb-4 bgExtraLightGray"></div>
                  <Link
                    href={service.url}
                    target="_blank"
                    className="serviceLinkSimple altFont fw600 darkGray fs11 lh14 text-uppercase"
                  >
                    {service.linkText}{" "}
                    <FaArrowRightLong className="siteColor fs16 lh23" />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorServices;
