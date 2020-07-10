import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ConditionData from '../conditionData'
import symptomData from '../symptomData';

export default class Conditions extends Component {
    render() {
        return (
            <div className="conditions">
                <div className="conditions-side">
                    <h1>CONDITIONS TREATED</h1>
                    <div className="condition-container">
                    {ConditionData.map((condition, i) => {
                        return (
                            <div key={ i }>
                                <h2><Link
                                to={{pathname: `/conditions/${ condition.conditionUrl }`,
                                state: condition}}>
                                    { condition.name }
                                </Link></h2>
                                <p>{ condition.info }</p>
                            </div>
                        )
                    })}
                    </div>
                </div>
                <div className="symptoms-side">
                    <h1>SYMPTOMS TREATED</h1>
                    <div className="symptom-container">
                        {symptomData.map((condition, i) => {
                            return (
                                <div key={ i }>
                                    <h2><Link
                                    to={{pathname: `/conditions/${ condition.conditionUrl }`,
                                    state: condition}}>
                                        { condition.name }
                                    </Link></h2>
                                    <p>{ condition.info }</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
