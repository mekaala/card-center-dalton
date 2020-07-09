import React, { Component } from 'react'
import officeServiceData from '../officeServiceData'
import hospitalServiceData from '../hospitalServiceData'
import { Link } from 'react-router-dom'

export default class Services extends Component {
    render() {
        return (
            <div className="services">
                <h1>SERVICES</h1>
                <div className="full-list">
                    <div className="office-list">
                        <h2>IN-OFFICE SERVICES</h2>
                        <div className="office-service-list">
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
                    <div className="hospital-list">
                        <div className="hospital-service-list">
                            <h2>IN-HOSPITAL SERVICES</h2>
                            {hospitalServiceData.map((service, i) => {
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
                </div>
            </div>
        )
    }
}
