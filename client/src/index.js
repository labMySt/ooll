import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Router, Switch, Route} from 'react-router-dom'
import routes from './routes.js';
import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import Contacts from "./components/Contacts";
import Templates from "./components/Templates";
import Support from "./components/Support";
import { Provider } from 'react-redux';
import {createStore} from "redux";
import "./index";


const AUTH_USER = 'auth_user';
const UNAUTH_USER = 'unauth_user';


const AuthReducer = function(state = { authenticated: false}, action) {

  switch(action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false};
  }
  return state;
};


const store = createStore(AuthReducer);

render(
    <div>
      <Provider store = {store}>
        <BrowserRouter routes={routes}>
            <Switch>
                <Route exact path='/' component={Welcome}/>
                <Route path='/templates' component={Templates}/>
                <Route path='/contacts' component={Contacts}/>
                <Route path='/help' component={Support}/>
                <Route path='/sign_up' component={SignUp}/>
            </Switch>
        </BrowserRouter>
      </Provider>
    </div>,
    document.getElementById('app')
);
