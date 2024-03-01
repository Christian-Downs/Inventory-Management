import {
  Button,
  Col,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import "assets/css/customerHeader.css";
import React, { useEffect } from "react";
import website from "assets/jsons/website.json";

import routes from "routes.js";
import { Link, Route, Routes } from "react-router-dom";

function CustomerHeader() {
  console.log("CustomerHeader");
  console.log("Testing");
  var routesLength = routes.filter((prop) => prop.customer).length;
  var columnSize = 12 / routesLength;

  // console.log(routesLength);
  // console.log(columnSize);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggle = () => setThemeDropdownOpen((prevState) => !prevState);
  const [themeDropdownOpen, setThemeDropdownOpen] = React.useState(false);
  const dropdownMenuRef = React.useRef(null);
  useEffect(() => {
    if (dropdownOpen && dropdownMenuRef.current) {
      const menu = dropdownMenuRef.current;
      menu.style.transform = "translate3d(0px, 0px, 0px)";
    } else {
      // dropdownMenuRef.current.style.display = "none";
    }
  }, [dropdownOpen]);

  // const getThemes = () => {
  //   if (website.themes) {
  //     return website.themes.map((theme, key) => {
  //       return (
  //         <DropdownItem key={key}>{theme}</DropdownItem>
  //       )
  //     })
  //   }
  // }
  const themes = website.themes;
  return (
    <div>
      <Row>
        <Col xs="12">
          <div className="customer-header pinkbg">
            <h1 className="title">{website.name}</h1>
            <h3 className="subtitle">{website.subtitle}</h3>
            <p className="title-location">{website.title_location}</p>
            {/* <div className="header-book-now-holder">
              <Button className="book-now-button">Book Now</Button>
            </div> */}
            <Row>
              {routes.map((prop, key) => {
                if (prop.customer) {
                  if (prop.name.includes("Theme")) {
                    return (
                      <Col xs={columnSize} key={key}>
                        <Dropdown
                          isOpen={themeDropdownOpen}
                          toggle={toggle}
                          // onMouseOver={toggle}
                          // onMouseLeave={toggle}
                          className="customer-routing-links"
                        >
                          <DropdownToggle
                            nav
                            caret
                            style={{ paddingBottom: "0px" }}
                            className="theme-header-text"
                          >
                            {prop.name}
                          </DropdownToggle>
                          <DropdownMenu
                            modifiers={{ offset: "0,10" }}
                            ref={dropdownMenuRef}
                            className="customer-dropdown-header"
                          >
                            {/* You can map through your themes here */}
                            <DropdownItem header>Theme List</DropdownItem>
                            {Object.keys(themes).map((themeName) => {
                              const link = `/theme/${themeName}`;
                              return (
                                <Link to={link}>
                                  <DropdownItem key={themeName}>
                                    {themeName}
                                  </DropdownItem>
                                </Link>
                              );
                            })}
                            {/* <DropdownItem>Let's Go Girls</DropdownItem> */}
                            {/* ... other themes */}
                          </DropdownMenu>
                        </Dropdown>
                      </Col>
                    );
                  } else {
                    return (
                      <Col xs={columnSize}>
                        <Link
                          className="customer-routing-links"
                          href={prop.path}
                          to={prop.path}
                        >
                          {prop.name}
                        </Link>
                      </Col>
                    );
                  }
                }
              })}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CustomerHeader;
