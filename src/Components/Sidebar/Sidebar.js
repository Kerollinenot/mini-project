import React, { useEffect, useState } from 'react'


import './Sidebar.css'
import SidebarItem from '../SidebarItem/SidebarItem';
import groupsJSON from '../../DB/groups.json'

export const Sidebar = () => {
    let groups = groupsJSON.map((group) => {
      
      return <SidebarItem title={group.title} description={group.description.slice(0,100) + " ..."}/>
    })

  return (
    <div className='sidebar'>
      {groups}
    </div>
  )
}
