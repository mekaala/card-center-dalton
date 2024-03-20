import React from 'react'
import { Link } from 'react-router-dom';
import ConditionData from '../conditionData'
import arrhythmiaData from '../arrhythmiaData';
import heartBlockData from '../heartBlockData';
import symptomData from '../symptomData';
import '../styles/Conditions.css'

function DiseaseList() {
  return (
    <div className='disease-list'>
        <h1><Link to="/conditions/diseases">DISEASES</Link></h1>
        <div className='entries'>
            {ConditionData.map((condition, i) => {
                return (
                    <div key={ i }>
                        <h2><Link
                        to={{pathname: `/conditions/${ condition.conditionUrl }`,
                        state: condition}}>
                            { condition.name }
                        </Link></h2>
                        <p>{ condition.info }</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

function ArrhythmiaList() {
  return (
    <div className='arrhythmia-list'>
        <h1><Link to="/conditions/arrhythmias">ARRHYTHMIAS</Link></h1>
        <div className='entries'>
            {arrhythmiaData.map((condition, i) => {
                return (
                    <div key={ i }>
                        <h2><Link
                        to={{pathname: `/conditions/${ condition.conditionUrl }`,
                        state: condition}}>
                            { condition.name }
                        </Link></h2>
                        <p>{ condition.info }</p>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

function HeartBlockList() {
  return (
    <div className='heart-block-list'>
        <h1><Link to="/conditions/heart-block">HEART BLOCK</Link></h1>
        <div className='entries'>
            {heartBlockData.map((condition, i) => {
                return (
                    <div key={ i }>
                        <h2><Link
                        to={{pathname: `/conditions/${ condition.conditionUrl }`,
                        state: condition}}>
                            { condition.name }
                        </Link></h2>
                        <p>{ condition.info }</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

function SymptomList() {
  return (
    <div className='symptom-list'>
        <h1><Link to="/conditions/symptoms">SYMPTOMS</Link></h1>
        <div className='entries'>
            {symptomData.map((condition, i) => {
                return (
                    <div key={ i }>
                        <h2><Link
                        to={{pathname: `/conditions/${ condition.conditionUrl }`,
                        state: condition}}>
                            { condition.name }
                        </Link></h2>
                        <p>{ condition.info }</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

function Conditions() {
  return (
    <div className="conditions">
        <h1>CONDITIONS TREATED</h1>
        <div className="condition-container">
            <p>
                The heart is an essential organ that is responsible for pumping blood to every region of your body.
                There are many conditions that can impair the heart's performance, and serious health issues can arise.
                We at the Cardiology Center of Dalton want to give our patients detailed information on these conditions to learn not only about their characteristics and symptoms, but also the recommended treatments for the disease.
            </p>
        </div>
        <div className='condition-list'>
            <DiseaseList/>
            <ArrhythmiaList/>
            <HeartBlockList/>
            <SymptomList/>
        </div>
    </div>
  )
}

export default Conditions