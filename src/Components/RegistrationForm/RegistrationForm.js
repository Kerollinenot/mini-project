import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Button } from '../UI/Button/Button';

import './RegistrationForm.css'
import { fetch_post } from '../../fetch';

export const RegistrationForm = () => {
  const [login, setlogin] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginRef = useRef(login);
  const passwordRef = useRef(password)
  const usernameRef = useRef(username)

  useEffect(() => {
    loginRef.current = login;
  }, [login]);

  useEffect(() => {
    passwordRef.current = password;
  }, [password]);

  useEffect(() => {
    usernameRef.current = username;
  }, [username]);

  const fetchData = async () => {
    const URL = 'users/registration';

    const body = JSON.stringify({
      login: loginRef.current,
      username: usernameRef.current,
      password: passwordRef.current
    })

    await fetch_post(URL, body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Регистрация не удалась');
        }

        return response.json();
      })
      .then(data => authorization(data))
      .catch(error => {
        console.error('Ошибка при запросе:', error);
      })
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Enter') fetchData();
    };

    const handleClick = (event) => {
      if (event.target.className === 'authBtn') fetchData();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    };

    // eslint-disable-next-line
  }, [])

  const authorization = (data) => {
    localStorage.setItem('user', JSON.stringify(data))
    window.location.href = '/main';
  }

  return (
    <form className='registration-form'>
      <input id='input__login' value={login} onChange={e => setlogin(e.target.value)} type='text' placeholder='Login' className='input__text' />
      <input id='input__username' value={username} onChange={e => setUsername(e.target.value)} type='text' placeholder='Username' className='input__text' />
      <input id='input__password' value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' className='input__text' />
      <Button className={'authBtn'}>Зарегистрироваться</Button>
      <span id='redirect-to-auth' className='redirect-to-auth' onClick={() => window.location.href = '/authorization'}>У меня уже есть аккаунт</span>
    </form>
  )
}
