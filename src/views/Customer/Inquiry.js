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
    }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if(name === '' || email === "" || guestCount === "" || phoneNumber === "" || selectedDate === "" || address === "" || selectedTheme === ""){
        alert("All fields must be filled out");
        return;
    }
    axios.post(process.env.REACT_APP_SERVER_URL + "/api/sendEmail", {
        email: "Christian.downs.15@gmail.com",
        subject: "New Booking Inquiry",
        message: `Name: ${name}\nEmail: ${email}\nGuest Count: ${guestCount}\nPhone Number: ${phoneNumber}\nDate: ${selectedDate}\nAddress: ${address}\nTheme: ${selectedTheme}\nMessage: ${message}`
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
      <div className="contact-page-container row-padding">
        <h1 class="align-center row-padding">Book Now!</h1>
            <div className="contact-cont pinkbg align-center">
                <form onSubmit={handleSubmit} className="align-center flex-col">
                  <Row className="flex-nowrap">
                    <Col className="flex-col">
                    <label htmlFor="name">Name:</label>
                      <input
                          className="input-box row-padding"
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                      />
                      <label htmlFor="email">Email:</label>
                      <input
                          className="input-box row-padding"
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="guestCount">Guest Count:</label>
                      <input
                        type="number"
                        id="guestCount"
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="input-box row-padding"
                      />
                      <label htmlFor="date">Date:</label>
                      <input
                        type="date"
                        id="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="input-box row-padding"
                      />
                    </Col>
                    <Col className="flex-col">
                    <label htmlFor="phone">Phone:</label>
                      <input
                        type="tel"
                        id="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Phone Number"
                        className="input-box row-padding"
                      />
                      <label htmlFor="street">Street:</label>
                      <input
                        type="text"
                        id="street"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Street Address"
                        className="input-box row-padding"
                      />
                      <label htmlFor="theme">Theme:</label>
                      <select
                        value={selectedTheme}
                        onChange={(e) => setSelectedTheme(e.target.value)}
                        className="input-box row-padding"
                      >
                        <option value="">Select a theme</option>
                        {Object.keys(themes).map((theme, key) => {
                          return <option value={theme}>{theme}</option>;
                        })}
                      </select>
                      <label htmlFor="message">Notes:</label>
                      <textarea
                          className="input-box"
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </Col>
                  </Row>
                  <Row className="row-padding">
                    <button type="submit" className="submit-button">Submit</button>
                  </Row>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Inquiry;
