import React, { Component } from 'react'
import ShapeTag from './ShapeTag';
import Dieting from './Dieting';

// export default class SplashPage extends Component {
//     render() {
//         return (
//             <div className="splashpage">
//                 <div className="image-page">
//                     <div className="image-text">
//                         <h1>CARDIOLOGY CENTER OF DALTON</h1>
//                     </div>
//                 </div>
//                 <div className="about">
//                     <h3>In our independently owned, state-of-the-art facility, our board-certified cardiologist and staff treat our patients like royalty. We take pride in the hands-on, compassionate care we offer to each and every patient, and we even offer bilingual interpretation.</h3>
//                 </div>
//                 <Dieting/>
//                 <ShapeTag/>
//             </div>
//         )
//     }
// }

// import React from 'react'

function SplashPage() {
    return (
        <div className="splashpage">
            <div className="image-page">
                
            </div>
            <div className="about">
                <h3>In our independently owned, state-of-the-art facility, our board-certified cardiologist and staff treat our patients like royalty. We take pride in the hands-on, compassionate care we offer to each and every patient, and we even offer bilingual interpretation.</h3>
            </div>
            <Dieting/>
            <ShapeTag/>
        </div>
    )
}

export default SplashPage