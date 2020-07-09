import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import hospitalServiceData from '../hospitalServiceData';
import officeServiceData from '../officeServiceData';

export default class SingleService extends Component {
    render() {
        const service = this.props.location.state;
        return (
            <div className="single-service">
                <div className="service-main">
                    <h1>{ service.offName }</h1>
                    <div className="service-description">
                        <p>{ service.intro }</p>
                        <h2>{ service.termOne }</h2>
                        <p>{ service.pOne }</p>
                        <p>{ service.pTwo }</p>
                        <h2>{ service.opOne }</h2>
                        <p>{ service.pThree }</p>
                        <h2> {service.termTwo }</h2>
                        <p>{ service.pFour }</p>
                        <p>{ service.pFive }</p>
                        <p>{ service.pSix }</p>
                        <p>{ service.pSeven }</p>
                        <p>{ service.pEight }</p>
                        <p>{ service.pNine }</p>
                        <p>{ service.pTen }</p>
                        <p>{ service.pEleven }</p>
                    </div>
                </div>
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
            </div>
        )
    }
}
