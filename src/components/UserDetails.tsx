import { useAuth0 } from '@auth0/auth0-react'
import { Github } from 'lucide-react'
import React from 'react'

const UserDetails = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    <>
      {isAuthenticated ? (
        <div className='flex flex-col items-center gap-4'>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <a
            href={`https://github.com/${user?.nickname}`}
            target='_blank'
            rel='noreferrer'
            className='btn btn-outline flex'
          >
            <Github size={32} />
            Github
          </a>
        </div>
      ) : (
        <div>No user...</div>
      )}
    </>
  )
}

export default UserDetails
