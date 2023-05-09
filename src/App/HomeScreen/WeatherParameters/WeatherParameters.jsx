import styles from './WeatherParameters.module.css'
import umbrellaImg from '../../../img/umbrella.png'
import WeatherParameter from '../../../common/WeatherParameter/WeatherParameter'
import waterDropImg from '../../../img/water-drop.png'
import windSpeedImg from '../../../img/wind-speed.png'

const WeatherParameters = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <WeatherParameter img={umbrellaImg} nameImg={'umbrella'} 
                value={'35%'} title={'Precipitation'} />
                <WeatherParameter img={waterDropImg} nameImg={'water drop'} 
                value={'20%'} title={'Humidity'} />
                <WeatherParameter img={windSpeedImg} nameImg={'wind speed'} 
                value={'9km/h'} title={'Wind Speed'} />
            </div>
        </div>
    )
}

export default WeatherParameters 