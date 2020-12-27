import React from 'react';
import './Meter.css'

const Meter = () => {
    return (
        <div className="skill-container">
            <div className="skills">
                <div className="skill-label">
                    <h3>Html</h3>
                    <span className="percent">87%</span>
                    <div style={{"clear": "both"}}></div>
                </div>
                <div className="bar">
                    <div className="progress" style={{"width": "87%"}}></div>
                </div>
            </div>
            <div className="skills">
                <div className="skill-label">
                    <h3>CSS</h3>
                    <span className="percent">90%</span>
                    <div style={{"clear": "both"}}></div>
                </div>
                <div className="bar">
                    <div className="progress" style={{"width": "90%"}}></div>
                </div>
            </div>
            <div className="skills">
                <div className="skill-label">
                    <h3>Javascript</h3>
                    <span className="percent">90%</span>
                    <div style={{"clear": "both"}}></div>
                </div>
                <div className="bar">
                    <div className="progress" style={{"width": "90%"}}></div>
                </div>
            </div>
            <div className="skills">
                <div className="skill-label">
                    <h3>React</h3>
                    <span className="percent">70%</span>
                    <div style={{"clear": "both"}}></div>
                </div>
                <div className="bar">
                    <div className="progress" style={{"width": "70%"}}></div>
                </div>
            </div>
            <div className="skills">
                <div className="skill-label">
                    <h3>Angular</h3>
                    <span className="percent">70%</span>
                    <div style={{"clear": "both"}}></div>
                </div>
                <div className="bar">
                    <div className="progress" style={{"width": "70%"}}></div>
                </div>
            </div>

            <div className="skills">
                <div className="skill-label">
                    <h3>JQuery</h3>
                    <span className="percent">72%</span>
                    <div style={{"clear": "both"}}></div>
                </div>
                <div className="bar">
                    <div className="progress" style={{"width": "72%"}}></div>
                </div>
            </div>
        </div>
    )
}

export default Meter;