import React, { useState } from 'react'
import { useWeatherStore } from '../stores/weather'
import { useNavigate } from 'react-router'

const Home = () => {
  const [city, setCity] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  const { setWeather } = useWeatherStore()

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
      <div className='card bg-base-100 flex w-1/2 flex-col gap-8 rounded-lg px-12 py-8 shadow-xl'>
        <h2 className='card-title'>Hello Weather!</h2>
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

export default Home
