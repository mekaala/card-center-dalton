import React, { Component } from 'react'
import conditionData from '../conditionData';
import { Link } from 'react-router-dom';
import symptomData from '../symptomData';
import cardiomyopathyData from '../cardiomyopathyData';
import arrhythmiaData from '../arrhythmiaData';
import heartBlockData from '../heartBlockData';

export default class SingleCondition extends Component {
    state = {
        showDisease: false,
        showCardiomyopathy: false,
        showArrhythmia: false,
        showHeartBlock: false,
        showSymptom: false,
    }
    
    toggleDisease = () => {
        const newShowDisease = !this.state.showDisease;
        this.setState({
            showDisease: newShowDisease,
        });
    };
    toggleCardiomyopathy = () => {
        const newShowCardiomyopathy = !this.state.showCardiomyopathy;
        this.setState({
            showCardiomyopathy: newShowCardiomyopathy,
        });
    };
    toggleArrhythmia = () => {
        const newShowArrhythmia = !this.state.showArrhythmia;
        this.setState({
            showArrhythmia: newShowArrhythmia,
        });
    };
    toggleHeartBlock = () => {
        const newShowHeartBlock = !this.state.showHeartBlock;
        this.setState({
            showHeartBlock: newShowHeartBlock,
        });
    };
    toggleSymptoms = () => {
        const newShowSymptom = !this.state.showSymptom;
        this.setState({
            showSymptom: newShowSymptom,
        });
    };
    hideCondition() {
        const condition = document.getElementsByClassName("condition-left");
        if (this.props.location.state.intro != null) {
            return condition;
        } else if (this.props.location.state.intro = null) {
            return condition.style.display ='none';
        }
    }
    hideArrhythmia() {
        const arrhythmia = document.getElementsByClassName("arrhythmia-left");
        if (this.props.location.state.arrhythmia != null) {
            return arrhythmia;
        } else if (this.props.location.state.arrhythmia = null) {
            return arrhythmia.style.display ='none';
        }
    }
    hideHeartBlock() {
        const heartBlock = document.getElementsByClassName("heartblock-left");
        if (this.props.location.state.heartBlock != null) {
            return heartBlock;
        } else if (this.props.location.state.heartBlock = null) {
            return heartBlock.style.display ='none';
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
                { this.hideArrhythmia()
                ?
                <div className="arrhythmia-left">
                    <div className="condition-name">
                        <h1>{ condition.offName }</h1>
                    </div>
                    <div className="condition-description">
                        <p>{ condition.arrhythmia }</p>
                        <h3>About { condition.name }</h3>
                        <p>{ condition.about }</p>
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
                { this.hideHeartBlock()
                ?
                <div className="heartblock-left">
                    <div className="condition-name">
                        <h1>{ condition.offName }</h1>
                    </div>
                    <div className="condition-description">
                        <p>{ condition.heartBlock }</p>
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
                    <div className="side-container">
                        <h2><button onClick={ this.toggleDisease }>
                                { this.state.showDisease
                                    ? 'COLLAPSE'
                                    : 'DISEASES'
                                }
                            </button></h2>
                        { this.state.showDisease
                            ?
                            <div>
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
                            : null
                        }
                    </div>
                    <div className="side-container">
                        <h2><button onClick={ this.toggleCardiomyopathy }>
                            { this.state.showCardiomyopathy
                                ? 'COLLAPSE'
                                : 'CARDIOMYOPATHY'
                            }
                        </button></h2>
                        { this.state.showCardiomyopathy
                            ?
                            <div>
                            {cardiomyopathyData.map((condition, i) => {
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
                            :null
                        }
                    </div>
                    <div className="side-container">
                        <h2><button onClick={ this.toggleArrhythmia }>
                            { this.state.showArrhythmia
                                ? 'COLLAPSE'
                                : 'ARRHYTHMIAS'
                            }
                        </button></h2>
                        { this.state.showArrhythmia
                            ?
                            <div>
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
                            : null
                        }
                        </div>
                    <div className="side-container">
                        <h2><button onClick={ this.toggleHeartBlock }>
                            { this.state.showHeartBlock
                                ? 'COLLAPSE'
                                : 'HEART BLOCK'
                            }
                        </button></h2>
                        { this.state.showHeartBlock
                            ?
                            <div>
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
                            : null
                        }
                    </div>
                    <div className="side-container">
                        <h2><button onClick={ this.toggleSymptoms  }>
                            { this.state.showSymptom
                                ? 'COLLAPSE'
                                : 'SYMPTOMS'
                            }
                        </button></h2>
                        { this.state.showSymptom
                            ?
                            <div>                            
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
                            :null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
