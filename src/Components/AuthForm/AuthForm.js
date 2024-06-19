import React from 'react'

import { Button } from '../UI/Button/Button'

import './AuthForm.css'

export const AuthForm = () => {

  const login = () => {
    alert('Ты нажал на кнопочку. Тут будет обрабатываться все, что ты вводил :3')
  }
  
  return (
    <form className='auth-form'>
        <input type='text' placeholder='Login' className='input__text'/>
        <input type='password' placeholder='Password' className='input__text'/>
        <Button className={'authBtn'} onClick={login}>Vhod</Button>
    </form>
  )
}
