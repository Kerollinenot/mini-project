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
      <span className='username'>{JSON.parse(localStorage.getItem('user')).username}</span>
			<Button className={'authBtn'} onClick={deauthorization}>Vihod</Button>
    </div>
  )
}
