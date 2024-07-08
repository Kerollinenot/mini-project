import React, { useLayoutEffect } from 'react'
import { useState } from 'react';
import './Task.css';

export const Task = (props) => {
  const [statusClassname, setStatusClassName] = useState();
  const [statusName, setStatusName] = useState();
  const [description, setDescription] = useState(props.description.slice(0, 100) + '...');
  const [isActive, setActive] = useState(false);

  useLayoutEffect(() => {
    let statusClass;
    switch (props.status) {
      case 1:
        setStatusName('Новая');
        statusClass = 'new';

        break;
      case 2:
        setStatusName('На рассмотрении');
        statusClass = 'consideration';
        break;
      case 3:
        setStatusName('Утверждена');
        statusClass = 'approved';
        break;
      case 4:
        setStatusName('В работе');
        statusClass = 'at_work';
        break;
      case 5:
        setStatusName('На проверке');
        statusClass = 'inspection';
        break;
      case 6:
        setStatusName('Выполнена');
        statusClass = 'completed';
        break;
      default:
        return true;
    }
    setStatusClassName(statusClass + ' task__status hidden');
  }, [props.status])

  const toggleClass = () => {
    if (isActive) {
      setDescription(props.description.slice(0, 100) + '...')
      setStatusClassName(statusClassname.slice(0, -6));
    }  else {
      setDescription(props.description)
      setStatusClassName(statusClassname + 'hidden');
    }
    setActive(!isActive);
  }

  return (
    <div className='task' onClick={toggleClass}>
      <p className='task__title'>{props.title}</p>
      <p className='task__descriptipon'>{description}</p>
      <p className={statusClassname}>{statusName}</p>
    </div>
  )
}
