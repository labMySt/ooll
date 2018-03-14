import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from "./Welcome";
import SignUp from "./SignUp";
import Test from "./Test";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route path='/sign_up' component={SignUp}/>
            <Route path='/test' component={Test}/>
        </Switch>
    </main>
);

export default Main
