import React from 'react'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="contact">
        <h1>Cardiology Center of Dalton</h1>
        <div className="contact-info">
            <div className="hours">
                <h2>Hours of Operation</h2>
                <div className="operation">
                    <h4>
                        Monday - Thursday<br/>
                        9:00 am to 5:00 pm
                    </h4>
                    <h4>
                        Friday<br/>
                        9:00 am to 12:00 pm
                    </h4>
                </div>
            </div>
            <div className="address">
                <h2>Address</h2>
                <h4>
                    1411 Chattanooga Avenue<br/>
                    Dalton, Georgia 30710
                </h4>
            </div>
            <div className="phone">
                <h2>Phone Number</h2>
                <h4>706-272-0272</h4> 
            </div>
        </div>
    </div>
  )
}

export default Contact