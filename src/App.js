import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';

import Landing from './containers/Landing/Landing.jsx';
import Login from './containers/Login/Login.jsx';
import SignUp from './containers/SignUp/SignUp.jsx';



const App = () => {

    return (
        <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<SignUp />} />
        </Routes>
    );
}

export default App;
