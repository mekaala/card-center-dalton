import React from 'react'

function Activities() {
    return (
        <div className="activities">
            <div className="activity-list">
                <div className="cardio">
                    <div className="text-box">
                        <h2>CARDIO</h2>
                        <hr/>
                        <h1>Get Up</h1>
                        <p className="tag">AND MOVE</p>
                        <p>As we get older, our bodies need to be treated with a little TLC. A little cardio activity will help your heart stay healthy.</p>
                        <p>Monday, Wednesday, Friday</p>
                        <p>Choose a convenient time</p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className="strength">
                    <div className="text-box">
                        <h2>STRENGTH</h2>
                        <hr/>
                        <h1>Bend</h1>
                        <p className="tag">LIVE BETTER</p>
                        <p>Stretching your muscles prior to exercising will help maintain a healthy balance of activity and health.</p>
                        <p>Tuesday, Thursday, Saturday</p>
                        <p>Choose a convenient time</p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className="forward">
                    <div className="text-box">
                        <h2>FORWARD</h2>
                        <hr/>
                        <h1>Curvy</h1>
                        <p className="tag">OR STRAIGHT</p>
                        <p>Keep moving to keep your blood circulation healthy and flowing throughout your body. Your heart will be happy and so will you.</p>
                        <p>Monday through Friday</p>
                        <p>Choose a convenient time</p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className="diet">
                    <div className="text-box">
                        <h2>DIET</h2>
                        <hr/>
                        <h1>You Are</h1>
                        <p className="tag">WHAT YOU EAT</p>
                        <p>Have a healthy diet plan to ensure your heart maintains an optimal shape by eating natural foods we grow.</p>
                        <p>Every day of the week</p>
                        <p>Forever</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activities