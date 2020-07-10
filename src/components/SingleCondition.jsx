import React, { Component } from 'react'
import conditionData from '../conditionData';
import { Link } from 'react-router-dom';
import symptomData from '../symptomData';
import cardiomyopathyData from '../cardiomyopathyData';
import arrhythmiaData from '../arrhythmiaData';
import heartBlockData from '../heartBlockData';

export default class SingleCondition extends Component {
    hideCondition() {
        const condition = document.getElementsByClassName("condition-left");
        if (this.props.location.state.causes != null) {
            return condition;
        } else if (this.props.location.state.causes = null) {
            return condition.style.display ='none';
        }
    }
    hideSymptom() {
        const symptom = document.getElementsByClassName("symptom-left");
        if (this.props.location.state.pOne != null) {
            return symptom;
        } else if (this.props.location.state.pOne = null) {
            return symptom.style.display ='none';
        }
    }
    render() {
        const condition = this.props.location.state;
        return (
            <div className="single-condition">
                { this.hideCondition()
                ?
                <div className="condition-left">
                    <div className="condition-name">
                        <h1>{ condition.offName }</h1>
                    </div>
                    <div className="condition-description">
                        <p>{ condition.intro }</p>
                        <h3>Causes</h3>
                        <p>{ condition.causes }</p>
                        <h3>Symptoms</h3>
                        <p>{ condition.symptoms }</p>
                        <h3>Diagnosis</h3>
                        <p>{ condition.diagnosis }</p>
                        <h3>Treatment</h3>
                        <p>{ condition.treatment }</p>
                    </div>
                </div>
                : null
                }
                { this.hideSymptom()
                ?
                <div className="symptom-left">
                    <h1>{ condition.offName }</h1>
                    <div className="symptom-description">
                        <p>{ condition.intro }</p>
                        <p>{ condition.pOne }</p>
                        <p>{ condition.pTwo }</p>
                        <h2>{ condition.opOne }</h2>
                        <p>{ condition.pThree }</p>
                        <p>{ condition.pFour }</p>
                        <p>{ condition.pFive }</p>
                        <p>{ condition.pSix }</p>
                        <p>{ condition.pSeven }</p>
                        <p>{ condition.pEight }</p>
                        <p>{ condition.pNine }</p>
                        <p>{ condition.pTen }</p>
                        <p>{ condition.pEleven }</p>
                    </div>
                </div>
                : null
                }
                <div className="condition-right">
                    <div className="condition-list">
                        <h2>Conditions</h2>
                        <div className="condition-map">
                            {conditionData.map((condition, i) => {
                                    return (
                                        <div key={ i }>
                                            <h3><Link
                                            to={{pathname: `${ condition.conditionUrl }`,
                                            state: condition}}>
                                                { condition.name }
                                            </Link></h3>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                    <div className="condition-list">
                        <h2>Cardiomyopathy</h2>
                        <div className="condition-map">
                            {cardiomyopathyData.map((condition, i) => {
                                    return (
                                        <div key={ i }>
                                            <h3><Link
                                            to={{pathname: `${ condition.conditionUrl }`,
                                            state: condition}}>
                                                { condition.name }
                                            </Link></h3>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                    <div className="condition-list">
                        <h2>Arrhythmias</h2>
                        <div className="condition-map">
                            {arrhythmiaData.map((condition, i) => {
                                    return (
                                        <div key={ i }>
                                            <h3><Link
                                            to={{pathname: `${ condition.conditionUrl }`,
                                            state: condition}}>
                                                { condition.name }
                                            </Link></h3>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                    <div className="condition-list">
                        <h2>Heart Block</h2>
                        <div className="condition-map">
                            {heartBlockData.map((condition, i) => {
                                    return (
                                        <div key={ i }>
                                            <h3><Link
                                            to={{pathname: `${ condition.conditionUrl }`,
                                            state: condition}}>
                                                { condition.name }
                                            </Link></h3>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                    <div className="condition-list">
                        <h2>Symptoms</h2>
                        <div className="condition-map">
                            {symptomData.map((condition, i) => {
                                    return (
                                        <div key={ i }>
                                            <h3><Link
                                            to={{pathname: `${ condition.conditionUrl }`,
                                            state: condition}}>
                                                { condition.name }
                                            </Link></h3>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
