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
            <h1>Contact Page</h1>
            <div className="contact-cont pinkbg align-center">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
