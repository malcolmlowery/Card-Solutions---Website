import React from 'react';
import './avatar.css';

const Avatar = ({ imageTranslateX, profileImage, style }) => {
  return (
    <div className='avatar' style={style}>
      <img style={{ left: imageTranslateX }} src={profileImage} />
    </div>
  );
};

export default Avatar;
