import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return(
    <div className='image-container tc'>
      <p>{`This Magic Brain will detect faces in your pictures. Give it a try...`}</p>
      <input 
        onChange={onInputChange}
        type='text' 
        placeholder='enter image'/>
      <div>
        <button 
          onClick={onSubmit}
          className='btn'>Generate Image</button>
      </div>
    </div>
  )
}

export default ImageLinkForm;