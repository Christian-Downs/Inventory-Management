import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import website from 'assets/jsons/website.json'
import "assets/css/customer.css"
import { Button, Col, Image, Row } from "react-bootstrap";
import "assets/css/theme.css"
// import image from "assets/img/SPACE/DSC00026_SPACE_HERO1.jpg"



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



  const imageContext = require.context('assets/img', true, /\.(png|jpe?g|svg)$/);
function SingleTheme ( {themeName, website} ) {

  const navigate = useNavigate();
  console.log(website)
  const theme = website.themes[themeName]
  console.log(theme)
  const rows = theme.rows
  // const id = theme.id
  const themeDescription = theme["Description"];
  const mainImageString = theme["MainImage"];
  console.log(themeDescription)
  console.log(rows)

  console.log(theme)
  // Now you can use the themeName variable to render content based on the theme

  const [mainImage, setMainImage] = useState('');
  //Load images dynamically
  useEffect(() => {
    if (mainImageString) {
      imageContext.keys().map((item, index) => {
        if(item.includes(mainImageString)){
          setMainImage(imageContext(item))
        }
      });
      // loadImage(mainImageString).then((image) => {
      //   setMainImage(image);
      // });
    }
  }, [mainImageString]);


  function loadImage (imageName) {
    try{
      const keys = imageContext.keys()
      const imagePath = keys.find(key => key.includes(imageName));
      if(imagePath){
        return imageContext(imagePath);
      }
      //  imageContext.keys().map((item, index) => {
      //     if(item.includes(imageName)){
      //       return imageContext(item)
      //     }
      // });
      // return imageContext(`./${imageName}`);
    } catch (error) {
      console.error("Failed to load image", error);
    }
  }


  const [lowerFirstImages, setFirstLowerImages] = useState([]);
  const [lowerSecondImages, setSecondLowerImages] = useState([]);
  const [allImages, setAllImages] = useState([]);

  const imageNames = theme["Images"];

  useEffect(() => {
    if (imageNames) {
      var images1 = [];
      var images2 = [];
      var allImages = []
      for(let i = 0; i < imageNames.length; i++){
          var image = loadImage(imageNames[i])
          console.log(image)
          allImages.push(image)
          if(i % 2 === 0){
            images1.push(image)
          } else {
            images2.push(image)
          }

      }
      setAllImages(allImages);
      setFirstLowerImages(images1);
      setSecondLowerImages(images2);
    }
  }, [imageNames]);


  const inquiryButtonHandler = () => {  
    console.log("Inquiry button clicked")
    navigate("/book", { state: { themeName: themeName } });
  }



  if(themeName !== undefined){
      return (
        <div>
          <Row
            className="header-holder desktop"
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
                onClick={inquiryButtonHandler}
              >
                Inquiry
              </Button>
            </Col>
            <Col className="theme-header-image-col">
              <img src={mainImage} className="theme-image" />
            </Col>
          </Row>
          <Row
            className="header-holder mobile"
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
                onClick={inquiryButtonHandler}
              >
                Inquiry
              </Button>
            </Col>
            <Col className="theme-header-image-col mobile">
              <img src={mainImage} className="theme-image" />
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
          <div
            className="lower-image-master-holder desktop"
            style={{ background: theme["LowerImageBackgroundColor"] }}
          >
            <Row className="lower-image-holder-row">
              <Col className="lower-image-col col-left">
                {lowerFirstImages.map((image) => {
                  return (
                    <div className="lower-image-div">
                      <img src={image} className="lower-images col-left" />
                    </div>
                  );
                })}
              </Col>
              <Col className="lower-image-col col-right">
                {lowerSecondImages.map((image) => {
                  return (
                    <div className="lower-image-div">
                      <img src={image} className="lower-images" />
                    </div>
                  );
                })}
              </Col>
            </Row>
          </div>
          <div
            className="lower-image-master-holder mobile"
            style={{ background: theme["LowerImageBackgroundColor"] }}
          >
            <Col className="lower-image-holder-col-mobile">
              {allImages.map((image) => {
                return (
                  <div className="lower-image-div">
                    <img src={image} className="lower-images" />
                  </div>
                );
              })}
            </Col>
          </div>
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
  if(themeName === undefined){
    return AllThemes()
  } else {
    console.log(website)
    return SingleTheme({themeName, website})
  }
  


};

export default Theme;
