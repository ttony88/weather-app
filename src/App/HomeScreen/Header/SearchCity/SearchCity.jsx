import styles from './SearchCity.module.css'
import searchImg from '../../../../img/search.svg'
import { useState } from 'react'
import { useGetCitysQuery, useGetForecastWeatherDataQuery } from '../../../../api/apiWeather'

const SearchCity = ({ changingCoordinates }) => {

    const [cityName, setCityName] = useState('')

    const [isSearch, setIsSearch] = useState(false)

    const { data: dataCity } = useGetCitysQuery(cityName)
    
    const onChangeHandler = (e) => {
        setCityName(e.target.value)
    }

    const onClickHandler = () => {
        setIsSearch(true)
    }

    return(
        <div className={styles.container}>
            {isSearch && <input className={styles.input} 
                   value={cityName} 
                   onChange={onChangeHandler} 
                   type="text" 
                   placeholder="Seatch..." />}
            {dataCity && dataCity.map(i => i && <div onClick={() => changingCoordinates(i.lat, i.lon)} key={i.id}>{`${i.name}, ${i.region}, ${i.country}`}</div>)}
            <button onClick={onClickHandler} className={styles.button}>
                <img src={searchImg} alt="search" />
            </button>
        </div>
    )
}

export default SearchCity