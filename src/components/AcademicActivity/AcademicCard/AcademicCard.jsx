import React from 'react'
import './AcademicCard.css'

const AcademicCard = ({details}) => {
    return (
        <div className="academic-activity-card">
            <h6>{details.title}</h6>
            <div className="academic-duration">{details.date}</div>
            <ul>
                {details.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default AcademicCard

