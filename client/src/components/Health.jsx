import React from 'react'
import dietData from '../dietData'
import { Link } from 'react-router-dom';
import exerciseData from '../exerciseData';

function DietList() {
    return (
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
                    </div>
                )
            })}
        </div>
    )
}

function ExerciseList() {
    return (
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
                    </div>
                )
            })}
        </div>
    )
}

function Health() {
    return (
        <div className="health">
            <h1>STAY HEALTHY!</h1>
            <div className="health-container">
                <DietList/>
                <ExerciseList/>
            </div>
        </div>
    )
}

export default Health