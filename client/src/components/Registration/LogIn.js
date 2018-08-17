import React, { Component } from 'react';

import { Input, Row, Icon, Button } from 'react-materialize';

import './Registration.css';

export default class LogIn extends Component {
    render() {
        let column = 6
        for (var i = 100; !window.matchMedia('(max-device-width: ' + i + 'px)').matches; i++) {}
        let deviceWidth = i;
        if(deviceWidth < 400) {
            column = 12
        }
        return (
            <div className="registration-wrapper">
                <h3 className="sign-up">Login</h3>
                <Row>
                    <Input onChange={this.getInputValue} name="firstName" s={column} label="Email" validate><Icon>account_circle</Icon></Input>
                    <Input onChange={this.getInputValue} name="lastName" s={column} label="Password" validate><Icon>https</Icon></Input>
                </Row>
                <Button waves='purple'>Submit</Button>
            </div>
        )
    }
}
