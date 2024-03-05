import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img src="./assets/images/logo.png" alt="" className="logo" />
                    <ul>
                        <li>
                            <a className="menu-item">Inicio</a>
                        </li>
                        <li>
                            <a className="menu-item">Habilidades</a>
                        </li>
                        <li>
                            <a className="menu-item">Experiencia laboral</a>
                        </li>
                        <li>
                            <a className="menu-item">Contacto</a>
                        </li>
                        <button className="contact-btn" onClick={() => { }}>Contrátame</button>
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
