import React, { Component } from 'react'
import conditionData from '../conditionData';
import { Link } from 'react-router-dom';

export default class SingleCondition extends Component {
    render() {
        const condition = this.props.location.state;
        return (
            <div className="single-condition">
                <div className="condition-left">
                    <div className="condition-name">
                        <h1>{ condition.name }</h1>
                    </div>
                    <div className="condition-description">
                        <p>{ condition.intro }</p>
                        <h3>Causes</h3>
                        <p>{ condition.causes }</p>
                        <h3>Symptoms</h3>
                        <p>{ condition.symptoms }</p>
                        <h3>Diagnosis</h3>
                        <p>{ condition.diagnosis }</p>
                        <h3>Treatment</h3>
                        <p>{ condition.treatment }</p>
                    </div>
                </div>
                <div className="condition-right">
                    <h2>Conditions</h2>
                    <div className="condition-map">
                        {conditionData.map((condition, i) => {
                                return (
                                    <div key={ i }>
                                        <h3><Link
                                        to={{pathname: `${ condition.conditionUrl }`,
                                        state: condition}}>
                                            { condition.name }
                                        </Link></h3>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        )
    }
}
