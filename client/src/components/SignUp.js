import React from 'react';
import Header from "./Header";
import '../styles/register.css';
import Register from "./Register";
import SignIn from "./SignIn";
import SignInCover from "./SignInCover";
import RegisterCover from "./RegisterCover";
import Welcome from "./Welcome";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  AUTH_WINDOW_CLOSE,
  AUTH_SHOW_REGISTER_NOT,
  AUTH_SHOW_REGISTER_YES
} from '../actions/types';


class SignUp extends React.Component{
  constructor(props){
      super(props);
      this.ChangeRegisterShow = this.ChangeRegisterShow.bind(this);
      this.changeRegisterWindow = this.changeRegisterWindow.bind(this);
  }

  changeRegisterWindow = () => {
    return {
      type: AUTH_WINDOW_CLOSE
    }  
  };

  ChangeRegisterShow(isShow){
    if(isShow)
    return{
      type: AUTH_SHOW_REGISTER_YES
    }
    else
    return{
      type: AUTH_SHOW_REGISTER_NOT
    }

  }



  render(){
    const dispatch = this.props.dispatch;

    if(this.props.registerWindow){
      if(this.props.showRegister){
        return(
          <div>
              <div className="register-shadow" onClick={()=>{dispatch(this.changeRegisterWindow())}}></div>
              <div className = "register-div">
                <SignInCover/>
                <SignIn/>
              </div>
          </div>
        )
      }
      else
      return(
        <div>
            <div className="register-shadow" onClick={()=>{dispatch(this.changeRegisterWindow())}}></div>
            <div className = "register-div">
              <RegisterCover/>
              <Register/>
            </div>
        </div>
      )

  }
  else return (<div></div>);
}
};
const mapStateToSignUpProps = (state) => {
  return {
    authenticated: state.authenticated,
    registerWindow: state.registerWindow,
    showRegister: state.showRegister
  }
};

export default connect(mapStateToSignUpProps)(SignUp);
