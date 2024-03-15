import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Facebook from '../images/facebook_logo.png'
import '../styles/MobNavBar.css'

// function Hamburger() {
//     return (
//         <div className='hamburger'>
//             <div className='burger burger1'/>
//             <div className='burger burger2'/>
//             <div className='burger burger3'/>
//         </div>
//     )
// }

function MobNavBar () {
    // const [hamburger, setHamburger] = useState(false);
    const [toggle, setToggle] = useState(false);

    // const toggleHamburger = () => {
    //     setHamburger(!hamburger);
    // }
    return (
        <div className="mobile-bar" id="mobile-bar">
            <div className="full-bar">
                <Link to="/"><h4>Cardiology Center of Dalton</h4></Link>
                {/* <div className='hamburger' onClick={toggleHamburger}>
                    <Hamburger/>
                </div> */}
                <div className="menu-toggle">
                    { toggle && (
                        <div className="open-hamburger-menu">
                            <div className="container" onClick={ () => setToggle(!toggle) }>
                                <div class="bar1"></div>
                                <div class="bar2"></div>
                                <div class="bar3"></div>
                            </div>
                            <Link to="/staff"><h4>Our Team</h4></Link>
                            <Link to="/conditions"><h4>Education</h4></Link>
                            <Link to="/diagnostics"><h4>Diagnostics</h4></Link>
                            <Link to="/Health"><h4>Health</h4></Link>
                            <a className="facebook" href="https://www.facebook.com/cardiologycenterofdalton" target="_blank"><img src={ Facebook } alt="facebook"/></a>
                        </div>
                    )}
                </div>
                <div className="container" onClick={ () => setToggle(!toggle) }>
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                </div>
            </div>
        </div>
    )
}

export default MobNavBar;


{/* function MobProviderBar() {
    const [staff, setStaff] = useState(false);
    return (
        <div className="sub-menu" onMouseEnter={() =>setStaff(true) } onMouseLeave={ () =>setStaff(false) }>
        <button>
            <Link to="/staff">Team</Link>
        </button>
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

function MobConditionBar() {
    const [conditions, setConditions] = useState(false);
    return (
        <div className="sub-menu" onMouseEnter={() => setConditions(true) } onMouseLeave={() => setConditions(false) }>
        <button>
            <Link to="/conditions">Education</Link>
        </button>
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

function MobDiagnosticBar() {
    const [diagnostics, setDiagnostics] = useState(false);
    return (
        <div className="sub-menu" onMouseEnter={ () => setDiagnostics(true) } onMouseLeave={ () => setDiagnostics(false)}>
            <button>
                <Link to="/diagnostics">Diagnostics</Link>
            </button>
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

function MobHealthBar() {
    const [health, setHealth] = useState(false);
    return (
        <div className="sub-menu" onMouseEnter={ () => setHealth(true) } onMouseLeave={ () => setHealth(false) }>
            <button>
                <Link to="/health">Health</Link>
            </button>
            { health && (
            <div className="dropdown-menu">
                <Link to="/health">Overview</Link>
                <Link to="/health/diets">Diets</Link>
                <Link to="/health/exercises">Exercises</Link>
            </div>
            )}
        </div>
    )
} */}

// export default class MobNavBar extends Component {
//         container = React.createRef();
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
//             const navbar = document.getElementById("mobile-bar");
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
//                 showMenu: false,
//                 showConditions: false,
//                 showDiagnostics: false,
//                 showStaff: false,
//                 showHealth: false,
//             })
//         }
//     }

//     render() {
//         return (
//             <div className="mobile-bar" id="mobile-bar" ref={ this.container }>
//                 <div className="full-bar">
//                     <div className="menu-toggle" onClick={ this.toggleMenu } ref={ this.container }>
//                         { this.state.showMenu
//                         ?
//                             <div className="open-hamburger-menu">
//                                 <div className="container" onClick={ this.toggleMenu }>
//                                     <div class="bar1"></div>
//                                     <div class="bar2"></div>
//                                     <div class="bar3"></div>
//                                 </div>
//                                 <Link to="/staff"><h4>Our Team</h4></Link>
//                                 <Link to="/conditions"><h4>Education</h4></Link>
//                                 <Link to="/diagnostics"><h4>Diagnostics</h4></Link>
//                                 <Link to="/Health"><h4>Health</h4></Link>
//                                 <a className="facebook" href="https://www.facebook.com/cardiologycenterofdalton" target="_blank"><img src={ Facebook } alt="facebook"/></a>
//                             </div>
//                         :
                            // <div className="container" onClick={ this.toggleMenu }>
                            //     <div class="bar1"></div>
                            //     <div class="bar2"></div>
                            //     <div class="bar3"></div>
                            // </div>
//                         }
//                     </div>
//                     <Link to="/"><h4>Cardiology Center of Dalton</h4></Link>
//                 </div>
//             </div>
//         )
//     }
// }