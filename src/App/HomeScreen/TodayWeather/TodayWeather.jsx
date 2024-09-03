import styles from './TodayWeather.module.css'

const TodayWeather = (props) => {

    const { currentTemperature, weatherName, weatherIcon } = props

    return(
        <div className={styles.wrapper}>
            <div className={styles.weatherParameters}>
                {weatherName}
            </div>
            <div className={styles.imgWeatherContainer}>
                <img className={styles.imgWeather} src={weatherIcon} alt='cloudy weather' />
            </div>
            <div className={styles.temperature}>
                {currentTemperature}<span className={styles.degree}>&deg;C</span>
            </div>
        </div>
    )
}

export default TodayWeather