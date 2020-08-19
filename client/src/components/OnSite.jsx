import React, { Component } from 'react'
import diagnosticData from '../diagnosticData'
import { Link } from 'react-router-dom'
import hospitalDiagnosticData from '../hospitalDiagnosticData'

export default class OnSite extends Component {
    state = {
        showOffSite: false,
    }
    toggleOffSite = () => {
        const newShowOffSite = !this.state.showOffSite;
        this.setState({
            showOffSite: newShowOffSite,
        });
    };
    render() {
        const diagnostic = this.props.location.state;
        return (
            <div className="condition-subpage">
                <div className="diagnostic-main">
                    <h1>IN-OFFICE SERVICES</h1>
                    <p>
                        At times, our providers may order tests or procedures to determine the cause of your illness.
                        The state-of-the-art clinic at the Cardiology Center of Dalton offers a variety of diagnostic services in one convenient location in Dalton, Georgia.
                        Diagnostic testing may rule out certain heart diseases or indicate the exact cause of your symptoms.
                    </p>
                    <div className="diagnostic-data">
                        {diagnosticData.map((diagnostic, i) => {
                            return (
                                <div key={ i }>
                                    <h3>
                                        <Link to={{pathname: `${ diagnostic.diagnosticUrl }`, state: diagnostic}}>
                                            { diagnostic.name }
                                        </Link>
                                    </h3>
                                    <p>{ diagnostic.info }</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="diagnostic-side">
                    <h1><Link
                        to={{pathname: `/diagnostics`,
                        state: diagnostic}}>
                        DIAGNOSTICS
                    </Link></h1>
                    <div onMouseEnter={ this.toggleOffSite } onMouseLeave={ this.toggleOffSite }>
                        <h2><button>
                            { this.state.showOffSite
                                ? 'HOSPITAL DIAGNOSTICS'
                                : 'HOSPITAL DIAGNOSTICS'
                            }
                        </button></h2>
                        { this.state.showOffSite
                            ? 
                                <div className="diagnostic-map">
                                    <h3><Link to="/diagnostics/off-site">All Hospital Diagnostics</Link></h3>
                                    {hospitalDiagnosticData.map((diagnostic, i) => {
                                        return (
                                            <div key={ i }>
                                                <h3>
                                                    <Link to={{pathname: `${ diagnostic.diagnosticUrl }`, state: diagnostic}}>
                                                        { diagnostic.name }
                                                    </Link>
                                                </h3>
                                            </div>
                                        )
                                    })}
                                </div>
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
