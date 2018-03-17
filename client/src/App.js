import React from 'react';
import './index.css';
import Header from "./components/Header";

import { Switch, Route } from 'react-router-dom'
import Welcome from "./components/Welcome";
import Test from "./components/Features";
import Templates from "./components/Templates";
import Support from "./components/Support";
import SignUp from "./components/SignUp";
import Main from "./components/Main";

const App = () => (
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/features' component={Test}/>
            <Route path='/templates' component={Templates}/>
            <Route path='/support' component={Support}/>
            <Route path='/sign_up' component={SignUp}/>
            <Route path='/welcome' component={Welcome}/>
        </Switch>
    </div>
);

export default App;