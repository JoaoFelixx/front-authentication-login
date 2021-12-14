import React, { createContext, useState } from "react";
import { api } from '../services';

const Context = createContext();


function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false)
 
  return (
    <Context.Provider value={{ authenticated, setAuthenticated }}>
    
    </Context.Provider>
  )
}

export { Context, AuthProvider }