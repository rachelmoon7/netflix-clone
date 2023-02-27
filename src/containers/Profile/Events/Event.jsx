import React from 'react';
import { Button } from 'react-bootstrap';


const Event = (props) => {
    // console.log("baby event props:", props)
    // this component has props.setEventDeleted which will trigger useeffect in parent, profile

    const handleDelete = () => {
        fetch(`http://localhost:8080/deleteEvent`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({'name': props.name})
        })
        .then((response) => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
        })
        .then(props.setEventDeleted(true))
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });
        }

    return (
        <>
        <div>{props.name}</div>
        <div>{props.city}</div>
        <div>{props.max_capacity}</div>
        <div>{props.date}</div>
        <div>{props.time}</div>
        <Button onClick={() =>{handleDelete()}}>Delete Event</Button>
        <Button >Sign Up for this event </Button>
        </>
    )
}

export default Event;