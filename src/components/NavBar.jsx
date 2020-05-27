import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/providers">Providers</Link>
                <Link to="/conditions">Conditions</Link>
                <Link to="/diagnostics">Diagnostics</Link>
                <Link to="/services">Services</Link>
                <Link to="/education">Education</Link>
            </div>
        )
    }
}
