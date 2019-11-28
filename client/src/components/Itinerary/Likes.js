import React from 'react';

const Likes = ({ likes }) => {
  return (
    <div>
      <span>Likes</span>
      <span>{likes}</span>
    </div>
  );
};

export default Likes;