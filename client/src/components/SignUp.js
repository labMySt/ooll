import React from 'react'
import Header from "./Header";
import '../styles/register.css';
import RegisterSingIn from "./RegisterSingIn";

class SignUp extends React.Component{


  render(){
    return(
      <div className = "register-div">
        <RegisterSingIn/>

      </div>
    )
  }
}




export default SignUp
