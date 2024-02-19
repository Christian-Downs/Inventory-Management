import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "reactstrap";

import Carousel from "react-bootstrap/Carousel";
import "assets/css/carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const images = [
  "https://plus.unsplash.com/premium_photo-1689609949815-bdb46c0f2397?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1689609949815-bdb46c0f2397?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1477574901123-6b1db202feff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.pinimg.com/originals/cd/59/56/cd59565449fc469cc0320b2016f135bc.jpg",
  "https://i.pinimg.com/originals/75/88/be/7588be00d3c7a4fd57b365a2d7f2138e.jpg",
  "https://images.unsplash.com/photo-1583512603866-910c8542ba1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlZXBlZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1525177089949-b1488a0ea5b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlZXBlZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1557124816-e9b7d5440de2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlZXBlZXxlbnwwfHwwfHx8MA%3D%3D",
];

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: "block", zIndex: 2 }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: "block", zIndex: 2 }}
      onClick={onClick}
    />
  );
}


function CarouselCustom() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    draggable: true,
    speed: 700,
    swipe: true,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const height = "20em";
  const width = "100vw";

  return (
    <div style={{ height:'20em', width: '100vw', paddingLeft: 'calc(50vw-50%)', overflow:'hidden' }}>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img src={img} 
            alt={`Slide ${idx}`} 
            style={{ height: height  }} />
          </div>
        ))}
      </Slider>
    </div>
  );
  
}

export default CarouselCustom;