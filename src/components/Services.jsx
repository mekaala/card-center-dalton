import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import diagnosticData from '../diagnosticData'
import hospitalDiagnosticData from '../hospitalDiagnosticData'

export default class Services extends Component {
    render() {
        return (
            <div className="services">
                <h1>OUR SERVICES</h1>
                <p>Our office provides an array of diagnostic services to understand the wellbeing of your heart. We at Cardiology Center of Dalton will take the upmost care of your heart, and give you the steps to building a strong and healthy heart.</p>
                <p>Whether you need a stress test or a screening for disease, we have you covered.</p>
                <div className="service-box">
                    <div className="onsite-box">
                        <h2>Office Services</h2>
                        {diagnosticData.map ((diagnostic, i) => {
                            return (
                                <div key={i}>
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
                    <div className="offsite-box">
                        <h2>Hospital Services</h2>
                        {hospitalDiagnosticData.map ((diagnostic, i) => {
                            return (
                                <div key={i}>
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
        )
    }
}
