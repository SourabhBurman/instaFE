import axios from 'axios';
import React, { useState } from 'react'

function Signup() {
    const [user, setUser] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            let res = await axios.post('https://precious-wasp-gloves.cyclic.app/users/register', user)
            console.log(res.data);
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div>Signup</div>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='enter username' onChange={(e) => {
                    setUser({ ...user, username: e.target.value })
                }} />
                <input type="text" placeholder='enter email' onChange={(e) => {
                    setUser({ ...user, email: e.target.value })
                }} />
                <input type="password" placeholder='enter password' onChange={(e) => {
                    setUser({ ...user, password: e.target.value })
                }} />
                <input type="number" placeholder='enter age' onChange={(e) => {
                    setUser({ ...user, age: e.target.value })
                }} />
                <input type="text" placeholder='enter gender' onChange={(e) => {
                    setUser({ ...user, gender: e.target.value })
                }} />
                <button type='submit'>Register</button>
            </form>
        </>
    )
}

export default Signup