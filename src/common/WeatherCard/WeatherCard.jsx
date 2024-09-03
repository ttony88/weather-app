import styles from './WeatherCard.module.css'

const WeatherCard = (props) => {

    const { time, img, nameImg, temperature, precipitation, id } = props

    return(
        <div id={id} className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.time}>
                    {time}
                </div>
                <div>
                    {precipitation ? 
                    <div className={styles.precipitation}>{`${precipitation} %`}</div> :
                    null}
                </div>
                <div className={styles.img}>
                    <img src={img} alt={nameImg} />
                </div>
                <div className={styles.temperature}>
                    {temperature}&deg;C
                </div>
            </div>
        </div>
    )
}

export default WeatherCard