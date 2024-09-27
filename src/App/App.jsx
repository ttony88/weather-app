import HomeScreen from "./HomeScreen/HomeScreen";
import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import SearchCity from "./SearchCity/SearchCity";
import { Settings } from "./Settings/Settings";

const App = () => {

  return(
    <div className={styles.app}>
      <Routes>
        <Route path={'/'} element={<HomeScreen />} /> 
        <Route path={'/settings'} element={<Settings />} />
      </Routes>
    </div>
    
  )
}

export default App;
