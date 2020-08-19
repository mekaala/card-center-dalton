import React, { Component } from 'react'
import exerciseData from '../exerciseData';
import dietData from '../dietData';
import { Link } from 'react-router-dom';

export default class Exercises extends Component {
    state =
    {
        showDiet: false,
    }
    toggleDiet = () => {
        const newShowDiet = !this.state.showDiet;
        this.setState({
            showDiet: newShowDiet,
        });
    };
    render() {
        const health = this.props.location.state;
        return (
            <div className="health-subpage">
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
                    <div onMouseEnter={ this.toggleDiet } onMouseLeave={ this.toggleDiet }>
                        <h2><button>
                            { this.state.showExercise
                                ? 'COLLAPSE'
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
                </div>
            </div>
        )
    }
}