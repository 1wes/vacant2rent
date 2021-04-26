import React from "react";

function LoveComponent({ background, color }) {
  const bgc = background ? background : 'transparent';
  const text_color = color ? color : 'black';
  return (
    <div style={{ backgroundColor:bgc, color: text_color}} className="d-flex justify-content-between px-2 py-1" >
      <div>
        <i>hot</i>
      </div>
      <div className="">
        <i className='mr-3'>love</i>
        <i>arrow</i>
      </div>
    </div>
  );
}

export default LoveComponent;
