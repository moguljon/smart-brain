import React from 'react';
import mogul from './mogul.png';
import Tilt from 'react-tilt'

const Logo = () => {
  return(
    <div>
      <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 250 }} >
        <div className="Tilt-inner shadow-5"><img src={mogul} alt='logo'/> </div>
      </Tilt>
    </div>
  )
}

export default Logo;