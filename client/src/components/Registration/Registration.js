import React, { Component } from 'react';

import { Input, Row, Icon, Button } from 'react-materialize'

import './Registration.css'

const axios = require('axios');

export default class Registration extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            firstName : '',
            lastName : '',
            phoneNumber : '',
            email : '',
            password : '',
            confirmedPassword : '',
            errorMsg: '',
            isError : false
            }

        this.getInputValue = this.getInputValue.bind(this);
        this.sendRegistrationData = this.sendRegistrationData.bind(this);
    }


    getInputValue(event) {
        let value = event.target.value
        let name = event.target.name
        this.setState({[name] : value})
    }

    ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }
            alert("You have entered an invalid email address!")
            return (false)
        }

    validateInputs() {
        let { password, confirmedPassword } = this.state
        if(password !== confirmedPassword) {
            this.setState({isError : true, errorMsg : 'Password does not match'})
        } else {

        }
        
    }

    sendRegistrationData() {
        this.validateInputs()
        let { firstName,lastName,phoneNumber,email,password,confirmedPassword } = this.state
        let registrationData = {
            firstName,
            lastName,
            phoneNumber,
            email,
            password,
            confirmedPassword
        }
        let URL = 'http://localhost:3001'
        axios.post(`${URL}/api/register`, {
            body: {registrationData}
        }).then()

    }

    render() {
        let { isError, errorMsg } = this.state
        let column = 6
        for (var i = 100; !window.matchMedia('(max-device-width: ' + i + 'px)').matches; i++) {}
        let deviceWidth = i;
        if(deviceWidth < 400) {
            column = 12
        }
        return (
            <div className="registration-wrapper">
            <h3 className="sign-up">Sign up</h3>
                <Row>
                    <Input onChange={this.getInputValue} name="firstName" s={column} label="First Name" validate><Icon>account_circle</Icon></Input>
                    <Input onChange={this.getInputValue} name="lastName" s={column} label="Last Name" validate><Icon>account_circle</Icon></Input>
                </Row>

                <Row>
                    <Input onChange={this.getInputValue} name="email" s={column} label="Email" validate><Icon>email</Icon></Input>
                    <Input onChange={this.getInputValue} name="phoneNumber" s={column} label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
                </Row>

                <Row>
                    <Input onChange={this.getInputValue} name="password" s={column} label="Password" validate><Icon>https</Icon></Input>
                    <Input onChange={this.getInputValue} name="confirmedPassword" s={column} label="Confirm Password" validate><Icon>https</Icon></Input>
                    {isError ? errorMsg : ''}
                </Row>
                
                <Button onClick={this.sendRegistrationData} waves='purple'>Submit</Button>
            </div>
        )
    }
}
