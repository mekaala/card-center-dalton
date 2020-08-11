import React, { Component } from 'react'
import diagnosticData from '../diagnosticData';
import { Link } from 'react-router-dom';
import hospitalDiagnosticData from '../hospitalDiagnosticData';

export default class SingleDiagnostic extends Component {
    state = {
        showOnSite: false,
        showOffSite: false,
    }
    
    hideProcedure() {
        const procedure = document.getElementsByClassName("diagnostic-procedure");
        if (this.props.location.state.procedure != null) {
            return procedure;
        } else if (this.props.location.state.procedure = null) {
            return procedure.style.display ='none';
        }
    }
    hideWarning() {
        const warning = document.getElementsByClassName("diagnostic-warning");
        if (this.props.location.state.warning != null) {
            return warning;
        } else if (this.props.location.state.warning = null) {
            return warning.style.display ='none';
        }
    }

    toggleOnSite = () => {
        const newShowOnSite = !this.state.showOnSite;
        this.setState({
            showOnSite: newShowOnSite,
        });
    };
    toggleOffSite = () => {
        const newShowOffSite = !this.state.showOffSite;
        this.setState({
            showOffSite: newShowOffSite,
        });
    };

    render() {
        const diagnostic = this.props.location.state;
        return (
            <div className="single-diagnostic">
                <div className="diagnostic-main">
                    <div className="diagnostic-intro">
                        <h1>{ diagnostic.offName }</h1>
                    </div>
                    <div className="diagnostic-body">
                        <p>{ diagnostic.about }</p>
                        { this.hideProcedure()
                        ?
                        <div className="diagnostic-procedure">
                            <h3>Procedure</h3>
                            <p>{ diagnostic.procedure }</p>
                        </div>
                        : null
                        }
                        { this.hideWarning()
                        ?
                        <div className="diagnostic-warning">
                            <h3>Preparation</h3>
                            <p>{ diagnostic.warning }</p>
                        </div>
                        : null
                        }
                    </div>
                </div>
                <div className="diagnostic-side">
                    <h1><Link
                        to={{pathname: `/diagnostics`,
                        state: diagnostic}}>
                        DIAGNOSTICS
                    </Link></h1>
                    <h2><button onClick={ this.toggleOnSite }>
                                    { this.state.showOnSite
                                        ? 'COLLAPSE'
                                        : 'ON-SITE DIAGNOSTICS'
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
