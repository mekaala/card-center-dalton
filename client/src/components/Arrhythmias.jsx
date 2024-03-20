import React, { useState } from 'react'
import arrhythmiaData from '../arrhythmiaData'
import { Link } from 'react-router-dom'
import conditionData from '../conditionData';
import heartBlockData from '../heartBlockData';
import symptomData from '../symptomData';
import '../styles/Conditions.css'

function ArrhythmiaPage() {
    return (
        <div className="condition-left">
            <h1>ARRHYTHMIAS</h1>
            <p>
                The heart is an essential organ that is responsible for pumping blood to every region of your body.
                There are many conditions that can impair the heart's performance, and serious health issues can arise.
                We at the Cardiology Center of Dalton want to give our patients detailed information on these conditions to learn not only about their characteristics and symptoms, but also the recommended treatments for the disease.
            </p>
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
    )
}

function SideBar() {
    const [diseases, setDiseases] = useState(false);
    const [heartBlock, setHeartBlock] = useState(false);
    const [symptoms, setSymptoms] = useState(false);

    const toggleDiseases = () => {
        setDiseases(!diseases);
        setHeartBlock(false);
        setSymptoms(false);
    }

    const toggleHeartBlock = () => {
        setDiseases(false);
        setHeartBlock(!heartBlock);
        setSymptoms(false);
    }

    const toggleSymptoms = () => {
        setDiseases(false);
        setHeartBlock(false);
        setSymptoms(!symptoms);
    }

    return (
        <div className='condition-right'>
            <h1><Link to={{pathname: `/conditions`}}>CONDITIONS</Link></h1>
            <div onClick={ toggleDiseases }>
                <button>
                    DISEASES
                </button>    
            </div>
            <div onClick={ toggleHeartBlock }>
                <button>
                    HEART BLOCK
                </button>
            </div>
            <div onClick={ toggleSymptoms }>
                <button>
                    SYMPTOMS
                </button>    
            </div>
            <div className="side-container">
                { diseases && (
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
                )}
            </div>
            <div className="side-container">
                { heartBlock && (
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
                )}
            </div>
            <div className="side-container">
                { symptoms && (
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
                )}
            </div>
        
        </div>
    )
}

// function DiseaseButton() {
//     const [diseases, setDiseases] = useState(false);
//     function toggleDisease() {
//         setDiseases(!diseases);
//     }
//     return (
//         <div className="side-container" onClick={ toggleDisease }>
//             <h2><button>
//                 DISEASES
//             </button></h2>
//             { diseases && (
//                 <div>
//                     <h3><Link to="/conditions/diseases">All Diseases</Link></h3>
//                     {conditionData.map((condition, i) => {
//                         return (
//                             <div key={ i }>
//                                 <h3><Link
//                                 to={{pathname: `/conditions/${ condition.conditionUrl }`,
//                                 state: condition}}>
//                                     { condition.name }
//                                 </Link></h3>
//                             </div>
//                         )
//                     })}
//                 </div>
//             )}
//         </div>
//     )
// }

// function HeartBlockButton() {
//     const [heartBlock, setHeartBlock] = useState(false);
//     function toggleHeartBlock() {
//         setHeartBlock(!heartBlock);
//     }
//     return (
//         <div className="side-container" onClick={ toggleHeartBlock }>
//             <h2><button>
//                 HEART BLOCK
//             </button></h2>
//             { heartBlock && (
//                 <div>
//                     <h3><Link to="/conditions/heart-block">All Heart Block</Link></h3>
//                     {heartBlockData.map((condition, i) => {
//                         return (
//                             <div key={ i }>
//                                 <h3><Link
//                                 to={{pathname: `/conditions/${ condition.conditionUrl }`,
//                                 state: condition}}>
//                                     { condition.name }
//                                 </Link></h3>
//                             </div>
//                         )
//                     })}
//                 </div>
//             )}
//         </div>
//     )
// }

// function SymptomButton() {
//     const [symptoms, setSymptoms] = useState(false);
//     function toggleSymptoms() {
//         setSymptoms(!symptoms);
//     }
//     return (
//         <div className="side-container" onClick={ toggleSymptoms }>
//             <h2><button>
//                 SYMPTOMS
//             </button></h2>
//             { symptoms && (
//                 <div>
//                     <h3><Link to="/conditions/symptoms">All Symptoms</Link></h3>
//                     {symptomData.map((condition, i) => {
//                         return (
//                             <div key={ i }>
//                                 <h3><Link
//                                 to={{pathname: `/conditions/${ condition.conditionUrl }`,
//                                 state: condition}}>
//                                     { condition.name }
//                                 </Link></h3>
//                             </div>
//                         )
//                     })}
//                 </div>
//             )}
//         </div>
//     )
// }

// function ConditionColumn() {
//     return (
//         <div className='condition-right'>
//             <h1><Link
//                 to={{pathname: `/conditions`}}>
//                     CONDITIONS
//             </Link></h1>
//             <DiseaseButton/>
//             <HeartBlockButton/>
//             <SymptomButton/>
//         </div>
//     )
// }

function Arrhythmias() {
  return (
    <div className='condition-subpage'>
        <ArrhythmiaPage/>
        <SideBar/>
    </div>
  )
}

export default Arrhythmias