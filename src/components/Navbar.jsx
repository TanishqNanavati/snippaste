import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 justify-between min-h-20px'>
      <NavLink
      to="/"
      >
        Home
      </NavLink>

      <NavLink
      to="/snips">
        Snippets
      </NavLink>
    </div>
  )
}

export default Navbar
