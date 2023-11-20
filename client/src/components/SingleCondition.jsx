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
                    <h1><Link
                        to={{pathname: `/conditions`,
                        state: condition}}>
                        CONDITIONS
                    </Link></h1>
                    <div className="side-container" onClick={ this.toggleDisease }>
                        <h2><button>
                            { this.state.showDisease
                                ? 'DISEASES'
                                : 'DISEASES'
                            }
                            </button></h2>
                        { this.state.showDisease
                            ?
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
                            : null
                        }
                    </div>
                    <div className="side-container" onClick={ this.toggleArrhythmia }>
                        <h2><button >
                            { this.state.showArrhythmia
                                ? 'ARRHYTHMIAS'
                                : 'ARRHYTHMIAS'
                            }
                        </button></h2>
                        { this.state.showArrhythmia
                            ?
                            <div>
                            <h3><Link to="/conditions/arrythmias">All Arrhythmias</Link></h3>
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
                    <div className="side-container" onClick={ this.toggleHeartBlock }>
                        <h2><button>
                            { this.state.showHeartBlock
                                ? 'HEART BLOCK'
                                : 'HEART BLOCK'
                            }
                        </button></h2>
                        { this.state.showHeartBlock
                            ?
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
                            : null
                        }
                    </div>
                    <div className="side-container" onClick={ this.toggleSymptoms  }>
                        <h2><button>
                            { this.state.showSymptom
                                ? 'SYMPTOMS'
                                : 'SYMPTOMS'
                            }
                        </button></h2>
                        { this.state.showSymptom
                            ?
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
                            :null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
