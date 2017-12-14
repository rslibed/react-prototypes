import React, {Component} from 'react';
import Field from './field.js'

class ContactForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                street: '',
                city: '',
                state: '',
                zip: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkFields = this.checkFields.bind(this);
        this.reset = this.reset.bind(this);
    }
    handleInputChange(e) {
        const {value, name} = e.target;
        const {form} = this.state;
        form[name] = value;
        if (form[name] === '') {
            e.target.style.borderColor = "#ff9999";
            e.target.style.borderWidth = "2px";
            e.target.placeholder = "Required Field.";
        } else {
            e.target.style.borderColor = "rgba(0,0,0,.15)";
            e.target.style.borderWidth = "1px";
        }
        this.setState({
           form: {...form}
        });
    }
    handleSubmit() {
        this.props.add(this.state.form);
        this.reset();
    }
    checkFields (e) {
        e.preventDefault();
        let emptyFields = [];
        var filledFields = true;
        const inputs = document.querySelectorAll(".field");
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].attributes.placeholder === "Required Field." || inputs[i].value === "") {
                emptyFields.push(inputs[i]);
            }
        }
        for (let i = 0; i< emptyFields.length; i++) {
            emptyFields[i].style.borderColor = "#ff9999";
            emptyFields[i].style.borderWidth = "2px";
            emptyFields[i].placeholder = "Required Field.";
            filledFields = false;
        }
        if (filledFields) {
            this.handleSubmit();
        }
    }
    reset () {
        this.setState({
           form: {
               firstName: '',
               lastName: '',
               phone: '',
               email: '',
               street: '',
               city: '',
               state: '',
               zip: ''
           }
        });
        const inputs = document.querySelectorAll(".field");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].placeholder = "";
        }
    }
    render () {
        const {firstName, lastName, phone, email, street, city, state, zip} = this.state.form;
        return (
            <form onSubmit={this.checkFields}>
                <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange}/>
                <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleInputChange}/>
                <Field name="phone" label="Phone" type="tel" value={phone} onChange={this.handleInputChange}/>
                <Field name="email" label="Email" type="email" value={email} onChange={this.handleInputChange}/>
                <Field name="street" label="Street Address" type="text" value={street} onChange={this.handleInputChange}/>
                <Field name="city" label="City" type="text" value={city} onChange={this.handleInputChange}/>
                <Field name="state" label="State" type="text" value={state} onChange={this.handleInputChange}/>
                <Field name="zip" label="Zip Code" type="text" value={zip} onChange={this.handleInputChange}/>
                <div className="col-12">
                <button className="btn btn-success mx-3 col-5">Add Contact</button>
                <button className="btn btn-danger col-5" type="button" onClick={this.reset}>Clear Form</button>
                </div>
            </form>
        )
    }
}

export default ContactForm;