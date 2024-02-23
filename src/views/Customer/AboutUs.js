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
            <h2 className='about-us-header'>Meet the Downs' updated</h2>
            <p className='about-us-info'>
              We are a company that provides a variety of services to our
              customers. We have been in business for over 10 years and have
              built a reputation for providing high-quality services. Our
              services include cleaning, maintenance, and repair services.<br/><br/> We
              are committed to providing our customers with the best possible
              service and ensuring that they are satisfied with the work we do.
              We are dedicated to providing our customers with the best possible
              service and ensuring that they are satisfied with the work we do.
              We are dedicated to providing our customers with the best possible
              service and ensuring that they are satisfied with the work we do.
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
