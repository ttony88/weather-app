import { useState, useEffect } from "react"

export const useGeoLocation = () => {
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)

    useEffect(() => {

      function geo_success(position) {
        
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      }
    
      navigator.geolocation.watchPosition(geo_success)
    }, [lat, long])

    return {lat, long}
}