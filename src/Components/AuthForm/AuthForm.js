import React from 'react';
import { useState } from 'react';
import { Button } from '../UI/Button/Button';

import './AuthForm.css'
import usersJSON from '../../DB/users.json'

export const AuthForm = () => {
  const [login, setlogin] = useState('jane_smith');
  const [password, setPassword] = useState('securepass456');

  const authorization = () => {
    let isLoginCorrect = false;
    let isPasswordCorrect = false;

    usersJSON.forEach(user=> {if (user.login === login) isLoginCorrect=true})

    if (isLoginCorrect) {
      usersJSON.forEach(user=> {if (user.password === password) isPasswordCorrect=true});
      if (isPasswordCorrect) {
        window.location.href='/main';
        localStorage.setItem('user', login);
      } else {
        alert("Неправильный пароль");
      }
    } else {
      alert("Неправильный логин");
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
