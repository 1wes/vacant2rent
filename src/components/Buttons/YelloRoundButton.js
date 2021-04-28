import React from 'react'


function YelloRoundButton({text}) {
  const buttonStyle = {
    padding: '5px 1.5rem',
    borderRadius: '50px',
    margin: '.5rem auto',
    fontWeight: 'bold',
    minWidth: '130px'
  
  }
  return (
    <button style={buttonStyle} >{text}</button>
  )
}

export default YelloRoundButton
