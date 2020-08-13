import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Axios from 'axios'
import Recaptcha from 'react-recaptcha'

export default class AppointmentRequest extends Component {
    container = React.createRef();
    state = 
    {

        buttonText: 'Send Request',
        showCreateForm: false,
        disableSubmit: false,
        newAppointment: 
        {
            firstName: '',
            middleInitial: '',
            lastName: '',
            birthdate: '',
            phoneNumber: '',
            email: '',
            gender: '',
            pronoun: '',
            patient: '',
            description: '',
        }
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                showCreateForm: false,
            })
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
    submitCreateForm = (event) => {
        const form = document.getElementById('appointment-request-form');
        const booked = document.getElementById('booked');
        event.preventDefault();
        Axios.post('http://localhost:3001/send', this.state.newAppointment)
        .then(() => {
            this.setState({
                buttonText: 'Sent!',
                disableSubmit: true,
            });
            form.style.display = 'none';
            booked.style.display = 'block';
        });
    }

    render() {
        const newAppointment = this.state.newAppointment;
        return (
            <div className="appointment-request">
                    <div className="index-form" ref={ this.container }>
                        <div><button onClick={ this.toggleCreateForm }>
                                { this.state.showCreateForm
                                    ? 'Cancel Appointment Request'
                                    : 'Request Appointment Today!'
                                }
                            </button></div>
                            { this.state.showCreateForm
                                ?
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
                                        {/* <Recaptcha sitekey="6LcvBb4ZAAAAAKKDKPrhw4IKYPtyACO8ekgMLfHr" render="explicit"/> */}
                                        <div className="submit-button"><input className="submit" type="submit" value={ this.state.buttonText } disabled= {this.state.disableSubmit }/></div>
                                    </div>
                                    <div id='booked'>
                                        <h3>Thank you!</h3>
                                        <p>Your request has been sent to the office. You will receive a confirmation email at the address provided. We will contact you within two business days.</p>
                                        <button onClick={ this.toggleCreateForm }>Close</button>
                                    </div>
                                </form>
                                : null
                            }
                    </div>
            </div>
        )
    }
}
