import React, { useEffect, useState } from 'react'
import api from './services/api'

interface IUser {
  name: string
  email: string
}

function App() {
  const [users, setUsers] = useState<Array<IUser>>([])

  useEffect(() => {
    api.get<Array<IUser>>('/users').then(res => {
      setUsers(res.data)
    })
  })

  return (
    <div className="App">
      
    </div>
  )
}

export default App;
