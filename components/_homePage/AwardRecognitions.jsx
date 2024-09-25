import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import awardBg from "@/public/images/awardBg.jpg";
export const awardData = [
  {
    id: 1,
    image: require("/public/images/awardImage.png"),
    subtitle: "Small Budget Event of the Year",
    title: "Dell Technologies Experience Zone at Gartner Symposium",
    desc: "WOW Awards Asia, 2024",
  },
  {
    id: 2,
    image: require("/public/images/awardImage.png"),
    subtitle: "Effective Digital Marketing",
    title: "Edvanza Mobile App & Web Promotion",
    desc: "ACEF Global Customer​ Engagement Forum and Awards 2023",
  },

  {
    id: 3,
    image: require("/public/images/awardImage.png"),
    subtitle: "Experiential Marketing Agency of The Year",

    desc: "EDCA 2023",
  },

  {
    id: 4,
    image: require("/public/images/awardImage.png"),
    subtitle: "Product Launch Of The Year​",
    title: "Dell Product Launch (Alienware)​",
    desc: "EDCA 2023",
  },

  {
    id: 5,
    image: require("/public/images/awardImage.png"),
    subtitle: "Government Event of The Year​",
    title: "TERI – World Sustainability Development Summit​",
    desc: "EDCA 2023",
  },

  {
    id: 6,
    image: require("/public/images/awardImage.png"),
    subtitle: "Leading Tech Marketing Agency​​",
    title: "Marketing 2.0 Conference, Las Vegas, 2022​",
  },

  {
    id: 7,
    image: require("/public/images/awardImage.png"),
    subtitle: "Kestone Corporate​​",
    title: "WOW Award​",
    desc: "WOW Awards Asia 2022​",
  },

  {
    id: 8,
    image: require("/public/images/awardImage.png"),
    subtitle: "Data-Driven Marketing​​",
    title: "GitHub Academic Program​​",
    desc: "ACEF Global Customer Engagement Forum and Awards 2022​",
  },

  {
    id: 9,
    image: require("/public/images/awardImage.png"),
    subtitle: "Experiential Marketing​",
    title: "SAP Global Bharat 2.0​​",
    desc: "ACEF Global Customer Engagement Forum and Awards 2022​",
  },
];
const AwardRecognitions = ({ bgImage }) => {
  return (
    <section className="section-padding position-relative">
      {bgImage && (
        <Image
          src={awardBg}
          fill="true"
          className="awardBgImg"
          alt="kestone Awards"
          priority
        />
      )}

      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <div className="awardTextBox mb-4 mb-md-0">
              <h5 className="fs32 altFont fw-bold">AWARDS & RECOGNITIONS</h5>
              <p>Testimony to Our Business Excellence</p>
            </div>
          </Col>
          <Col md={8}>
            <Row className="awardRow">
              {awardData.map((award) => {
                return (
                  <Col md={4} key={award.id} className="mb-5">
                    <div className="text-center awardMain">
                      <div className="mb-3 awardImage">
                        <Image
                          src={award.image}
                          alt={`award ${award.id}`}
                          width={80}
                        />
                      </div>
                      <div className="awardText">
                        {award.subtitle && (
                          <p>
                            <small>{award.subtitle}</small>
                          </p>
                        )}

                        {award.title && <h6>{award.title}</h6>}
                        {award.desc && (
                          <p className="mb-1 lineHeight_1">{award.desc}</p>
                        )}
                      </div>
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

export default AwardRecognitions;
