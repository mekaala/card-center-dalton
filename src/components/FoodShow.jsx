import React, { Component } from 'react'

export default class FoodShow extends Component {
    render() {
        return (
            <div className="food-show">
                <div className="healthy-foods">
                    <h3>MEET YOUR BEST FRIEND</h3>
                    <h1>LIFE IS GOOD</h1>
                    <p>There are many things that affect food choices, for example, personal preferences, cultural backgrounds or philosophical choices such as vegetarian dietary patterns. Our doctor's have taken this into consideration in developing practical and realistic advice. Keeping these Guidelines in mind will help your choice of healthy foods.</p>
                </div>
                <div className="bad-foods">
                    <h3>MEET YOUR ENEMY</h3>
                    <h1>STAY AWAY</h1>
                    <p>When we eat fatty foods, these foods will tend to clog our arteries. When your arteries are clogged, this leads to heart disease and other complications that could have been avoided if a healthy diet filled with Omega 3's, fruits and vegies had been followed. You can change your lifestyle and make your life healthy and happy.</p>
                </div>
                <div className="red-band">
                    <h3>ARE YOU READY TO GET HEALTHY?</h3>
                    <button>GET STARTED NOW</button>
                </div>
            </div>
        )
    }
}
