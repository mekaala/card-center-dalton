import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HealthKey extends Component {
    render() {
        return (
            <div className="health-key">
                <div className="left">
                    <h1>YOUR KEY TO HEALTH</h1>
                    <p>Exercise intensity refers to how hard your body is working during physical activity. Your health and fitness goals, as well as your current level of fitness, will determine your ideal exercise intensity. Typically, exercise intensity is described as low, moderate, or vigorous.</p>
                    <p>The human body has an in-built system to measure its exercise intensity – the heart. Your heart rate will increase in proportion to the intensity of your exercise.</p>
                    <Link to="/health"><button>WHAT ARE YOU WAITING FOR?</button></Link>
                </div>
                <div className="right">
                    <ul>
                        <li className="success">
                            <div className="success-info">
                                <h2>Meet Our Team to Determine Your Exercise Level</h2>
                                <p>With any exercise program, you should consult your doctor to help determine the exercise level. With his help, you can start your path to a healthy lifestyle.</p>
                            </div>
                        </li>
                        <li className="success">
                            <div className="success-info">
                                <h2>Develop an Exercise and Nutritional Program</h2>
                                <p>Eating healthy is perhaps the best key to a healthy lifestyle. Eating the proper amount of fiber with a healthy mixture of Omega 3 foods, nuts, fruit and salad's is a good start to any exercising program.</p>
                            </div>
                        </li>
                        <li className="success-3">
                            <div className="success-info">
                                <h2>Review Your Workout Program Once A Month</h2>
                                <p>As you progress with your exercising program, you levels of stamina will increase. Once a month, it is important evaluate your progress and make adjustments to help you reach your goals of a healthy lifestyle.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
