import React from 'react'

import './Workspace.css'
import { TaskList } from '../TaskList/TaskList'

export const Workspace = () => {
  return (
    <div className='workspace'>
      <TaskList />
    </div>
  )
}
