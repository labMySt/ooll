import React from 'react';
import cookie from 'react-cookies';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import logo from '../static/logo.png';
import { connect } from 'react-redux';
import SignUp from "./SignUp";

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_WINDOW_OPEN,
  AUTH_WINDOW_CLOSE
} from '../actions/types';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.changeRegisterWindow = this.changeRegisterWindow.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.changeAuthTurn = this.changeAuthTurn.bind(this);
    this.changeAuthOn = this.changeAuthOn.bind(this);
    this.sendRegister = this.sendRegister.bind(this);
  }
    state = {links: []};

    changeRegisterWindow = () => {
  return {
    type: AUTH_WINDOW_OPEN
  }
};

changeAuthTurn = () => {
  return{
    type: UNAUTH_USER
  }
}

changeAuthOn = () => {
    return {
      type: AUTH_USER
    }
};
sendRegister(){

  fetch('/api/logout', {
  method: 'GET',
  mode: "cors",
  credentials : "include",
  headers: {
    'Host': 'localhost:3001',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
}

onLogout() {
    cookie.remove('userId');
    this.props.dispatch(this.changeAuthTurn());
    this.sendRegister();
  }

    componentDidMount() {
        fetch('/header_menu')
            .then(res => res.json())
            .then(links => this.setState({ links }));
    }

    render() {

      const dispatch = this.props.dispatch;

      if(cookie.load('userId')){
          dispatch(this.changeAuthOn());
      };

      let button = null;
      if(this.props.authenticated){
         button  = <li className = "nav-item col-lg-3" >
                      <a className="header-link" onClick = {this.onLogout}>Вихід</a>
                  </li>;
      }
      else
      button  = <li className = "nav-item col-lg-3" >
                   <a className="header-link" onClick={()=>{dispatch(this.changeRegisterWindow())}}>Вхід</a>
               </li>;


        return (
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-right header">

                <div className="logo" >
                    <a className="navbar-brand" href="/" title="ooll">
                        <img src={logo} className="App-logo" alt="logo" />
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav row header-links">

                        {this.state.links.map((item, index) =>
                            <li className={item.class} key={index}>
                                <Link className="header-link" to={item.link} key={index}>{item.label}</Link>
                            </li>
                        )}
                        {button}
                    </ul>
                </div>
            </nav>
            <SignUp/>
            </div>
        );
    }
}
const mapStateToHeaderProps = (state) => {
  return {
    authenticated: state.authenticated,
    registerWindow: state.registerWindow
  }
};

export default connect(mapStateToHeaderProps)(Header);
