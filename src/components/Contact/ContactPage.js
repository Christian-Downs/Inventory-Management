import React, { useState } from 'react';
import "assets/css/customer-home.css";

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="contact-page-container row-padding">
            <div className="contact-cont pinkbg align-center">
            <h1>Contact Us!</h1>
                <form onSubmit={handleSubmit}>
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
                    <label htmlFor="message">Message:</label>
                    <textarea
                        className="input-box"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
