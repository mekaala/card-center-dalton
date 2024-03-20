import React, { useState } from 'react'
import conditionData from '../conditionData';
import { Link } from 'react-router-dom';
import symptomData from '../symptomData';
import arrhythmiaData from '../arrhythmiaData';
import heartBlockData from '../heartBlockData';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import '../styles/Conditions.css'

function SingleDisease() {
    const { state } = useLocation();
    return (
        <div className="condition-left">
            <div className="condition-name">
                <h1>{ state.offName }</h1>
            </div>
            <div className="condition-description">
                <p>{ state.intro }</p>
                <h3>Causes</h3>
                <p>{ state.causes }</p>
                <h3>Symptoms</h3>
                <p>{ state.symptoms }</p>
                <h3>Diagnosis</h3>
                <p>{ state.diagnosis }</p>
                <h3>Treatment</h3>
                <p>{ state.treatment }</p>
            </div>
        </div>
    )
}

function SingleArrhythmia() {
    const { state } = useLocation();
    return (
        <div className="arrhythmia-left">
            <div className="condition-name">
                <h1>{ state.offName }</h1>
            </div>
            <div className="condition-description">
                <p>{ state.arrhythmia }</p>
                <h3>About { state.name }</h3>
                <p>{ state.about }</p>
                <h3>Causes</h3>
                <p>{ state.causes }</p>
                <h3>Symptoms</h3>
                <p>{ state.symptoms }</p>
                <h3>Diagnosis</h3>
                <p>{ state.diagnosis }</p>
                <h3>Treatment</h3>
                <p>{ state.treatment }</p>
            </div>
        </div>
    )
}

function SingleHeartBlock() {
    const { state } = useLocation();
    return (
        <div className="heartblock-left">
            <div className="condition-name">
                <h1>{ state.offName }</h1>
            </div>
            <div className="condition-description">
                <p>{ state.heartBlock }</p>
                <h3>Causes</h3>
                <p>{ state.causes }</p>
                <h3>Symptoms</h3>
                <p>{ state.symptoms }</p>
                <h3>Diagnosis</h3>
                <p>{ state.diagnosis }</p>
                <h3>Treatment</h3>
                <p>{ state.treatment }</p>
            </div>
        </div>

    )
}

function SingleSymptom() {
    const { state } = useLocation();
    return (
        <div className="symptom-left">
        <h1>{ state.offName }</h1>
        <div className="symptom-description">
            <p>{ state.intro }</p>
            <p>{ state.pOne }</p>
            <p>{ state.pTwo }</p>
            <h2>{ state.opOne }</h2>
            <p>{ state.pThree }</p>
            <p>{ state.pFour }</p>
            <p>{ state.pFive }</p>
            <p>{ state.pSix }</p>
            <p>{ state.pSeven }</p>
            <p>{ state.pEight }</p>
            <p>{ state.pNine }</p>
            <p>{ state.pTen }</p>
            <p>{ state.pEleven }</p>
        </div>
    </div>
    )
}

function ConditionSide() {
    const [diseases, setDiseases] = useState(false);
    const [arrhythmias, setArrhythmias] = useState(false);
    const [heartBlock, setHeartBlock] = useState(false);
    const [symptoms, setSymptoms] = useState(false);

    const toggleDiseases = () => {
        setDiseases(!diseases);
        setArrhythmias(false);
        setHeartBlock(false);
        setSymptoms(false);
    }

    const toggleArrhythmias = () => {
        setDiseases(false);
        setArrhythmias(!arrhythmias);
        setHeartBlock(false);
        setSymptoms(false);
    }

    const toggleHeartBlock = () => {
        setDiseases(false);
        setArrhythmias(false);
        setHeartBlock(!heartBlock);
        setSymptoms(false);
    }

    const toggleSymptoms = () => {
        setDiseases(false);
        setArrhythmias(false);
        setHeartBlock(false);
        setSymptoms(!symptoms);
    }
    
    return (
        <div className='condition-side'>
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
            <div onClick={ toggleHeartBlock }>
                <button>
                    HEART BLOCK
                </button>
            </div>
            <div onClick={ toggleSymptoms }>
                <button>
                    SYMPTOMS
                </button>    
            </div>
            <div className='side-container'>
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
                { heartBlock && (
                    <div>
                        <h3><Link to="/conditions/heart-block">All Heart Block</Link></h3>
                        {heartBlockData.map((condition, i) => {
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

function SingleCondition() {
    const { state } = useLocation();
    const renderCurrentSelection = () => {
        if (state.arrhythmia) {
            return <SingleArrhythmia/>
        } else if (state.heartBlock) {
            return <SingleHeartBlock/>
        } else if (state.definition) {
            return <SingleSymptom/>
        } else {
            return <SingleDisease/>
        }
    }
  return (
    <div className='single-condition'>
        {renderCurrentSelection()}
        <ConditionSide/>
    </div>
  )
}

export default SingleCondition