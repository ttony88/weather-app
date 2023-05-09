import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <NavLink to=''>
                    <button className={styles.buttonСhoiceCity}></button>
                </NavLink>
                <span className={styles.cityName}>
                    Moscow
                </span>
                <NavLink>
                    <button className={styles.buttonReboot}></button>
                </NavLink>
            </div>
        </header>
    )
}

export default Header