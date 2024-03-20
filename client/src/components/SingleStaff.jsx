import React from 'react'
import '../styles/Staff.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function Doctor() {
    const { state } = useLocation();
  return (
    <div>
        <div className="staff-name">
            <h2>{ state.name }</h2>
        </div>
        <div className="doctor-description">
            <p>{ state.description }</p>
        </div>
        <div className='doctor-info'>
        <div className='doctor-about'>
            <h2>Board Certifications</h2>
            {state.board.map((board, j) => {
                return (
                    <div key={ j }>
                        <p>{ board }</p>
                    </div>
                )
            })}
            <h2>Fellow</h2>
            <p>{ state.fellow }</p>
            <h2>Areas of Expertise</h2>
            {state.expertise.map((expertise, j) => {
                return (
                    <div key={ j }>
                        <p>{ expertise }</p>
                    </div>
                )
            })}                                
            <h2>Hospital Affiliation</h2>
            {state.hospital.map((hospital, j) => {
                return (
                    <div key={ j }>
                        <p>{ hospital }</p>
                    </div>
                )
            })}
            <h2>Education</h2>
            <p>{ state.md }</p>
            <p>{ state.residency }</p>
            <p>{ state.fellowship }</p>
        </div>
        <div className='doctor-image'>
            <img src={  state.photo } alt={ state.name }/>
        </div>    
    </div>
    </div>
  )
}

function Nurse() {
    const { state } = useLocation();
  return (
    <div>
        <div className="staff-name">
             <h2>{ state.name }</h2>
        </div>
        <div className="doctor-description">
            <p>{ state.bio }</p>
        </div>
        <div className='nurse-info'>
            <div className='nurse-about'>
                <h2>Certifications</h2>
                {state.licensure.map((licensure, j) => {
                    return (
                        <div key={ j }>
                            <p>{ licensure }</p>
                        </div>
                    )
                })}       
                <h2>Education</h2>
                {state.education.map((education, j) => {
                    return (
                        <div key={ j }>
                            <p>{ education }</p>
                        </div>
                    )
                })}
            </div>
            <div className='nurse-image'>
                <img src={  state.photo } alt={ state.name }/>
            </div>
        </div>
    </div>
  )
}
function SingleStaff() {
    const { state } = useLocation();
    return state.md
        ?
        <div className='single-staff'>
            <Doctor/>
        </div>
        :
        <div className='single-staff'>
            <Nurse/>
        </div>
}

export default SingleStaff