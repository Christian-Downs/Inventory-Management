import React, { useEffect } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import "assets/css/price.css";
import "assets/css/addon-card.css";
import website from "assets/jsons/website.json";
import ribbon from "assets/img/price/ribbon.png";
import { useNavigate } from "react-router-dom";

const Price = () => {
  const price_page = website.price_page;
  const includedSection = price_page.included;
  const includedItems = includedSection.items;
  const prices = price_page.included.Prices;
  const addons = price_page.Addons;
  const navigate = useNavigate();
  const bookNowButtonHandler = () => {
    navigate("/book", {});
  };
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
          <div className="book-now-button-div">
            <Button className="book-now-button" onClick={bookNowButtonHandler}>
              Book Now
            </Button>
          </div>
        </div>
      </Row>

      <Col
        className="party-pricing-info"
      // style={{ background: includedSection.background }}
      >
        <div className="party-pricing-title-div">
          <div className="party-pricing-title-image-div">
            <Image className="party-pricing-title-image" src={ribbon} />
            <h1 className="party-pricing-title">{includedSection.header}</h1>
          </div>
          <div className="party-pricing-subtext-div">
            <p className="party-pricing-subtext">{includedSection.subHeader}</p>
          </div>
        </div>

        <Row className="party-info-row desktop">
          <div className="party-info-divider">
            <div className="party-pricing-info-col">
              <div className="party-pricing-info-div-holder"
                style={{ background: includedSection.background }}
              >
                <h2>Party Packages:</h2>
                {Object.keys(prices).map((price) => {
                  return (
                    <div className="party-pricing-info-div">
                      <p className="party-pricing-info-text">
                        {price}- {prices[price]}
                      </p>
                      <p className="party-pricing-info-text"></p>
                    </div>
                  );
                })}
                <p>
                  {includedSection.Additional}
                </p>
              </div>
            </div>
          </div>

          <div className="party-info-divider">
            <div className="party-included-col">
              <div className="party-included-div"
                style={{ background: includedSection.background }}

              >
                <h2 className="included-header">Included:</h2>
                <ul className="included-list">
                  {Object.keys(includedItems).map((item) => {
                    return (
                      <div className="item-holder">
                        <li className="included-item">{includedItems[item]}</li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </Row>

        <Row className="party-info-row mobile">
          <div className="party-info-divider">
            <div className="party-pricing-info-col">
              <div className="party-pricing-info-div-holder mobile">
                Party Packages:
                {Object.keys(prices).map((price) => {
                  return (
                    <div className="party-pricing-info-div">
                      <p className="party-pricing-info-text mobile">
                        {price}- {prices[price]}
                      </p>
                      <p className="party-pricing-info-text"></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="party-info-divider">
            <div className="party-included-col">
              <div className="party-included-div">
                <h2 className="included-header">Included:</h2>
                <ul className="included-list">
                  {Object.keys(includedItems).map((item) => {
                    return (
                      <li className="included-item">{includedItems[item]}</li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </Row>
      </Col>
      <div className="party-pricing-title-image-div addon">
        <Image className="party-pricing-title-image addon" src={ribbon} />
        <h1 className="party-pricing-title">{addons.header}</h1>
      </div>
      <Col className="addon-col">
        {Object.keys(addons.items).map((addon) => {
          return AddonCard(addons.items[addon]);
        })}
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
  };

  const closeModal = () => {
    setStyle({ display: "none" });
  };

  return (
    <div className="addon-card">
      <div className="addon-card-header">
        <p className="addon-card-title">{addon.name}</p>
        <p className="addon-card-price">{addon.price}</p>
      </div>
      <div className="addon-card-body">
        <Image className="addon-card-image" src={image}/>
        <div id={modalId} className="modal" style={style}>
          <span class="close" onClick={closeModal}>
            &times;
          </span>
          <Image src={image} className="modal-content" id="img01" />
          <div id="caption">{addon.name}</div>
  </div>
  </div>
    </div>
  );
};

export default Price;
