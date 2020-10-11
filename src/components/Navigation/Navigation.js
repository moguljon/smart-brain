import React from 'react';
import './Navigation.css';

const Navigation = ({isSignedIn, onRouteChange }) => {
  if(isSignedIn) {
    return(
      <div className='nav-container' style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signout')}>Sign Out</p>
      </div>
    )
  } else {
    return (
      <div className='nav-container' style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p className='mr3' onClick={() => onRouteChange('signin')}>Sign In</p>
        <p onClick={() => onRouteChange('register')}>Register</p>
      </div>
    )
  }
}

export default Navigation;