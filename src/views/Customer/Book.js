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
        <form>
            <Row className=' booking-row'>
                {/* For the calendar column, ensure it's centered on small screens */}
                <Col md={6} className='booking-left-col d-flex align-items-center '>
                    <CustomCalendar
                        value={value}
                        setValue={setValue}
                        disabledDates={disabledDates}
                    />
                </Col>
                {/* For the form column, ensure items are centered as well */}
                <Col md={6} className='booking-right-col'>
                    {/* Use d-flex and  to center form items on small screens */}
                    <Row className='d-flex  booking-right-col-row'>
                        <Col xs={12} md={8}> {/* Adjust md={8} to control the form width on larger screens */}
                            <label>
                                Name:
                                <input type="text" value={name} onChange={handleNameChange} />
                            </label>
                        </Col>
                    </Row>
                    <Row className='d-flex  booking-right-col-row'>
                        <Col xs={12} md={8}>
                            <label>
                                Email:
                                <input type="email" value={email} onChange={handleEmailChange} />
                            </label>
                        </Col>
                    </Row>
                    <Row className='d-flex  booking-right-col-row'>
                        <Col xs={12} md={8}>
                            <label>
                                Phone Number:
                                <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />
                            </label>
                        </Col>
                    </Row>
                    <Row className='d-flex  booking-right-col-row'>
                        <Col xs={12} md={8} className='button-col'>
                            <button type="button" className = "booking-button" onClick={handleBooking}>Book Now</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </form>
    );
};

export default BookingPage;