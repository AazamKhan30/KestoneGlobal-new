import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../_common/Button";
const OurIPs = () => {
  return (
    <section className="section-padding-lg ourIps">
      <Container>
        <Row className="align-items-center">
          <Col md={3}>
            <div className="ipImgBox mb-3 mb-md-0">
              <Image
                src="/images/kestone-IP-1.png"
                alt="kestone IP"
                fill
                sizes="(max-width: 767px) 100vw, 263px"
              />
            </div>
          </Col>
          <Col md={3}>
            <div className="ipImgBox mb-3 mb-md-0">
              <Image
                src="/images/kestone-IP-2.png"
                alt="kestone IP 2"
                fill
                sizes="(max-width: 767px) 100vw, 263px"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="textBox px-md-5 px-2">
              <h4 className="fs40 darkGray fw600 altFont mb-4">
                Empower B2B Startups to Scale Globally
              </h4>
              <span className="d-block fs20 fw-light altFont textDark mb-4">
                Ready to take your startup to the next level with a wide range
                of growth recipes?
              </span>
              <p className="fs14 textDark mb-4">
                Born from Kestone Global’s marketing DNA, The Kestone GTM
                Acceleration Program unlocks the power of proven strategies for
                ambitious startups. Through our commitment to fostering growth
                and innovation, we aim to fuel the entrepreneurial spirit in
                India and contribute to the evolution of a vibrant startup
                ecosystem.
              </p>
              <Button
                variant="dark btn-small"
                text="More on our IP"
                url="/about"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurIPs;
