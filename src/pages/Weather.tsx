import React from 'react'
import { useWeatherStore } from '../stores/weather'
import {
  Calendar,
  Cloudy,
  Droplets,
  ThermometerSnowflake,
  ThermometerSun,
  Wind,
} from 'lucide-react'

const Weather = () => {
  const { city, weather } = useWeatherStore()
  return (
    <div className='flex h-full w-full justify-center p-12 py-16'>
      <div className='card bg-base-100 w-96 shadow-xl'>
        <div className='card-body gap-4'>
          <h2 className='card-title'>
            Weather in <span className='capitalize'>{city}</span> today!
          </h2>

          {/* <div className='flex gap-4'>
            <Calendar size={32} />
            <div>{`Date now: ${weather.humidity}%`}</div>
          </div> */}
          <div className='flex gap-4'>
            <Droplets size={32} />
            <div>{`Humidity: ${weather.humidity}%`}</div>
          </div>
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
            <div>{`Cloud %: ${weather.cloud_pct}%`}</div>
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
