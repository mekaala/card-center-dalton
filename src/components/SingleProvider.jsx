import React, { Component } from 'react'

export default class SingleProvider extends Component {
    render() {
        return (
            <div className="single-provider">
                <div className="provider-name">
                    <h2>{ this.props.provider.name }</h2>
                </div>
                <div className="provider-description">
                    <p>{ this.props.provider.description }</p>
                    <img src={ this.props.provider.photo } alt={ this.props.provider.name }/>
                </div>
            </div>
        )
    }
}
