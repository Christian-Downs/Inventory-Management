import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import website from 'assets/jsons/website.json'
import { formToJSON } from "axios";
import { parseJsonText } from "typescript";
import "assets/css/customer.css"
import { Button, Col, Image, Row } from "react-bootstrap";
import BookingPage from "./Book";
import "assets/css/theme.css"
import { set } from "date-fns";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap')
</style>;

const AllThemes = () => {


  return (
    <div>
      <h1>Themes</h1>
      <Row>
        {Object.keys(website.themes).map(themeName => {
          const theme = website.themes[themeName]
          return (
            <Col>
              <a href={"/theme/" + themeName}>
                <Image src={theme.image} />
                <h2>{themeName}</h2>
              </a>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}




const SingleTheme = ({ themeName }) => {
  const theme = website.themes[themeName]
  const rows = theme.rows
  const id = theme.id
  const themeDescription = theme["Description"];
  console.log(themeDescription)
  console.log(rows)

  console.log(theme)
  // Now you can use the themeName variable to render content based on the theme

  const [mainImage, setMainImage] = useState('');
  //Load images dynamically
  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(
          `assets/img/${theme["MainImage"]}`
        );
        setMainImage(image.default);
      } catch (error) {
        console.error("Failed to load image", error);
      }
    };

    if (theme["MainImage"]) {
      loadImage();
    }
  }, [theme["MainImage"]]);


  async function loadImage (imageName) {
    try {
      const image = await import(`assets/img/${imageName}`);
      return image.default;
    } catch (error) {
      console.error("Failed to load image", error);
    }
  }


  const [lowerFirstImages, setFirstLowerImages] = useState([]);
  const [lowerSecondImages, setSecondLowerImages] = useState([]);

  const imageNames = theme["Images"];

  // useEffect(() => {
  //   var images = [];
  //   const loadImage = async (imageName) => {
  //     try {
  //       const image = await import(`assets/img/${imageName}`);
  //       images.push(image.default);
  //     } catch (error) {
  //       console.error("Failed to load image", error);
  //     }
  //   };

  //   if (imageNames) {
  //     for (let i = 0; i < imageNames.length; i++) {
  //       loadImage(imageNames[i]);
  //     }
  //     imageNames.forEach(async (imageName) => {
  //       await loadImage(imageName);
  //     });
  //     setFirstLowerImages(images);
  //   }
  // }, [imageNames]);

  useEffect(() => {
    if (imageNames) {
      var images1 = [];
      var images2 = [];
      for(let i = 0; i < imageNames.length; i++){
        loadImage(imageNames[i]).then((image) => {
          if(i % 2 == 0){
            images1.push(image)
          } else {
            images2.push(image)
          }
        });
      }
      setFirstLowerImages(images1);
      setSecondLowerImages(images2);
    }
  }, [imageNames]);

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

  if(themeName != undefined){
      return (
        <div>
          <Row
            className="header-holder"
            style={{ background: theme["HeaderColor"] }}
          >
            <Col className="info-holder">
              <div className="theme-name-holder">
                <h1>{themeName}</h1>
              </div>
              <div className="description-holder">
                {themeDescription.map((section) => {
                  console.log(section);
                  return <p>{section}</p>;
                })}
              </div>
              <br></br>
              <Button
                className="inquiry-button"
                style={{ background: theme["InquiryButtonColor"] }}
              >
                Inquiry
              </Button>
            </Col>
            <Col className="theme-header-image-col">
              <Image src={mainImage} className="theme-image" />
            </Col>
          </Row>

          <Row
            className="included-row"
            style={{ background: theme["IncludedBackgroundColor"] }}
          >
            <Col className="included-col">
              <div className="included-header-div">
                <h2 className="included-header-text">PACKAGE INCLUDES</h2>
                <h3 className="included-header-teepee-count">
                  --UP TO {theme["TentCount"]} TEEPEES --
                </h3>
              </div>
              <div className="included-list-div">
                <ul className="included-list-ul">
                  {theme["Included"].map((section) => {
                    return <li>{section}</li>;
                  })}
                </ul>
              </div>
              <div className="extra-teepee-div">
                <p className="extra-teepee-text">
                  *additional teepees and accessories avaliable*
                </p>
              </div>
            </Col>
          </Row>
          <Row className="lower-image-holder-row">
            <Col className="lower-image-col col-left">
              {lowerFirstImages.map((image) => {
                return <Image src={image} />;
              })}
            </Col>
            <Col className="lower-image-col col-right">
              {lowerSecondImages.map((image) => {
                return <Image src={image} />;
              })}
            </Col>
          </Row>

          {/* <BookingPage theme={theme} /> */}
        </div>
      );
  } else {
    return (
      <div>
        <h1>No theme found</h1>
      </div>
    )
  }
}


const Theme = () => {
  const { themeName } = useParams();
  console.log(themeName)
  if(themeName == undefined){
    return AllThemes()
  } else {
    return SingleTheme({themeName})
  }
  


};

export default Theme;
