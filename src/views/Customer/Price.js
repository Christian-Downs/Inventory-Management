import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "assets/css/price.css";
import website from "assets/jsons/website.json";


const Price = () => {
    const price_page = website.price;

  return (
    <div>
      <Row className="top-level-row">
        <div
          className="top-level-div-holder"
          style={{ background: price_page.header.background }}
        >
          <div className="top-level-div">
            <h1 className="price-header">{price_page.header.large_text}</h1>
            <p className="price-subheader">{price_page.header.small_text}</p>
          </div>
        </div>
      </Row>
      <Row className="party-pricing-info">
            
      </Row>
    </div>
  );
};

export default Price;
