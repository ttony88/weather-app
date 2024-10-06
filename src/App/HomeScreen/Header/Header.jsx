import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'
import settingsIcon from '../../../img/settings.svg'
import SearchCity from './SearchCity/SearchCity'
import { IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'

const Header = ({ cityName, changingCoordinates, isSearch, setIsSearch }) => {

    const navigane = useNavigate()

    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.row}>
                <IconButton variant="contained" 
                            size="large"
                            onClick={() => navigane('/settings')} 
                            className={styles.buttonСhoiceCity} >
                    <SettingsIcon fontSize="large" sx={{color: '#6865a5'}} />
                </IconButton>
                    {/* <div className={styles.buttonСhoiceCity}
                            onClick={() => navigane('/settings')}>
                        <img className={styles.settingsImg} src={settingsIcon} alt="settings" />
                    </div> */}
                    {!isSearch && <p className={styles.city}>
                        {cityName}
                    </p>}
                    <SearchCity changingCoordinates={changingCoordinates}
                                isSearch={isSearch}
                                setIsSearch={setIsSearch} />
                </div>
            </div>
        </header>
    )
}

export default Header