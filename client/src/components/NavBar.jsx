import React, { useEffect, useState } from 'react'
import "../styles/NavBar.css"
import { Link } from 'react-router-dom'
import logo from '../images/logowhite.png'
import Facebook from '../images/facebook_logo.png'
import providerData from '../providerData'
import nurseData from '../nurseData'

function ProviderBar() {
    const [staff, setStaff] = useState(false);

    const toggleStaff = () => {
        setStaff(!staff);
    }
    useEffect(() => {
        window.addEventListener("mousenter", () => {
            setStaff(true);
        });
        window.addEventListener("mouseleave", () => {
            setStaff(false);
        })
    })
    
    return (
        <div className="sub-menu" onMouseEnter={ toggleStaff } onMouseLeave={ toggleStaff }>
            <button className={`${ staff ? "hovered" : "navbutton"}`}>Team</button>
            { staff && (
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
            )}
        </div>
    )
}

function ConditionBar() {
    const [conditions, setConditions] = useState(false);
    
    const toggleConditions = () => {
        setConditions(!conditions);
    }

    useEffect(() => {
        window.addEventListener("mousenter", () => {
            setConditions(true)
        });
        window.addEventListener("mouseleave", () => {
            setConditions(false)
        })
    })

    return (
        <div className="sub-menu" onMouseEnter={ toggleConditions } onMouseLeave={ toggleConditions }>
            <button className={`${ conditions ? "hovered" : "navbutton"}`}>Education</button>
            { conditions && (
                <div className="dropdown-menu">
                    <Link to="/conditions">All Conditions</Link>
                    <Link to="/conditions/diseases">Diseases</Link>
                    <Link to="/conditions/arrhythmias">Arrhythmias</Link>
                    <Link to="/conditions/heart-block">Heart Block</Link>
                    <Link to="/conditions/symptoms">Symptoms</Link>
                </div>
            )}
    </div>
    )
}

function DiagnosticBar() {
    const [diagnostics, setDiagnostics] = useState(false);
    const toggleDiagnostics = () => {
        setDiagnostics(!diagnostics);
    }

    useEffect(() => {
        window.addEventListener("mousenter", () => {
            setDiagnostics(true)
        });
        window.addEventListener("mouseleave", () => {
            setDiagnostics(false)
        })
    })

    return (
        <div className="sub-menu" onMouseEnter={ toggleDiagnostics } onMouseLeave={ toggleDiagnostics }>
            <button className={`${ diagnostics ? "hovered" : "navbutton"}`}>Diagnostics</button>
            { diagnostics && (
                <div className="dropdown-menu">
                    <Link to="/diagnostics">All Diagnostics</Link>
                    <Link to="/diagnostics/on-site">Office Diagnostics</Link>
                    <Link to="/diagnostics/off-site">Hospital Diagnostics</Link>
                </div>
            )}
        </div>
    )
}

function HealthBar() {
    const [health, setHealth] = useState(false);
    const toggleHealth = () => {
        setHealth(!health);
    }

    useEffect(() => {
        window.addEventListener("mousenter", () => {
            setHealth(true)
        });
        window.addEventListener("mouseleave", () => {
            setHealth(false)
        })
    })
    return (
        <div className="sub-menu" onMouseEnter={ toggleHealth } onMouseLeave={ toggleHealth }>
            <button className={`${ health ? "hovered" : "navbutton"}`}>Health</button>
            { health && (
                <div className="dropdown-menu">
                    <Link to="/health">Overview</Link>
                    <Link to="/health/diets">Diets</Link>
                    <Link to="/health/exercises">Exercises</Link>
                </div>
            )}
        </div>
    )
}

function DesktopBar() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 0)
        })
    })

    return (
        <div className={`${ scroll ? "sticky" : "navbar"}`} id="navbar">
            <Link className="logo" to="/"><img src={ logo } alt="logosharp"/></Link>
            <div className="bar">
                <Link to="/">Home</Link>
                <ProviderBar/>
                <ConditionBar/>
                <DiagnosticBar/>
                <HealthBar/>
                <a className="facebook" href="https://www.facebook.com/cardiologycenterofdalton" target="_blank"><img src={ Facebook } alt="facebook"/></a>
            </div>
        </div>
    )
}

function MobileBar() {
    const [hamburger, setHamburger] = useState(false);
    const [scroll, setScroll] = useState(false);

    function toggleBurger() {
        setHamburger(!hamburger);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 0)
        })
    })

    return (
        <div className={`${ scroll ? "sticky" : "mobile-bar"}`} id="mobile-bar">
            <div className="full-bar">
                <Link to="/"><h2>Cardiology Center of Dalton</h2></Link>
                <button className={hamburger ? 'open-hamburger' : 'hamburger'} onClick={() => {setHamburger(!hamburger)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                    </svg>
                </button>
                <div className={ hamburger ? 'expanded' : 'invisible'}>
                    <Link to="/staff" onClick={ toggleBurger }><h4>Our Team</h4></Link>
                    <Link to="/conditions" onClick={ toggleBurger }><h4>Education</h4></Link>
                    <Link to="/diagnostics" onClick={ toggleBurger }><h4>Diagnostics</h4></Link>
                    <Link to="/Health" onClick={ toggleBurger }><h4>Health</h4></Link>
                </div>
            </div>
        </div>
    )
}

function NavBar() {
  return window.innerWidth > 900
  ? <DesktopBar/>
  : <MobileBar/>
}

export default NavBar