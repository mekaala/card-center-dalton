import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Facebook from '../images/facebook_logo.png'
import providerData from '../providerData'
import nurseData from '../nurseData'

export default class MobNavBar extends Component {
        container = React.createRef();
    state = {
        showMenu: false,
        showConditions: false,
        showDiagnostics: false,
        showHealth: false,
        showStaff: false,
    }
    toggleMenu = () => {
        const newShowMenu = !this.state.showMenu;
        this.setState({
            showMenu: newShowMenu,
        });
    }
    toggleConditions = () => {
        const newShowConditions = !this.state.showConditions;
        this.setState({
            showConditions: newShowConditions,
        });
    }
    toggleDiagnostics = () => {
        const newShowDiagnostics = !this.state.showDiagnostics;
        this.setState({
            showDiagnostics: newShowDiagnostics,
        });
    }
    toggleHealth = () => {
        const newShowHealth = !this.state.showHealth;
        this.setState({
            showHealth: newShowHealth,
        });
    }
    toggleStaff = () => {
        const newShowStaff = !this.state.showStaff;
        this.setState({
            showStaff: newShowStaff,
        });
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY > 0;
            const navbar = document.getElementById("mobile-bar");
            document.addEventListener("mousedown", this.handleClickOutside);
            if (isTop) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        })
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
        window.removeEventListener('scroll');
    }

    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                showMenu: false,
                showConditions: false,
                showDiagnostics: false,
                showStaff: false,
                showHealth: false,
            })
        }
    }

    render() {
        return (
            <div className="mobile-bar" id="mobile-bar" ref={ this.container }>
                <div className="full-bar">
                    <div className="menu-toggle" onClick={ this.toggleMenu } ref={ this.container }>
                        { this.state.showMenu
                        ?
                            <div className="open-hamburger-menu">
                                <div className="container" onClick={ this.toggleMenu }>
                                    <div class="bar1"></div>
                                    <div class="bar2"></div>
                                    <div class="bar3"></div>
                                </div>
                                <Link to="/staff"><h4>Our Team</h4></Link>
                                <Link to="/conditions"><h4>Education</h4></Link>
                                <Link to="/diagnostics"><h4>Diagnostics</h4></Link>
                                <Link to="/Health"><h4>Health</h4></Link>
                                <a href="https://www.myhealthrecord.com/Portal/SSO" target="_blank"><h4>Patient Portal</h4></a>
                                <a className="facebook" href="https://www.facebook.com/cardiologycenterofdalton" target="_blank"><img src={ Facebook } alt="facebook"/></a>
                            </div>
                        :
                            <div className="container" onClick={ this.toggleMenu }>
                                <div class="bar1"></div>
                                <div class="bar2"></div>
                                <div class="bar3"></div>
                            </div>
                        }
                    </div>
                    <Link to="/"><h4>Cardiology Center of Dalton</h4></Link>
                </div>
            </div>
        )
    }
}