import React, { Component } from 'react'
import heartBlockData from '../heartBlockData'
import { Link } from 'react-router-dom'
import conditionData from '../conditionData';
import arrhythmiaData from '../arrhythmiaData';
import symptomData from '../symptomData';

export default class HeartBlock extends Component {
    state = {
        showDisease: false,
        showArrhythmia: false,
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
    toggleSymptoms = () => {
        const newShowSymptom = !this.state.showSymptom;
        this.setState({
            showSymptom: newShowSymptom,
        });
    };
    render() {
        const condition = this.props.location.state;
        return (
            <div className="condition-subpage">
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
                <div className="condition-right">
                    <h1><Link
                        to={{pathname: `/conditions`,
                        state: condition}}>
                        CONDITIONS
                    </Link></h1>
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
                                <h3><Link to="/conditions/heart-block">All DISEASES</Link></h3>
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
                        <h2><button onClick={ this.toggleArrhythmia }>
                            { this.state.showArrhythmia
                                ? 'COLLAPSE'
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