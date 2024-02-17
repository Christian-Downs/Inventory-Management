import React from "react";
import { useParams } from "react-router-dom";
import website from 'assets/jsons/website.json'
import { formToJSON } from "axios";
import { parseJsonText } from "typescript";
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
  // Now you can use the themeName variable to render content based on the theme



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
      color = "whiite"
    }
    else {
      color = "#ffe6e6"
    }
    return color;
  }


  return (
    <div>
      <h1 className="theme-top">{themeName}</h1>
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
