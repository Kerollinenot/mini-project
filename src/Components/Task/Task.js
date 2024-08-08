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
    setStatusName(props.status);

    switch (props.status) {
      case 'Новая':
        statusClass = 'new';
        break;
      case 'На рассмотрении':
        statusClass = 'consideration';
        break;
      case 'Утверждена':
        statusClass = 'approved';
        break;
      case 'В работе':
        statusClass = 'at_work';
        break;
      case 'На проверке':
        statusClass = 'inspection';
        break;
      case 'Выполнена':
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
