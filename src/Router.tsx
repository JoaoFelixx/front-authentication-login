import React, { FC, useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
 // To,
} from 'react-router-dom';
import { 
  Home, 
  Login, 
  Register 
} from './pages'
import { api } from './services';
import { AxiosResponse } from 'axios'

function Router() {

  const [authenticated, setAuthenticated] = useState(false)

  const PrivateRoute: FC = ({ children }) => {
    //if (!authenticated) return ( <h1>401 not authorized</h1> )
    console.log(children)
    if (children === "/") 
      return (
        <Home />
      )
        
    return (
      <h1>Page not a found</h1>
    )
  } 

  useEffect(() => {
    try {
      const token = localStorage.getItem('TOKEN')
      const options = { headers: { Authorization: `Bearer ${token}` } }

      api.get('/users',options)
        .then((response: AxiosResponse) => response.status === 200 && setAuthenticated(true))
      
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute children="/" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router