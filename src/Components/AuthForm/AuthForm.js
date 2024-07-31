import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '../UI/Button/Button';

import './AuthForm.css'

export const AuthForm = () => {
  const [login, setlogin] = useState('');
  const [password, setPassword] = useState('');
  const [isErrorActive, setErrorActive] = useState(false);

  const fetchData = () => {
    const URL = 'http://localhost:5000/users/authorization';

    fetch(URL, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        login: login,
        password: password
      })
    })
      .then(response => {
        if (response.status !== 202) {
          throw(response)
        }
        return response.json();
      })
      .then(data => {
        authorization(data)
      }).catch(() => {
        setErrorActive(true)
      });
  }

  useEffect(() => {
    document.addEventListener('keydown', function (event) {
      if (event.code === 'Enter') fetchData();
    });

    // eslint-disable-next-line
  }, [])

  const authorization = (data) => {
    window.location.href = '/main';
    localStorage.setItem('user', JSON.stringify(data))
  }

  return (
    <form className='auth-form'>
      <span id='error-msg' className={isErrorActive ? 'error-msg' : 'error-msg hidden'}>Неверный логин или пароль</span>
      <input id='input__login' value={login} onChange={e => setlogin(e.target.value)} type='text' placeholder='Login' className='input__text' />
      <input id='input__password' value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' className='input__text' />
      <Button className={'authBtn'} onClick={fetchData}>Авторизоваться</Button>
      <span id='redirect-to-registration' className='redirect-to-registration' onClick={() => window.location.href = '/registration'}>Регистрация</span>
    </form>
  )
}
