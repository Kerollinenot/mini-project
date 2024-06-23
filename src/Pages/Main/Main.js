import React from 'react'

import { Button } from '../../Components/UI/Button/Button'

import './Main.css'

export const Main = () => {
  const deauthorization = () => {
    localStorage.removeItem('user');
    window.location.href='/';
  }

  return (
    <div className='main'>

      <Button className={'authBtn'} onClick={deauthorization}>Vihod</Button>
    </div>
  )
}
