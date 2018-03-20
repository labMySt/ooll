import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from "./Welcome";
import SignUp from "./SignUp";
import SingIn from "./SingIn";
import Contacts from "./Contacts";
import Templates from "./Templates";
import Support from "./Support";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route path='/templates' component={Templates}/>
            <Route path='/contacts' component={Contacts}/>
            <Route path='/help' component={Support}/>
          <Route path='/sign_up' component={SignIn}/>
        </Switch>
    </main>
);

export default Main;
