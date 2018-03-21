import React from 'react';
import Header from "./Header";
import '../styles/register.css';
import RegisterSingIn from "./RegisterSingIn";
import SignInCover from "./SignInCover";

class SignUp extends React.Component{


  render(){
    return(
      <div className = "register-div">
        <SignInCover/>
        <RegisterSingIn/>

      </div>
    )
  }
}




export default SignUp
