import './Sidebar.css'
import SidebarItem from '../SidebarItem/SidebarItem';
import groupsJSON from '../../DB/groups.json'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const Sidebar = () => {
  const [groupsDB, setGroupsDB] = useState(groupsJSON);
  const source = useSelector((state) => state.Source.source);
  
  useEffect(() => {
    const URL = 'http://localhost:5000/groups/';

    fetch(URL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (source === "db") {
          setGroupsDB(data)
          console.log("Загружаю данные из БД:")
          console.log(data)
        }
      });
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
