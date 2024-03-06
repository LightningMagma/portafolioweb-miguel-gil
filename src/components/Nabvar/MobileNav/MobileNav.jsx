import React from 'react'
import './MobileNav.css'
const MobileNav = ({ isOpen, toggleMenu }) => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contactSection');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const refresh = () => {
        window.history.replaceState(null, null, window.location.pathname);
        window.location.reload();
    }
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}>
                <div className='mobile-menu-container'>
                    <img src="./assets/images/logo.png" alt="" className="logo" onClick={refresh} />
                    <ul>
                        <li>
                            <a className="menu-item" href="#homeSection">Inicio</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#skillsSection">Habilidades</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#academicSection">Estudios</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#workSection">Experiencia laboral</a>
                        </li>
                        <button className="contact-btn" onClick={scrollToContact}>Contáctame</button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav
