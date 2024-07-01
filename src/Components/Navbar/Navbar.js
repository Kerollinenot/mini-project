import React from 'react'
import { Button } from '../UI/Button/Button';

import './Navbar.css'
export const Navbar = () => {
  const deauthorization = () => {
		localStorage.removeItem('user');
		window.location.href = '/';
	}
   
  return (
    <div className='navbar'>
      <span className='username'>{localStorage.getItem('username')}</span>
			<Button className={'authBtn'} onClick={deauthorization}>Vihod</Button>
    </div>
  )
}
