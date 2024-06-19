import React from 'react'

import './Button.css'

export const Button = (props) => {
  return (
    <>
      <button type='button' className='btn'> {props.children} </button>
    </>
  )
}
