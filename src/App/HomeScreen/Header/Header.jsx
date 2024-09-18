import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'
import searchIcon from '../../../img/search.svg'
import settingsIcon from '../../../img/settings.svg'
import SearchCity from './SearchCity/SearchCity'

const Header = ({ cityName }) => {

    const navigane = useNavigate()

    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.buttonСhoiceCity}
                            onClick={() => navigane('', { replace: false })}>
                        <img className={styles.settingsImg} src={settingsIcon} alt="settings" />
                    </div>
                    <p className={styles.city}>
                        {cityName}
                    </p>
                    <SearchCity />
                    {/*<button className={styles.buttonReboot}
                            onClick={() => navigane('moscow', { replace: false })}>
                        <img className={styles.searchImg} src={searchIcon} alt="search" />
                    </button>*/}
                </div>
            </div>
        </header>
    )
}

export default Header