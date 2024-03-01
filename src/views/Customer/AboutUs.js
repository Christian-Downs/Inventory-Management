import React from 'react';
import "assets/css/customer-home.css";
import "assets/css/customer.css";
import "assets/css/aboutus.css";
import { Image } from 'react-bootstrap';
import aboutUsImage from "assets/img/aboutus.jpg";
import { Col, Row } from 'reactstrap';

const AboutUs = () => {
  return (
    <>
      <div className="customer-content">
        {/* <h1 className="row-padding">About Us</h1> */}
        <Row className="row-padding">
          <Col>
            <h2 className="about-us-header">Meet the Downses</h2>
            <p className="about-us-info">
              Welcome to the heart of our family's passion, where tradition
              blends with community spirit. The Downs family is proud to operate
              a business deeply rooted in our hometown values, offering more
              than just services—we're creating experiences. For years, we've
              dedicated ourselves to not just meeting, but exceeding the
              expectations of those we serve, weaving the fabric of our
              community into every event we touch. Our tent rental services are
              a testament to our commitment to elegance and sophistication,
              providing a stylish backdrop for gatherings that range from
              intimate celebrations to grand festivities. At the core of it all,
              our mission remains steadfast: to enhance community bonds by
              bringing people together under the canopy of our family's
              hospitality.
            </p>
          </Col>
          <Col>
            <Image src={aboutUsImage} className="about-us-main-image" fluid />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AboutUs;
