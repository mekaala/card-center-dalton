import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ConditionData from '../conditionData'
import arrhythmiaData from '../arrhythmiaData';
import heartBlockData from '../heartBlockData';
import symptomData from '../symptomData';

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
                    <p>
                        The heart is an essential organ that is responsible for pumping blood to every region of your body.
                        There are many conditions that can impair the heart's performance, and serious health issues can arise.
                        We at the Cardiology Center of Dalton want to give our patients detailed information on these conditions to learn not only about their characteristics and symptoms, but also the recommended treatments for the disease.
                    </p>
                    <div>
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
                                    <h3><Link className="read-more"
                                    to={{pathname: `/conditions/${ condition.conditionUrl }`,
                                    state: condition}}>
                                        Read More
                                    </Link></h3>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <h1>ARRYTHMIA</h1>
                        {arrhythmiaData.map((condition, i) => {
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
                    <div>
                        <h1>HEART BLOCK</h1>
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
                    <div>
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
                                    <h3><Link className="read-more"
                                    to={{pathname: `/conditions/${ condition.conditionUrl }`,
                                    state: condition}}>
                                        Read More
                                    </Link></h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
