import { CornerRightDown } from 'lucide-react'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='flex h-full w-full justify-center p-12 py-16'>
      <div className='card bg-base-100 flex w-1/2 flex-col gap-8 rounded-lg px-12 py-8 shadow-xl'>
        <h2 className='card-title'>Hello Weather!</h2>
        <div className='flex gap-2'>
          <p>
            Login using your Github account to use the app through the button
            below.
          </p>
          <CornerRightDown />
        </div>

        <div className='card-actions'>
          <button className='btn btn-accent'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
