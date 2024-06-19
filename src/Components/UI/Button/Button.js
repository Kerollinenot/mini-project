import React from 'react'

import './Button.css'

export const Button = ({children, onClick, className}) => {
  let classes = className

  return (
    <>
      <button onClick={onClick} type='button' className={classes}> {children} </button>
    </>
  )
}
