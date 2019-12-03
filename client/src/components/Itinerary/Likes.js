import React from 'react';
import Heart from 'react-icons/lib/fa/heart-o';

const Likes = ({ likes }) => {
  return (
    <div>
      <Heart  color="#fff" className=" text-white ml-3"/>
      <span className=" text-white ml-2">{likes}</span>
    </div>
  );
};

export default Likes;