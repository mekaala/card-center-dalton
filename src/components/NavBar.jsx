import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import Facebook from '../images/facebook_logo.png'

export default class NavBar extends Component {
    state = {
        showConditions: false,
    }
    toggleConditions = () => {
        const newShowConditions = !this.state.showConditions;
        this.setState({
            showConditions: newShowConditions,
        });
    }
    render() {
        return (
            <div className="navbar">
                <Link className="logo" to="/"><img src={ logo } alt="logo"/></Link>
                <div className="bar">
                    <Link to="/">Home</Link>
                    <div className="condition-menu">
                        <Link onMouseOver={ this.toggleConditions }>
                            { this.state.showConditions
                                ? 'Conditions'
                                : 'Conditions'
                            }
                        </Link>
                        { this.state.showConditions
                        ?
                            <div className="dropdown-conditions" onMouseLeave={ this.toggleConditions }>
                                <Link to="/conditions">All Conditions</Link>
                                <Link to="/conditions/diseases">Diseases</Link>
                                <Link to="/conditions/arrythmias">Arrythmia</Link>
                                <Link to="/conditions/heart-block">Heart Block</Link>
                                <Link to="/conditions/symptoms">Symptoms</Link>
                            </div>
                        : null
                        }
                    </div>
                    <Link to="/diagnostics">Diagnostics</Link>
                    <Link to="/health">Health</Link>
                    <Link to="/staff">Staff</Link>
                </div>
                <a className="facebook" href="https://www.facebook.com/cardiologycenterofdalton" target="_blank"><img src={ Facebook } alt="facebook"/></a>
            </div>
        )
    }
}
