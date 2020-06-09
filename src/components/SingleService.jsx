import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SingleService extends Component {
    render() {
        const service = this.props.location.state;
        return (
            <div className="single-service">
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
        )
    }
}
