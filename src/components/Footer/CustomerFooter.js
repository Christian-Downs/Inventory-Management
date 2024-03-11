import React from 'react';
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import facebook_icon from '../../assets/icons/facebook_icon.png';
import instagram_icon from '../../assets/icons/instagram_icon.png';

const CustomerFooter = () => {
    return (
      <footer className="footer" style={{paddingLeft:0}}>
        <Container fluid>
          <Nav>
            <NavItem>
              <NavLink
                href="https://www.facebook.com/MemorableNights"
                target="_blank"
              >
                <img
                  src={facebook_icon}
                  style={{ height: "21px", width: "21px" }}
                  alt = "Facebook"
                ></img>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://www.instagram.com/MemorableNights"
                target="_blank"
              >
                <img
                  src={instagram_icon}
                  style={{ height: "21px", width: "21px" }}
                  alt= "Instagram"
                ></img>
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </footer>
    );
};

export default CustomerFooter;
