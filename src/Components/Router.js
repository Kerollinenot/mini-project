import React from 'react'

import {Routes, Route} from 'react-router-dom';

import { Auth } from '../Pages/Auth/Auth';
//import Profile from '../Pages/Profile';
//import Main from '../Pages/Main';

export default function Router() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Auth/>}></Route>
        </Routes>
    </>
  )
}
