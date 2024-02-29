import React, { Component } from 'react'

function Contact() {
  return (
    <div className="contact">
        <h1>Cardiology Center of Dalton</h1>
        <div className="contact-info">
            <div className="hours">
                <h2>Hours of Operation</h2>
                <h4>
                    Monday - Thursday<br/>
                    9:00 am to 5:00 pm
                    <br/>
                    Friday<br/>
                    9:00 am to 12:00 pm
                </h4>
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

// export default class Contact extends Component {
//     render() {
//         return (
//             <div className="contact">
//                 <h1>Cardiology Center of Dalton</h1>
//                 <div className="contact-info">
//                     <h2>Hours of Operation</h2>
//                     <h4>
//                         Monday - Thursday<br/>
//                         9:00 am to 5:00 pm
//                         <br/>
//                         Friday<br/>
//                         9:00 am to 12:00 pm
//                     </h4>
//                     <h2>Address</h2>
//                     <h4>
//                         1411 Chattanooga Avenue<br/>
//                         Dalton, Georgia 30710
//                     </h4>
//                     <h2>Phone Number</h2>
//                     <h4>706-272-0272</h4> 
//                 </div>
//             </div>
//         )
//     }
// }
