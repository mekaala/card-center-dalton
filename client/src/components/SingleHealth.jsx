import React, { useState } from 'react'
import dietData from '../dietData'
import exerciseData from '../exerciseData';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import '../styles/Health.css'

function SingleDiet() {
    const { state } = useLocation();
    return (
        <div className='health-info'>
            <h1>{ state.offName }</h1>
            <div className="health-diet">
                <p>{ state.about }</p>
                <div className="foods">
                    <div className="good-food">
                        <h3>Recommended Foods</h3>
                        {state.goodFoods.map((goodFoods, i) => {
                            return (
                                <div key={ i }>
                                    <p>{ goodFoods }</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="bad-food">
                        <h3>Foods to Avoid</h3>
                        {state.badFoods.map((badFoods, i) => {
                            return (
                                <div key={ i }>
                                    <p>{ badFoods }</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <h3>Healthy Tips</h3>
                <p>{ state.tips }</p>
                <p>Diet information provided by <a href={ state.source } target='_blank'>{ state.sourceName }</a>.</p>
            </div>
        </div>
    )
}

function SingleExercise() {
    const { state } = useLocation();
    return (
        <div className='health-info'>
            <h1>{ state.offName }</h1>
            <div className="health-exercise">
                <p>Please discuss exercises with your physician before starting to avoid possible injury. They may give you advice on what activity is best for you, and what you can perform.</p>
                <p>{ state.about }</p>
                <h3>Exercise Examples</h3>
                <div className="workout">
                    <div className="workout-steps">
                        {state.workout.map((workout, i) => {
                            return (
                                <div key={ i }>
                                    <p>{ workout }</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <h3>Tips</h3>
                <p>{ state.tips }</p>
                <p>Exercise information provided by the <a href={ state.source } target='_blank'>{ state.sourceName }</a>.</p>
            </div>
        </div>
    )
}

function SideBar() {
    const [diets, setDiets] = useState(false);
    const [exercises, setExercises] = useState(false);

    const toggleDiets = () => {
        setDiets(!diets);
        setExercises(false);
    }

    const toggleExercises = () => {
        setDiets(false);
        setExercises(true);
    }

    return (
        <div className='health-side'>
            <Link to="/health"><h1>HEALTH</h1></Link>
            <div onClick={ toggleDiets }>
                <button>
                    DIETS
                </button>
            </div>
            <div onClick={ toggleExercises }>
                <button>
                    EXERCISES
                </button>    
            </div>
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
            { exercises && (
                <div className="exercise-map">
                    <h3><Link to="/health/exercises">All Exercises</Link></h3>
                    {exerciseData.map((health, i) => {
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
    )
}

function SingleHealth() {
    const { state } = useLocation();

    const renderCurrentSelection = () => {
        if (state.goodFoods) {
            return <SingleDiet/>
        } else if (state.workout) {
            return <SingleExercise/>
        }
    }

    return (
        <div className='single-health'>
            {renderCurrentSelection()}
            <SideBar/>
        </div>
    )
}

export default SingleHealth