import React, { Component } from 'react'
import diagnosticData from '../diagnosticData'
import { Link } from 'react-router-dom'

export default class Diagnostics extends Component {
    render() {
        return (
            <div className="diagnostics">
                <h1>ON-SITE DIAGNOSTICS</h1>
                <p>
                At times, our providers may order tests or procedures to determine the cause of your illness.
                The state-of-the-art clinic at the Cardiology Center of Dalton offers a variety of diagnostic services in one convenient location in Dalton, Georgia.
                Diagnostic testing may rule out certain heart diseases or indicate the exact cause of your symptoms.
                </p>
                <h2>OUR ON-SITE DIAGNOSTIC SERVICES</h2>
                <div className="diagnostic-list">
                    {diagnosticData.map((diagnostic, i) => {
                        return (
                            <div key={ i }>
                                <Link 
                                to={{pathname: `diagnostics/${ diagnostic.diagnosticUrl }`,
                                state: diagnostic}}>
                                    <h3>{ diagnostic.name }</h3>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <p>
                The board-certified doctors at Cardiology Center of Dalton are pleased to offer the convenience of these services to treat a variety of cardiology conditions in our northwest Georgia office.
                Please request an appointment online today or call us at (706) 272-0272.
                </p>
            </div>
        )
    }
}
