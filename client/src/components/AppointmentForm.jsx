import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Axios from 'axios';

export default class AppointmentForm extends Component {
    state = 
    {
        buttonText: 'Send Request',
        redirect: false,
        newAppointment: 
        {
            firstName: '',
            middleInitial: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            birthdate: '',
            gender: '',
            patient: '',
            description: '',
        }
    }

    onSubmit(token) {
        document.getElementById("demo-form").submit();
    }

    changeInput = (event) => {
        const updatedNewAppointment = { ...this.state.newAppointment };
        updatedNewAppointment[event.target.name] = event.target.value;
        this.setState({
            newAppointment: updatedNewAppointment,
        });
    }
    submitCreateForm = (event) => {
        const form = document.getElementById('appointment-request-form');
        const booked = document.getElementById('booked');
        event.preventDefault();
        Axios.post('/send', this.state.newAppointment)
        .then(() => {
            this.setState({
                buttonText: 'Sent!',
            });
            form.style.display = 'none';
            booked.style.display = 'block';
        });
    }
    returnHome() {
        this.setState({
            redirect: true,
        })
    }
    render() {
        const newAppointment = this.state.newAppointment;
        if (this.state.redirect) {
            return <Redirect to="/"/>
        }
        return (
            <div className="appointment-form">
                <h1>Appointment Request Form</h1>
                <form onSubmit={ this.submitCreateForm }>
                    <div id='appointment-request-form'>
                        <h3>Patient Request Form</h3>
                        <p>Welcome! Please complete the form below to request an appointment. We will contact you to schedule an appointment within two business days.</p>
                        <p>Fields marked with * are required.</p>
                        <div className="names">
                            <div><label>First Name *</label><br/><input required type="text" name="firstName" onChange={ this.changeInput } value={ newAppointment.firstName }/></div>
                            <div><label>Middle Initial</label><br/><input className="middle-initial" type="text" name="middleInitial" onChange={ this.changeInput } value={ newAppointment.middleInitial }/></div>
                            <div><label>Last Name *</label><br/><input required type="text" name="lastName" onChange={ this.changeInput } value={ newAppointment.lastName }/></div>
                        </div>
                        <div className="patient-contact">
                            <div><label>Phone Number *</label><br/><input required type="tel" name="phoneNumber" onChange={ this.changeInput } value={ newAppointment.phoneNumber }/></div>
                            <div><label>Email Address *</label><br/><input required type="email" name="email" onChange={ this.changeInput } value={ newAppointment.email }/></div>
                        </div>
                        <div className="selection">
                            <div><label>Date of Birth *</label><br/><input required type="date" name="birthdate" onChange={ this.changeInput } value={ newAppointment.birthdate }/></div>
                            <div><label>Gender *</label><br/><select required onChange={ this.changeInput } name="gender" value={ newAppointment.gender }>
                                <option defaultValue>Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select></div>
                            <div><label>Patient Type *</label><br/><select required className="appointment-type" onChange={ this.changeInput } name="patient" value={ newAppointment.patient }>
                                <option defaultValue>Select</option>
                                <option value="New Patient">New Patient</option>
                                <option value="Returning Patient">Returning Patient</option>
                            </select></div>
                        </div>
                        <div className="patient-information">
                            <div><label>What can we help you with? Please state if you are feeling chest pain, experiencing symptoms of heart disease, or if you want a check up. *</label><br/><textarea required type="text" name="description" onChange={ this.changeInput } value = { newAppointment.description }/></div>
                        </div>
                        <div className="submit-button"><input type="submit" value={ this.state.buttonText } className="g-recaptcha" data-sitekey="6LcvBb4ZAAAAAKKDKPrhw4IKYPtyACO8ekgMLfHr" data-callback={ this.onSubmit } data-action='submit'/></div>
                    </div>
                    <div id='booked'>
                        <h3>Thank you!</h3>
                        <p>Your request has been sent to the office. You will receive a confirmation email at the address provided. We will contact you within two business days.</p>
                        <button onClick={ this.returnHome }>Return Home</button>
                    </div>
                </form>
            </div>
        )
    }
}
