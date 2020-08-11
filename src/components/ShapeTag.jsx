import React, { Component } from 'react';
import exerciseData from '../exerciseData';
import { Link } from 'react-router-dom';

export default class ShapeTag extends Component {
    render() {
        return (
            <div className="shape-tag">
                <h1>TIME TO GET IN SHAPE</h1>
                <p>Regular physical activity makes you less likely to have a heart attack or develop heart disease. It also helps control other heart disease risk factors like high blood pressure, high cholesterol, and being overweight. There are plenty of other benefits too. If you get regular physical activity, it’s likely you will live longer, feel more energetic, have stronger bones and muscles, and feel happier and more relaxed.</p>
                <div className="exercise-nav">
                    {exerciseData.map((health, i) => {
                        return (
                            <div className="exercise-box" key={ i }  id={ health.healthUrl }>
                                <div className="exercise-image">
                                    <Link to={{pathname: `/health/${ health.healthUrl }`, state: health}}><img src={health.image} alt={health.name}/></Link>
                                </div>
                                <hr/>
                                <h2><Link
                                to={{pathname: `/health/${ health.healthUrl }`,
                                state: health}}>
                                    { health.name }
                                </Link></h2>
                                <p>{ health.info }</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
