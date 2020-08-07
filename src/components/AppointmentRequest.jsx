import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
// import Axios from 'axios'

export default class AppointmentRequest extends Component {
    state = 
    {
        buttonText: 'Send Request',
        showCreateForm: false,
        newAppointment: 
        {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            description: '',
        }
    }
    toggleCreateForm = () => {
        const newShowCreateForm = !this.state.showCreateForm;
        this.setState({
            showCreateForm: newShowCreateForm,
        });
    };
    changeInput = (event) => {
        const updatedNewAppointment = { ...this.state.newAppointment };
        updatedNewAppointment[event.target.name] = event.target.value;
        this.setState({
            newAppointment: updatedNewAppointment,
        });
    }
    // submitCreateForm = (event) => {
    //     event.preventDefault();
    //     Axios.post('/api/appointment-requests', this.state.newAppointment)
    //     .then(() => {
    //         this.setState({
    //             showCreateForm: false,
    //         });
    //     });
    // }
    render() {
        return (
            <div className="appointment-request">
                    <div className="index-form">
                        <div><button onClick={ this.toggleCreateForm }>
                                { this.state.showCreateForm
                                    ? 'Cancel'
                                    : 'Request Appointment Today!'
                                }
                            </button></div>
                            { this.state.showCreateForm
                                ?
                                <form onSubmit={ this.submitCreateForm }>
                                    <p>Welcome! Please fill out the form below to request an appointment. We will contact you to schedule an appointment within two business days.</p>
                                    <label>First Name: </label><input type="text" name="firstName" onChange={ this.changeInput }/><br/>
                                    <label>Last Name: </label><input type="text" name="lastName" onChange={ this.changeInput }/><br/>
                                    <label>Phone Number: </label><input type="text" name="phoneNumber" onChange={ this.changeInput }/><br/>
                                    <label>Email Address: </label><input type="text" name="email" onChange={ this.changeInput }/><br/>
                                    <label>Are you new here? </label><select className="appointment-type" onChange={ this.changeInput } name="Patient Type">
                                        <option disabled selected value>Select</option>
                                        <option value="new">New Patient</option>
                                        <option value="returning">Returning Patient</option>
                                    </select><br/>
                                    <label>What can we help you with? </label><textarea type="text" name="description" onChange={ this.changeInput } placeholder="Description"/><br/>
                                    <input className="submit" type="submit" value={ this.state.buttonText }/>
                                </form>
                                : null
                            }
                    </div>
            </div>
        )
    }
}
