import { create } from 'zustand'

interface WeatherState {
    weather: any
    setWeather: (exercise: any) => void
    city: string
    setCity: (city: string) => void
}

export const useWeatherStore = create<WeatherState>()((set) => ({
    weather: {},    
    setWeather: (weather: any) => set({weather}),
    city: "",
    setCity: (city: string) => set({city})
}))


