import React from 'react'

import './Sort.css'

export const Sort = ({name, style}) => {
  return (
    <button id='sort-btn' className={`sort-btn ${style}`}>{name}</button>
  )
}
