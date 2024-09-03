import styles from './SearchCity.module.css'
import search from '../../img/search.svg'
import { useState } from 'react'
import { useGetCitysQuery } from '../../api/apiWeather'

const SearchCity = () => {

    const city = 'Ryazan'

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCitysQuery(city)

    if(isSuccess){
        console.log(data)
    }

    const [inputChar, setInputChar] = useState('')

    return(
        <div className={styles.container}>
           <div className={styles.form}>
                <input value={inputChar} onChange={(e) => setInputChar(e.target.value)}
                       className={styles.input} type="text" />
                <button className={styles.button}>
                    <img className={styles.imgSearch} src={search} alt="search" />
                </button>
                <div>
                    
                </div>
            </div> 
        </div>
        
    )
}

export default SearchCity