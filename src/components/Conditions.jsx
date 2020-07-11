import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ConditionData from '../conditionData'
import symptomData from '../symptomData';
import arrhythmiaData from '../arrhythmiaData';
import heartBlockData from '../heartBlockData';
import cardiomyopathyData from '../cardiomyopathyData';

export default class Conditions extends Component {
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
    render() {
        return (
            <div className="conditions">
                <h1>CONDITIONS TREATED</h1>
                <div className="condition-container">
                    <h1><button onClick={ this.toggleDisease }>
                            { this.state.showDisease
                                ? 'COLLAPSE'
                                : 'DISEASES'
                            }
                        </button></h1>
                    { this.state.showDisease
                        ?
                        <div>
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
                        : null
                    }
                </div>
                <div className="myopathy-container">
                    <h1><button onClick={ this.toggleCardiomyopathy }>
                        { this.state.showCardiomyopathy
                            ? 'COLLAPSE'
                            : 'CARDIOMYOPATHY'
                        }
                    </button></h1>
                    { this.state.showCardiomyopathy
                        ?
                        <div>
                        {cardiomyopathyData.map((condition, i) => {
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
                        :null
                    }
                </div>
                <div className="arrhythmia-container">
                    <h1><button onClick={ this.toggleArrhythmia }>
                        { this.state.showArrhythmia
                            ? 'COLLAPSE'
                            : 'ARRHYTHMIAS'
                        }
                    </button></h1>
                    { this.state.showArrhythmia
                        ?
                        <div>
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
                        : null
                    }
                    </div>
                <div className="block-container">
                    <h1><button onClick={ this.toggleHeartBlock }>
                        { this.state.showHeartBlock
                            ? 'COLLAPSE'
                            : 'HEART BLOCK'
                        }
                    </button></h1>
                    { this.state.showHeartBlock
                        ?
                        <div>
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
                        : null
                    }
                </div>
                <div className="symptom-container">
                    <h1><button onClick={ this.toggleSymptoms  }>
                        { this.state.showSymptom
                            ? 'COLLAPSE'
                            : 'SYMPTOMS'
                        }
                    </button></h1>
                    { this.state.showSymptom
                        ?
                        <div>                            
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
                        :null
                    }
                </div>
            </div>
        )
    }
}
