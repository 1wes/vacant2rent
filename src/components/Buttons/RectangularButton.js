import React from 'react'


function RectangularButton({text, bgl, bgr, color, width}) {
  const buttonStyle = {
    padding: '.5rem 2rem',
    background: `linear-gradient(to right, ${bgl} , ${bgr} )`,
    fontWeight: 'bold',
      width: `${width}`,
    minWidth: '130px',
    color: `${color}`,
  }
  return (
    <button style={buttonStyle} className='rounded capitalize' >{text}</button>
  )
}

export default RectangularButton
