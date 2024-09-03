import HomeScreen from "./HomeScreen/HomeScreen";
import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import SearchCity from "./SearchCity/SearchCity";

const App = () => {

  return(
    <div className={styles.app}>
        <HomeScreen />
    </div>
    
  )
}

export default App;
