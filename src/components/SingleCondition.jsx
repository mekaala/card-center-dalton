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
                        <h2>{ condition.name }</h2>
                    </div>
                    <div className="condition-description">
                        <p>{ condition.intro }</p>
                        <p>{ condition.anatomy }</p>
                        <p>{ condition.causes }</p>
                        <p>{ condition.symptoms }</p>
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
