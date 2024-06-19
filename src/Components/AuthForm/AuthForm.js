import React from 'react'

import { Button } from '../UI/Button/Button'

import './AuthForm.css'

export const AuthForm = () => {
  return (
    <form className='auth-form'>
        <input type='text' placeholder='Login' className='input__text'/>
        <input type='password' placeholder='Password' className='input__text'/>
        <Button>Vhod</Button>
    </form>
  )
}
