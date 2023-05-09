import Footer from './Footer/Footer'
import Header from './Header/Header'
import TodayWeather from './TodayWeather/TodayWeather'
import styles from './HomeScreen.module.css'
import WeatherParameters from './WeatherParameters/WeatherParameters'
import HourlyWeather from './HourlyWeather/HourlyWeather'

const HomeScreen = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Header />
                <TodayWeather />
                <WeatherParameters />
                <HourlyWeather />
                <Footer />
            </div>
        </div>
    )
}

export default HomeScreen