import React, { Component } from 'react'
import dietData from '../dietData'
import exerciseData from '../exerciseData';
import { Link } from 'react-router-dom';

export default class SingleHealth extends Component {
    state =
    {
        showDiet: false,
        showExercise: false,
    }
    hideDiet() {
        const diet = document.getElementsByClassName("health-diet");
        if (this.props.location.state.goodFoods != null) {
            return diet;
        } else if (this.props.location.state.goodFoods = null) {
            return diet.style.display ='none';
        }
    }
    hideExercise() {
        const exercise = document.getElementsByClassName("health-exercise");
        if (this.props.location.state.workout != null) {
            return exercise;
        } else if (this.props.location.state.workout = null) {
            return exercise.style.display ='none';
        }
    }

    toggleDiet = () => {
        const newShowDiet = !this.state.showDiet;
        this.setState({
            showDiet: newShowDiet,
        });
    };
    toggleExercise = () => {
        const newShowExercise = !this.state.showExercise;
        this.setState({
            showExercise: newShowExercise,
        });
    };
    render() {
        const health = this.props.location.state;
        const goodFoods = health.goodFoods;
        const badFoods = health.badFoods;
        const workout = health.workout;
        return (
            <div className="single-health">
                <div className="health-info">
                    <h1>{ health.offName }</h1>
                    { this.hideDiet()
                    ?
                        <div className="health-diet">
                            <p>{ health.about }</p>
                            <div className="foods">
                                <div className="good-food">
                                    <h3>Recommended Foods</h3>
                                    {goodFoods.map((goodFoods, i) => {
                                        return (
                                            <div key={ i }>
                                                <p>{ goodFoods }</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="bad-food">
                                    <h3>Foods to Avoid</h3>
                                    {badFoods.map((badFoods, i) => {
                                        return (
                                            <div key={ i }>
                                                <p>{ badFoods }</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <h3>Healthy Tips</h3>
                            <p>{ health.tips }</p>
                            <p>Diet information provided by <a href={ health.source } target='_blank'>{ health.sourceName }</a>.</p>
                        </div>
                    : null
                    }
                    { this.hideExercise()
                    ?
                        <div className="health-exercise">
                            <p>Please discuss exercises with your physician before starting to avoid possible injury. They may give you advice on what activity is best for you, and what you can perform.</p>
                            <p>{ health.about }</p>
                            <h3>Exercise Examples</h3>
                            <div className="workout">
                                <div className="workout-steps">
                                    {workout.map((workout, i) => {
                                        return (
                                            <div key={ i }>
                                                <p>{ workout }</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <h3>Tips</h3>
                            <p>{ health.tips }</p>
                            <p>Exercise information provided by the <a href={ health.source } target='_blank'>{ health.sourceName }</a>.</p>
                        </div>
                    : null
                    }
                </div>
                <div className="health-side">
                    <h1><Link to={{pathname: `/health`,state: health}}>HEALTH</Link></h1>
                    <div onMouseEnter={ this.toggleDiet } onMouseLeave={ this.toggleDiet }>
                        <h2><button>
                            { this.state.showDiet
                                ? 'DIETS'
                                : 'DIETS'
                            }
                        </button></h2>
                        { this.state.showDiet
                            ?
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
                            : null
                        }
                    </div>
                    <div  onMouseEnter={ this.toggleExercise } onMouseLeave={ this.toggleExercise }>
                        <h2><button>
                            { this.state.showExercise
                                ? 'EXERCISES'
                                : 'EXERCISES'
                            }
                        </button></h2>
                        { this.state.showExercise
                            ?
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
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
