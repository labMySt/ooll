import React from 'react';

class SingIn extends React.Component{
  constructor(){
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  }

handleEmailChanged(event){
  this.setState({email: event.target.value});
}

handleUsernameChanged(event){
  this.setState({username: event.target.value});

}

handlePasswordChanged(event){
  this.setState({password: event.target.value});
}

handleConfimPasswordChanged(event){
  this.setState({confirmPassword: event.target.value});
}

submitForm(){
  console.log("push");
  if(this.state.password == this.state.confirmPassword){

    var json = JSON.stringify({ name: this.state.username,
                                email:  this.state.email,
                                password:  this.state.password});

   console.log(json);

    var myInit = { method: 'POST',

                   headers: { 'Accept': 'application/json',
                              'Content-Type': 'application/json'},
                   body: json};

    fetch('/api/users', myInit)
      .then(res => res.json())
      .then(token => console.log(token));
  }

}

  render(){
    return(
      <div className = "sing-in-div">
        <h2 >Register form</h2>

							<div className="form-group">
								<label>Email</label>
                <input className="form-control input-lg"
                       input type="text"
                       name="email"
                       placeholder="E-mail"
                       required=""
                      onChange = {this.handleEmailChanged.bind(this)}/>
							</div>
							<div className="form-group">
								<label>Username</label>
                <input className="form-control input-lg"
                       input type="text"
                       name="username"
                       placeholder="Username"
                       required=""
                       onChange = {this.handleUsernameChanged.bind(this)}/>
							</div>
							<div className="form-group">
								<label>Password</label>
                <input className="form-control input-lg"
                       input type="password"
                       name="password"
                       placeholder="Password"
                       required=""
                       onChange = {this.handlePasswordChanged.bind(this)}/>
							</div>
							<div className="form-group">
								<label>Confirm password</label>
                <input className="form-control input-lg"
                  input type="password"
                  name="passwordConf"
                  placeholder="Confirm Password"
                  required=""
                  onChange = {this.handleConfimPasswordChanged.bind(this)} />
							</div>
							<div className="form-group">
								<buttom className="btn btn-lg btn-success"
                        id="btn"
                        onClick = {this.submitForm.bind(this)}>REGISTER </buttom>
							</div>

      </div>
    )}
};

export default SingIn;
