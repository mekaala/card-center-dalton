import React, { Component } from 'react'
import ConditionData from '../conditionData'
import SingleCondition from './SingleCondition'

export default class Conditions extends Component {
    render() {
        return (
            <div className="conditions">
                    <div className="condition-container">
                    {ConditionData.map((condition, i) => {
                        return <SingleCondition condition={condition} key={i} />
                    })}
                    </div>
            </div>
        )
    }
}
