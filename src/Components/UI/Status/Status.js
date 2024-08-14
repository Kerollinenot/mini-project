import React from 'react'
export const Status = () => {
    const [statusClassname, setStatusClassName] = useState();
    const [statusName, setStatusName] = useState();
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
  return (
    <div>Status</div>
  )
}
