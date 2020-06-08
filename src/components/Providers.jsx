import React, { Component } from 'react'
import SingleProvider from './SingleProvider'
import providerData from '../providerData'
import { Link } from 'react-router-dom';

export default class Providers extends Component {
    render() {
        return (
            <div className="providers">
                <h1>Providers</h1>
                    <div className="provider-container">
                    {providerData.map((provider, i) => {
                        return (
                            <div key={ i }>
                                <Link 
                                to={{pathname: `providers/${ provider.providerUrl }`,
                                state: provider}}>
                                    <img src={ provider.photo } alt={ provider.name }/>
                                    <h3>{ provider.name }</h3>
                                </Link>
                            </div>
                        )
                    })}
                    </div>
            </div>
        )
    }
}

