import React, { useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Task } from '../Task/Task';
import { Sort } from '../UI/Sort/Sort';

import './TaskList.css';
import tasksJSON from '../../DB/tasks.json';
import { changeDirection } from '../../features/TaskSortDirection/TaskSortDirection_Slice';

export const TaskList = () => {
  const dispatch = useDispatch();

  const direction = useSelector((state) => state.TaskSortDirection.sortDirection);
  const sortName = useSelector((state) => state.TaskSortDirection.sortDirection) === 'asc' ? 'А-Я' : 'Я-А';
  const groupID = useSelector((state) => state.CurrentGroup.id);
  const groupTitle = useSelector((state) => state.CurrentGroup.title);
  const groupDescription = useSelector((state) => state.CurrentGroup.description);

  const sortTasks = () => {
    if (direction === 'desc') {
      tasksJSON.sort((a, b) => {
        if (a.title[0] > b.title[0]) return 1;
        if (a.title[0] < b.title[0]) return -1;
      })
    } else {
      tasksJSON.sort((a, b) => {
        if (a.title[0] > b.title[0]) return -1;
        if (a.title[0] < b.title[0]) return 1;
      })
    }
  }

  const handleSortClick = () => {
    dispatch(changeDirection());
  }

  useLayoutEffect(sortTasks)

  let tasks = tasksJSON.map((task) => {
    if (task.group_id === groupID) {
      return <Task key={task.id} title={task.title} description={task.description} status={task.status} />
    }
    return true;
  })

  return (
    <div className='task-list'>
      <p className='task__group-title'>{groupTitle}</p>
      <p className='task__group-description'>{groupDescription}</p>
      <Sort name={sortName} direction={direction} onClick={handleSortClick} />
      {tasks}
    </div>
  )
}
