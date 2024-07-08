import './Sidebar.css'
import SidebarItem from '../SidebarItem/SidebarItem';
import groupsJSON from '../../DB/groups.json'

export const Sidebar = () => {
  let groups = groupsJSON.map((group) => {

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
