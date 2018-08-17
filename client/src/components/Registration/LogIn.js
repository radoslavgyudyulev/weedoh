import React, { Component } from 'react';

import { Input, Row, Icon, Button } from 'react-materialize';

import './Registration.css';


const axios = require('axios');

export default class LogIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password : ''
        };
        this.getInputValue = this.getInputValue.bind(this);
        this.sendUserData = this.sendUserData.bind(this);
    }

    sendUserData() {
        let { email, password } = this.state;
        let body = {
            email,
            password
        }
        let URL = 'http://localhost:3001';
        axios.post(`${URL}/api/login`, {
            body : {body}
        }).then(response => console.log(response))
    }


    getInputValue(event) {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({[name] : value});
    }

    render() {
        console.log(this.state);
        let column = 6;
        for (var i = 100; !window.matchMedia('(max-device-width: ' + i + 'px)').matches; i++) {}
        let deviceWidth = i;
        if(deviceWidth < 400) {
            column = 12;
        }
        return (
            <div className="registration-wrapper">
                <h3 className="sign-up">Login</h3>
                <Row>
                    <Input onChange={this.getInputValue} name="email" s={column} label="Email" validate><Icon>account_circle</Icon></Input>
                    <Input onChange={this.getInputValue} name="password" s={column} label="Password" validate><Icon>https</Icon></Input>
                </Row>
                <Button onClick={this.sendUserData} waves='purple'>Submit</Button>
            </div>
        );
    }
}