import React, { useState } from 'react';
import CustomCalendar from 'components/Calendar/CustomCalendar';
import dayjs from 'dayjs';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import 'assets/css/booking.css';

const BookingPage = ({ theme }) => {
    console.log(theme.id)

    const [value, setValue] = React.useState(dayjs());

    // const [theme, setTheme] = useState('light');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    // const handleThemeChange = (event) => {
    //     setTheme(event.target.value);
    // };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleBooking = () => {
        // Handle booking logic here
        console.log('Booking now...');
    };

    axios.get(process.env.REACT_APP_SERVER_URL + "/api/calendar").then(function (response) {
        console.log(response.data)
    }).catch(function (error) {
        console.log(error)
    })



    const disabledDates = [
        new Date('2024-02-09'),
        new Date('2024-02-11'),
    ];

    console.log(disabledDates)




    return (
        <form className='contact-page-container row-padding'>
            <Row className="align-center">
                <h1>Book Now!</h1>
            </Row>
            <Row className='pinkbg align-center row-padding'>
                <div className="align-booking-items align-center contact-cont">
                    <CustomCalendar
                        value={value}
                        setValue={setValue}
                        disabledDates={disabledDates}
                    />
                    <Col>
                    <Row className='row-padding'>
                        <Col>
                            <label>
                                Name:
                                <input className="input-box" type="text" value={name} onChange={handleNameChange} />
                            </label>
                        </Col>
                    </Row>
                    <Row className='row-padding'>
                        <Col>
                            <label>
                                Email:
                                <input className="input-box" type="email" value={email} onChange={handleEmailChange} />
                            </label>
                        </Col>
                    </Row>
                    <Row className='row-padding'>
                        <Col>
                            <label>
                                Phone Number:
                                <input className="input-box" type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />
                            </label>
                        </Col>
                    </Row>
                    <Row className='row-padding'>
                        <Col>
                            <button type="button" className = "booking-button" onClick={handleBooking}>Book Now</button>
                        </Col>
                    </Row>
                    </Col>
                </div>
            </Row>
        </form>
    );
};

export default BookingPage;