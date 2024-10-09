import React from 'react'

const Child = ({log}) => {
    const HandleChange =() =>{
        log(true)
    }
  return (
    <div style={{}}>
        <div>
            <label>Username:</label>
            <input type="text"  />
        </div>
        <div>
            <label>Password:</label>
            <input type="password"  />
        </div>
        <button onClick={()=>HandleChange()}>Login</button>
        
      
    </div>
  )
}

export default Child
