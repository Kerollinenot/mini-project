import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Task } from '../Task/Task';
import { Sort } from '../UI/Sort/Sort';

import './TaskList.css';
import { changeDirection } from '../../features/TaskSortDirection/TaskSortDirection_Slice';

export const TaskList = () => {
  const dispatch = useDispatch();
  const direction = useSelector((state) => state.TaskSortDirection.sortDirection);
  const sortName = useSelector((state) => state.TaskSortDirection.sortDirection) === 'asc' ? 'А-Я' : 'Я-А';
  const groupID = useSelector((state) => state.CurrentGroup.id);
  const groupTitle = useSelector((state) => state.CurrentGroup.title);
  const groupDescription = useSelector((state) => state.CurrentGroup.description);

  const [tasksDB, setTasksDB] = useState([]);
  const URL = `http://localhost:5000/tasks/${groupID}`;

  const handleSortClick = (event) => {
    if (event.target.id === 'sort-btn') dispatch(changeDirection());
  };

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
        setTasksDB(data)
      });
  }

  useEffect(() => {
    document.addEventListener('click', handleSortClick);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchData()
  }, [groupID])
  
  const sortTasks = () => {
    if (direction === 'asc') {
      tasksDB.sort((a, b) => {
        if (a.title[0] > b.title[0]) return 1;
        if (a.title[0] < b.title[0]) return -1;
        return 0;
      })
    } else {
      tasksDB.sort((a, b) => {
        if (a.title[0] > b.title[0]) return -1;
        if (a.title[0] < b.title[0]) return 1;
        return 0;
      })
    }
  }

  sortTasks();

  let tasks = tasksDB.map((task) => {
    if (task.group_id === groupID) {
      return <Task key={task.id} title={task.title} description={task.description} status={task.status} />
    }
    return [];
  })

  return (
    <div className='task-list'>
      <p className='task__group-title'>{groupTitle}</p>
      <p className='task__group-description'>{groupDescription}</p>
      <Sort style={`${groupID ? '' : 'hidden'}`} name={sortName} direction={direction} />
      <span className={`info-label ${groupID ? 'hidden' : ''}`}> Выберите группу из списка слева </span>
      {tasks}
    </div>
  )
}
