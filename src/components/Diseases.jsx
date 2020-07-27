import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import conditionData from '../conditionData'
import arrhythmiaData from '../arrhythmiaData';
import heartBlockData from '../heartBlockData';
import symptomData from '../symptomData';

export default class Diseases extends Component {
    state = {
        showArrhythmia: false,
        showHeartBlock: false,
        showSymptom: false,
    }
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
        const condition = this.props.location.state;
        return (
            <div className="condition-subpage">
                <div className="condition-left">
                    <h1>DISEASES</h1>
                    {conditionData.map((condition, i) => {
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
                        <h2><button onClick={ this.toggleHeartBlock }>
                            { this.state.showHeartBlock
                                ? 'COLLAPSE'
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