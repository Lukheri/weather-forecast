import { CornerRightDown } from 'lucide-react'
import React from 'react'
import LoginButton from '../components/LoginButton'

const LandingPage = () => {
  return (
    <div className='flex h-full w-full justify-center p-12 py-16'>
      <div className='card flex w-1/2 flex-col gap-8 rounded-lg bg-base-100 px-12 py-8 shadow-xl'>
        <h2 className='card-title'>Hello Weather!</h2>
        <div className='flex gap-2'>
          <p>
            Login using your Github account to use the app through the button
            below.
          </p>
          <CornerRightDown />
        </div>

        <div className='card-actions'>
          <LoginButton />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
