import React from 'react'
import facebook from "../static/register/facebook.png"
import link from "../static/register/link.png"
import twitter from "../static/register/twitter.png"


class RegisterSingIn extends React.Component{


  render(){
    return(
      <div className="sign-in">
        <div className="sign-in-close"></div>
        <div className="sign-in-text">
          Реєстрація
          <br/>
        <form action="" className="sign-in-form">
            <input className="sign-in-form-text"/>
          <input className="sign-in-form-text"/>
          </form>
          <div className="sign-in-text-welcome">
            Зареєструватись через соц.мережу</div>
          <div className="sign-in-box-icons">
            <img src={facebook} alt=""/>
            <img src={twitter} alt=""/>
            <img src={link} alt=""/>
          </div>
          <div className="sign-in-button">
            <div className="sign-in-button-text"></div>
          Зареєструватися
          </div>
        </div>

      </div>
    )
  }
}

export default RegisterSingIn
