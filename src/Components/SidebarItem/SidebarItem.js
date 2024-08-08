import React from 'react'
import { useDispatch } from 'react-redux';
import { changeDescription, changeID, changeTitle } from '../../features/CurrentGroup/CurrentGroup_Slice';
import './SidebarItem.css'

export default function SidebarItem({group}) {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(changeID(group));
    dispatch(changeTitle(group));
    dispatch(changeDescription(group));
  }

  //Есть ли тут смысл менять на addEventListener? Тут же в одном компоненте

  return (
    <div className='sidebar-item' onClick={handleClick}> 
      <p className='sidebar-title'>{group.title}</p>
      <p className='sidebar-description' >{group.description.slice(0,100)+"..."}</p>
    </div>
  )
}
