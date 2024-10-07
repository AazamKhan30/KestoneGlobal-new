import React from "react";
import Image from "next/image";
import SectionHeader from "../_common/SectionHeader";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../_common/Button";
const B2bMarketing = () => {
  return (
    <section className="text-center b2bMarketingSection">
      <Container className="section-padding-lg">
        <Row>
          <Col md={8} className="mx-auto text-center">
            <SectionHeader
              subTitle="B2B MARKETING AGENCY"
              title="We are big enough to manage scale & small enough to understand the care you need"
              description="You may be an established enterprise with defined processes for almost everything or a self-funded start-up looking to create a niche for itself, we are here for you to make things work."
              subTitleColor="siteColor"
              titleColor="darkGray"
              fontFamily="altFont"
              subTitleFontSize="fs12"
              titleFontSize="fs32"
              textTransform="text-uppercase"
              fontWeightBold=""
            />
            <div className="mt-4">
              <Button
                text="Get in Touch"
                url="/contact"
                variant="dark outline"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="b2bImgBottom">
        <Image src="/images/Kestone-Team.png" alt="kestone team" fill />
      </div>
    </section>
  );
};

export default B2bMarketing;
