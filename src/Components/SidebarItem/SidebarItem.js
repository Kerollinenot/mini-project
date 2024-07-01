import React from 'react'

import './SidebarItem.css'

export default function SidebarItem({title, description}) {
  return (
    <div className='sidebar-item'>
      <p className='title'>{title}</p>
      <p className='description'>{description}</p>
    </div>
  )
}
