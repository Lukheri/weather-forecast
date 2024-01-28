import { CornerRightDown } from 'lucide-react'
import React from 'react'
import LoginButton from '../components/LoginButton'
import { useAuth0 } from '@auth0/auth0-react'

const LandingPage = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <div className='flex h-full w-full justify-center p-12 py-16'>
      <div className='card flex w-full flex-col gap-8 rounded-lg bg-base-100 px-12 py-8 shadow-xl sm:w-1/2'>
        <h2 className='card-title'>Hello Weather!</h2>
        {!isAuthenticated ? (
          <>
            <div className='flex gap-2'>
              <p>
                Login using your Github account to use the app through the
                button below.
              </p>
              <CornerRightDown />
            </div>

            <div className='card-actions'>
              <LoginButton />
            </div>
          </>
        ) : (
          <div className='flex gap-2'>
            Successfully logged in! Explore the app and look up cities to know
            the weather there!
          </div>
        )}
      </div>
    </div>
  )
}

export default LandingPage
