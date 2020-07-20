import React, { Component } from 'react'
import dietData from '../dietData'
import { Link } from 'react-router-dom';
import exerciseData from '../exerciseData';

export default class Health extends Component {
    render() {
        return (
            <div className="health">
                <h1>STAY HEALTHY!</h1>
                <div className="health-container">
                    <div className="diet-list">
                        <h1>DIETS</h1>
                        {dietData.map((health, i) => {
                            return (
                                <div key={ i }>
                                    <h2><Link
                                    to={{pathname: `/health/${ health.healthUrl }`,
                                    state: health}}>
                                        { health.name }
                                    </Link></h2>
                                    <p>{ health.info }</p>
                                    <h3><Link className="read-more"
                                    to={{pathname: `/health/${ health.healthUrl }`,
                                    state: health}}>
                                        Read More
                                    </Link></h3>
                                </div>
                            )
                        })}
                    </div>
                    <div className="exercise-list">
                        <h1>EXERCISES</h1>
                        {exerciseData.map((health, i) => {
                            return (
                                <div key={ i }>
                                    <h2><Link
                                    to={{pathname: `/health/${ health.healthUrl }`,
                                    state: health}}>
                                        { health.name }
                                    </Link></h2>
                                    <p>{ health.info }</p>
                                    <h3><Link className="read-more"
                                    to={{pathname: `/health/${ health.healthUrl }`,
                                    state: health}}>
                                        Read More
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
