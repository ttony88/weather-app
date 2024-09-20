import styles from './WeatherParameter.module.css'

const WeatherParameter = (props) => {

    const{img, nameImg, value, title} = props

    return(
        <div className={styles.parameter}>
            <div>
                <img src={img} alt={nameImg} />
            </div>
            <div className={styles.value}>
                {value}
            </div>
            <div className={styles.title}>
                {title}
            </div>
        </div>
    )
}

export default WeatherParameter