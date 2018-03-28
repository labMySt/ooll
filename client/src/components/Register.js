import React from 'react';
import facebook from "../static/register/facebook.png";
import link from "../static/register/link.png";
import twitter from "../static/register/twitter.png";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import cookie from 'react-cookies';

import {
  AUTH_USER,
  AUTH_WINDOW_CLOSE,
  ACTION_CHANGE_EMAIL,
  ACTION_CHANGE_PASSWORD,
  ACTION_CHANGE_PASSWORDCONF
} from '../actions/types';

class Register extends React.Component{
constructor(props){
  super(props);
  this.changeRegisterWindow = this.changeRegisterWindow.bind(this);
  this.sendRegister = this.sendRegister.bind(this);
  this.changeEmail = this.changeEmail.bind(this);
  this.changePassword = this.changePassword.bind(this);
  this.changePasswordConf = this.changePasswordConf.bind(this);
  this.changeAuthRegister = this.changeAuthRegister.bind(this);
}

changeAuthRegister = () => {
return {
type: AUTH_USER
}
};

  changeRegisterWindow = () => {
return {
  type: AUTH_WINDOW_CLOSE
  }
};

changeEmail = (payload) => {
  return {
    type: ACTION_CHANGE_EMAIL,
    payload: payload
  }
};

changePassword = (payload) => {
  return {
    type: ACTION_CHANGE_PASSWORD,
    payload: payload
  }
};

changePasswordConf = (payload) => {
  return {
    type: ACTION_CHANGE_PASSWORDCONF,
    payload: payload
  }
};

sendRegister(){
  var myHeaders = new Headers();

  fetch('/api/users', {
  method: 'post',
  mode: "cors",
  credentials : "include",
  headers: {
    'Host': 'localhost:3001',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
        email: this.props.email,
        password: this.props.password,
        passwordConf: this.props.passwordConf})
}).then(res=>res.json())
  .then(res=>
    {if(res._id){
      this.props.dispatch(this.changeAuthRegister());
      this.props.dispatch(this.changeRegisterWindow());
      cookie.save('userId', res._id,  { path: '/' });
    }
  });
}

  render(){
    const dispatch = this.props.dispatch;
    return(
      <div className="sign-in-register">
        <div className="sign-in-close" onClick={()=>{dispatch(this.changeRegisterWindow())}} />
        <div className="sign-in-text">
          Реєстрація
          <br/>
          <form action="" className="sign-in-form">
              <input className="sign-in-form-text" type="email" placeholder = "e-mail"
                onChange = {(event) => {
                dispatch(this.changeEmail(event.target.value))
              }}/>
            <input className="sign-in-form-text" type = "password" placeholder = "Пароль"
                onChange = {(event) => {
                dispatch(this.changePassword(event.target.value))
                }}/>
          <input className="sign-in-form-text" type = "password" placeholder = "Підтвердіть пароль"
                onChange = {(event) => {
                dispatch(this.changePasswordConf(event.target.value))
                }}/>
          </form>
          <div className="sign-in-text-welcome">
            Зареєструватись через соц.мережу
          </div>
          <div className="sign-in-box-icons">
            <img src={facebook} alt=""/>
            <img src={twitter} alt=""/>
            <img src={link} alt=""/>
          </div>
          <div className="sign-in-button" onClick = {this.sendRegister}>
            <div className="sign-in-button-text"></div>
            Зареєструватися
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToHeaderProps = (state) => {
  return {
    authenticated: state.authenticated,
    registerWindow: state.registerWindow,
    email: state.email,
    password: state.password,
    passwordConf: state.passwordConf
  }
};

export default connect(mapStateToHeaderProps)(Register);
