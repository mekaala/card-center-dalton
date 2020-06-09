import React, { Component } from 'react'
import officeServiceData from '../officeServiceData'
import hospitalServiceData from '../hospitalServiceData'
import { Link } from 'react-router-dom'

export default class Services extends Component {
    render() {
        return (
            <div className="services">
                <h2>IN-OFFICE SERVICES</h2>
                <div className="office-service-list">
                    {officeServiceData.map((service, i) => {
                        return (
                            <div key={ i }>
                                <Link 
                                to={{pathname: `services/${ service.serviceUrl }`,
                                state: service}}>
                                    <h3>{ service.name }</h3>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <h2>IN-HOSPITAL SERVICES</h2>
                <div className="hospital-service-list">
                    {hospitalServiceData.map((service, i) => {
                        return (
                            <div key={ i }>
                                <Link 
                                to={{pathname: `services/${ service.serviceUrl }`,
                                state: service}}>
                                    <h3>{ service.name }</h3>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
