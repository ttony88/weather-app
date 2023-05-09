import styles from './WeatherCard.module.css'

const WeatherCard = (props) => {

    const {time, img, nameImg, temperature} = props

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.time}>
                    {time}
                </div>
                <div className={styles.img}>
                    <img src={img} alt={nameImg} />
                </div>
                <div className={styles.temperature}>
                    {temperature}&deg;
                </div>
            </div>
        </div>
    )
}

export default WeatherCard