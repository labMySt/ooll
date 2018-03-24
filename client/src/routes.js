import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Signup from "./components/SignUp";
import Test from "./components/Contacts";
import { Provider } from 'react-redux';

const routes=(

    <BrowserRouter >
        <Route path='/test' component={Test}/>
        <Route path='/sign_up' component={Signup}/>
    </BrowserRouter >

);
export default routes;
