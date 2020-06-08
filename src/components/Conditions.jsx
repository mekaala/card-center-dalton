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
                        const url = "/conditions/" + condition.name;
                        return (
                            <div key={ i }>
                                <Link to ={ url }>{ condition.name }</Link>
                                <p>{ condition.snippet }</p>
                            </div>
                        )
                        //  <SingleCondition condition={condition} key={i} />
                    })}
                    </div>
            </div>
        )
    }
}
