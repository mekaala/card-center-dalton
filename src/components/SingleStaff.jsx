import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class SingleProvider extends Component {
    hideDoctor() {
        const doctor = document.getElementsByClassName("doctor-info");
        if (this.props.location.state.md != null) {
            return doctor;
        } else if (this.props.location.state.md = null) {
            return doctor.style.display ='none';
        }
    }

    hideNurse() {
        const nurse = document.getElementsByClassName("nurse-info");
        if (this.props.location.state.licensure != null) {
            return nurse;
        } else if (this.props.location.state.licensure = null) {
            return nurse.style.display ='none';
        }
    }

    render() {
        const provider = this.props.location.state;
        const board = provider.board;
        const expertise = provider.expertise;
        const hospital = provider.hospital;
        const nurse = this.props.location.state;
        const licensure = nurse.licensure;
        const education = nurse.education;
        return (
            <div className="single-staff">
                <Link to='/staff'>Return to Staff</Link>
                <div className="staff-name">
                    <h2>{ provider.name }</h2>
                </div>
                <div className="staff-description">
                    <div className="doctor-description">
                        <p>{ provider.description }</p>
                    </div>
                    { this.hideDoctor()
                    ?
                        <div className='doctor-info'>
                            <div className='doctor-about'>
                                <h2>Board Certifications</h2>
                                {board.map((board, j) => {
                                    return (
                                        <div key={ j }>
                                            <p>{ board }</p>
                                        </div>
                                    )
                                })}
                                <h2>Fellow</h2>
                                <p>{ provider.fellow }</p>
                                <h2>Areas of Expertise</h2>
                                {expertise.map((expertise, j) => {
                                    return (
                                        <div key={ j }>
                                            <p>{ expertise }</p>
                                        </div>
                                    )
                                })}                                
                                <h2>Hospital Affiliation</h2>
                                {hospital.map((hospital, j) => {
                                    return (
                                        <div key={ j }>
                                            <p>{ hospital }</p>
                                        </div>
                                    )
                                })}
                                <h2>Education</h2>
                                <p>{ provider.md }</p>
                                <p>{ provider.residency }</p>
                                <p>{ provider.fellowship }</p>
                            </div>
                            <div className='doctor-image'>
                                <img src={  provider.photo } alt={ provider.name }/>
                            </div>    
                        </div>
                        : null
                    }
                    { this.hideNurse()
                    ?
                        <div className='nurse-info'>
                            <div className='nurse-about'>
                                <h2>Certifications</h2>
                                {licensure.map((licensure, j) => {
                                    return (
                                        <div key={ j }>
                                            <p>{ licensure }</p>
                                        </div>
                                    )
                                })}       
                                <h2>Education</h2>
                                {education.map((education, j) => {
                                    return (
                                        <div key={ j }>
                                            <p>{ education }</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='nurse-image'>
                                <img src={  nurse.photo } alt={ nurse.name }/>
                            </div>
                        </div>
                        : null
                    }
                </div>
                
            </div>
        )
    }
}
