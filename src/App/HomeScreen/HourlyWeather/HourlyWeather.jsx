import WeatherCard from '../../../common/WeatherParameter/WeatherCard/WeatherCard'
import styles from './HourlyWeather.module.css'
import cloudyWeatherMinImg from '../../../img/cloudy-weather-min.png'
import rainyWeatherMin from '../../../img/rainy-weather-min.png'

const HourlyWeather = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.title}>Today</div>
            <div className={styles.hourlyWeather}>
                <WeatherCard time={'3 PM'} img={cloudyWeatherMinImg} 
                nameImg={'cloudy weather'} temperature={'23'} />
                <WeatherCard time={'5 PM'} img={rainyWeatherMin} 
                nameImg={'rainy weather'} temperature={'21'} />
            </div>
        </div>
    )
}

export default HourlyWeather 