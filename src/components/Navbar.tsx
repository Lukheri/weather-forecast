import { CloudSun, Menu } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-base-300 flex items-center justify-between p-5 py-3'>
      <div className='hidden items-center gap-3 sm:flex'>
        <Link to='/'>
          <CloudSun size={40} />
        </Link>
        <Link to='/'>Landing page</Link>
        <Link to='/home'>Home</Link>
        <Link to='/weather'>Weather</Link>
      </div>
      <div className='drawer sm:hidden'>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          {/* Page content here */}
          <label htmlFor='my-drawer' className='btn drawer-button'>
            <Menu size={40} />
          </label>
        </div>
        <div className='drawer-side '>
          <label
            htmlFor='my-drawer'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4'>
            <Link to='/'>
              <CloudSun size={40} />
            </Link>
            <div className='divider'></div>
            <li>
              <Link to='/'>Landing page</Link>
            </li>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/weather'>Weather</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <button className='btn btn-accent'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
