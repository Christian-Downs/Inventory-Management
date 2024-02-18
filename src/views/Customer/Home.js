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
        <Row className="row-padding">
          <Col>
            <CarouselCustom />
          </Col>
        </Row>
        <Row className="pinkbg row-padding">
          <Col>
          <div className="customer-info">
              <h1 className="row-padding">Our Services</h1>
              <div className="subpoints">
                <div>
                  <h3>Party packages</h3>
                  <h4>Additional info can be included here, or an image can be used in its place.</h4>
                </div>
                <div>
                  <h3>Set up & styling</h3>
                  <h4>Additional info can be included here, or an image can be used in its place.</h4>
                </div>
                <div>
                  <h3>Free delivery</h3>
                  <h4>Additional info can be included here, or an image can be used in its place.</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <img className="max-400"
              src="https://plus.unsplash.com/premium_photo-1689609949815-bdb46c0f2397?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1689609949815-bdb46c0f2397?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </Col>
          <Col>
            <div className="customer-info">
              <h1 className="row-padding">Why Choose Us?</h1>
              <div className="subpoints">
                <div>
                  <h3>Hassle-free & simple</h3>
                  <h4>Additional info can be included here, or an image can be used in its place.</h4>
                </div>
                <div>
                  <h3>Affordable pricing</h3>
                  <h4>Additional info can be included here, or an image can be used in its place.</h4>
                </div>
                <div>
                  <h3>Memorable experiences</h3>
                  <h4>Additional info can be included here, or an image can be used in its place.</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row> 
        <Row>
         <Col></Col>
         <Col>
          <div className="row-padding">
            <img className="max-400"
            src="https://plus.unsplash.com/premium_photo-1689609949815-bdb46c0f2397?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1689609949815-bdb46c0f2397?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <h3>Additional info can be included here, or an image can be used in its place.</h3>
          </div>
         </Col>
         <Col>
          <div className="row-padding">
            <h3>Additional info can be included here, or an image can be used in its place.</h3>
            <img className="max-400"
            src="https://plus.unsplash.com/premium_photo-1689609949815-bdb46c0f2397?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1689609949815-bdb46c0f2397?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
         </Col>
         <Col></Col>
        </Row>
        <ContactPage />
      </div>
    </>
  );
}

export default Home;
