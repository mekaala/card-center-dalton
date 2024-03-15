import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ConditionData from '../conditionData'
import arrhythmiaData from '../arrhythmiaData';
import heartBlockData from '../heartBlockData';
import symptomData from '../symptomData';

function DiseaseList() {
  return (
    <div className='disease-list'>
        <h1>DISEASES</h1>
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
  )
}

function ArrythmiaList() {
  return (
    <div className='arrythmia-list'>
        <h1>ARRYTHMIAS</h1>
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
    )
}

function HeartBlockList() {
  return (
    <div className='heart-block-list'>
        <h1>HEART BLOCKS</h1>
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
  )
}

function SymptomList() {
  return (
    <div className='symptom-list'>
        <h1>SYMPTOMS</h1>
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
        <DiseaseList/>
        <ArrythmiaList/>
        <HeartBlockList/>
        <SymptomList/>
    </div>
  )
}

export default Conditions