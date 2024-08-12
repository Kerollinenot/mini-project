import './Sidebar.css'
import SidebarItem from '../SidebarItem/SidebarItem';
import { useEffect, useState } from 'react';

export const Sidebar = () => {
  const [groupsDB, setGroupsDB] = useState([]);
  const URL = 'http://localhost:5000/groups/';

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => { 
    fetch(URL, {
      method: "get",
      headers: {
        'Authorization': JSON.parse(localStorage.getItem('user')).token,
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setGroupsDB(data);
      });
  }

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
