import React, { useRef, useState } from 'react'
import './ContactForm.css'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const refForm = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const serviceId = "service_0gfz23o";
        const templateId = "template_c7ybae9";
        const apiKey = "EOUnyWVxw49QuOpeL";

        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
            .then(result => {
                console.log(result.text); alert('Mensaje enviado');
                setFirstName('');
                setLastName('');
                setEmail('');
                setMessage('');
            })
            .catch(error => { console.error(error); alert('No se pudo enviar el mensaje'); })
    }
    const handleFirstNameChange = (event) => {
        const value = event.target.value.replace(/[^A-Za-z ]/g, '').replace(/(\s{2})/g, ' ');
        setFirstName(value);
    }

    const handleLastNameChange = (event) => {
        const value = event.target.value.replace(/[^A-Za-z ]/g, '').replace(/(\s{2})/g, ' ');
        setLastName(value);
    }

    const handleEmailChange = (event) => {
        const value = event.target.value.replace(/[^a-zA-Z0-9@._-]/g, '');
        setEmail(value);
    }

    const handleMessageChange = (event) => {
        const value = event.target.value.replace(/(\s{2})/g, ' ');
        setMessage(value);
    }

    return (
        <div className="contact-form-content">
            <form ref={refForm} onSubmit={handleSubmit}>
                <div className="name-container">
                    <input type="text" name="firstname" placeholder="Nombre/s" value={firstName} onChange={handleFirstNameChange} />
                    <input type="text" name="lastname" placeholder="Apellido/s" value={lastName} onChange={handleLastNameChange} />
                </div>
                <input type="text" name="email" placeholder="Correo electrónico" value={email} onChange={handleEmailChange} />
                <textarea name="message" placeholder="Mensaje" rows={3} value={message} onChange={handleMessageChange}></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default ContactForm
