import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Button } from '../UI/Button/Button';

import './AuthForm.css'
import { fetch_post } from '../../fetch';

export const AuthForm = () => {
  const [login, setlogin] = useState('');
  const [password, setPassword] = useState('');
  const [isErrorActive, setErrorActive] = useState(false);

  const loginRef = useRef(login);
  const passwordRef = useRef(password)

  useEffect(() => {
    loginRef.current = login;
  }, [login]);

  useEffect(() => {
    passwordRef.current = password;
  }, [password]);

  const fetchData = async () => {
    const URL = 'users/authorization';

    const body = JSON.stringify({ 
      login: loginRef.current, 
      password: passwordRef.current
    })

    await fetch_post(URL, body)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Авторизация не удалась');
      }
      
      return response.json();
    })
    .then(data => authorization(data))
    .catch (error => {
      setErrorActive(true);
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
    <form className='auth-form'>
      <span id='error-msg' className={`error-msg ${isErrorActive ? '' : 'hidden'}`}>
        Неверный логин или пароль
      </span>
      <input
        id='input__login'
        value={login}
        onChange={e => setlogin(e.target.value)}
        type='text'
        placeholder='Login'
        className='input__text'
      />
      <input
        id='input__password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        type='password'
        placeholder='Password'
        className='input__text'
      />
      <Button className={'authBtn'}>Авторизоваться</Button>
      <span
        id='redirect-to-registration'
        className='redirect-to-registration'
        onClick={() => window.location.href = '/registration'}
      >
        Регистрация
      </span>
    </form>
  )
}
