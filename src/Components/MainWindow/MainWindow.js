import React from 'react'

import './MainWindow.css';

import { Button } from '../UI/Button/Button';
import { Navbar } from '../Navbar/Navbar'
export const MainWindow = () => {
	const deauthorization = () => {
		localStorage.removeItem('user');
		window.location.href = '/';
	}


	return (
		<div className='main-window'>
			<Navbar />
			<Button className={'authBtn'} onClick={deauthorization}>Vihod</Button>

		</div>
	)
}
