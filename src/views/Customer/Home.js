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
// import classNames from "classnames";
// react plugin used to create charts
// import { Line, Bar } from "react-chartjs-2";
import "assets/css/customer-home.css";
import "assets/css/customer.css"
// reactstrap components
import {

  Row,
  Col,

} from "reactstrap";

// core components
// import {
//   chartExample1,
//   chartExample2,
//   chartExample3,
//   chartExample4,
// } from "variables/charts.js";

import CarouselCustom from "components/ImageHandling/CarouselCustom.js";

// import ContactPage from "components/Contact/ContactPage.js";
import prettyPinkImage from 'assets/img/PINK/DSC00116_PINK_HERO1.jpg'
import spaceImage from 'assets/img/SPACE/DSC00044.jpg'
import glowImage from 'assets/img/GLOW/MainImage.jpg'
import website from "assets/jsons/website.json";
import { Image } from "react-bootstrap";
import { Link} from "react-router-dom";
import "assets/css/theme-card.css"
import firstConfetti from "assets/img/GLOW/DSC09932.jpg"
// import secondConfetti from "assets/img/GLOW/DSC09932.jpg"

const ThemeCard = ({theme}) => {
  const themeInfo = website.themes[theme]
  const themeImage = themeInfo["MainImage"]
  const image = require('assets/img/' + themeImage)
  console.log(theme)

  const link = "/theme/" + theme
  return (
    <Link className="theme-card" to={link} >
      <div className="theme-card-image-holder">
        <Image className="theme-card-image" src={image} />
      </div>
      <div className="theme-card-text-holder">
        <h1 className="theme-card-text">{theme}</h1>
      </div>
      
    </Link>
  )

}


function Home(props) {

  // const images = require.context('assets/img', true, /\.(png|jpe?g|svg)$/);

  //  console.log("test") 
  // const [bigChartData, setbigChartData] = React.useState("data1");
  // const setBgChartData = (name) => {
  //   setbigChartData(name);
  // };
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
                  <h3>Hassle Free & Simple</h3>
                  <h4>
                    Let us do all the work! On the day of your event, we will
                    come to you and set up your dream party. The following day,
                    we will take down and collect, so you don't have to lift a
                    finger.
                  </h4>
                </div>
                <div>
                  <h3>Design Your Own Party</h3>
                  <h4>
                    Choose from a variety of our themes to make your party fun
                    and unique! You can also choose from a handful of our
                    add-ons, to add some extra fun to your event.
                  </h4>
                </div>
                {/* <div>
                  <h3>Free delivery</h3>
                  <h4>
                    Additional info can be included here, or an image can be
                    used in its place.
                  </h4>
                </div> */}
              </div>
            </div>
          </Col>
          <img
            className="max-400"
            src={prettyPinkImage}
            alt="prettyPinkImage"
          />
          <Col>
            <div className="customer-info">
              <h1 className="row-padding">Party Package</h1>
              <div className="subpoints">
                <div>
                  <h3>What's Included</h3>
                  <div className="whats-included-div">
                    <h4>
                      Delivery, Set up/Styling, Takedown, Laundering of Linens.
                      <br />
                      Themed Teepees
                      <br />
                      Twin Mattresses with Fitted Sheets
                      <br />
                      Cozy Blankets
                      <br />
                      Decorative Themed Pillows
                      <br />
                      Tray Tables with Lights
                      <br />
                      String Lights
                      <br />
                      Garlands
                      <br />
                      Balloon Toppers
                      <br />
                    </h4>
                  </div>
                </div>
                {/* <div>
                  <h3>Affordable pricing</h3>
                  <h4>
                    Additional info can be included here, or an image can be
                    used in its place.
                  </h4>
                </div>
                <div>
                  <h3>Memorable experiences</h3>
                  <h4>
                    Additional info can be included here, or an image can be
                    used in its place.
                  </h4>
                </div> */}
              </div>
            </div>
          </Col>
        </Row>
        <Col className="theme-card-holder mobile" style={{backgroundImage: `url(${firstConfetti})`}}>
                
                    {
                      Object.keys(website.themes).map((theme, key) => {
                        return (
                          <Row className="theme-card-row" key={key}>
                            <ThemeCard theme={theme} />
                          </Row>
                        )
                      })

                    }
              
        </Col>

        <Row className="desktop">
          <Col></Col>
          <Col>
            <div className="row-padding ladder-animation">
              <img
                className="max-400"
                src={spaceImage}
                alt="spaceImage"
              />
              <p  className="ladder-text">
                We cater to girls and boys! Check out our available list of
                themes as we offer a variety of themes for every kid! Our party
                packages are only available for rent in the Edwardsville/St. Louis area.
                Outside of our delivery zone? Contact us for additional info on
                travel fees for surrounding areas.
              </p>
            </div>
          </Col>
          <Col>
            <div className="ladder-animation pt-75">
              
              <p className="ladder-text">
                Memorable Nights is a slumber party tent rental company that
                delivers a unique and magical sleepover for any occasion. Simply
                choose from one of our themes and make your dream party come
                true!
              </p>
              <img
                className="max-400"
                src={glowImage}
                alt="glowImage"
              />
            </div>
          </Col>
          <Col></Col>
        </Row>
        {/* <ContactPage /> */}
      </div>
    </>
  );
}

export default Home;
