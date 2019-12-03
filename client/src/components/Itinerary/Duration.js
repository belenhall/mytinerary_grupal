import React from 'react';
import Clock from 'react-icons/lib/fa/clock-o';

const Duration = ({ duration }) => {
  return (
    <div>
      <Clock color="#fff" className="ml-2"/>
      <span className="ml-1 text-white">{duration}</span>
      <span className="text-white">hrs</span>
    </div>
  );
};

export default Duration;