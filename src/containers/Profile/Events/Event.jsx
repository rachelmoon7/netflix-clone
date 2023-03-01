import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


const Event = (props) => {
    const [showConfirmSignUp, setShowConfirmSignUp] = useState(false);
    const [signedUp, setSignedUp] = useState(false);
    // console.log("baby event props:", props)
    // console.log("evnet props after click 23rd:", props)
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
        {showConfirmSignUp ? (
            <Button variant="danger"
                    onClick={() => {setSignedUp(true)}}>Confirm Sign Up </Button>

        ): (
            <Button onClick={() => {setShowConfirmSignUp(true)}}>Sign Up for this event </Button>

        )}

        {signedUp ? (
            <div> You are signed up for this event </div>
        ):(
            null
        )}
        
        </>
    )
}

export default Event;