import React from 'react'

import {Routes, Route, Navigate} from 'react-router-dom';

import { Main } from '../Pages/Main/Main'
import { Auth } from '../Pages/Auth/Auth'
import { Registration } from '../Pages/Registration/Registration'

export default function Router() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Navigate to="authorization" />} />
          <Route path="authorization" element={<Auth/>}></Route>
          <Route path="main" element={<Main/>}></Route>
          <Route path="registration" element={<Registration/>}></Route>


        </Routes>
    </>
  )
}
