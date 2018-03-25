import React from 'react'
import ReactDOM  from 'react-dom'
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom'
import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import Contacts from "./components/Contacts";
import Templates from "./components/Templates";
import Support from "./components/Support";
import { Provider, connect } from 'react-redux';
import {createStore} from "redux";
import './styles/index.css';
import reducer from './redusers/index'

const store = createStore(reducer);


const mapStateToWelcomeProps = (state) => {
  return {
    authenticated: state.authenticated
  }
};

const WrappedWelcome = connect(mapStateToWelcomeProps)(Welcome);

ReactDOM.render(
     <Provider store = {store}>
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={WrappedWelcome}/>
            <Route path='/templates' component={Templates}/>
            <Route path='/contacts' component={Contacts}/>
            <Route path='/help' component={Support}/>
            <Route path='/sign_up' component={SignUp}/>
        </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
