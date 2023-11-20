import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logowhite.png'
import Facebook from '../images/facebook_logo.png'
import providerData from '../providerData'
import nurseData from '../nurseData'

export default class NavBar extends Component {
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
            const navbar = document.getElementById("navbar");
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
                showConditions: false,
                showDiagnostics: false,
                showStaff: false,
                showHealth: false,
            })
        }
    }

    render() {
        return (
            <div className="navbar" id="navbar">
                <Link className="logo" to="/"><img src={ logo } alt="logosharp"/></Link>
                <div className="bar">
                    <Link to="/">Home</Link>
                    <div className="sub-menu" onMouseEnter={ this.toggleStaff } onMouseLeave={ this.toggleStaff }>
                        <a>
                            {this.state.showStaff
                                ? <Link to="/staff">Our Team</Link>
                                : <Link to="/staff">Our Team</Link>
                            }
                        </a>
                        { this.state.showStaff
                        ?
                        <div className="staff-menu">
                            <div className="staff-link">
                                <Link to="/staff">Directory</Link>
                            </div>
                            {providerData.map((provider, i) => {
                                return (
                                    <div key={ i } className="staff-link">
                                        <Link to={{pathname: `${ provider.url }`, state: provider}}>
                                            { provider.name }
                                        </Link>
                                    </div>
                                )
                            })}
                            {nurseData.map((provider, i) => {
                                return (
                                    <div key={ i } className="staff-link">
                                        <Link to={{pathname: `${ provider.url }`, state: provider}}>
                                            { provider.name }
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        : <div className="collapse-menu"/>
                        }
                    </div>
                    <div className="sub-menu" onMouseEnter={ this.toggleConditions } onMouseLeave={ this.toggleConditions }>
                        <a>
                            { this.state.showConditions
                                ? <Link to="/conditions">Education</Link>
                                : <Link to="/conditions">Education</Link>
                            }
                        </a>
                        { this.state.showConditions
                        ?
                            <div className="dropdown-menu">
                                <Link to="/conditions">All Conditions</Link>
                                <Link to="/conditions/diseases">Diseases</Link>
                                <Link to="/conditions/arrythmias">Arrythmias</Link>
                                <Link to="/conditions/heart-block">Heart Block</Link>
                                <Link to="/conditions/symptoms">Symptoms</Link>
                            </div>
                        : <div className="collapse-menu"/>
                        }
                    </div>
                    <div className="sub-menu" onMouseEnter={ this.toggleDiagnostics } onMouseLeave={ this.toggleDiagnostics}>
                        <a>
                            {this.state.showDiagnostics
                                ? <Link to="/diagnostics">Diagnostics</Link>
                                : <Link to="/diagnostics">Diagnostics</Link>
                            }
                        </a>
                        { this.state.showDiagnostics
                        ?
                        <div className="dropdown-menu">
                            <Link to="/diagnostics">All Diagnostics</Link>
                            <Link to="/diagnostics/on-site">Office Diagnostics</Link>
                            <Link to="/diagnostics/off-site">Hospital Diagnostics</Link>
                        </div>
                        : <div className="collapse-menu"/>
                        }
                    </div>
                    <div className="sub-menu" onMouseEnter={ this.toggleHealth } onMouseLeave={ this.toggleHealth}>
                        <a>
                            {this.state.showHealth
                                ? <Link to="/health">Health</Link>
                                : <Link to="/health">Health</Link>
                            }
                        </a>
                        { this.state.showHealth
                        ?
                        <div className="dropdown-menu">
                            <Link to="/health">Overview</Link>
                            <Link to="/health/diets">Diets</Link>
                            <Link to="/health/exercises">Exercises</Link>
                        </div>
                        : <div className="collapse-menu"/>
                        }
                    </div>
                    <a href="https://www.myhealthrecord.com/Portal/SSO" target="_blank">Patient Portal</a>
                    <a className="facebook" href="https://www.facebook.com/cardiologycenterofdalton" target="_blank"><img src={ Facebook } alt="facebook"/></a>
                </div>
            </div>
        )
    }
}
