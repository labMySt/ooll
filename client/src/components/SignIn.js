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

class SignIn extends React.Component{
constructor(props){
  super(props);
  this.changeRegisterWindow = this.changeRegisterWindow.bind(this);
  this.sendRegister = this.sendRegister.bind(this);
  this.changeEmail = this.changeEmail.bind(this);
  this.changePassword = this.changePassword.bind(this);
  this.changePasswordConf = this.changePasswordConf.bind(this);
  this.changeAuthRegister = this.changeAuthRegister.bind(this);
  this.validateEmail = this.validateEmail.bind(this);
  this.state = {validation: null};
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

validateEmail()
{
  var re = /\S+@\S+\.\S+/;
  return re.test(this.props.email);
}

sendRegister(){
  if(this.validateEmail()){

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
        logemail: this.props.email,
        logpassword: this.props.password})
}).then(res=>res.json())
  .then(res=>{if(res._id){
      this.props.dispatch(this.changeAuthRegister());
      this.props.dispatch(this.changeRegisterWindow());
      cookie.save('userId', res._id,  { path: '/' });
    }
    else if(res.masage) this.setState({validation: "Введений неправильний логін або пароль"});
  });
  }
  else this.setState({validation: "Введіть правильний E-mail адрес"});
}


  render(){
    const dispatch = this.props.dispatch;
    return(
      <div className="sign-in-sign">
        <div className="sign-in-close" onClick={()=>{dispatch(this.changeRegisterWindow())}} />
        <div className="sign-in-text">
          Вхід
          <br/>
          <form action="" className="sign-in-form">
            <input className="sign-in-form-text" type="email" placeholder = "e-mail"
              onChange = {(event) => {
              dispatch(this.changeEmail(event.target.value))
            }}/>
            <div className="sign-in-form-validation">{this.state.validation}</div>
            <input className="sign-in-form-text" type = "password" placeholder = "Пароль"
              onChange = {(event) => {
              dispatch(this.changePassword(event.target.value))
            }}/>
            <div className = "sign-in-form-remember">
              <input className="sign-in-form-text" type = "radio" placeholder = "e-mail"/>Запам'ятати мене
              <a href="">Забули пароль?</a><br/>
            </div>
          </form>
          <div className="sign-in-button" onClick = {this.sendRegister}>
            <div className="sign-in-button-text"></div>
            Увійти
          </div>
          <div className="sign-in-text-welcome">
            Увійти через соц.мережу
          </div>
          <div className="sign-in-box-icons">
            <img src={facebook} alt=""/>
            <img src={twitter} alt=""/>
            <img src={link} alt=""/>
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

export default connect(mapStateToHeaderProps)(SignIn);
