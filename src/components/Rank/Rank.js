import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
  return(
    <div className='tc rank-container'>
      <div>
        <p className='rank'>{`${name}...your current rank is.....`}</p>
      </div>
      <div>
        {`${entries}`}
      </div>
    </div>
  );
}

export default Rank;