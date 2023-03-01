import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link, useRoutes, useNavigate } from 'react-router-dom';



const ProfileHeader = () => {
    return (
        <>
            <h1>NETFLIX CLONE</h1>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to='/'>
                    <Button variant="danger"
                            // style={{float: 'right'}}
                    >Sign OUT</Button>
                </Link>
            </div>
            
        </>
    )
}

export default ProfileHeader