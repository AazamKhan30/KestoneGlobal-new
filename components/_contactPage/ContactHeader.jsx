import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const ContactHeader = ({ subTitle, title, description }) => {
  return (
    <section className="section-padding-xl text-center contactHeader">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <span className="mediumGray altFont fs12 mb-2 d-block text-uppercase">
              {subTitle}
            </span>
            <h2 className="darkGray altFont fs55 mb-3 fw-bold">{title}</h2>
            <p className="fs14 fw-normal px-md-5">{description}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactHeader;
