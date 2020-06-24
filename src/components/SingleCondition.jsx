import React, { Component } from 'react'

export default class SingleCondition extends Component {
    render() {
        const condition = this.props.location.state;
        return (
            <div className="single-condition">
                <div className="condition-name">
                    <h2>{ condition.name }</h2>
                </div>
                <div className="condition-description">
                    <p>{ condition.intro }</p>
                    <p>{ condition.anatomy }</p>
                    <p>{ condition.causes }</p>
                    <p>{ condition.symptoms }</p>
                    <img src={ condition.photo } alt={ condition.name }/>
                </div>
            </div>
        )
    }
}
