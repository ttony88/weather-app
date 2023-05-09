import { useState, useEffect } from "react";
import HomeScreen from "./HomeScreen/HomeScreen";
import styles from './App.module.css'

const App = () => {

  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)

  useEffect(() => {
    navigator.geolocation.watchPosition((position) =>{
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    })
  }, [lat, long])

  return(
    <div className={styles.app}>
      {/*<a href={`https://www.openstreetmap.org/#map=18/${lat}/${long}`}
      >{`ш:${lat}, д:${long}`}</a>*/}
      <HomeScreen/>
    </div>
    
  )
}

export default App;
