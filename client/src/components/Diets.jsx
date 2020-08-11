import React, { Component } from 'react'
import dietData from '../dietData'
import { Link } from 'react-router-dom'
import exerciseData from '../exerciseData'

export default class Diets extends Component {
    state =
    {
        showExercise: false,
    }
    toggleExercise = () => {
        const newShowExercise = !this.state.showExercise;
        this.setState({
            showExercise: newShowExercise,
        });
    };
    render() {
        const health = this.props.location.state;
        return (
            <div className="health-subpage">
                <div className="health-info">
                    <h1>DIETS</h1>
                    <div className="health-data">
                        {dietData.map((health, i) => {
                                return (
                                    <div key={ i }>
                                        <h2><Link
                                        to={{pathname: `/health/${ health.healthUrl }`,
                                        state: health}}>
                                            { health.name }
                                        </Link></h2>
                                        <p>{ health.info }</p>
                                        {/* <h3><Link className="read-more"
                                        to={{pathname: `/health/${ health.healthUrl }`,
                                        state: health}}>
                                            Read More
                                        </Link></h3> */}
                                    </div>
                                )
                            })}
                    </div>
                </div>
                <div className="health-side">
                    <h1><Link to={{pathname: `/health`,state: health}}>HEALTH</Link></h1>
                    <h2><button onClick={ this.toggleExercise }>
                            { this.state.showExercise
                                ? 'COLLAPSE'
                                : 'EXERCISES'
                            }
                        </button></h2>
                        { this.state.showExercise
                            ?
                                <div className="exercise-map">
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
        )
    }
}