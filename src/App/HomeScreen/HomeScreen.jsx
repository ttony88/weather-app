import Footer from './Footer/Footer'
import Header from './Header/Header'
import TodayWeather from './TodayWeather/TodayWeather'
import styles from './HomeScreen.module.css'
import WeatherParameters from './WeatherParameters/WeatherParameters'
import HourlyWeather from './HourlyWeather/HourlyWeather'
import { useGeoLocation } from '../../hooks/useGeoLocation' 
import { useGetForecastWeatherDataQuery } from '../../api/apiWeather'
import CurrentDateAndTime from './TodayWeather/CurrentDateAndTime/CurrentDateAndTime'

const HomeScreen = () => {

const { lat, long } = useGeoLocation()

const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
} = useGetForecastWeatherDataQuery({lat, long})
 
if(isLoading){

    return (
        <div className={styles.loader_container}>
            <div className={styles.loader}></div>
        </div>
        
    )

} else if(isError){

    return <div>{error}</div>

} else if(isSuccess){
    const cityName = data.location.name
    const currentTemperature = Math.round(data.current.temp_c)
    const currentPrecipitation = Math.round(data.current.precip_in * 100)
    const currentHumidity = data.current.humidity
    const currentWindSpeed = data.current.wind_kph
    const weatherName = data.current.condition.text
    const weatherIcon = data.current.condition.icon
    const hourlyWeatherForToday = data.forecast.forecastday[0].hour

    return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Header cityName={cityName} />
                    <TodayWeather currentTemperature={currentTemperature}
                                  weatherName={weatherName}
                                  weatherIcon={weatherIcon} />
                    <CurrentDateAndTime />
                    <WeatherParameters currentPrecipitation={currentPrecipitation}
                                       currentHumidity={currentHumidity} 
                                       currentWindSpeed={currentWindSpeed}/>
                    <HourlyWeather hourlyWeather={hourlyWeatherForToday} />
                    <Footer />
                </div>
            </div>
    )
}


  

    
}

export default HomeScreen