import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SingleProvider extends Component {
    render() {
        const provider = this.props.location.state;
        return (
            <div className="single-provider">
                <Link to='/staff'>Return to Staff</Link>
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
