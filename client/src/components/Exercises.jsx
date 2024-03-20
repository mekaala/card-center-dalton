import React, { useState } from 'react'
import exerciseData from '../exerciseData';
import dietData from '../dietData';
import { Link } from 'react-router-dom';
import '../styles/Health.css'

function ExerciseList() {
  return (
    <div className="health-info">
    <h1>EXERCISES</h1>
        <div className="health-data">
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
    </div>
  )
}

function DietColumn() {
    const [diets, setDiets] = useState(false);
    const toggleDiet = () => {
        setDiets(!diets);
    }
  return (
    <div className="health-side">
        <h1><Link to={{pathname: `/health`}}>HEALTH</Link></h1>
        <div onClick={ toggleDiet }>
            <button>
                DIETS
            </button>
            { diets && (
                    <div className="diet-map">
                    <h3><Link to="/health/diets">All Diets</Link></h3>
                    {dietData.map((health, i) => {
                        return (
                            <div key={ i }>
                                <h3>
                                    <Link to={{pathname: `${ health.healthUrl }`, state: health}}>
                                        { health.name }
                                    </Link>
                                </h3>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    </div>
    )
}

function Exercises() {
    return (
        <div className="health-subpage">
            <ExerciseList/>
            <DietColumn/>
        </div>
    )
}

export default Exercises