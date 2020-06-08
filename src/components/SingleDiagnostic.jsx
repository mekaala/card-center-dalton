import React, { Component } from 'react'

export default class SingleDiagnostic extends Component {
    render() {
        const diagnostic = this.props.location.state;
        return (
            <div className="single-diagnostic">
                <div className="diagnostic-intro">
                    <h1>{ diagnostic.offName }</h1>
                    <p>{ diagnostic.about }</p>
                </div>
                <h3>Procedure</h3>
                <div className="diagnostic-procedure">
                    <p>{ diagnostic.warning }</p>
                    <p>{ diagnostic.procedure1 }</p>
                    <p>{ diagnostic.procedure2 }</p>
                    <p>{ diagnostic.procedure3 }</p>
                </div>
            </div>
        )
    }
}
