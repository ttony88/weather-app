import { useEffect } from 'react'
import WeatherCard from '../../../common/WeatherCard/WeatherCard'
import styles from './HourlyWeather.module.css'

const HourlyWeather = (props) => {

    const { hourlyWeather } = props

    useEffect(() => {

        let date = new Date()

        const element = document.getElementById(date.getHours())
    
        element.scrollIntoView({behavior: 'smooth', inline: 'start'})

    })

    return(
        <div className={styles.wrapper}>
            <div className={styles.title}>Today</div>
            <div className={styles.hourlyWeather}>
                {hourlyWeather.map((item, index) => {

                    const cloudyWeatherMinImg = item.condition.icon
                    const nameImg = item.condition.text
                    const temperature = Math.round(item.temp_c)
                    const precipitation = Math.round(item.precip_in * 100)

                    let time = `${index}:00`
                    if (index < 10){
                        time = `0${index}:00`
                    }

                    return <WeatherCard id={index} time={time} img={cloudyWeatherMinImg} 
                           nameImg={nameImg} temperature={temperature} key={index}
                           precipitation={precipitation} />
                })}
            </div>
        </div>
    )
}

export default HourlyWeather 