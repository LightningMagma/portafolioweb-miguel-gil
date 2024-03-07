import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
    return (
        <section className="contact-container" id="contactSection">
            <h5>Contacto</h5>
            <div className="contact-content">
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl="./assets/images/linkedin.png"
                        text="https://co.linkedin.com/in/miguel-angel-gil-manjarrez/"
                    />
                    <ContactInfoCard
                        iconUrl="./assets/images/github.png"
                        text="https://github.com/LightningMagma"
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactMe
