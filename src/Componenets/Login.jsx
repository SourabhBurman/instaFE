import axios from 'axios';
import React, { useState } from 'react'

function Login() {

    const [user, setUser] = useState({});

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(user);
        try {
            let res = await axios.post('https://precious-wasp-gloves.cyclic.app/users/login', user)
            console.log(res);
            localStorage.setItem('token',res.data.accessToken)
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <>
    <div>Login</div>
    <form onSubmit={handleSubmit}>
               
                <input type="email" placeholder='enter email' onChange={(e) => {
                    setUser({ ...user, email: e.target.value })
                }} />
                <input type="password" placeholder='enter password' onChange={(e) => {
                    setUser({ ...user, password: e.target.value })
                }} />
              
                  <button type='submit'>sign in</button>
            </form></>
    
  )
}

export default Login