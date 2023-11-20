import React, { Component } from 'react'

export default class Covid extends Component {
    render() {
        return (
            <div className="covid">
                <h1>INFORMATION ABOUT <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html" target="_blank">CORONAVIRUS DISEASE (COVID-19)</a></h1>
                <p>
                    The Cardiology Center of Dalton prioritizes the health of our patients and staff above all else.
                    Our office is still open at normal hours to provide our services.
                    To prevent the spread of COVID-19, patients must wear face masks or coverings at our office.
                    Covering your face will help yourself and your loved ones, as well as our staff and their families stay safe.<br/>
                    Symptoms of COVID-19 include fever or chills, cough, shortness of breath or difficulty breathing, fatigue, muscle or body aches, headache, loss of taste or smell, sore throat, congestion or runny nose, nausea or vomiting, and diarrhea. Symptoms may appear 2-14 days after exposure to the virus, and they not appear in an infected individual (asymptomatic), or they can range from mild to severe.
                </p>
            </div>
        )
    }
}
