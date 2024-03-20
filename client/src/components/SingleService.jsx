import React from 'react'
import { Link } from 'react-router-dom'
import hospitalServiceData from '../hospitalServiceData';
import officeServiceData from '../officeServiceData';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function ServiceMain() {
    const { state } = useLocation();
    return (
        <div className="service-main">
            <h1>{ state.offName }</h1>
            <div className="service-description">
                <p>{ state.intro }</p>
                <h2>{ state.termOne }</h2>
                <p>{ state.pOne }</p>
                <p>{ state.pTwo }</p>
                <h2>{ state.opOne }</h2>
                <p>{ state.pThree }</p>
                <h2> {state.termTwo }</h2>
                <p>{ state.pFour }</p>
                <p>{ state.pFive }</p>
                <p>{ state.pSix }</p>
                <p>{ state.pSeven }</p>
                <p>{ state.pEight }</p>
                <p>{ state.pNine }</p>
                <p>{ state.pTen }</p>
                <p>{ state.pEleven }</p>
            </div>
        </div>
    )
}

function ServiceSide() {
    return (
        <div className="service-side">
            <div className="office-list-sing">
                <h2>IN-OFFICE SERVICES</h2>
                <div className="service-map">
                    {officeServiceData.map((service, i) => {
                        return (
                            <div key={ i }>
                                <h3><Link 
                                to={{pathname: `services/${ service.serviceUrl }`,
                                state: service}}>
                                    { service.name }
                                </Link></h3>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="hospital-list-sing">
                    <h2>IN-HOSPITAL SERVICES</h2>
                    <div className="service-map">
                    {hospitalServiceData.map((hospserv, i) => {
                        return (
                            <div key={ i }>
                                <h3><Link 
                                to={{pathname: `services/${ hospserv.serviceUrl }`,
                                state: hospserv}}>
                                    { hospserv.name }
                                </Link></h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

function SingleService() {
  return (
    <div className='single-service'>
        <ServiceMain/>
        <ServiceSide/>
    </div>
  )
}

export default SingleService