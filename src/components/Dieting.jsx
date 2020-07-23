import React, { Component } from 'react'
import dietData from '../dietData'
import { Link } from 'react-router-dom'


export default class Dieting extends Component {
    render() {
        return (
            <div className="dieting">
                <h1>DIETING</h1>
                <h2>Develop a Nutritional Program</h2>
                <p>Eating healthy is perhaps the best key to a healthy lifestyle. Eating the proper amount of fiber with a healthy mixture of Omega 3 foods, nuts, fruit and salad's is a good start to any exercising program.</p>
                <div className="diet-nav">
                    {dietData.map((health, i) => {
                        return (
                            <div className="diet-box" key={ i }>
                                <div className="diet-image">
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
