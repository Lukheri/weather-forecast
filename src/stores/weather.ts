import { create } from 'zustand'

interface WeatherState {
    weather: any,
    setWeather: (exercise: any) => void
}

export const useWeatherStore = create<WeatherState>()((set) => ({
    weather: {
    },    
    setWeather: (weather: any) => set({weather})
}))


