import React, { Component } from 'react';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      nameSignin: '',
      emailSignin: '',
      passwordSignin: ''
    }
  }

  onNameChange = (event) => {
    this.setState({nameSignin: event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({emailSignin: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({passwordSignin: event.target.value})
  }

  onSubmitSignin = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.nameSignin,
        email: this.state.emailSignin,
        password: this.state.passwordSignin
      })
    })
      .then(response => response.json())
      .then(data => {
        if(data) {
          this.props.loadUser(data);
          this.props.onRouteChange('home');
        }
      })
  }


  render() {
    const { onNameChange, onEmailChange, onPasswordChange, onSubmitSignin } = this;
    return(
      <main className="pa4 black-80 center">
      <form className="measure   shadow-2 pa4">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Register</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
            <input 
              onChange={onNameChange}
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="name" 
              name="name"  
              id="name" />
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input 
              onChange={onEmailChange}
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="email" 
              name="email-address"  
              id="email-address" />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input 
              onChange={onPasswordChange}
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password"
              name="password"  
              id="password" />
          </div>
        </fieldset>
        <div className="lh-copy mt3">
          <button 
          className='btn' 
          onClick={onSubmitSignin}>Register</button>
        </div>
      </form>
  </main>
  
    )
  }
  
}

export default Register;