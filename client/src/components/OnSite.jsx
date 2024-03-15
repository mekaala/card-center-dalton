import React, { useState } from 'react'
import diagnosticData from '../diagnosticData'
import { Link } from 'react-router-dom'
import hospitalDiagnosticData from '../hospitalDiagnosticData'

function OnSiteList() {
    return (
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
    )
}

function OffSiteColumn() {
    const [offSite, setOffSite] = useState(false);
    const toggleOffSite = () => {
        setOffSite(!offSite);
    }
    return (
        <div className="diagnostic-side">
        <h1><Link to={{pathname: `/diagnostics`}}>DIAGNOSTICS</Link></h1>
        <div onClick={ toggleOffSite }>
            <button>
                HOSPITAL DIAGNOSTICS
            </button>
            { offSite && (
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
            )}
        </div>
    </div>
    )
}

function OnSite() {
    return (
        <div className="condition-subpage">
            <OnSiteList/>
            <OffSiteColumn />
        </div>
    )
}

export default OnSite