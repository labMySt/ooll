import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from "./Welcome";
import SignUp from "./SignUp";
import Test from "./Features";
import Templates from "./Templates";
import Support from "./Support";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route path='/features' component={Test}/>
            <Route path='/templates' component={Templates}/>
            <Route path='/support' component={Support}/>
            <Route path='/sign_up' component={SignUp}/>
        </Switch>
    </main>
);

export default Main
