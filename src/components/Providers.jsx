import React, { Component } from 'react'
import SingleProvider from './SingleProvider'
import ProviderData from '../providerData'

export default class Providers extends Component {
    render() {
        return (
            <div className="providers">
                <h1>Providers</h1>
                    <div className="provider-container">
                    {ProviderData.map((provider, i) => {
                        return <SingleProvider provider={provider} key={i} />
                    })}
                    </div>
            </div>
        )
    }
}

