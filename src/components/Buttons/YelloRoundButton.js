import React from 'react'


function YelloRoundButton({text}) {
  const buttonStyle = {
    padding: '5px 1.5rem',
    borderRadius: '50px',
    backgroundColor: 'hsl(50, 100%, 50%)',
    marginTop: '.5rem',
    marginTottom: '.5rem',
    fontWeight: 'bold',
    minWidth: '150px'
  }
  return (
    <button style={buttonStyle} >{text}</button>
  )
}

export default YelloRoundButton
