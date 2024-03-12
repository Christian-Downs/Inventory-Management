import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "assets/css/inquiry.css";
import { Row, Col, Button } from "react-bootstrap";
import website from "assets/jsons/website.json";
import axios from "axios";

function Inquiry() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [address, setAddress] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [message, setMessage] = useState("");

  const location = useLocation();

  const themes = website.themes;

    useEffect(() => {
        if(location.state){
            console.log(location.state.themeName);
            setSelectedTheme(location.state.themeName);
        }
    }, [location.state]);

  const handleSubmit = (e) => {

    e.preventDefault();
    // Handle form submission logic here
    if(name === '' || email === "" || guestCount === "" || phoneNumber === "" || selectedDate === "" || address === "" || selectedTheme === ""){
        alert("All fields must be filled out");
        return;
    }
    
    axios.post(website["server-url"] + "/api/sendEmail", {
        email: "Christian.downs.15@gmail.com",
        subject: "New Booking Inquiry",
        message: `Name: ${name}\nEmail: ${email}\nGuest Count: ${guestCount}\nPhone Number: ${phoneNumber}\nDate: ${selectedDate}\nAddress: ${address}\nTheme: ${selectedTheme}\nMessage: ${message}`
    }).catch((response) => {
      alert("Email Failed to Send");
    }).then((response) => {
        console.log(response);
        alert("Email Sent!");
        setName("");
        setEmail("");
        setGuestCount("");
        setPhoneNumber("");
        setSelectedDate("");
        setAddress("");
        setSelectedTheme("");
        setMessage("");
    });
  };


  return (
    <div className="container-holder">
      <div className="booking-holder-div">
        <Row className="booking-header-row">
          <Row className="booking-header-text-row">
            <h1 className="booking-header-text">Book Here</h1>
          </Row>
          <Row className="booking-header-subtext-row">
            <p className="booking-header-subtext">
              Please fill out the form below to book an event
            </p>
          </Row>
        </Row>
        <Row className="booking-form-row-top desktop">
          <Row className="form-header">
            <h1>Let's Start Planning Your Party!!</h1>
          </Row>
          <Row className="form-row">
            <form className="form" onSubmit={handleSubmit}>
              <Row className="form-general-information">
                <Col>
                  <Row>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      className="form-input"
                    />
                  </Row>
                  <Row>
                    <input
                      type="text"
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      placeholder="Guest Count"
                      className="form-input"
                    />
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="form-input"
                    />
                  </Row>
                  <Row>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      placeholder="Select a Date"
                      className="form-input"
                    />
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Phone Number"
                      className="form-input"
                    />
                  </Row>
                  <Row>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Street Address"
                      className="form-input"
                    />
                  </Row>
                </Col>
              </Row>

              <Row className="form-theme-message">
                <Col className="theme-selector-row">
                  <label>
                    <Row>What Theme are you interested in:</Row>
                    <Row>
                      <select
                        value={selectedTheme}
                        onChange={(e) => setSelectedTheme(e.target.value)}
                        className="theme-selector"
                      >
                        <option value="">Select a theme</option>
                        {Object.keys(themes).map((theme, key) => {
                          return <option value={theme}>{theme}</option>;
                        })}
                      </select>
                    </Row>
                  </label>
                </Col>
                <Col className="message-col">
                  <label >
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Anything else you would like to add?"
                    />
                  </label>
                </Col>
              </Row>
              <Row className="button-row">
                <Button type="submit">Submit</Button>
              </Row>
            </form>
          </Row>
        </Row>
        <Row className="booking-form-row-top mobile">
          <Row className="form-header mobile">
            <h1>Let's Start Planning Your Party!!</h1>
          </Row>
          <Row className="form-row mobile">
            <form className="form" onSubmit={handleSubmit}>
              <Row className="form-general-information mobile">
                <Col>
                  <Row className="input-mobile-row">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      className="form-input mobile"
                    />
                  </Row>
                  <Row className="input-mobile-row">
                    <input
                      type="text"
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      placeholder="Guest Count"
                      className="form-input mobile"
                    />
                  </Row>

                  <Row className="input-mobile-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="form-input mobile"
                    />
                  </Row>
                  <Row className="input-mobile-row">
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      placeholder="Select a Date"
                      className="form-input mobile"
                    />
                  </Row>

                  <Row className="input-mobile-row">
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Phone Number"
                      className="form-input mobile"
                    />
                  </Row>
                  <Row className="input-mobile-row">
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Street Address"
                      className="form-input mobile"
                    />
                  </Row>
                  <Row className="input-mobile-row">
                    <label className="theme-label-mobile">
                      
                        <select
                          value={selectedTheme}
                          onChange={(e) => setSelectedTheme(e.target.value)}
                          className="theme-selector mobile"
                        >
                          <option value="">Select a theme</option>
                          {Object.keys(themes).map((theme, key) => {
                            return <option value={theme}>{theme}</option>;
                          })}
                        </select>
                      
                    </label>
                  </Row>
                  <Row className="input-mobile-row">
                    <label className="mobile-textarea-label">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Anything else you would like to add?"
                        className="mobile-textarea"
                      />
                    </label>
                  </Row>
                </Col>
              </Row>
              <Row className="button-row">
                <Button type="submit">Submit</Button>
              </Row>
            </form>
          </Row>
        </Row>
      </div>
    </div>
  );
}

export default Inquiry;
