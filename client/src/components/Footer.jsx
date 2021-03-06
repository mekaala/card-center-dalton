import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="list">
                    <Link to="/health/diets">Diets</Link>
                    <Link to="/health/exercises">Exercising</Link>
                    <Link to="/diagnostics/on-site">Office Services</Link>
                    <Link to="/diagnostics/off-site">Hospital Services</Link>
                    {/* <Link to="/appointment-form" id="appointment-form">Request Appointment</Link> */}
                </div>
            </div>
        )
    }
}
