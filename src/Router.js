import React, { useContext } from 'react';
import { Context } from './Context/AuthContext';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { 
  Home, 
  Login, 
  Register 
} from './pages'


function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router