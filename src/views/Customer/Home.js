/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import "assets/css/customer-home.css";
import "assets/css/customer.css"
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

import CarouselCustom from "components/ImageHandling/CarouselCustom.js";

import ContactPage from "components/Contact/ContactPage.js";

function Home(props) {
   console.log("test") 
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="customer-content">
        <Row>
          <Col xs="12">
            <CarouselCustom />
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ width: "100%", height: "100%" }}>
              <h1 style={{ color: "black" }}>Welcome to our website</h1>
            </div>
          </Col>
          <Col>
            <img src="https://plus.unsplash.com/premium_photo-1661778564867-793e81325e80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVlcGVlJTIwdmVydGljYWx8ZW58MHx8MHx8fDA%3D" />
          </Col>
          <Col>
            <div
              className="customer-info"
              style={{ width: "100%", height: "100%" }}
            >
              <h1>Our Services</h1>
              <p>Service 1</p>
              <p>Service 2</p>
              <p>Service 3</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>Test1</Row>
            <Row>Test2</Row>
            <Row>Test3</Row>
          </Col>
          <Col>
            <Row>Test4</Row>
            <Row>Test5</Row>
            <Row>Test6</Row>
          </Col>
        </Row>
        <ContactPage />
      </div>
    </>
  );
}

export default Home;
