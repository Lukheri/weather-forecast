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

const Weather = () => {
  const [gridView, setGridView] = useState<boolean>(true)
  const { city, weather } = useWeatherStore()
  return (
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
                <th>1</th>
                <td>{`${weather.temp}°C`}</td>
                <td className='hidden sm:table-cell'>{`${weather.humidity}%`}</td>
                <td className='hidden sm:table-cell'>{`${weather.wind_speed}m/s, ${weather.wind_degrees}°`}</td>
                <td className='hidden sm:table-cell'>{`${weather.cloud_pct}%`}</td>
              </tr>
            </tbody>
          </table>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Search new City</button>
          </div>
        </div>
        <div className={`card-body gap-4 ${gridView ? 'hidden' : ''}`}>
          <h2 className='card-title'>
            Weather in <span className='capitalize'>{city}</span> today!
          </h2>

          {/* <div className='flex gap-4'>
            <Calendar size={32} />
            <div>{`Date now: ${weather.humidity}%`}</div>
          </div> */}
          <div className='flex gap-4'>
            {weather.temp > 26 ? (
              <ThermometerSun size={32} />
            ) : (
              <ThermometerSnowflake size={32} />
            )}
            <div>{`Temperature: ${weather.temp}°C`}</div>
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
            <button className='btn btn-primary'>Search new City</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
