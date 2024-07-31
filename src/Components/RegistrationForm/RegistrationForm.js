import React from 'react';
import { useState } from 'react';
import { Button } from '../UI/Button/Button';

import './RegistrationForm.css'

export const RegistrationForm = () => {
  const [login, setlogin] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const fetchData = () => {
    const URL = 'http://localhost:5000/users/registration/';

    fetch(URL, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    
      body: JSON.stringify({
        login: login,
        username: username,
        password: password
      })
    })
    .then( (response) => { 
      return response.json()
    }).then((data) => {
      console.log(data)
    });
  }

  return (
    <form className='registration-form'>
      <input id='input__login' value={login} onChange={e => setlogin(e.target.value)} type='text' placeholder='Login' className='input__text' />
      <input id='input__username' value={username} onChange={e => setUsername(e.target.value)} type='text' placeholder='Username' className='input__text' />
      <input id='input__password' value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' className='input__text' />
      <Button className={'authBtn'} onClick={fetchData}>Зарегистрироваться</Button>
      <span id='redirect-to-auth' className='redirect-to-auth' onClick={() => window.location.href = '/authorization'}>У меня уже есть аккаунт</span>
    </form>
  )
}
