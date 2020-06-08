import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import Facebook from '../images/facebook_logo.png'

export default class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link className="logo" to="/"><img src={ logo } alt="logo"/></Link>
                <div className="bar">
                    <Link to="/providers">Providers</Link>
                    <Link to="/conditions">Conditions</Link>
                    <Link to="/diagnostics">Diagnostics</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/education">Education</Link>
                </div>
                <a className="facebook" href="https://www.facebook.com/cardiologycenterofdalton"><img src={ Facebook } alt="facebook"/></a>
            </div>
        )
    }
}
