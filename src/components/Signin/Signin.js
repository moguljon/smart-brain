import React, { Component } from 'react';

class Signin extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  };

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  };

  onSubmitSignin = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user.id) {
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    })
  };
  render() {
    const { onRouteChange } = this.props;
    const { onEmailChange, onPasswordChange, onSubmitSignin } = this;
    return(
      <main className="pa4 black-80 center">
      <form className="measure shadow-2 pa4">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Sign In</legend>
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
        <div className="">
          <button className='btn' onClick={onSubmitSignin}>Sign In</button>
          <button className='btn ml3' onClick={() => onRouteChange('register')}>Register</button>
        </div>
      </form>
  </main>
    )
  }
}

export default Signin;