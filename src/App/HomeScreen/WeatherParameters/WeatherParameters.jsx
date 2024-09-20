import styles from './WeatherParameters.module.css'
import umbrellaImg from '../../../img/umbrella.png'
import WeatherParameter from '../../../common/WeatherParameter/WeatherParameter'
import waterDropImg from '../../../img/water-drop.png'
import windSpeedImg from '../../../img/wind-speed.png'

const WeatherParameters = ({currentPrecipitation, currentHumidity, currentWindSpeed, weatherName, weatherIcon}) => {

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <WeatherParameter img={umbrellaImg} nameImg={'umbrella'} 
                value={`${currentPrecipitation}%`} title={'Precipitation'} />
                <WeatherParameter img={waterDropImg} nameImg={'water drop'} 
                value={`${currentHumidity}%`} title={'Humidity'} />
                <WeatherParameter img={windSpeedImg} nameImg={'wind speed'} 
                value={`${currentWindSpeed}km/h`} title={'Wind Speed'} />
            </div>
        </div>
    )
}

export default WeatherParameters 