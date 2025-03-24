import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex gap-4 justify-between min-h-20px w-full'>
      <div className="grow"></div>
      <NavLink
      to="/"
      >
        Home
      </NavLink>

      <NavLink
      to="/snips">
        Snippets
      </NavLink>
      <div className="grow"></div>
    </div>
  )
}

export default Navbar
