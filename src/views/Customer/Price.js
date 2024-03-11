import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "assets/css/price.css";
import website from "assets/jsons/website.json";


const Price = () => {
    const price_page = website.price_page;
    const includedSection = price_page.included;
    const includedItems = price_page.included.Prices
    console.log(price_page)
    console.log(includedItems)
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
      <Row
        className="party-pricing-info"
        style={{ background: includedSection.background }}
      >
        <div className="party=pricing-info-div-holder">
          <Row className="party-pricing-title-row">
            <p className="party-pricing-title">{includedSection.header}</p>
          </Row>

          
          <Col className="party-pricing-col">
            {Object.keys(includedItems).map((price) => {
              console.log(includedSection.target_lenght);
              const periods_to_add =
                includedSection.target_lenght -
                price.length -
                includedItems[price].length;
              console.log(periods_to_add)

              return (
                <Row className="price-holder">
                  <span className="price-title">{price}</span>
                  <span className="dots"></span>
                  <span className="price-price">{includedItems[price]}</span>
                </Row>
              );
            })}
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default Price;
