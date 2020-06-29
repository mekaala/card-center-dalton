import React, { Component } from 'react'
import diagnosticData from '../diagnosticData';
import { Link } from 'react-router-dom';

export default class SingleDiagnostic extends Component {
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
                    <h2>Diagnostics</h2>
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
                </div>
            </div>
        )
    }
}
