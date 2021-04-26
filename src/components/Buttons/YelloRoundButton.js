import React from 'react'


function YelloRoundButton({text}) {
  const buttonStyle = {
    padding: '5px 1.5rem',
    borderRadius: '50px',
    backgroundColor: 'hsl(50, 100%, 50%)',
    margin: '.5rem auto',
   
    fontWeight: 'bold',
    // minWidth: '100px'
  
  }
  return (
    <button style={buttonStyle} >{text}</button>
  )
}

export default YelloRoundButton
