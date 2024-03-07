import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCard = ({ iconUrl, text }) => {
    const redirecting = () => {
        window.open(text, '_blank');
    };
    return (
        <div className="contact-details-card" onClick={redirecting}>
            <div className="icon">
                <img src={iconUrl} alt={text} />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default ContactInfoCard
