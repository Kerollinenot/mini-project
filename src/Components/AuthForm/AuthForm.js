import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '../UI/Button/Button';

import './AuthForm.css'
import usersJSON from '../../DB/users.json'
import { useSelector } from 'react-redux';

export const AuthForm = () => {
  const [login, setlogin] = useState('jane_smith');
  const [password, setPassword] = useState('securepass456');
  const [users, setUsers] = useState(usersJSON);
  const source = useSelector((state) => state.Source.source);
  
  useEffect(() => {
    const URL = 'http://localhost:5000/users/';

    fetch(URL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (source === "db") {
          setUsers(data)
          console.log("Загружаю данные из БД:")
          console.log(data)
        }
      });
  }, [])


  const authorization = () => {
    let user;

    //usersJSON.forEach(userJSON => { if (userJSON.login === login) user = userJSON })
    users.forEach(userJSON => { if (userJSON.login === login) user = userJSON })

    if (user) {
      if (user.password === password) {
        window.location.href = '/main';
        localStorage.setItem('user', JSON.stringify(user))
      } else {
        alert("Неправильный логин или пароль");
      }
    } else {
      alert("Неправильный логин или пароль");
    }
  }

  return (
    <form className='auth-form'>
      <input id='input__login' value={login} onChange={e => setlogin(e.target.value)} type='text' placeholder='Login' className='input__text' />
      <input id='input__password' value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' className='input__text' />
      <Button className={'authBtn'} onClick={authorization}>Vhod</Button>
    </form>
  )
}
