import React from "react";
import { useParams } from "react-router-dom";
import website from 'assets/jsons/website.json'
import { formToJSON } from "axios";
import { parseJsonText } from "typescript";
import "assets/css/customer.css"
import { Col, Image, Row } from "react-bootstrap";




const Theme = () => {
  const { themeName } = useParams();
  console.log(themeName)
  const theme = website.themes[themeName]
  const rows = theme.rows
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
        text
        <h2>{section.title}</h2>
        <p>{section.description}</p>
      </div>
    )
  }



  return (
    <div>
      <h2>Theme Page</h2>
      <p>Theme Name: {themeName}</p>
      {rows.map(row => {
        const colSize = 12/ row.length
        console.log(colSize)
        return(<Row>
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
    </div>
  );
};

export default Theme;
