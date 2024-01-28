import React, { useState } from 'react'
import { useWeatherStore } from '../stores/weather'
import { useNavigate } from 'react-router'
import UserDetails from '../components/UserDetails'
import { withAuthenticationRequired } from '@auth0/auth0-react'

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { city, setCity, setWeather } = useWeatherStore()
  const navigate = useNavigate()

  const getWeather = async () => {
    setIsLoading(true)
    try {
      const apiKey = 'CQjHLR+speye5Qru755TJA==8p6Qir3rgO05gckU'

      const response = await fetch(
        `https://api.api-ninjas.com/v1/weather?city=${city}`,
        {
          headers: {
            'X-Api-Key': apiKey,
          },
        },
      )

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`)
      }

      const data = await response.json()
      setWeather(data)
    } catch (error: any) {
      console.error('Error:', error.message)
    }
  }
  const handleCityChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setCity(event.target.value as string)
    console.log(city)
  }

  const handleDisplayWeather = async () => {
    await getWeather().then(() => setIsLoading(false))
    navigate('/weather')
  }

  return (
    <div className='flex h-full w-full justify-center p-12 py-16'>
      <div className='card flex h-full w-full flex-col gap-8 rounded-lg bg-base-100 px-12 py-8 shadow-xl sm:h-fit sm:w-1/2'>
        <h2 className='card-title'>Hello Weather!</h2>
        <UserDetails />
        <div className='flex gap-2'>
          <input
            type='text'
            placeholder='Search City'
            className='input input-bordered w-full'
            value={city}
            onChange={handleCityChange}
          />
        </div>

        <div className='card-actions'>
          <button
            onClick={handleDisplayWeather}
            className={`btn btn-accent ${isLoading ? 'loading loading-spinner' : ''}`}
          >
            Display weather
          </button>
        </div>
      </div>
    </div>
  )
}

export default withAuthenticationRequired(Home, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
})
