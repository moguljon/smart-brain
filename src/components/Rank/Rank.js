import React from 'react';
import './Rank.css';

const Rank = () => {
  return(
    <div className='tc rank-container'>
      <div>
        <p className='rank'>{`Jonathan...your current rank is.....`}</p>
      </div>
      <div>
        {`#5`}
      </div>
    </div>
  )
}

export default Rank;