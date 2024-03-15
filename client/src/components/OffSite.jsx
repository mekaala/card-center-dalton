import React, { useState } from 'react'
import hospitalDiagnosticData from '../hospitalDiagnosticData';
import { Link } from 'react-router-dom';
import diagnosticData from '../diagnosticData';

function OffSiteList() {
    return (
        <div className="diagnostic-main">
            <h1>HOSPITAL SERVICES</h1>
            <p>
                At times, our providers may order tests or procedures to determine the cause of your illness.
                The state-of-the-art clinic at the Cardiology Center of Dalton offers a variety of diagnostic services in one convenient location in Dalton, Georgia.
                Diagnostic testing may rule out certain heart diseases or indicate the exact cause of your symptoms.
            </p>
            <div className="diagnostic-data">
                {hospitalDiagnosticData.map((diagnostic, i) => {
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

function OnSiteColumn() {
    const [onSite, setOnSite] = useState(false);
    const toggleOnSite = () => {
        setOnSite(!onSite);
    }
    return (
    <div className="diagnostic-side">
        <h1><Link to={{pathname: `/diagnostics`}}>DIAGNOSTICS</Link></h1>
        <div onClick={ toggleOnSite }>
            <button>
                OFFICE DIAGNOSTICS
            </button>
            { onSite && (
                <div className="diagnostic-map">
                    <h3><Link to="/diagnostics/on-site">All Office Diagnostics</Link></h3>
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
            )}
        </div>
    </div>
    )
}
function OffSite() {
  return (
    <div className='condition-subpage'>
        <OffSiteList/>
        <OnSiteColumn/>
    </div>

  )
}

export default OffSite