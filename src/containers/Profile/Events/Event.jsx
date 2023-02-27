import React from 'react';
import { Button } from 'react-bootstrap';


const Event = (props) => {
    console.log("baby event props:", props)
    return (
        <>
        <div>{props.name}</div>
        <div>{props.city}</div>
        <div>{props.max_capacity}</div>
        <div>{props.date}</div>
        <div>{props.time}</div>

        <Button >Sign Up for this event </Button>
        </>
    )
}

export default Event;