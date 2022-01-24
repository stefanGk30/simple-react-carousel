import React from 'react';

const Slide = ({ pic, place }) => {
  return (
    <div className="slide" className={`slide ${place}`}>
      <img src={pic} alt="" />
    </div>
  );
};

export default Slide;
