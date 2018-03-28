import React from "react";
import { connect } from 'react-redux';

import {
  AUTH_SHOW_REGISTER_YES
} from '../actions/types';

class RegisterCover extends React.Component{
constructor(){
  super();
  this.changeShowRegister = this.changeShowRegister.bind(this);

}

changeShowRegister(){
  return{
    type: AUTH_SHOW_REGISTER_YES
  }

}
  render(){
    const dispatch = this.props.dispatch;
    return(
      <div className="sign-in-cover-div">
        <div className="sign-in-cover-shadow">
          <div className="sign-in-cover-buttom" onClick={()=>{dispatch(this.changeShowRegister())}}>
            <div className="sign-in-cover-buttom-top"></div>
            Увійти
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

export default connect(mapStateToSignUpProps)(RegisterCover);
