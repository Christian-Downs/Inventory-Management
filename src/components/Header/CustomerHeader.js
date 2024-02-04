import { Button, Col, Row } from "reactstrap";
import "assets/css/customerHeader.css";
import React from "react";
import website from "assets/jsons/website.json";

import routes from "routes.js";
import { Link, Route, Routes } from "react-router-dom";

function CustomerHeader() {
  console.log("CustomerHeader");
  console.log("Testing")
  var routesLength = routes.filter((prop) => prop.customer).length;
  var coulmnSize = 12 / routesLength;

  console.log(routesLength);
  console.log(coulmnSize);

  return (
    <div>
      <Row>
        <Col xs="12">
          <div className="customerHeader">
            <h1 className="title">{website.name}</h1>
            <h3 className="subtitle">{website.subtitle}</h3>
            <p className="title-location">{website.title_location}</p>
            <div className="header-book-now-holder">
              <Button className="book-now-button">Book Now</Button>
            </div>
            <Row>
              {routes.map((prop, key) => {
                if (prop.customer) {
                  return (
                    <Col xs={coulmnSize}>
                      <Link className="customer-routing-links" href={prop.path}>
                        {prop.name}
                      </Link>
                    </Col>
                  );
                }
              })}
            </Row>

          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CustomerHeader;
