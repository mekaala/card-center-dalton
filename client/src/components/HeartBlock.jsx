import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import conditionData from '../conditionData'
import arrhythmiaData from '../arrhythmiaData';
import heartBlockData from '../heartBlockData';
import symptomData from '../symptomData';
import '../styles/Conditions.css'

function HeartBlockPage() {
    return (
        <div className="condition-left">
            <h1>HEART BLOCK</h1>
            <p>
                The heart is an essential organ that is responsible for pumping blood to every region of your body.
                There are many conditions that can impair the heart's performance, and serious health issues can arise.
                We at the Cardiology Center of Dalton want to give our patients detailed information on these conditions to learn not only about their characteristics and symptoms, but also the recommended treatments for the disease.
            </p>
            {heartBlockData.map((condition, i) => {
                return (
                    <div key={ i }>
                        <h2><Link
                        to={{pathname: `/conditions/${ condition.conditionUrl }`,
                        state: condition}}>
                            { condition.name }
                        </Link></h2>
                        <p>{ condition.info }</p>
                        <h3><Link className="read-more"
                        to={{pathname: `/conditions/${ condition.conditionUrl }`,
                        state: condition}}>
                            Read More
                        </Link></h3>
                    </div>
                )
            })}
        </div>
    )
}

function SideBar() {
    const [diseases, setDiseases] = useState(false);
    const [arrhythmias, setArrhythmias] = useState(false);
    const [symptoms, setSymptoms] = useState(false);

    const toggleDiseases = () => {
        setDiseases(!diseases);
        setArrhythmias(false);
        setSymptoms(false);
    }

    const toggleArrhythmias = () => {
        setDiseases(false);
        setArrhythmias(!arrhythmias);
        setSymptoms(false);
    }

    const toggleSymptoms = () => {
        setDiseases(false);
        setArrhythmias(false);
        setSymptoms(!symptoms);
    }

    return (
        <div className='condition-right'>
            <h1><Link to={{pathname: `/conditions`}}>CONDITIONS</Link></h1>
            <div onClick={ toggleDiseases }>
                <button>
                    DISEASES
                </button>    
            </div>
            <div onClick={ toggleArrhythmias }>
                <button>
                    ARRHYTHMIAS
                </button>
            </div>
            <div onClick={ toggleSymptoms }>
                <button>
                    SYMPTOMS
                </button>    
            </div>
            <div className="side-container">
                { diseases && (
                    <div>
                    <h3><Link to="/conditions/diseases">All Diseases</Link></h3>
                    {conditionData.map((condition, i) => {
                        return (
                            <div key={ i }>
                                <h3><Link
                                to={{pathname: `/conditions/${ condition.conditionUrl }`,
                                state: condition}}>
                                    { condition.name }
                                </Link></h3>
                            </div>
                        )
                    })}
                    </div>
                )}
            </div>
            <div className="side-container">
                { arrhythmias && (
                    <div>
                    <h3><Link to="/conditions/arrhythmias">All Arrhythmias</Link></h3>
                    {arrhythmiaData.map((condition, i) => {
                        return (
                            <div key={ i }>
                                <h3><Link
                                to={{pathname: `/conditions/${ condition.conditionUrl }`,
                                state: condition}}>
                                    { condition.name }
                                </Link></h3>
                            </div>
                        )
                    })}
                    </div>
                )}
            </div>
            <div className="side-container">
                { symptoms && (
                    <div>
                        <h3><Link to="/conditions/symptoms">All Symptoms</Link></h3>
                        {symptomData.map((condition, i) => {
                            return (
                                <div key={ i }>
                                    <h3><Link
                                    to={{pathname: `/conditions/${ condition.conditionUrl }`,
                                    state: condition}}>
                                        { condition.name }
                                    </Link></h3>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        
        </div>
    )
}

function HeartBlock() {
  return (
    <div className='condition-subpage'>
        <HeartBlockPage/>
        <SideBar/>
    </div>
  )
}

export default HeartBlock