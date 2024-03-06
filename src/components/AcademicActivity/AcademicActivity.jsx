import React, { useRef } from 'react'
import './AcademicActivity.css'
import Slider from 'react-slick'
import { ACADEMIC_ACTIVITY } from '../../utils/data'
import AcademicCard from './AcademicCard/AcademicCard'

const AcademicActivity = () => {
    const sliderRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    }
    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }
    return (
        <section className="activity-container" id="academicSection">
            <h5>Estudios y certificados</h5>
            <div className="activity-content">
                <div className="arrow-right" onClick={slideRight}>
                    <span className="material-icons">chevron_right</span>
                </div>
                <div className="arrow-left" onClick={slideLeft}>
                    <span className="material-icons">chevron_left</span>
                </div>
                <Slider ref={sliderRef}{...settings}>
                    {ACADEMIC_ACTIVITY.map((item) => (
                        <AcademicCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default AcademicActivity
