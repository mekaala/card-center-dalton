import React, { Component } from 'react'
import hospitalDiagnosticData from '../hospitalDiagnosticData';
import { Link } from 'react-router-dom';
import diagnosticData from '../diagnosticData';

export default class OffSite extends Component {
    state = {
        showOnSite: false,
    }
    toggleOnSite = () => {
        const newShowOnSite = !this.state.showOnSite;
        this.setState({
            showOnSite: newShowOnSite,
        });
    };
    render() {
        const diagnostic = this.props.location.state;
        return (
            <div className="condition-subpage">
                <div className="diagnostic-main">
                    <h1>HOSPITAL SERVICES</h1>
                    <div className="diagnostic-data">
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
                </div>
                <div className="diagnostic-side">
                    <h1><Link
                        to={{pathname: `/diagnostics`,
                        state: diagnostic}}>
                        DIAGNOSTICS
                    </Link></h1>
                    <h2><button onClick={ this.toggleOnSite }>
                        { this.state.showOffSite
                            ? 'COLLAPSE'
                            : 'OFFICE DIAGNOSTICS'
                        }
                    </button></h2>
                    { this.state.showOnSite
                        ? 
                            <div className="diagnostic-map">
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
                        : null
                    }
                </div>
            </div>
        )
    }
}

