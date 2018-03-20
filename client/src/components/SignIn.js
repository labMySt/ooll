import React from 'react';

class SignIn extends React.Component{
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
          <div class="btn-group dropleft">
            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropleft
            </button>
          <div class="dropdown-menu">

  </div>
</div>




    )}
};

export default SignIn;
