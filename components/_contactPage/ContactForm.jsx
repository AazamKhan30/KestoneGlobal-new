import React from "react";
import Image from "next/image";

import HubSpotForm from "@/components/_common/HubSpotForm";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../_common/Button";
const ContactForm = (variant, text) => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={6} className="contactBlock">
            <div className="innerBLock">
              <div className="contactImgBox">
                <Image
                  src="/images/contact-us.png"
                  alt="contact Image"
                  fill
                  className="object-fit-cover"
                  sizes="(max-width: 767px) 100vw, 432px"
                />
              </div>
              <div className="contactTextBox">
                <h5 className="contactTitle">
                  Let's talk. How can we help you?
                </h5>
                <p className="contactText">
                  We help you sell more and sell better. We are in the business
                  of delivering marketing campaigns and maximizing returns from
                  every penny spent.
                </p>
                <div className="contactButtonBox">
                  <Button
                    text="About Us"
                    variant="dark btn-small"
                    url="/about"
                  />
                  <Button
                    text="Work with Us"
                    variant="dark outlined btn-small"
                    url="/our-work"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className="contactBlock">
            <div className="innerBLock">
              <HubSpotForm formId="178e4f6b-493f-4f7c-b169-6c4a90be98e9" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
