import React from 'react'
import dietData from '../dietData'
import { Link } from 'react-router-dom';
import exerciseData from '../exerciseData';
import '../styles/Health.css'

function DietList() {
    return (
        <div className="diet-list">
            <Link to="/health/diets">
                <h1>DIETS</h1>
            </Link>
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
            <Link to="/health/exercises">
                <h1>EXERCISES</h1>
            </Link>
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