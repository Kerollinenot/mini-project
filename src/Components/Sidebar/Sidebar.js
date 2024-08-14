import './Sidebar.css'
import SidebarItem from '../SidebarItem/SidebarItem';
import { useEffect, useState } from 'react';
import { fetch_get } from '../../fetch';

export const Sidebar = () => {
  const [groupsDB, setGroupsDB] = useState([]);

  const getData = async() => {
    await fetch_get(`groups/`)
    .then(data => {
      setGroupsDB(data)
    })
    .catch(err=> console.log(err));
  } 

  useEffect(() => {
    getData()
  }, [])

  let groups = groupsDB.map((group) => {
    return <SidebarItem
      group={group}
      key={group.id}
    />
  })

  return (
    <div className='sidebar'>
      {groups}
    </div>
  )
}
