import React from 'react'
import providerData from '../providerData'
import { Link } from 'react-router-dom';
import nurseData from '../nurseData';
import staffPhoto from '../Staff/staff-photo.jpg'

function DrAhmad() {
    return (
        <div className="provider-container">
            {providerData.map((provider, i) => {
                return (
                    <div key={ i }>
                        <Link 
                        to={{pathname: `${ provider.url }`,
                        state: provider}}>
                            <img src={ provider.photo } alt={ provider.name }/>
                        </Link>
                        <h3>
                            <Link to={{pathname: `${ provider.url }`, state: provider}}>
                                { provider.name }
                            </Link>
                        </h3>
                    </div>
                )
            })}
        </div>
    )
}

function Nurse() {
    return (
        <div className="np-container">
        {nurseData.map((nurse, i) => {
            return (
                <div key={ i }>
                    <Link 
                    to={{pathname: `${ nurse.url }`,
                    state: nurse}}>
                        <img src={ nurse.photo } alt={ nurse.name }/>
                    </Link>
                    <h3>
                        <Link to={{pathname: `${ nurse.url }`, state: nurse}}>
                            { nurse.name }
                        </Link>
                    </h3>
                </div>
            )
        })}
        </div>
    )
}

function Staff() {
  return (
    <div className="staff">
        <h1>Meet the Team</h1>
        <div className='doctor'>
            <DrAhmad/>
            <Nurse/>
        </div>
        <div className='staff-photo'>
            <img src={ staffPhoto } alt='staff photo'/>
        </div>
    </div>

  )
}

export default Staff