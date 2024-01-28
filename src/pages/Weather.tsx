import React, { useState } from 'react'
import { useWeatherStore } from '../stores/weather'
import {
  Calendar,
  Cloudy,
  Droplets,
  TableProperties,
  ThermometerSnowflake,
  ThermometerSun,
  Wind,
} from 'lucide-react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'

const Weather = () => {
  const [gridView, setGridView] = useState<boolean>(true)
  const { city, weather } = useWeatherStore()

  const navigate = useNavigate()

  const convertCtoF = (c: number) => {
    const f = c * 1.8 + 32

    return Math.round(f)
  }
  return (
    <>
      {!!Object.keys(weather).length ? (
        <div className='relative flex h-full w-full justify-center p-12 py-16'>
          <button
            className='btn absolute right-2 top-2'
            onClick={() => setGridView(!gridView)}
          >
            <TableProperties size={32} />
          </button>

          <div
            className={`card bg-base-100 shadow-xl ${gridView ? 'w-full' : 'w-96'}`}
          >
            <div
              className={`card-body overflow-x-auto ${gridView ? '' : 'hidden'}`}
            >
              <h2 className='card-title'>
                Weather in <span className='capitalize'>{city}</span> today!
              </h2>
              <table className='table'>
                {/* head */}
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Temp</th>
                    <th className='hidden sm:table-cell'>Humidty</th>
                    <th className='hidden sm:table-cell'>Wind</th>
                    <th className='hidden sm:table-cell'>Cloud pct</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>{moment().format('L')}</th>
                    <td>{`${convertCtoF(weather.temp)}°F`}</td>
                    <td className='hidden sm:table-cell'>{`${weather.humidity}%`}</td>
                    <td className='hidden sm:table-cell'>{`${weather.wind_speed} m/s, ${weather.wind_degrees}°`}</td>
                    <td className='hidden sm:table-cell'>{`${weather.cloud_pct}%`}</td>
                  </tr>
                </tbody>
              </table>
              <div className='card-actions justify-end'>
                <button
                  onClick={() => navigate('/home')}
                  className='btn btn-primary'
                >
                  Search new City
                </button>
              </div>
            </div>
            <div className={`card-body gap-4 ${gridView ? 'hidden' : ''}`}>
              <h2 className='card-title'>
                Weather in <span className='capitalize'>{city}</span> today!
              </h2>

              <div className='flex gap-4'>
                <Calendar size={32} />
                <div>{`Date now: ${moment().format('L')}`}</div>
              </div>
              <div className='flex gap-4'>
                {weather.temp > 26 ? (
                  <ThermometerSun size={32} />
                ) : (
                  <ThermometerSnowflake size={32} />
                )}
                <div>{`Temperature: ${convertCtoF(weather.temp)}°F`}</div>
              </div>
              <div className='flex gap-4'>
                <Droplets size={32} />
                <div>{`Humidity: ${weather.humidity}%`}</div>
              </div>
              <div className='flex gap-4'>
                <Wind size={32} />
                <div>{`Wind: ${weather.wind_speed}m/s, ${weather.wind_degrees}°`}</div>
              </div>
              <div className='flex gap-4'>
                <Cloudy size={32} />
                <div>{`Cloud pct: ${weather.cloud_pct}%`}</div>
              </div>
              <div className='card-actions justify-end'>
                <button
                  onClick={() => navigate('/home')}
                  className='btn btn-primary'
                >
                  Search new City
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full p-28 text-center'>Please enter a valid city</div>
      )}
    </>
  )
}

export default withAuthenticationRequired(Weather, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
})
