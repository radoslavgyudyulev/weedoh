import React from 'react';

import { Card, CardTitle } from 'react-materialize'

function card(props) {
    let { imageURL, description, title, label, href } = props
    return (
        <Card style={{width : '300px'}} header={<CardTitle reveal image={imageURL} waves='light'/>}
            title={title}
            reveal={<p>{description}</p>}>
            <p><a href={href}>{label}</a></p>
        </Card>
    )
}

export default card