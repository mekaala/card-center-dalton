import React from 'react'
import ShapeTag from './ShapeTag';
import Dieting from './Dieting';
import "../styles/SplashPage.css"
import office from '../images/office.JPG';

function SplashPage() {
    return (
        <div className="splashpage">
            <img className="image-page" src={office} alt='office image'/>
            <div className="about">
                <h3>In our independently owned, state-of-the-art facility, our board-certified cardiologist and staff treat our patients like royalty. We take pride in the hands-on, compassionate care we offer to each and every patient, and we even offer bilingual interpretation.</h3>
            </div>
            <Dieting/>
            <ShapeTag/>
        </div>
    )
}

export default SplashPage