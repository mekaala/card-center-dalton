import React, { Component } from 'react'
import Activities from './Activities';
import HealthKey from './HealthKey';
import StressTestSplash from './StressTestSplash';
import FoodShow from './FoodShow';
import ShapeTag from './ShapeTag';
import { Link } from 'react-router-dom';
// import home from '../images/placeholder.jpg'

export default class SplashPage extends Component {
    render() {
        return (
            <div className="splashpage">
                <div className="image-page">
                    <div className="image-text">
                        <h2>GENTLE SCREENING</h2>
                        <h1>RELAXING</h1>
                        <Link to="/conditions"><button>GET STARTED NOW</button></Link>
                    </div>
                </div>
                <div className="about">
                    <div className="link-page">
                        <div className="hours">
                            <h1>HOURS</h1>
                            <h4>MONDAY - FRIDAY</h4>
                            <h4>9:00 AM - 5:00 PM</h4>
                        </div>
                        <div className="education">
                            <a><h1>EDUCATION</h1></a>
                        </div>
                        <div className="pulse">
                            <a><h1>THE PULSE</h1></a>
                        </div>
                    </div>
                    <h3>In our independently owned, state-of-the-art facility, our board-certified cardiologist and staff treat our patients like royalty. We take pride in the hands-on, compassionate care we offer to each and every patient, and we even offer bilingual interpretation.</h3>
                </div>
                <Activities/>
                <HealthKey/>
                <StressTestSplash/>
                <FoodShow/>
                <ShapeTag/>
            </div>
        )
    }
}
