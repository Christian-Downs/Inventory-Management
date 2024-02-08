import React, { useState } from 'react';
import CustomCalendar from 'components/Calendar/CustomCalendar';

const BookingPage = () => {
    const [theme, setTheme] = useState('light');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleThemeChange = (event) => {
        setTheme(event.target.value);
    };

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


    const disabledDates = [
        new Date('2023-03-01'),
        new Date('2023-03-02'),
    ];

    return (
        <div>
            <h1>Booking Page</h1>
            <CustomCalendar disabledDates = {disabledDates}/>
            <select value={theme} onChange={handleThemeChange}>
                <option value="light">Light Theme</option>
                <option value="dark">Dark Theme</option>
            </select>
            <form>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <label>
                    Phone Number:
                    <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />
                </label>
                <button type="button" onClick={handleBooking}>Book Now</button>
            </form>
        </div>
    );
};

export default BookingPage;