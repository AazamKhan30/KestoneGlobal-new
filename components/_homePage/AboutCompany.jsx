import Image from "next/image";
import { PiTargetThin } from "react-icons/pi";
import { PiApertureThin } from "react-icons/pi";
import { Container, Row, Col } from "react-bootstrap";

const AboutCompany = () => {
  const iconBoxes = [
    {
      id: 1,
      icon: <PiTargetThin />,
      title: "Our Purpose",
      desc: "Deliver the most knitted marketing solutions which can help our clients sell more.",
    },

    {
      id: 2,
      icon: <PiApertureThin />,
      title: "Our Strength",
      desc: "Our curiosity with creatives is as deep as our passion for programming.",
    },
  ];
  return (
    <section className="section-padding-lg position-relative aboutCompany">
      <Image
        src="/images/aboutCompanyBg.jpg"
        alt="about Company"
        fill
        style={{ objectFit: "cover" }}
      />

      <Container className="zIndex1 position-relative">
        <Row className="justify-content-end align-items-center">
          <Col md={6}>
            <div className="textBox">
              <span className="siteColor altFont fs16 mb-2 d-block">
                In: Project Brief. Out: Human Experiences
              </span>
              <h5 className="darkGray altFont fs32 fw600 mb-4">
                We are Good at Marketing &amp; Better at Integrated Marketing
              </h5>
              <p className="fs14 fw-normal textDark">
                Established in 1997, we’re a 25 years old B2B marketing agency.
                We are a bunch of storytellers, technologists, and relentlessly
                curious minds. We are creative designers, techno-marketers and
                growth hackers who are religious about{" "}
                <a className="textDark" href="#">
                  creating experiences{" "}
                </a>
                and delivering results through{" "}
                <a className="textDark" href="#">
                  B2B marketing.
                </a>
              </p>
            </div>
            <Row>
              {iconBoxes.map((iconBox) => {
                return (
                  <Col md={6}>
                    <div className="FeatureBox">
                      <i className="fs48 siteColor mb-2 d-inline-block">
                        {iconBox.icon}
                      </i>
                      <span className="d-block fs14 altFont mb-1 darkGray fw600">
                        {iconBox.title}
                      </span>
                      <p className="fs14 w-75 textDark font-normal ">
                        {iconBox.desc}
                      </p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCompany;
