import React from 'react';

const Register = ({ onRouteChange }) => {
  return(
    <main className="pa4 black-80 center">
    <form className="measure   shadow-2 pa4">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f1 fw6 ph0 mh0">Register</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
          <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name" />
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
          <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
          <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
        </div>
      </fieldset>
      <div className="lh-copy mt3">
        <button className='btn' onClick={() => onRouteChange('home')}>Register</button>
      </div>
    </form>
</main>

  )
}

export default Register;