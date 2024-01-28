import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const UserDetails = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    <>
      {isAuthenticated ? (
        <div className='flex flex-col items-center'>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
      ) : (
        <div>No user...</div>
      )}
    </>
  )
}

export default UserDetails
