import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    const scrollToContact = () => {
        const contactSection = document.getElementById('contactSection');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const refresh = () => {
        window.history.replaceState(null, null, window.location.pathname);
        window.location.reload();
    };
    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img src="portafolioweb-miguel-gil/assets/images/logo.png" alt="Miguel Gil" className="logo" onClick={refresh} />
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
                        <button className="contact-btn" onClick={scrollToContact}>Contacto</button>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span className="material-icons" style={{ fontSize: "1.8rem" }}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
