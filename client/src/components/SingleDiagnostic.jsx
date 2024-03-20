import React, { useState } from 'react'
import diagnosticData from '../diagnosticData';
import { Link } from 'react-router-dom';
import hospitalDiagnosticData from '../hospitalDiagnosticData';
import '../styles/Diagnostics.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function DiagnosticMain() {
    const { state } = useLocation();
    return (
        <div className="diagnostic-main">
            <div className="diagnostic-intro">
                <h1>{ state.offName }</h1>
            </div>
            <div className="diagnostic-body">
                <p>{ state.about }</p> 
                {state.procedure && (           
                    <div className="diagnostic-procedure">
                        <h3>Procedure</h3>
                        <p>{ state.procedure }</p>
                    </div>
                )}
                {state.warning && (
                    <div className="diagnostic-warning">
                        <div>
                            <h3>Procedure</h3>
                            <p>{ state.warning }</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

function DiagnosticSide() {
    const [onSite, setOnSite] = useState(false);
    const [offSite, setOffSite] = useState(false);
    
    const toggleOnSite = () => {
        setOnSite(!onSite);
        setOffSite(false);
    }

    const toggleOffSite = () => {
        setOffSite(!offSite);
        setOnSite(false);
    }
    
    return (
        <div className="diagnostic-side">
            <h1><Link to={{pathname: `/diagnostics`}}>DIAGNOSTICS</Link></h1>
            <div onClick={ toggleOnSite }>
                <button>
                    OFFICE DIAGNOSTICS
                </button>
            </div>
            <div onClick={ toggleOffSite }>
                <button>
                    HOSPITAL DIAGNOSTICS
                </button>    
            </div>
            <div>
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
            <div>
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

function SingleDiagnostic() {
  return (
    <div className='single-diagnostic'>
        <DiagnosticMain/>
        <DiagnosticSide/>
    </div>
  )
}

export default SingleDiagnostic