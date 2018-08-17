import React, { Component } from 'react';

import Card from '../Common/Card'

import { Input, NavItem, Icon } from 'react-materialize'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Input s={6} label="Search" />
                <NavItem href='get-started.html'><Icon>account_circle</Icon></NavItem>
                <Card imageURL={'images/shoes.jpg'}
                      description={'The new shoes'} 
                      title={'LV'} 
                      label={'LV'} 
                      href={'/'}/>
            </div>
        )
    }
}
