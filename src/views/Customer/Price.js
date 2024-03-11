import React, { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import "assets/css/price.css";
import "assets/css/addon-card.css";
import website from "assets/jsons/website.json";

const Price = () => {
  const price_page = website.price_page;
  const includedSection = price_page.included;
  const includedItems = price_page.included.Prices;
  const addons = price_page.Addons;
  console.log(addons);
  console.log(price_page);
  console.log(includedItems);
  return (
    <div>
      <Row className="top-level-row">
        <div
          className="top-level-div-holder"
          style={{ background: price_page.header.background }}
        >
          <div className="top-level-div">
            <h1 className="price-header">{price_page.header.large_text}</h1>
            <p className="price-subheader">{price_page.header.small_text}</p>
          </div>
        </div>
      </Row>
      <Row
        className="party-pricing-info"
        style={{ background: includedSection.background }}
      >
        <div className="party=pricing-info-div-holder">
          <Row className="party-pricing-title-row">
            <p className="party-pricing-title">{includedSection.header}</p>
          </Row>
          <Col className="party-pricing-col">
            {Object.keys(includedItems).map((price) => {
              return (
                <Row className="price-holder">
                  <span className="price-title">{price}</span>
                  -
                  <span className="price-price">{includedItems[price]}</span>
                </Row>
              );
            })}
          </Col>
        </div>
      </Row>
      <Col className="addon-col">
      
        {Object.keys(addons.items).map((addon) => {
          return AddonCard(addons.items[addon]);
        })}
        {/* {Object.keys(addons.items).map((addon) => {
          return AddonCard(addons.items[addon]);
        })}
        {Object.keys(addons.items).map((addon) => {
          return AddonCard(addons.items[addon]);
        })} */}
      </Col>
    </div>
  );
};

const imageContext = require.context(
  "assets/img/addon",
  true,
  /\.(png|jpe?g|svg)$/
);




const AddonCard = (addon) => {
  const [image, setImage] = React.useState("");
  const [style, setStyle] = React.useState({ display: "none" });


  const modalId = "modal" + addon.name;



  useEffect(() => {
    // imageContext(`./${addon.image}`).then((image) => {
    //   setImage(image.default);
    // });
    setImage(imageContext(`./${addon.image}`));
  }, []);

  const openModal = () => {
      setStyle({ display: "block" });
  }

  const closeModal = () => {
    setStyle({ display: "none" });
  }

  return (
    <div className="addon-card">
      <div className="addon-card-header">
        <p className="addon-card-title">
          {addon.name}
          
        </p>
        <p className="addon-card-price">${addon.price}</p>
      </div>
      <div className="addon-card-body">
        <Image className="addon-card-image" src={image} onClick={openModal}/>
        <div id={modalId} className="modal" style={style}>
          <span class="close" onClick={closeModal}>&times;</span>
          <Image src={image} className="modal-content" id="img01" />
          <div id="caption">{addon.name}</div>
        </div>
      </div>
    </div>
  );
};

export default Price;
