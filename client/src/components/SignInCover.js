import React from "react";
import { connect } from 'react-redux';

import {
  AUTH_SHOW_REGISTER_NOT
} from '../actions/types';

class SignInCover extends React.Component{
  constructor(){
    super();
    this.changeShowRegister = this.changeShowRegister.bind(this);

  }

  changeShowRegister(){
    return{
      type: AUTH_SHOW_REGISTER_NOT
    }

  }
    render(){
      const dispatch = this.props.dispatch;
    return(
      <div className="sign-in-cover-div-register">
        <div className="sign-in-cover-shadow">
          <div className="sign-in-cover-buttom" onClick={()=>{dispatch(this.changeShowRegister())}}>
            <div className="sign-in-cover-buttom-top"></div>
          Зареєструватися
          </div>

        </div>

      </div>
    )
  }
}
const mapStateToSignUpProps = (state) => {
  return {
  }
};

export default connect(mapStateToSignUpProps)(SignInCover);
