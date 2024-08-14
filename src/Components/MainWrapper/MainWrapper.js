import React from 'react'

import './MainWrapper.css';

import { Navbar } from '../Navbar/Navbar'
import { MainWindow } from '../MainWindow/MainWindow';
export const MainWrapper = () => {
	return (
		<div className='main-wrapper'>
			<Navbar />
			<MainWindow/>
		</div>
	)
}
