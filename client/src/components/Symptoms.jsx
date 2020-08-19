import React, { Component } from 'react'
import symptomData from '../symptomData'
import { Link } from 'react-router-dom'
import conditionData from '../conditionData';
import heartBlockData from '../heartBlockData';
import arrhythmiaData from '../arrhythmiaData';

export default class Symptoms extends Component {
    state = {
        showDisease: false,
        showArrythmia: false,
        showHeartBlock: false,
    }
    toggleDisease = () => {
        const newShowDisease = !this.state.showDisease;
        this.setState({
            showDisease: newShowDisease,
        });
    };
    toggleArrhythmia = () => {
        const newShowArrhythmia = !this.state.showArrythmia;
        this.setState({
            showArrythmia: newShowArrhythmia,
        });
    };
    toggleHeartBlock = () => {
        const newShowHeartBlock = !this.state.showHeartBlock;
        this.setState({
            showHeartBlock: newShowHeartBlock,
        });
    };
    render() {
        const condition = this.props.location.state;
        return (
            <div className="condition-subpage">
                <div className="condition-left">
                    <h1>SYMPTOMS</h1>
                    <p>
                        The heart is an essential organ that is responsible for pumping blood to every region of your body.
                        There are many conditions that can impair the heart's performance, and serious health issues can arise.
                        We at the Cardiology Center of Dalton want to give our patients detailed information on these conditions to learn not only about their characteristics and symptoms, but also the recommended treatments for the disease.
                    </p>
                    {symptomData.map((condition, i) => {
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
                    <div className="side-container" onMouseEnter={ this.toggleDisease } onMouseLeave={ this.toggleDisease }>
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
                    <div className="side-container" onMouseEnter={ this.toggleArrhythmia } onMouseLeave={ this.toggleArrhythmia }>
                        <h2><button>
                            { this.state.showArrythmia
                                ? 'COLLAPSE'
                                : 'ARRYTHMIAS'
                            }
                        </button></h2>
                        { this.state.showArrythmia
                            ?
                            <div>
                                <h3><Link to="/conditions/arrythmias">All Arrythmias</Link></h3>
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
                            :null
                        }
                    </div>
                    <div className="side-container" onMouseEnter={ this.toggleHeartBlock } onMouseLeave={ this.toggleHeartBlock }>
                        <h2><button>
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
                </div>
            </div>
        )
    }
}
