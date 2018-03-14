import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Main from './components/Main'
import Signup from "./components/SignUp";
import Test from "./components/Features";

const routes=(
    <BrowserRouter >
        <Route exact path='/' component={Main}/>
        <Route path='/test' component={Test}/>
        <Route path='/sign_up' component={Signup}/>
    </BrowserRouter >
);
export default routes;