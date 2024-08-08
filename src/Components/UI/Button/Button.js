import React from 'react'

import './Button.css'

export const Button = ({children, className}) => {
  let classes = className;

  return (
    <>
      <button type='button' className={classes}> {children} </button>
    </>
  )
}
