import React, { Component } from 'react'
import ConditionData from '../conditionData'
import SingleCondition from './SingleCondition'
import { Link } from 'react-router-dom';

export default class Conditions extends Component {
    render() {
        return (
            <div className="conditions">
                    <div className="condition-container">
                    {ConditionData.map((condition, i) => {
                        return (
                            <div key={ i }>
                                <Link
                                to={{pathname: `/conditions/${ condition.conditionUrl }`,
                                state: condition}}>
                                    { condition.name }
                                </Link>
                                <p>{ condition.snippet }</p>
                            </div>
                        )
                    })}
                    </div>
            </div>
        )
    }
}
