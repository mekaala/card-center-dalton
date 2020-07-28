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
                    <div className="diagnostic-data">
                        {diagnosticData.map((diagnostic, i) => {
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
                </div>
                <div className="diagnostic-side">
                    <h1><Link
                        to={{pathname: `/diagnostics`,
                        state: diagnostic}}>
                        DIAGNOSTICS
                    </Link></h1>
                    <h2><button onClick={ this.toggleOffSite }>
                        { this.state.showOffSite
                            ? 'COLLAPSE'
                            : 'HOSPITAL DIAGNOSTICS'
                        }
                    </button></h2>
                    { this.state.showOffSite
                        ? 
                            <div className="diagnostic-map">
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
        )
    }
}
