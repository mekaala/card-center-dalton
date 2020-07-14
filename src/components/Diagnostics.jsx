import React, { Component } from 'react'
import diagnosticData from '../diagnosticData'
import { Link } from 'react-router-dom'
import hospitalDiagnosticData from '../hospitalDiagnosticData'

export default class Diagnostics extends Component {
    render() {
        return (
            <div className="diagnostics">
                <h1>DIAGNOSTIC SERVICES</h1>
                <div className="diagnostics-info">
                    <p>
                    At times, our providers may order tests or procedures to determine the cause of your illness.
                    The state-of-the-art clinic at the Cardiology Center of Dalton offers a variety of diagnostic services in one convenient location in Dalton, Georgia.
                    Diagnostic testing may rule out certain heart diseases or indicate the exact cause of your symptoms.
                    </p>
                    <div className="full-list">
                        <div className="onsite-side">
                            <h2>ON-SITE DIAGNOSTIC SERVICES</h2>
                            <div className="onsite-list">
                                {diagnosticData.map((diagnostic, i) => {
                                    return (
                                        <div key={ i }>
                                            <h3>
                                                <Link 
                                                to={{pathname: `diagnostics/${ diagnostic.diagnosticUrl }`,
                                                state: diagnostic}}>
                                                    { diagnostic.name }
                                                </Link>
                                            </h3>
                                        </div>
                                    )
                                })}
                                <h3>Laboratory/Blood Work</h3>
                            </div>
                        </div>
                        <div className="offsite-side">
                            <h2>HOSPITAL DIAGNOSTIC SERVICES</h2>
                            <div className="offsite-list">
                                {hospitalDiagnosticData.map((diagnostic, i) => {
                                    return (
                                        <div key={ i }>
                                            <h3>
                                                <Link 
                                                to={{pathname: `diagnostics/${ diagnostic.diagnosticUrl }`,
                                                state: diagnostic}}>
                                                    { diagnostic.name }
                                                </Link>
                                            </h3>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <p>
                    The board-certified doctors at Cardiology Center of Dalton are pleased to offer the convenience of these services to treat a variety of cardiology conditions in our northwest Georgia office.
                    Please request an appointment today by calling us at (706) 272-0272.
                    </p>
                </div>
            </div>
        )
    }
}
