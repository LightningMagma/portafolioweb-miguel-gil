import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Junior Developer</h2>
                <p>
                    Java | C# | JavaScript | PHP | SQL server | MySQL | JSON | Node.js | Power Bl | Power Automate | Power Apps | HTML | CSS
                </p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/java.png" alt="" />
                    </div>
                    <img className="bordeimg" src="./assets/images/magma.jpg" alt="" />
                </div>
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/c-sharp.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/html-5.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/css-3.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/js.png" alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero
