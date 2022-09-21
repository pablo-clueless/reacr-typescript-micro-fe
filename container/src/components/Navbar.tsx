import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
        <h1><Link to='/'>App</Link></h1>

        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to='/hub'>Hub</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar