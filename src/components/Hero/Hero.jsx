import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero-container" id="homeSection">
            <div className="hero-content">
                <h2>Junior Developer</h2>
                <p>
                    Java | C# | JavaScript | PHP | SQL server | MySQL | JSON | Node.js | Power Bl | Power Automate | Power Apps | HTML | CSS
                </p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src="portafolioweb-miguel-gil/assets/images/java.png" alt="" />
                    </div>
                    <img className="bordeimg" src="portafolioweb-miguel-gil/assets/images/magma.jpg" alt="" />
                </div>
                <div>
                    <div className="tech-icon">
                        <img src="portafolioweb-miguel-gil/assets/images/c-sharp.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="portafolioweb-miguel-gil/assets/images/react.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="portafolioweb-miguel-gil/assets/images/database.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="portafolioweb-miguel-gil/assets/images/js.png" alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero
