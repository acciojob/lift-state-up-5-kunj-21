import React from 'react'
import Child from './Child'
import { useState } from 'react'

const Parent = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <div>
      {isLoggedIn ? <h1>You are Logged in!</h1> : <Child log={setIsLoggedIn}/>}
    </div>
  )
}

export default Parent
