import { CloudSun, Menu } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-base-300 p-5 py-3'>
      <div className='hidden items-center gap-3 sm:flex'>
        <Link to='/'>
          <CloudSun size={40} />
        </Link>
        <Link to='/'>Landing page</Link>
        <Link to='/home'>Home</Link>
        {/* <Link to='/weather'>Weather</Link> */}
      </div>
      <div className='drawer sm:hidden'>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          {/* Page content here */}
          <label htmlFor='my-drawer' className='btn drawer-button'>
            <Menu size={40} />
          </label>
        </div>
        <div className='drawer-side z-10'>
          <label
            htmlFor='my-drawer'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu min-h-full w-80 bg-base-200 p-4 text-base-content'>
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
            {/* <li>
              <Link to='/weather'>Weather</Link>
            </li> */}
          </ul>
        </div>
      </div>
      <div>
        <LogoutButton />
      </div>
    </div>
  )
}

export default Navbar
