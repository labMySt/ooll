import React from 'react'
import ReactDOM  from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import Contacts from "./components/Contacts";
import Templates from "./components/Templates";
import Support from "./components/Support";
import { Provider, connect } from 'react-redux';
import {createStore} from "redux";
import './styles/index.css';

import reduser from './redusers/auth';

const store = createStore(reduser);

ReactDOM.render(
     <Provider store = {store}>
        <Router>
        <div>
            <Route exact path='/' component={Welcome}/>
            <Route path='/templates' component={Templates}/>
            <Route path='/contacts' component={Contacts}/>
            <Route path='/help' component={Support}/>
            <Route path='/sign_up' component={SignUp}/>
        </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);
