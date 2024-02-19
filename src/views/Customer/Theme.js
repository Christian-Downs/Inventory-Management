import React from "react";
import { useParams } from "react-router-dom";
import website from 'assets/jsons/website.json'
import "assets/css/customer.css"
import { Col, Image, Row } from "react-bootstrap";
import BookingPage from "./Book";
import "assets/css/theme.css"




const Theme = () => {
  const { themeName } = useParams();
  console.log(themeName)
  const theme = website.themes[themeName]
  const rows = theme.rows
  const id = theme.id
  console.log(rows)

  console.log(theme)



  const ImageSection = ({ section }) => {
    return (
      <div>
        <Image src={section.image} />
      </div>
    )
  }


  const TextSection = ({ section }) => {
    console.log("Test")
    console.log(section)
    return (
      <div>
        <h2>{section.title}</h2>
        <ul className="custom-marker">
          <li>{section.description}</li>
        </ul>
        {/* <p>{section.description}</p> */}
      </div>
    )
  }
  var color = "#ffe6e6"

  const colorChanger = () => {
    if (color == "#ffe6e6") {
      color = "white"
    }
    else {
      color = "#ffe6e6"
    }
    return color;
  }


  return (
    <div>
      <h1 className="theme-top row-padding">{themeName}</h1>
        <Row className="row-padding">
          <img src="https://cdn.shopify.com/s/files/1/0021/8064/4934/articles/The_Eras_Tour_Cover_1200x.jpg?v=1667319117"></img>
        </Row>
        <Row className="pinkbg row-padding">
          <Col>
            <div className="customer-info">
              <div className="subpoints align-center">
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
        {rows.map(row => {
          const colSize = 12/ row.length
          console.log(colSize)
          return(<Row style = {{backgroundColor: colorChanger()}}>
            {row.map(section => {
              switch (section.type) {
                case "Text":
                  return (<Col><TextSection section={section} /> </Col>);
                case "Image":
                  return ( <Col> <ImageSection section={section} /> </Col>);

              }
            })
            }
          </Row>);
        })}
        <BookingPage theme = {theme} />
    </div>
  );
};

export default Theme;
