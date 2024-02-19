import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{"display":"flex", gap:"15px"}}>
        <Link to="/">Dashboard</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Navbar