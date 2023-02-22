import React, { useState } from 'react';
import { Button } from 'react-bootstrap'

import Login from '../Login/Login.jsx';


const Landing = () => {

    const [auth, setAuth] = useState(false);
    const [signInButton, setSignInButton] = useState(false);

    return (
        <>
            {signInButton ? (
                <Login setAuth={setAuth}
                />
            ) : (
                <Button variant="danger"
                        onClick={() => {setSignInButton(true)}}>Sign in</Button>
            )}
           
            <p> Netflix Clone</p>
        </>

    )
}

export default Landing;