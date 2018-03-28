import React from 'react';
import facebook from "../static/register/facebook.png";
import link from "../static/register/link.png";
import twitter from "../static/register/twitter.png";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  AUTH_WINDOW_CLOSE
} from '../actions/types';

class SignIn extends React.Component{
constructor(props){
  super(props);
  this.changeRegisterWindow = this.changeRegisterWindow.bind(this);
}

  changeRegisterWindow = () => {
return {
  type: AUTH_WINDOW_CLOSE
}
};


  render(){
    const dispatch = this.props.dispatch;
    return(
      <div className="sign-in-sign">
        <div className="sign-in-close" onClick={()=>{dispatch(this.changeRegisterWindow())}} />
        <div className="sign-in-text">
          Вхід
          <br/>
          <form action="" className="sign-in-form">
            <input className="sign-in-form-text" type="email" placeholder = "e-mail" />
          <input className="sign-in-form-text" type = "password" placeholder = "Пароль"/>
        <div className = "sign-in-form-remember">
          <input className="sign-in-form-text" type = "radio" placeholder = "e-mail"/>Запам'ятати мене
          <a href="">Забули пароль?</a><br/>
      </div>
        </form>
          <div className="sign-in-button">
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
    registerWindow: state.registerWindow
  }
};

export default connect(mapStateToHeaderProps)(SignIn);
