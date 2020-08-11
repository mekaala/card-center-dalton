import React, { Component } from 'react'

export default class SingleProvider extends Component {
    render() {
        const provider = this.props.location.state;
        return (
            <div className="single-provider">
                <div className="provider-name">
                    <h2>{ provider.name }</h2>
                </div>
                <div className="provider-description">
                    <p>{ provider.description }</p>
                    <img src={ provider.photo } alt={ provider.name }/>
                </div>
            </div>
        )
    }
}
