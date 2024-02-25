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
      <Row className="row-padding">
        <img src={section.image}></img>
      </Row>
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
                default:
                  return ( <Col></Col>);
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
