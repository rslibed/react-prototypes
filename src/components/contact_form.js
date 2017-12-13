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
                email: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }
    handleInputChange(e) {
        const {value, name} = e.target;
        const {form} = this.state;
        form[name] = value;
        this.setState({
           form: {...form}
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.add(this.state.form);
        this.reset();
    }
    reset () {
        this.setState({
           form: {
               firstName: '',
               lastName: '',
               phone: '',
               email: ''
           }
        });
    }
    render () {
        const {firstName, lastName, phone, email} = this.state.form;
        return (
            <form onSubmit={this.handleSubmit}>
                <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange}/>
                <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleInputChange}/>
                <Field name="phone" label="Phone" type="tel" value={phone} onChange={this.handleInputChange}/>
                <Field name="email" label="Email" type="email" value={email} onChange={this.handleInputChange}/>
                <button className="btn btn-success">Add Contact</button>
                <button className="mx-3 btn btn-danger" type="button" onClick={this.reset}>Clear Form</button>
            </form>
        )
    }
}

export default ContactForm;