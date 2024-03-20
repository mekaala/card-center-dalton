import React, { Component } from 'react'
import providerData from '../providerData'
import { Link } from 'react-router-dom';
import nurseData from '../nurseData';
import cmaData from '../cmaData';

export default class Providers extends Component {
    render() {
        return (
            <div className="providers">
                <h1>Meet the Team</h1>
                <div className="provider-container">
                {providerData.map((provider, i) => {
                    return (
                        <div key={ i }>
                            <Link 
                            to={{pathname: `staff/${ provider.providerUrl }`,
                            state: provider}}>
                                <img src={ provider.photo } alt={ provider.name }/>
                                <h3>{ provider.name }</h3>
                            </Link>
                        </div>
                    )
                })}
                </div>
                <div className="np-container">
                {nurseData.map((nurse, i) => {
                    return (
                        <div key={ i }>
                            <Link 
                            to={{pathname: `staff/${ nurse.providerUrl }`,
                            state: nurse}}>
                                <img src={ nurse.photo } alt={ nurse.name }/>
                                <h3>{ nurse.name }</h3>
                            </Link>
                        </div>
                    )
                })}
                </div>
                <div className="cma-container">
                {cmaData.map((cma, i) => {
                    return (
                        <div key={ i }>
                            <Link 
                            to={{pathname: `staff/${ cma.providerUrl }`,
                            state: cma}}>
                                <img src={ cma.photo } alt={ cma.name }/>
                                <h3>{ cma.name }</h3>
                            </Link>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

