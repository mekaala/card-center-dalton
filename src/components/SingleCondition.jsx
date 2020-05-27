import React, { Component } from 'react'

export default class SingleCondition extends Component {
    render() {
        return (
            <div className="single-condition">
                <div className="condition-name">
                    <h2>{ this.props.condition.name }</h2>
                </div>
                <div className="condition-description">
                    <p>{ this.props.condition.snippet }</p>
                </div>
            </div>
        )
    }
}
