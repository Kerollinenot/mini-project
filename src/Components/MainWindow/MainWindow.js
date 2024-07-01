import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import { Workspace } from '../Workspace/Workspace'

import './MainWindow.css'

export const MainWindow = () => {
  return (
    <div className='main-window'>
      <Sidebar/>
      <Workspace/>
      
    </div>
  )
}
