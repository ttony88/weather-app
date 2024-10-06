import styles from './SearchCity.module.css'
import searchImg from '../../../../img/search.svg'
import { useState } from 'react'
import { useGetCitysQuery } from '../../../../api/apiWeather'
import TextField from '@mui/material/TextField'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchCity = ({ changingCoordinates, isSearch, setIsSearch }) => {

    const [cityName, setCityName] = useState('')

    const { data } = useGetCitysQuery(cityName)
    
    const onChangeHandler = (e) => {
        setCityName(e.target.value)
    }

    const onClickHandler = () => {
        setIsSearch(true)
    }

    const onClickSearchItem = (lat, lon) => {
        changingCoordinates(lat, lon)
        setIsSearch(false)
    }

    return(
        <div className={styles.wrapper}>
            {isSearch && <div className={styles.containerInput}>
                <TextField label="Name of the city" focused
                                autoFocus
                                size='small'
                                className={styles.input}
                                value={cityName} 
                                onChange={onChangeHandler}/>
                {data && <ul className={styles.listOptions} >
                            {data.map(i => i && <li onClick={() => onClickSearchItem(i.lat, i.lon)} key={i.id}>
                                                    {`${i.name}, ${i.region}, ${i.country}`}
                                                </li>)
                    } 
                </ul>}
                
            </div>}
            
            {!isSearch && <IconButton variant="contained" 
                                      size="large"
                                      onClick={onClickHandler} >
                <SearchIcon fontSize="large" sx={{color: '#6865a5'}}/>
            </IconButton>}
        </div>
    )
}

export default SearchCity