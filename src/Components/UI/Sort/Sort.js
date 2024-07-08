import React from 'react'

import './Sort.css'

export const Sort = ({name, onClick}) => {
  return (
    <button className='sort-btn' onClick={onClick}>{name}</button>
  )
}
