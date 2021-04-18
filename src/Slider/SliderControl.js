import React from 'react';
const SliderControl = ({ type, title, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick} className="btn">
        {type}
      </button>
    </div>
  );
};

export default SliderControl;
