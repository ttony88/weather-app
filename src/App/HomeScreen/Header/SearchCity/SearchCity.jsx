import styles from './SearchCity.module.css'
import searchImg from '../../../../img/search.svg'

const SearchCity = () => {

    return(
        <div className={styles.container}>
            <input className={styles.input} type="text" placeholder="Seatch..." />
            <button className={styles.button}>
                <img src={searchImg} alt="search" />
            </button>
        </div>
    )
}

export default SearchCity