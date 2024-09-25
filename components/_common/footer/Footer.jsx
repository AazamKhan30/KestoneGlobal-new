import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialMedia, recentWork } from "./footerContent";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <section className="footer">
      <Container className="position-relative">
        <Row className="">
          <Col md={3} className="footerCol">
            <div className="innerCol">
              <Link className="footerLogo" href="/">
                <Image
                  src="/images/kestone-logo-white.png"
                  alt="footer logo"
                  width={125}
                  height={26}
                />
              </Link>
              <p className="footerText">
                Founded in 1997, Kestone is an Integrated Experiential and B2B
                Marketing Agency.
              </p>
              <div className="socialBox">
                <ul className="socialIcons">
                  {socialMedia.map((item) => {
                    return (
                      <li key={item.alt}>
                        <Link href={item.iconURL} target="_blank">
                          {item.src}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Col>
          <Col md={3} className="footerCol">
            <div className="innerCol">
              <div className="columTitle">Our Recent Work</div>
              <ul className="latestPost">
                {recentWork.map((work) => {
                  return (
                    <li key={work.id}>
                      <Link href={work.postURL} className="footerText">
                        {work.postTitle}
                      </Link>
                      <span className="workDate">{work.postDate}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>

          <Col md={3} className="footerCol">
            <div className="innerCol">
              <div className="columTitle">OUR REVIEWS ON G2</div>
              <Link href="https://www.g2.com/products/kestone/reviews">
                <Image
                  src="/images/G2-Reviews.png"
                  alt="G2 Reviews"
                  width={150}
                  height={75}
                />
              </Link>
            </div>
          </Col>

          <Col md={3} className="footerCol">
            <div className="innerCol">
              <div className="columTitle">CONTACT US</div>
              <p className="footerText">
                Kestone Integrated Marketing Services (A Division of CL Educate
                Limited) <br />
                3rd Floor, 203 A-18, Ram House, Middle Circle Connaught Place,
                New Delhi, Delhi - 110001
                <br />
                +91-9716299360
                <br />
                Email:{" "}
                <Link href="mailto:marketing@kestoneglobal.com">
                  marketing@kestoneglobal.com
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
