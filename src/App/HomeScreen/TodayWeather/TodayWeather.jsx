import styles from './TodayWeather.module.css'
import cloudyWeather from '../../../img/cloudy-weather.png'

const TodayWeather = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.weatherParameters}>
                Mostly Sunny
            </div>
            <div className={styles.imgWeather}>
                <img src={cloudyWeather} alt='cloudy weather' />
            </div>
            <div className={styles.temperature}>
                23<span className={styles.degree}>&deg;</span>
            </div>
            <div className={styles.dateAndTime}>
                Friday, 26 August 2022 | 10:00
            </div>
        </div>
    )
}

export default TodayWeather