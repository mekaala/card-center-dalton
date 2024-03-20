import React, { useState } from 'react'
import dietData from '../dietData'
import { Link } from 'react-router-dom'
import exerciseData from '../exerciseData'
import '../styles/Health.css'

function DietList() {
    return (
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
                          </div>
                      )
                  })}
          </div>
      </div>
    )
  }
  
  function ExerciseColumn() {
      const [exercises, setExercises] = useState(false);
      const toggleExercise = () => {
          setExercises(!exercises);
      }
    return (
      <div className="health-side">
          <h1><Link to={{pathname: `/health`}}>HEALTH</Link></h1>
          <div onClick={ toggleExercise }>
              <button>
                  EXERCISES
              </button>
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
      </div>
      )
  }
  
  function Diets() {
      return (
          <div className="health-subpage">
              <DietList/>
              <ExerciseColumn/>
          </div>
      )
  }
  
  export default Diets