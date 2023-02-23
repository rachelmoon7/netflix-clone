import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link, useRoutes, useNavigate } from 'react-router-dom';



const ProfileHeader = () => {
    return (
        <>
            <h1>NETFLIX CLONE</h1>
 
            <Link to='/'>
                <Button variant="danger">Sign OUT</Button>
            </Link>
        </>
    )
}

export default ProfileHeader