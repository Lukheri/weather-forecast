import { CloudSun } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-base-300 flex items-center justify-between p-5 py-3'>
      <div className='flex items-center gap-3'>
        <Link to='/'>
          <CloudSun size={40} />
        </Link>
        <Link to='/'>Landing page</Link>
        <Link to='/home'>Home</Link>
        <Link to='/weather'>Weather</Link>
      </div>
      <div>
        <button className='btn btn-accent'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
