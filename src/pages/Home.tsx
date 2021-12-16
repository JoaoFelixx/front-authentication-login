import React, { useState, useEffect, memo } from 'react';
import { AxiosResponse } from 'axios'
import { api } from '../services';

function Home() {

  const [authenticated, setAuthenticated] = useState(false)

  const PageNotAFound = memo(() => {
    return (
      <h2>
        Page not a found
      </h2>
    )
  })

  useEffect(() => {
    try {
      const token = localStorage.getItem('TOKEN')
      const options = {
        headers: { Authorization: `Bearer ${token}` }
      }
      api.get('/users',options)
        .then((response: AxiosResponse) => {
          if (response.status === 200) return setAuthenticated(true)
        })
    } catch {

    }
  }, [])

  return (
    <div>
      { authenticated === false && <PageNotAFound /> }
      {
        authenticated && (
          <p>Bem vindo</p>
        )
      }
    </div>
  )
}

export default Home;