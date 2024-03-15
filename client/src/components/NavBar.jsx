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
    
    return (
        <div className="sub-menu" onMouseEnter={ toggleStaff } onMouseLeave={ toggleStaff }>
            <button>Team</button>
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
    return (
        <div className="sub-menu" onMouseEnter={ toggleConditions } onMouseLeave={ toggleConditions }>
            <button>Education</button>
            { conditions && (
                <div className="dropdown-menu">
                    <Link to="/conditions">All Conditions</Link>
                    <Link to="/conditions/diseases">Diseases</Link>
                    <Link to="/conditions/arrythmias">Arrythmias</Link>
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
    return (
        <div className="sub-menu" onMouseEnter={ toggleDiagnostics } onMouseLeave={ toggleDiagnostics }>
            <button>Diagnostics</button>
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
    return (
        <div className="sub-menu" onMouseEnter={ toggleHealth } onMouseLeave={ toggleHealth }>
            <button>Health</button>
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

function NavBar() {
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

export default NavBar
// export default class NavBar extends Component {
//     container = React.createRef();
//     state = {
//         showMenu: false,
//         showConditions: false,
//         showDiagnostics: false,
//         showHealth: false,
//         showStaff: false,
//     }
//     toggleMenu = () => {
//         const newShowMenu = !this.state.showMenu;
//         this.setState({
//             showMenu: newShowMenu,
//         });
//     }
//     toggleConditions = () => {
//         const newShowConditions = !this.state.showConditions;
//         this.setState({
//             showConditions: newShowConditions,
//         });
//     }
//     toggleDiagnostics = () => {
//         const newShowDiagnostics = !this.state.showDiagnostics;
//         this.setState({
//             showDiagnostics: newShowDiagnostics,
//         });
//     }
//     toggleHealth = () => {
//         const newShowHealth = !this.state.showHealth;
//         this.setState({
//             showHealth: newShowHealth,
//         });
//     }
//     toggleStaff = () => {
//         const newShowStaff = !this.state.showStaff;
//         this.setState({
//             showStaff: newShowStaff,
//         });
//     }
//     componentDidMount() {
//         window.addEventListener('scroll', () => {
//             const isTop = window.scrollY > 0;
//             const navbar = document.getElementById("navbar");
//             document.addEventListener("mousedown", this.handleClickOutside);
//             if (isTop) {
//                 navbar.classList.add('scrolled');
//             } else {
//                 navbar.classList.remove('scrolled');
//             }
//         })
//     }

//     componentWillUnmount() {
//         document.removeEventListener("mousedown", this.handleClickOutside);
//         window.removeEventListener('scroll');
//     }

//     handleClickOutside = event => {
//         if (this.container.current && !this.container.current.contains(event.target)) {
//             this.setState({
//                 showConditions: false,
//                 showDiagnostics: false,
//                 showStaff: false,
//                 showHealth: false,
//             })
//         }
//     }

//     render() {
//         return (
//             <div className="navbar" id="navbar">
//                 <Link className="logo" to="/"><img src={ logo } alt="logosharp"/></Link>
//                 <div className="bar">
//                     <button>
//                         <Link to="/">Home</Link>
//                     </button>
//                     <div className="sub-menu" onMouseEnter={ this.toggleStaff } onMouseLeave={ this.toggleStaff }>
//                         <button>
//                             {this.state.showStaff
//                                 ? <Link to="/staff">Team</Link>
//                                 : <Link to="/staff">Team</Link>
//                             }
//                         </button>
//                         { this.state.showStaff
//                         ?
//                         <div className="staff-menu">
//                             <div className="staff-link">
//                                 <Link to="/staff">Directory</Link>
//                             </div>
//                             {providerData.map((provider, i) => {
//                                 return (
//                                     <div key={ i } className="staff-link">
//                                         <Link to={{pathname: `${ provider.url }`, state: provider}}>
//                                             { provider.name }
//                                         </Link>
//                                     </div>
//                                 )
//                             })}
//                             {nurseData.map((provider, i) => {
//                                 return (
//                                     <div key={ i } className="staff-link">
//                                         <Link to={{pathname: `${ provider.url }`, state: provider}}>
//                                             { provider.name }
//                                         </Link>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                         : <div className="collapse-menu"/>
//                         }
//                     </div>
//                     <div className="sub-menu" onMouseEnter={ this.toggleConditions } onMouseLeave={ this.toggleConditions }>
//                         <button>
//                             { this.state.showConditions
//                                 ? <Link to="/conditions">Education</Link>
//                                 : <Link to="/conditions">Education</Link>
//                             }
//                         </button>
//                         { this.state.showConditions
//                         ?
//                             <div className="dropdown-menu">
//                                 <Link to="/conditions">All Conditions</Link>
//                                 <Link to="/conditions/diseases">Diseases</Link>
//                                 <Link to="/conditions/arrythmias">Arrythmias</Link>
//                                 <Link to="/conditions/heart-block">Heart Block</Link>
//                                 <Link to="/conditions/symptoms">Symptoms</Link>
//                             </div>
//                         : <div className="collapse-menu"/>
//                         }
//                     </div>
//                     <div className="sub-menu" onMouseEnter={ this.toggleDiagnostics } onMouseLeave={ this.toggleDiagnostics}>
//                         <button>
//                             {this.state.showDiagnostics
//                                 ? <Link to="/diagnostics">Diagnostics</Link>
//                                 : <Link to="/diagnostics">Diagnostics</Link>
//                             }
//                         </button>
//                         { this.state.showDiagnostics
//                         ?
//                         <div className="dropdown-menu">
//                             <Link to="/diagnostics">All Diagnostics</Link>
//                             <Link to="/diagnostics/on-site">Office Diagnostics</Link>
//                             <Link to="/diagnostics/off-site">Hospital Diagnostics</Link>
//                         </div>
//                         : <div className="collapse-menu"/>
//                         }
//                     </div>
//                     <div className="sub-menu" onMouseEnter={ this.toggleHealth } onMouseLeave={ this.toggleHealth}>
//                         <button>
//                             {this.state.showHealth
//                                 ? <Link to="/health">Health</Link>
//                                 : <Link to="/health">Health</Link>
//                             }
//                         </button>
//                         { this.state.showHealth
//                         ?
//                         <div className="dropdown-menu">
//                             <Link to="/health">Overview</Link>
//                             <Link to="/health/diets">Diets</Link>
//                             <Link to="/health/exercises">Exercises</Link>
//                         </div>
//                         : <div className="collapse-menu"/>
//                         }
//                     </div>
//                     <a className="facebook" href="https://www.facebook.com/cardiologycenterofdalton" target="_blank"><img src={ Facebook } alt="facebook"/></a>
//                 </div>
//             </div>
//         )
//     }
// }
