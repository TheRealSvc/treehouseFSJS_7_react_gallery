import React from 'react';

const Photo = (props) => {
  console.log(`in Photo: ${props.url}`);
    return (  
      <li className="photo-container" >
        <img src={props.url} alt="photograph" />
      </li>
    );
}

export default Photo;